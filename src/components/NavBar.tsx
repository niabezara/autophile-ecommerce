import React, { useEffect, useState } from "react";
import MobileVersion from "./MobileVersion";
import TabletVersion from "./TabletVersion";

export default function NavBar({
  isNavbarOpen,
  toggleNavbar,
}: {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleNavbar: () => void;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileVersion
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
      ) : (
        <TabletVersion />
      )}
    </>
  );
}
