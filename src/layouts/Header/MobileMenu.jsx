/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { mobileMenuVariants } from "../../animations/mobileMenu";
import NavLinks from "./NavLinks";
import MobileNavIcons from "./MobileNavIcons";

export default function MobileMenu({ cartItems }) {
  return (
    <motion.div
      className="sm:hidden px-4 pt-4 pb-6 space-y-4"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Links */}
      <div className="space-y-1">
        <NavLinks isMobile />
      </div>

      {/* Icons */}
      <div className="flex justify-around pt-2 border-t border-gray-200">
        <MobileNavIcons cartItems={cartItems} />
      </div>
    </motion.div>
  );
}
