import { motion } from 'framer-motion'
import { brand } from '../data/siteData'

export default function WhatsAppWidget() {
  // Configured using international whatsapp prefix from siteData, falling back to blueprint number if needed.
  const whatsappNumber = brand.whatsapp || '919388599000'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I found your profile on your Digital Business Card. I'd like to know more about your holiday packages and travel services."
  )}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#20ba5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      {/* Pulsing ring — slow interval ping */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-wa-ping" />

      {/* SVG WhatsApp Icon */}
      <svg
        className="relative z-10 h-7 w-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.733-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.85-4.394 9.853-9.782.002-2.61-1.01-5.063-2.85-6.906-1.839-1.843-4.29-2.858-6.9-2.859-5.44 0-9.856 4.395-9.859 9.784-.001 1.776.477 3.514 1.385 5.037L1.921 21.09l4.726-1.936zm11.365-5.9c-.3-.15-1.772-.875-2.047-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.175-.174.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.77-1.665-2.07-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.625-.926-2.225-.244-.589-.493-.51-.677-.52l-.578-.01c-.2-.005-.525.07-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.31 1.272.495 1.707.633.717.228 1.37.196 1.885.119.575-.085 1.772-.725 2.022-1.425.25-.7.25-1.3 1.75-1.425-.075-.125-.25-.225-.55-.375z" />
      </svg>
    </motion.a>
  )
}
