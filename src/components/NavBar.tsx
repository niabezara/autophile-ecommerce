import React, { useEffect, useState } from "react";
import MobileVersion from "./MobileVersion";
import TabletVersion from "./TabletVersion";
import DesktopVersion from "./DesktopVersion";

export default function NavBar({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavbar: () => void;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);

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
    <header>
      {isMobile ? (
        <MobileVersion
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : isTablet ? (
        <TabletVersion />
      ) : (
        <DesktopVersion />
      )}
    </header>
  );
}
