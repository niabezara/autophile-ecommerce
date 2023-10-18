import { useEffect, useState } from "react";
import MobileVersion from "./MobileVersion";
import TabletVersion from "./TabletVersion";
import DesktopVersion from "./DesktopVersion";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
      setIsTablet(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 10 }}
    >
      {isMobile ? (
        <MobileVersion />
      ) : isTablet ? (
        <TabletVersion />
      ) : (
        <DesktopVersion />
      )}
    </motion.div>
  );
}
