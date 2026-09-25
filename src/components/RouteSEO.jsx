import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL, getRouteSEO } from '../data/seo';

function setMeta(selector, attr, name, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

// Applies title, description, canonical and OG tags from seo.js on every navigation.
// It sits in App above <Routes>, so its effect runs after the pages' own
// document.title effects and wins. Unknown paths (404) are left to the page.
export default function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSEO(pathname);
    if (!seo) return;
    const url = `${BASE_URL}${seo.path === '/' ? '' : seo.path}`;
    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [pathname]);

  return null;
}
