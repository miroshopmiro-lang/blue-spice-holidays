import { useEffect, useRef, useState } from 'react';

// Live telemetry for the hero, enabled only with ?herodebug=1 on the URL.
//
// Built because a client's handset stalls the hero on every slide after the first
// while passing every isolated video test we could devise — codecs, concurrency,
// range requests, transparency, six simultaneous clips, all fine. So the failure
// is not in playing a video, it is in something about how the hero's own elements
// are set up or driven, and no synthetic test reproduces that. This reads the real
// component on the real device.
//
// Deliberately observational: it attaches listeners and polls, and never calls
// play(), pause() or load(). Anything that touched the elements could mask the
// very fault we are chasing.
export default function HeroDebug() {
  const [rows, setRows] = useState([]);
  const [log, setLog] = useState([]);
  const [copied, setCopied] = useState(false);
  const wired = useRef(new WeakSet());
  const logRef = useRef([]);
  const total = useRef(0);
  const t0 = useRef(Date.now());

  // The reported fault begins at the very first transition, so the opening events
  // are the ones that matter most — a plain rolling buffer would scroll exactly
  // those away while the client watched it stall. Keep the first HEAD events
  // permanently and roll only a TAIL window after that.
  const HEAD = 80;
  const TAIL = 40;

  useEffect(() => {
    const stamp = () => ((Date.now() - t0.current) / 1000).toFixed(1) + 's';

    const push = (line) => {
      total.current += 1;
      const l = logRef.current;
      logRef.current =
        l.length < HEAD + TAIL
          ? [...l, line]
          : [...l.slice(0, HEAD), ...[...l.slice(HEAD), line].slice(-TAIL)];
      setLog(logRef.current);
    };

    // Every media event that could explain a clip failing to start, including the
    // quiet ones (suspend/abort/emptied) that a normal stall watchdog never sees.
    const EVENTS = [
      'loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough',
      'play', 'playing', 'waiting', 'stalled', 'suspend', 'abort', 'emptied',
      'seeking', 'seeked', 'ended', 'error', 'pause', 'ratechange'
    ];

    const wire = (v) => {
      if (wired.current.has(v)) return;
      wired.current.add(v);
      const name = v.id.replace('hero-video-', '');
      EVENTS.forEach((e) => {
        v.addEventListener(e, () => {
          const extra =
            e === 'error' && v.error ? ' code=' + v.error.code
              : e === 'waiting' || e === 'stalled'
                ? ' rs=' + v.readyState + ' t=' + v.currentTime.toFixed(1)
                : '';
          push(stamp() + '  ' + name + '  ' + e + extra);
        });
      });
      // Which source the element actually settled on, and whether any were skipped.
      [...v.querySelectorAll('source')].forEach((s) => {
        s.addEventListener('error', () => {
          push(stamp() + '  ' + name + '  SOURCE FAILED: ' + s.src.split('/').pop());
        });
      });
    };

    const tick = () => {
      const vids = [...document.querySelectorAll('video[id^="hero-video-"]')];
      vids.forEach(wire);
      setRows(
        vids.map((v) => ({
          name: v.id.replace('hero-video-', ''),
          src: (v.currentSrc || '(none)').split('/').pop(),
          picked: v.currentSrc ? (v.currentSrc.endsWith('.mp4') ? 'MP4' : 'WEBM') : '—',
          preload: v.preload,
          rs: v.readyState,
          ns: v.networkState,
          t: v.currentTime.toFixed(2),
          dur: isFinite(v.duration) ? v.duration.toFixed(1) : String(v.duration),
          buf: v.buffered.length ? v.buffered.end(v.buffered.length - 1).toFixed(1) : '0',
          paused: v.paused ? 'Y' : 'N',
          err: v.error ? v.error.code : '-',
          vis: getComputedStyle(v.parentElement).opacity
        }))
      );
    };

    tick();
    const id = setInterval(tick, 400);
    return () => clearInterval(id);
  }, []);

  // Marks where the rolling window dropped events, so a gap in timestamps is never
  // mistaken for a gap in playback.
  const displayLog = () => {
    const skipped = total.current - log.length;
    if (skipped <= 0) return log;
    return [
      ...log.slice(0, HEAD),
      '--- ' + skipped + ' events omitted ---',
      ...log.slice(HEAD)
    ];
  };

  const copy = () => {
    const text =
      'HERO DEBUG  ' + new Date().toString() + '\n' +
      'UA: ' + navigator.userAgent + '\n\n' +
      'element        source                     pick  preload  rs ns  time  dur  buf  paused err opacity\n' +
      rows.map((r) =>
        [r.name.padEnd(14), r.src.padEnd(26), r.picked.padEnd(5), r.preload.padEnd(8),
         String(r.rs).padEnd(2), String(r.ns).padEnd(2), r.t.padEnd(5), r.dur.padEnd(4),
         r.buf.padEnd(4), r.paused.padEnd(6), String(r.err).padEnd(3), r.vis].join(' ')
      ).join('\n') +
      '\n\nEVENT LOG\n' + displayLog().join('\n');

    // Confirm to the person running this that it worked. Without feedback they
    // cannot tell a successful copy from a dead button, and will either paste
    // nothing or tap repeatedly — on a client's phone that is the difference
    // between getting the report back and not.
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2500); };
    const fallback = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;left:-9999px;';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { /* leave button unchanged */ }
      ta.remove();
    };
    // navigator.clipboard needs a secure context and can still reject on Android,
    // so the textarea path is a real fallback, not decoration.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else {
      fallback();
    }
  };

  const cell = { padding: '2px 4px', whiteSpace: 'nowrap' };

  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 99999,
      maxHeight: '58vh', overflow: 'auto', background: 'rgba(5,8,14,.94)',
      color: '#e7ecf3', font: '10px/1.35 ui-monospace,Menlo,Consolas,monospace',
      borderTop: '2px solid #C9A24A', padding: '8px'
    }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
        <strong style={{ color: '#C9A24A', fontSize: 11 }}>HERO DEBUG</strong>
        <button onClick={copy} style={{
          background: copied ? '#5fe0a0' : '#C9A24A', color: '#20160a', border: 0,
          borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 700,
          minWidth: 82, transition: 'background .15s'
        }}>{copied ? 'Copied ✓' : 'Copy'}</button>
        <span style={{ color: '#8b97a8' }}>rs=readyState (4 is ready) · buf=seconds buffered</span>
      </div>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ color: '#8b97a8' }}>
          <tr>
            {['el', 'source', 'pick', 'preload', 'rs', 'ns', 'time', 'dur', 'buf', 'pause', 'err', 'opac']
              .map((h) => <th key={h} style={{ ...cell, textAlign: 'left' }}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} style={{ borderTop: '1px solid #1b2230' }}>
              <td style={cell}>{r.name}</td>
              <td style={cell}>{r.src}</td>
              <td style={{ ...cell, color: r.picked === 'MP4' ? '#5fe0a0' : '#7cc4ff' }}>{r.picked}</td>
              <td style={cell}>{r.preload}</td>
              <td style={{ ...cell, color: r.rs >= 3 ? '#5fe0a0' : '#ff8b8b' }}>{r.rs}</td>
              <td style={cell}>{r.ns}</td>
              <td style={{ ...cell, color: +r.t > 0 ? '#5fe0a0' : '#ff8b8b' }}>{r.t}</td>
              <td style={cell}>{r.dur}</td>
              <td style={cell}>{r.buf}</td>
              <td style={cell}>{r.paused}</td>
              <td style={{ ...cell, color: r.err === '-' ? '#8b97a8' : '#ff8b8b' }}>{r.err}</td>
              <td style={cell}>{r.vis}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 6, borderTop: '1px solid #1b2230', paddingTop: 4 }}>
        {log.length === 0
          ? <span style={{ color: '#8b97a8' }}>waiting for events…</span>
          : displayLog().map((l, i) => (
              <div key={i} style={l.startsWith('---') ? { color: '#8b97a8' } : undefined}>{l}</div>
            ))}
      </div>
    </div>
  );
}
