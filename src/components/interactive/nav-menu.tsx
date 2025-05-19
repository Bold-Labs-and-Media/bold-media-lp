import { Menu, X } from "lucide-react";
import { useEffect, useRef, type PropsWithChildren } from "react";
import { Button } from "../ui/button";

export default function NavMenu({ children }: PropsWithChildren) {
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sidebar.current) return;
    sidebar.current.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenuOnClick);
    });
    return () => {
      sidebar.current?.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", closeMenuOnClick);
      });
    };
  }, []);

  const openMenuOnClick = () => {
    if (!sidebar.current) return;
    sidebar.current.style.width = "100%";
    document.body.style.overflow = "hidden";
  };

  const closeMenuOnClick = () => {
    if (!sidebar.current) return;
    sidebar.current.style.width = "0";
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <button onClick={openMenuOnClick} className="md:hidden">
        <Menu />
      </button>
      <nav className="hidden md:flex gap-8 items-center">{children}</nav>
      <div
        ref={sidebar}
        className="md:hidden h-screen w-0 fixed left-0 top-0 bg-black/90 overflow-x-hidden duration-500 z-30"
      >
        <Button
          className="absolute top-5 right-5"
          onClick={closeMenuOnClick}
          size="icon"
          variant="link"
        >
          <X size={42} />
        </Button>
        <nav className="relative  top-1/4 w-full text-center mt-8 text-white flex flex-col gap-10">
          {children}
        </nav>
      </div>
    </>
  );
}
