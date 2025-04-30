/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mobileMenuIconVariants } from "../../animations/mobileMenuIcon";

export default function MobileMenuButton({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      className="text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.div
            key="close"
            custom="open"
            variants={mobileMenuIconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <X className="h-6 w-6" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            custom="closed"
            variants={mobileMenuIconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Menu className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
