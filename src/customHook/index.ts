import { useState, useEffect } from "react";

export const useScrollHandler = () => {
  // setting initial value to true
  const [scroll, setScroll] = useState(false);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 210;
      setScroll(scrollCheck);
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const getWidthContent = (width: number): number => {
  switch (true) {
    case width > 1439:
      return 1200;

    case 1262 < width && width < 1440:
      return 1030;

    case 1135 < width && width < 1263:
      return 940;

    case 1023 < width && width < 1136:
      return 994;

    case 959 < width && width < 1024:
      return 930;

    case 767 < width && width < 960:
      return 738;

    case 639 < width && width < 768:
      return 630;

    case 479 < width && width < 640:
      return 470;

    case 320 < width && width < 480:
      return 320;

    default:
      return width;
  }
};

export const getHeightCarousel = (width: number): number => {
  if (width > 1241) {
    return 721;
  }
  return 721 - Math.round((1241 - width) / 2);
};

export const getLeftCarousel = (width: number): number => {
  if (width > 372) {
    return (width - 372) / 2;
  }
  return 0;
};

export interface ILngs {
  vn: {
    nativeName: string;
  };
  eng: {
    nativeName: string;
  };
}

export const lngs: ILngs = {
  vn: { nativeName: "VN" },
  eng: { nativeName: "Eng" },
};
