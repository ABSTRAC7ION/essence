import React, { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

interface MyComponentProps {
  children: React.ReactNode; // Specify the type of the children prop
  // Add your own props here
}

const LocomotiveScrollContainer = ({ children }: MyComponentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldHideTitle, setShouldHideTitle] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
      smartphone: {
        smooth: true,
      },
    });

    scroll.on("scroll", (args) => {
      if (args.scroll.y > window.innerHeight / 4) {
        // Hide the title when scroll position is past 100px
        setShouldHideTitle(true);
      } else {
        // Show the title when scroll position is before 100px
        setShouldHideTitle(false);
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div>
      <nav
        className={
          shouldHideTitle
            ? "z-[99] bg-white fixed h-14 top-0 flex w-screen items-center justify-center px-8 border-b-[1px] border-black text-black transition-all duration-200"
            : "z-[99] fixed h-14 top-0 flex w-screen items-center justify-center px-8 mix-blend-difference text-white"
        }
      >
        <div className="mr-auto">
          <a
            href="/"
            className="font-bold text-4xl transition-all duration-200"
          >
            ESSENSE APPAREL®
          </a>
        </div>
        <div className="ml-auto ">
          <ul className="flex flex-row gap-8 pointer-events-auto">
            <li>
              <a href="/">SIGN IN</a>
            </li>
            <li>
              <a href="/">OFFERS</a>
            </li>
            <li>
              <a href="/">WISHLIST</a>
            </li>
            <li>
              <a href="/">CART</a>
            </li>
            <li>
              <a href="/">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
      <div ref={containerRef} className="overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default LocomotiveScrollContainer;
