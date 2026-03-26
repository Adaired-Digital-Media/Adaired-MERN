import { useEffect, useState } from "react";

const useResponsivePadding = (padding?: string) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 1024);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getBottomValue = (
    value?: string,
    fallbackDesktop = "6rem",
    fallbackMobile = "3rem",
  ) => {
    if (!value) return isMobile ? fallbackMobile : fallbackDesktop;

    const num = parseFloat(value);
    const unit = value.replace(num.toString(), "") || "rem";

    return isMobile ? `${num / 2}${unit}` : value;
  };

  const [top, bottom] = padding?.split(",") || [];

  return {
    paddingTop: top || "6rem", // ✅ always full
    paddingBottom: getBottomValue(bottom), // ✅ only this is responsive
  };
};

export default useResponsivePadding;
