import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="h-20 border-b border-white/10 bg-white/5 backdrop-blur-xl flex items-center px-8">

      {/* Animated Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
       
        {/* Bigger Tagline */}
        <div className="text-base md:text-lg text-gray-300 tracking-widest mt-1">
          Feel the rhythm. Ride the wave.
        </div>
      </motion.div>

    </div>
  );
}