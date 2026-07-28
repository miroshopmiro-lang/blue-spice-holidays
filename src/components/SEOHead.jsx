import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = "Blue Spice Holidays · Bespoke Indian Journeys";
const DEFAULT_DESC = "⭐⭐⭐⭐⭐ 5 Star reviewed company | 15+ years bespoke. Micro Level Customised Planning since 2009. Curated journeys across India for families, couples and corporate travelers.";
const DEFAULT_IMAGE = "/images/domestic_curation_hero.webp";
const BASE_URL = "https://bluespiceholidays.com";

/**
 * Reusable SEO component for managing document title, meta descriptions, canonical URLs,
 * and social metadata while preserving default link previews and image fallbacks.
 */
export default function SEOHead({
  title,
  description,
  image = DEFAULT_IMAGE,
  type = "website"
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title ? `${title} | Blue Spice Holidays` : DEFAULT_TITLE;
    document.title = finalTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || DEFAULT_DESC);

    // 3. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const cleanPath = pathname === '/' ? '' : pathname;
    canonicalLink.setAttribute('href', `${BASE_URL}${cleanPath}`);

    // 4. Update OpenGraph Title & Description safely (preserving preview images)
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', finalTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || DEFAULT_DESC);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image || DEFAULT_IMAGE);

    // Clean up title on unmount if needed
    return () => {
      // Retain baseline title if component unmounts
    };
  }, [title, description, image, type, pathname]);

  return null;
}
