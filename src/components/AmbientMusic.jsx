import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TARGET_VOLUME = 0.175; // Reduced volume (0.175) for ambient background sound
const FADE_DURATION = 3000;  // 3-second smooth fade in / fade out

export default function AmbientMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fadeIntervalRef = useRef(null);
  const wasPlayingRef = useRef(false);

  // Initialize the audio instance once
  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0; // Start at 0 for fading
    audioRef.current = audio;

    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Smoothly fade volume to target value over specified duration (3 seconds)
  const fadeVolume = (targetVolume, duration = FADE_DURATION, onComplete = null) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }

    if (!audioRef.current) return;

    const startVolume = audioRef.current.volume;
    const steps = 60; // 60 steps over 3 seconds for smooth transition
    const stepTime = duration / steps;
    const volumeStep = (targetVolume - startVolume) / steps;
    let currentStep = 0;

    fadeIntervalRef.current = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeIntervalRef.current);
        return;
      }

      const nextVolume = startVolume + (volumeStep * (currentStep + 1));
      audioRef.current.volume = Math.max(0, Math.min(TARGET_VOLUME, nextVolume));
      currentStep++;

      if (currentStep >= steps) {
        audioRef.current.volume = targetVolume;
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        if (onComplete) onComplete();
      }
    }, stepTime);
  };

  // Page Visibility API - Auto-pause when tab is hidden, auto-resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current) return;

      if (document.hidden) {
        if (isPlaying) {
          wasPlayingRef.current = true;
          fadeVolume(0, FADE_DURATION, () => {
            if (audioRef.current && document.hidden) {
              audioRef.current.pause();
            }
          });
        }
      } else {
        if (wasPlayingRef.current) {
          wasPlayingRef.current = false;
          if (audioRef.current) {
            audioRef.current
              .play()
              .then(() => {
                fadeVolume(TARGET_VOLUME, FADE_DURATION);
              })
              .catch((err) => {
                console.error('Failed to resume playback on visibility change:', err);
              });
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  // Pause ambient music when a video starts playing
  useEffect(() => {
    const handlePauseEvent = () => {
      if (audioRef.current && isPlaying) {
        setIsPlaying(false);
        fadeVolume(0, FADE_DURATION, () => {
          if (audioRef.current && !audioRef.current.paused) {
            audioRef.current.pause();
          }
        });
      }
    };
    window.addEventListener('pause-ambient-music', handlePauseEvent);
    return () => {
      window.removeEventListener('pause-ambient-music', handlePauseEvent);
    };
  }, [isPlaying]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      setIsPlaying(false);
      fadeVolume(0, FADE_DURATION, () => {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
      });
    } else {
      setIsPlaying(true);
      audioRef.current.volume = 0;
      audioRef.current
        .play()
        .then(() => {
          fadeVolume(TARGET_VOLUME, FADE_DURATION);
        })
        .catch((err) => {
          console.error('Audio playback failed:', err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <motion.button
      onClick={togglePlayback}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
      aria-label={isPlaying ? 'Mute background music' : 'Unmute background music'}
      title={isPlaying ? 'Mute Music' : 'Play Music'}
    >
      {isPlaying ? (
        // Soundwave animation (using luxury brand gold color)
        <div className="flex items-end gap-[3px] h-3.5" aria-hidden="true">
          <div className="w-[3px] bg-gold rounded-full animate-soundwave-1" />
          <div className="w-[3px] bg-gold rounded-full animate-soundwave-2" />
          <div className="w-[3px] bg-gold rounded-full animate-soundwave-3" />
          <div className="w-[3px] bg-gold rounded-full animate-soundwave-4" />
        </div>
      ) : (
        // Muted speaker icon (using brand navy color)
        <svg
          className="h-5 w-5 text-navy/60 transition-colors group-hover:text-navy"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H9Z"
          />
        </svg>
      )}
    </motion.button>
  );
}
