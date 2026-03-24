"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
export interface ISaveAndCancel {
  name: string;
  className?: string;
  is2ndButton?: boolean;
  isIcon?: boolean;
  isBgWhite?: boolean;
  is2BgWhite?: boolean;
  is2Icon?: boolean;
  button2Name?: string;
  isFullWidth?: boolean;
  buttonWidth?: string;
  handleClick?: () => void;
  handleClick2?: () => void;
  isBorder?: boolean;
  isHoverBgBlue?: boolean;
  isBold?: boolean;
}
const SaveAndCancel = ({
  name,
  className,
  is2ndButton,
  isIcon,
  isBgWhite,
  is2BgWhite,
  is2Icon,
  button2Name,
  isFullWidth,
  buttonWidth = "",
  handleClick,
  handleClick2,
  isBorder,
  isHoverBgBlue,
  isBold,
}: ISaveAndCancel) => {
  const [isHover, setIsHover] = useState(false);
  const widthClass = isFullWidth ? "w-full" : buttonWidth;

  return (
    <div className={`${className} flex gap-2 lg:gap-4`}>
      {/* <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
        className={`px-[2rem] ${isBold && "font-semibold"} ${isBorder ? 'border-[1px] border-black' : 'border-[1px] border-transparent'} ${isHover && 'border-[1px] border-transparent'} flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-[18px] font-medium transition-all duration-300 ease-out active:scale-95  ${
          isBgWhite
            ? isHover
              ? isHoverBgBlue
                ? 'border border-[#1A5A96] bg-[#1A5A96] text-white'
                : 'border border-[#FB9100] bg-[#FB9100] text-white'
              : 'border border-[#FFFFFF] bg-white text-[#111111]'
            : isHover
              ? 'bg-[#D17900] text-white'
              : 'bg-[#FB9100] text-white'
        } `}
      >
        {name}
        {isIcon && (
          <IoIosArrowRoundForward
            size={25}
            className={`${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
          />
        )}
      </button> */}
      {/* <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
        className={`animated-border animated-bg px-[2rem] ${
          isBold && "font-semibold"
        } flex w-full cursor-pointer items-center justify-center gap-2 rounded-[60px] py-[0.75rem] font-montserrat text-[18px] font-medium text-white transition-all duration-300 ease-out active:scale-95`}
      >
        {name}

        {isIcon && (
          <IoIosArrowRoundForward
            size={25}
            className={`${
              isHover
                ? "rotate-[360deg] transition-all duration-300"
                : "rotate-[310deg]"
            }`}
          />
        )}
      </button> */}
      {/* <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleClick}
        className="demo-btn bg-[#FFFFFF] flex items-center gap-2 px-8 py-4 rounded-full text-[#FB9100] font-medium text-lg overflow-hidden group relative"
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="196"
            height="56"
            rx="30"
            ry="30"
            fill="none"
            stroke="#FB9100"
            strokeWidth="2"
            strokeDasharray="320 80"
            className="animate-border-draw"
            style={{ filter: "drop-shadow(0 0 3px #FB9100)" }}
          />
        </svg>

        <p className="relative z-10">Book A Demo</p>

        {isIcon && (
          <IoIosArrowRoundForward
            size={25}
            className={`${
              isHover
                ? "rotate-[360deg] transition-all duration-300"
                : "rotate-[310deg]"
            }`}
          />
        )}
      </button> */}
      <button className="demo-btn flex items-center gap-2 px-8 py-4 rounded-full text-[#FB9100] font-medium text-lg overflow-hidden group relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="highlightGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="20%" stopColor="#FFFFFF" />
              <stop offset="80%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          {/* Base Border */}
          <rect
            x="2"
            y="2"
            width="196"
            height="56"
            rx="30"
            ry="30"
            fill="none"
            stroke="#FB9100"
            strokeWidth="4"
          />

          {/* Moving Highlight */}
          <rect
            x="2"
            y="2"
            width="196"
            height="56"
            rx="30"
            ry="30"
            pathLength="1" // 👈 IMPORTANT
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="butt"
            strokeDasharray="0.1 0.9" // 👈 10% highlight
            className="animate-border-draw"
            style={{
              strokeDashoffset: -0.3, // 👈 start near top-right
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))",
            }}
          />
        </svg>
        <p className="relative z-10">Book A Demo</p>

        {isIcon && (
          <IoIosArrowRoundForward
            size={25}
            className={`${
              isHover
                ? "rotate-[360deg] transition-all duration-300"
                : "rotate-[310deg]"
            }`}
          />
        )}
      </button>
      {is2ndButton && (
        <button
          onClick={handleClick2}
          className={`${widthClass} group flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-[18px] font-medium transition-all duration-300 ease-out active:scale-95 ${buttonWidth} ${
            is2BgWhite
              ? "border border-[#111111] bg-white text-[#111111] hover:bg-[#1A5A96] hover:text-white"
              : "bg-[#FB9100] text-white hover:bg-[#1A5A96]"
          } `}
        >
          {button2Name}

          {is2Icon && (
            <IoIosArrowRoundForward
              size={25}
              className="rotate-[310deg] transition-transform duration-300 group-hover:rotate-[360deg]"
            />
          )}
        </button>
      )}
    </div>
  );
};

export default SaveAndCancel;
