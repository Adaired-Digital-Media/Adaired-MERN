// "use client";
// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import logo from "../../../../public/Layer_1.svg";
// import MaxWidthWrapper from "../../MaxWidthWrapper";
// import { routes } from "../../../../@core/config/routes";
// import {
//   MdKeyboardArrowDown,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// import SaveAndCancel from "../SaveAndCancel";
// import { GoArrowUpRight } from "react-icons/go";
// import { MdArrowOutward } from "react-icons/md";
// import contactus from "../../../../public/assets/header/Group 1000006721.svg";
// import { TiMediaRecordOutline } from "react-icons/ti";
// import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
// import { TbPointFilled } from "react-icons/tb";
// import { MdOutlineArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// const Header = () => {
//   const router = useRouter();
//   const [show, setShow] = useState(false);
//   const pathname = usePathname();
//   const [hover, setHover] = useState<number | null>(null);
//   const [activeMenuTab, setActiveMenuTab] = useState<number | null>(null);
//   const isCardActive = (sub: any) => {
//     return sub.subItems?.some((item: any) => pathname === item.href);
//   };
//   const { websiteNav } = routes;
//   const [level, setLevel] = useState<0 | 1 | 2>(0);
//   const [activeMenu, setActiveMenu] = useState<any>(null);
//   const [activeGroup, setActiveGroup] = useState<any>(null);
//   const handleMenuClose = () => {
//     setHover(null);
//     setActiveMenuTab(null);
//   };
//   return (
//     <div className="">
//       <MaxWidthWrapper>
//         <div className="flex w-[100%] items-center rounded-full border-b-[1px] border-[#0000001A] bg-[#FFFFFF]">
//           <div className="relative flex w-full justify-between p-[1rem] lg:p-[1%]">
//             <div
//               onClick={() => router.push("/")}
//               className="cursor-pointer pl-3"
//             >
//               <Image
//                 src={logo}
//                 alt="brand logo"
//                 width={132}
//                 height={50}
//                 className="aspect-[132/50] h-auto w-[clamp(6.25rem,8vw,8.25rem)]"
//               />
//             </div>
//             <div className="hidden justify-between gap-2 rounded-full bg-[#FFF7EC] p-2 lg:flex">
//               {websiteNav.map((menu, idx) => {
//                 const isHover = hover === idx;

//                 // Helper
//                 const isPathActive = (href: string) => {
//                   return pathname === href || pathname.startsWith(href + "/");
//                 };

//                 // Check parent + sub + child active
//                 const isActive =
//                   (menu.href !== "#" && isPathActive(menu.href)) ||
//                   menu.subItems?.some(
//                     (sub: any) =>
//                       isPathActive(sub.href) ||
//                       sub.subItems?.some((child: any) =>
//                         isPathActive(child.href),
//                       ),
//                   );

//                 return (
//                   <div
//                     key={idx}
//                     onMouseEnter={() => setHover(idx)}
//                     onMouseLeave={() => setHover(null)}
//                   >
//                     {/* ===================== MAIN MENU ===================== */}
//                     <Link
//                       href={menu.href}
//                       className={` flex items-center rounded-full px-5 py-2 transition ${
//                         isActive || isHover
//                           ? "bg-[#FB9100] text-white"
//                           : "text-black"
//                       }`}
//                     >
//                       <p className="text-[16px] font-Outfit">{menu.label}</p>
//                       {menu.subItems && <MdKeyboardArrowDown size={18} />}
//                     </Link>

//                     {/* ===================== MEGA MENU ===================== */}
//                     {menu.subItems && (
//                       <div
//                         className={`absolute left-0 right-0 top-[76%] z-50 transition-all duration-300 ease-out ${
//                           isHover
//                             ? "pointer-events-auto translate-y-0 opacity-100"
//                             : "pointer-events-none -translate-y-3 opacity-0"
//                         }`}
//                       >
//                         {/* ===================== RESOURCES / WHITE LABEL ===================== */}
//                         {menu.label === "Resources" ||
//                         menu.label === "White Label" ? (
//                           <div
//                             className={`${
//                               menu.label === "White Label"
//                                 ? "ml-[38%]"
//                                 : "ml-[48.06%]"
//                             } mx-auto w-fit rounded-xl bg-white p-4 shadow-lg`}
//                           >
//                             <ul className="space-y-2">
//                               {menu.subItems.map((item: any, i: number) => {
//                                 const isItemActive = isPathActive(item.href);

//                                 return (
//                                   <li key={i}>
//                                     <Link
//                                       href={item.href}
//                                       onClick={handleMenuClose}
//                                       className={`group flex items-center gap-2 text-xs transition ${
//                                         isItemActive
//                                           ? "text-[#FB9100]"
//                                           : "text-gray-600 hover:text-[#FB9100]"
//                                       }`}
//                                     >
//                                       {item.name}
//                                       <MdArrowOutward
//                                         size={16}
//                                         className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
//                                       />
//                                     </Link>
//                                   </li>
//                                 );
//                               })}
//                             </ul>
//                           </div>
//                         ) : (
//                           /* ===================== SERVICES MEGA MENU ===================== */
//                           <div className="mx-auto rounded-2xl bg-white shadow-xl">
//                             <div className="">
//                               <div className="my-[0.5rem] grid grid-cols-4 items-stretch gap-1">
//                                 <div className="col-span-3 p-[2rem]">
//                                   <div className="grid grid-cols-3 gap-2">
//                                     {menu?.subItems
//                                       ?.slice(0, 3)
//                                       .map((sub: any, i: number) => {
//                                         const index = i;

//                                         return (
//                                           <div
//                                             key={index}
//                                             onMouseEnter={() =>
//                                               setActiveMenuTab(index)
//                                             }
//                                             onMouseLeave={() =>
//                                               setActiveMenuTab(null)
//                                             }
//                                             className={`relative rounded-[1rem] border-r px-[1rem] ${
//                                               activeMenuTab === index ||
//                                               isCardActive(sub)
//                                                 ? "bg-"
//                                                 : ""
//                                             }`}
//                                           >
//                                             <span>
//                                               <Image
//                                                 src={sub?.icon}
//                                                 width={43}
//                                                 height={43}
//                                                 alt={sub?.icon}
//                                                 className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[#FFFFFF]" : ""}`}
//                                               />
//                                             </span>

//                                             <Link
//                                               href={sub.href}
//                                               onClick={handleMenuClose}
//                                               className={`group flex items-center gap-0.5 transition hover:text-[#FB9100]`}
//                                             >
//                                               {/* <TiMediaRecordOutline/> */}
//                                               <span
//                                                 className={`my-[0.65rem] block text-[15px] font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
//                                               >
//                                                 {sub.name}
//                                               </span>

//                                               <GoArrowUpRight
//                                                 className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${
//                                                   pathname === sub?.href
//                                                     ? "opacity-100"
//                                                     : "opacity-0 group-hover:opacity-100"
//                                                 }`}
//                                               />
//                                             </Link>
//                                             <div className="space-y-0.5">
//                                               {sub.subItems?.map(
//                                                 (item: any, j: number) => {
//                                                   const isActive = isPathActive(
//                                                     item.href,
//                                                   );

//                                                   return (
//                                                     <Link
//                                                       key={j}
//                                                       href={item.href}
//                                                       onClick={handleMenuClose}
//                                                       className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
//                                                     >
//                                                       {/* <MdOutlineKeyboardDoubleArrowRight /> */}
//                                                       <span
//                                                         className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
//                                                       >
//                                                         {item.name}
//                                                       </span>

//                                                       <GoArrowUpRight
//                                                         className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${
//                                                           isActive
//                                                             ? "opacity-100"
//                                                             : "opacity-0 group-hover:opacity-100"
//                                                         }`}
//                                                       />
//                                                     </Link>
//                                                   );
//                                                 },
//                                               )}
//                                             </div>
//                                           </div>
//                                         );
//                                       })}
//                                   </div>

//                                   <div className="my-[1rem] grid grid-cols-3 gap-2">
//                                     {menu?.subItems
//                                       ?.slice(3, 6)
//                                       .map((sub: any, i: number) => {
//                                         const index = i + 3;

//                                         return (
//                                           <div
//                                             key={index}
//                                             onMouseEnter={() =>
//                                               setActiveMenuTab(index)
//                                             }
//                                             onMouseLeave={() =>
//                                               setActiveMenuTab(null)
//                                             }
//                                             className={`relative my-[0.65rem] rounded-[1rem] border-r px-[1rem] ${
//                                               activeMenuTab === index ||
//                                               isCardActive(sub)
//                                                 ? "bg-"
//                                                 : ""
//                                             }`}
//                                           >
//                                             <span>
//                                               <Image
//                                                 src={sub?.icon}
//                                                 width={43}
//                                                 height={43}
//                                                 alt={sub?.icon}
//                                                 className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[]" : ""}`}
//                                               />
//                                             </span>

//                                             <Link
//                                               href={sub.href}
//                                               onClick={handleMenuClose}
//                                               className={`group flex items-center gap-2 transition hover:text-[#FB9100]`}
//                                             >
//                                               <span
//                                                 className={`my-[0.65rem] block text-[15px] font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
//                                               >
//                                                 {sub.name}
//                                               </span>

//                                               <GoArrowUpRight
//                                                 className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${
//                                                   pathname === sub?.href
//                                                     ? "opacity-100"
//                                                     : "opacity-0 group-hover:opacity-100"
//                                                 }`}
//                                               />
//                                             </Link>
//                                             <div className="space-y-0.5">
//                                               {sub.subItems?.map(
//                                                 (item: any, j: number) => {
//                                                   const isActive = isPathActive(
//                                                     item.href,
//                                                   );

//                                                   return (
//                                                     <Link
//                                                       key={j}
//                                                       href={item.href}
//                                                       onClick={handleMenuClose}
//                                                       className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
//                                                     >
//                                                       {/* <MdOutlineKeyboardDoubleArrowRight /> */}

//                                                       <span
//                                                         className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
//                                                       >
//                                                         {item.name}
//                                                       </span>

//                                                       <GoArrowUpRight
//                                                         className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${
//                                                           isActive
//                                                             ? "opacity-100"
//                                                             : "opacity-0 group-hover:opacity-100"
//                                                         }`}
//                                                       />
//                                                     </Link>
//                                                   );
//                                                 },
//                                               )}
//                                             </div>
//                                           </div>
//                                         );
//                                       })}
//                                   </div>

//                                   <div className="grid grid-cols-3 gap-2">
//                                     {menu?.subItems
//                                       ?.slice(6, 9)
//                                       .map((sub: any, i: number) => {
//                                         const index = i + 6;

//                                         return (
//                                           <div
//                                             key={index}
//                                             onMouseEnter={() =>
//                                               setActiveMenuTab(index)
//                                             }
//                                             onMouseLeave={() =>
//                                               setActiveMenuTab(null)
//                                             }
//                                             className={`relative rounded-[1rem] border-r px-[1rem]`}
//                                           >
//                                             <span>
//                                               <Image
//                                                 src={sub?.icon}
//                                                 width={43}
//                                                 height={43}
//                                                 alt={sub?.icon}
//                                                 className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[#FFFFFF]" : ""}`}
//                                               />
//                                             </span>

//                                             <Link
//                                               href={sub.href}
//                                               onClick={handleMenuClose}
//                                               className={`group flex items-center gap-2 transition hover:text-[#FB9100]`}
//                                             >
//                                               <span
//                                                 className={`my-[0.65rem] block text-[15px] font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
//                                               >
//                                                 {sub.name}
//                                               </span>

//                                               <GoArrowUpRight
//                                                 className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${
//                                                   pathname === sub?.href
//                                                     ? "opacity-100"
//                                                     : "opacity-0 group-hover:opacity-100"
//                                                 }`}
//                                               />
//                                             </Link>
//                                             <div className="space-y-0.5">
//                                               {sub.subItems?.map(
//                                                 (item: any, j: number) => {
//                                                   const isActive = isPathActive(
//                                                     item.href,
//                                                   );

//                                                   return (
//                                                     <Link
//                                                       key={j}
//                                                       href={item.href}
//                                                       onClick={handleMenuClose}
//                                                       className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
//                                                     >
//                                                       {/* <MdOutlineKeyboardDoubleArrowRight /> */}

//                                                       <span
//                                                         className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
//                                                       >
//                                                         {item.name}
//                                                       </span>

//                                                       <GoArrowUpRight
//                                                         className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${
//                                                           isActive
//                                                             ? "opacity-100"
//                                                             : "opacity-0 group-hover:opacity-100"
//                                                         }`}
//                                                       />
//                                                     </Link>
//                                                   );
//                                                 },
//                                               )}
//                                             </div>
//                                           </div>
//                                         );
//                                       })}
//                                   </div>
//                                 </div>

//                                 <div className="p-[1.5rem]">
//                                   <div className="relative flex h-full flex-col justify-between rounded-xl bg-[#F6F1E8] p-[2.5rem]">
//                                     <div>
//                                       <p className="text-[24px]">Let’s Build</p>
//                                       <h2 className="text-[2rem] font-bold text-black">
//                                         Something Great
//                                       </h2>

//                                       <p className="mt-4 text-gray-600">
//                                         Talk To Our Experts Today.
//                                       </p>

//                                       <Link
//                                         href="/contact"
//                                         className="mt-8 inline-block rounded-full border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white"
//                                       >
//                                         Contact Us
//                                       </Link>
//                                     </div>

//                                     <div className="relative mt-8 h-full">
//                                       <Image
//                                         src={contactus}
//                                         fill
//                                         alt="illustration"
//                                         className="w-full object-contain object-bottom"
//                                       />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="z-50 my-auto hidden gap-2 lg:flex">
//               <SaveAndCancel
//                 isBorder={true}
//                 handleClick={() => router.push("/contact")}
//                 isBgWhite={true}
//                 buttonWidth={"!w-[10rem]"}
//                 name={"Book A Call"}
//               />
//               <span
//                 onClick={() => router.push("/contact")}
//                 className="mt-1 inline-block animate-zoomPulse"
//               >
//                 <GoArrowUpRight
//                   size={45}
//                   className="cursor-pointer rounded-full bg-[#FB9100] p-3 font-bold text-white transition-transform duration-500 ease-in-out hover:rotate-[45deg]"
//                 />
//               </span>
//             </div>
//             <IoReorderThreeOutline
//               onClick={() => setShow(!show)}
//               size={35}
//               className="animate-pulse block lg:hidden"
//             />
//           </div>
//         </div>
//       </MaxWidthWrapper>

//       {show && (
//         <div className="fixed inset-0 z-[40] lg:hidden">
//           {/* OVERLAY */}
//           <div
//             className="absolute inset-0 h-[40rem] w-[40rem] bg-black/60"
//             onClick={() => {
//               setShow(false);
//               setLevel(0);
//               setActiveMenu(null);
//               setActiveGroup(null);
//             }}
//           />

//           {/* DRAWER */}
//           <div
//             className={`absolute right-0 top-0 h-full w-full transform bg-white p-5 transition-transform duration-300 ease-in-out md:w-[80%] ${show ? "translate-x-0" : "translate-x-full"} `}
//           >
//             {/* HEADER */}
//             <div className="mb-6 flex items-center justify-between">
//               {level > 0 ? (
//                 <button
//                   onClick={() => {
//                     if (level === 2) {
//                       setLevel(1);
//                       setActiveGroup(null);
//                     } else {
//                       setLevel(0);
//                       setActiveMenu(null);
//                     }
//                   }}
//                   className="flex items-center gap-1 text-sm font-medium text-black"
//                 >
//                   <MdKeyboardDoubleArrowLeft />
//                   Back
//                 </button>
//               ) : (
//                 <h3 className="text-lg font-semibold">Menu</h3>
//               )}

//               <button
//                 onClick={() => {
//                   setShow(false);
//                   setLevel(0);
//                   setActiveMenu(null);
//                   setActiveGroup(null);
//                 }}
//               >
//                 <IoClose size={22} />
//               </button>
//             </div>

//             {/* LEVEL CONTAINER */}
//             <div className="relative h-full overflow-hidden">
//               {/* ================= LEVEL 0 – MAIN MENU ================= */}
//               <div
//                 className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 0 ? "translate-x-0" : "-translate-x-full"} `}
//               >
//                 <nav className="space-y-4">
//                   {websiteNav.map((menu) => (
//                     <div key={menu.value}>
//                       {menu.subItems ? (
//                         <div className="flex w-full justify-between">
//                           <Link
//                             href={menu.href}
//                             onClick={() => setShow(false)}
//                             className="flex w-fit items-center justify-between text-sm font-medium text-black"
//                           >
//                             {menu.label}
//                           </Link>
//                           <MdKeyboardDoubleArrowLeft
//                             onClick={() => {
//                               setActiveMenu(menu);
//                               setLevel(1);
//                             }}
//                             className="rotate-180"
//                           />
//                         </div>
//                       ) : (
//                         <Link
//                           href={menu.href}
//                           onClick={() => setShow(false)}
//                           className="block text-sm font-medium text-black"
//                         >
//                           {menu.label}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>
//               </div>

//               {/* ================= LEVEL 1 – SERVICES / RESOURCES ================= */}
//               <div
//                 className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 1 ? "translate-x-0" : "translate-x-full"} `}
//               >
//                 <nav className="space-y-4">
//                   {activeMenu?.subItems?.map((group: any, i: number) => (
//                     <div key={i}>
//                       {group.subItems ? (
//                         <button
//                           onClick={() => {
//                             setActiveGroup(group);
//                             setLevel(2);
//                           }}
//                           className="flex w-full items-center justify-between text-sm font-medium text-black"
//                         >
//                           {group.name}
//                           <MdKeyboardDoubleArrowLeft className="rotate-180" />
//                         </button>
//                       ) : (
//                         <Link
//                           href={group.href}
//                           onClick={() => setShow(false)}
//                           className="block text-sm font-medium text-black"
//                         >
//                           {group.name}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>
//               </div>

//               {/* ================= LEVEL 2 – FINAL LINKS ================= */}
//               <div
//                 className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 2 ? "translate-x-0" : "translate-x-full"} `}
//               >
//                 <nav className="space-y-3">
//                   <h4 className="mb-3 text-sm font-semibold">
//                     {activeGroup?.name}
//                   </h4>

//                   {activeGroup?.subItems?.map((item: any, i: number) => (
//                     <Link
//                       key={i}
//                       href={item.href}
//                       onClick={() => setShow(false)}
//                       className="flex items-center gap-2 text-xs text-black"
//                     >
//                       <MdOutlineKeyboardArrowRight />
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../../public/Layer_1.svg";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { routes } from "@/@core/config/routes";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import SaveAndCancel from "../SaveAndCancel";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import contactus from "../../../../public/assets/header/Group 1000006721.svg";
import { TbMailFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import GetQuoteModal from "../../popup/GetQuoteModal";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const [hover, setHover] = useState<number | null>(null);
  const [showPhone, setShowPhone] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState<number | null>(null);
  const isCardActive = (sub: any) => {
    return sub.subItems?.some((item: any) => pathname === item.href);
  };
  const { websiteNav } = routes;
  const [level, setLevel] = useState<0 | 1 | 2>(0);
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [activeGroup, setActiveGroup] = useState<any>(null);
  const handleMenuClose = () => {
    setHover(null);
    setActiveMenuTab(null);
  };

  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <MaxWidthWrapper>
        <div className="flex w-[100%] items-center rounded-full border-b-[1px] border-[#0000001A] bg-[#FFFFFF]">
          <div className="relative flex w-full justify-between p-[1rem] lg:p-[1%]">
            <div
              onClick={() => router.push("/")}
              className="cursor-pointer pl-3"
            >
              <Image
                src={logo}
                alt="brand logo"
                width={132}
                height={50}
                className="aspect-[132/50] h-auto w-[clamp(6.25rem,8vw,8.25rem)]"
              />
            </div>
            <div className="hidden justify-between gap-2 rounded-full bg-[#F9F9F9] p-2 lg:flex">
              {websiteNav.map((menu: any, idx: any) => {
                const isHover = hover === idx;

                // Helper
                const isPathActive = (href: string) => {
                  return pathname === href || pathname.startsWith(href + "/");
                };

                // Check parent + sub + child active
                const isActive =
                  (menu.href !== "#" && isPathActive(menu.href)) ||
                  menu.subItems?.some(
                    (sub: any) =>
                      isPathActive(sub.href) ||
                      sub.subItems?.some((child: any) =>
                        isPathActive(child.href),
                      ),
                  );

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {/* ===================== MAIN MENU ===================== */}
                    <Link
                      href={menu.href}
                      className={`font-Outfit flex items-center rounded-full px-5 py-2 transition ${isActive || isHover
                        ? "bg-[#FB9100] text-white"
                        : "text-black"
                        }`}
                    >
                      <p>{menu.label}</p>
                      {menu.subItems && <MdKeyboardArrowDown size={18} />}
                    </Link>

                    {/* ===================== MEGA MENU ===================== */}
                    {menu.subItems && (
                      <div
                        className={`absolute left-0 right-0 top-[76%] z-50 transition-all duration-300 ease-out ${isHover
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-3 opacity-0"
                          }`}
                      >
                        {/* ===================== RESOURCES / WHITE LABEL ===================== */}
                        {menu.label === "Resources" ||
                          menu.label === "For Agencies" ? (
                          <div
                            className={`${menu.label === "For Agencies"
                              ? "ml-[33%]"
                              : "ml-[52%]"
                              } mx-auto w-fit rounded-xl bg-white p-4 shadow-lg`}
                          >
                            <ul className="space-y-2">
                              {menu.subItems.map((item: any, i: number) => {
                                const isItemActive = isPathActive(item.href);

                                return (
                                  <li key={i}>
                                    <Link
                                      href={item.href}
                                      onClick={handleMenuClose}
                                      className={`group font-Outfit flex items-center gap-2 transition ${isItemActive
                                        ? "text-[#FB9100]"
                                        : "text-gray-600 hover:text-[#FB9100]"
                                        }`}
                                    >
                                      {item.name}
                                      <MdArrowOutward
                                        size={16}
                                        className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                      />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ) : (
                          /* ===================== SERVICES MEGA MENU ===================== */
                          <div className="mx-auto rounded-2xl bg-white shadow-xl">
                            <div className="">
                              <div className="my-[0.5rem] grid grid-cols-4 items-stretch gap-1">
                                <div className="col-span-3 p-[2rem]">
                                  <div className="grid grid-cols-3 gap-2">
                                    {menu?.subItems
                                      ?.slice(0, 3)
                                      .map((sub: any, i: number) => {
                                        const index = i;

                                        return (
                                          <div
                                            key={index}
                                            onMouseEnter={() =>
                                              setActiveMenuTab(index)
                                            }
                                            onMouseLeave={() =>
                                              setActiveMenuTab(null)
                                            }
                                            className={`relative rounded-[1rem] border-r border-[#000000]/15 px-[1rem] ${activeMenuTab === index ||
                                              isCardActive(sub)
                                              ? "bg-"
                                              : ""
                                              }`}
                                          >
                                            <span>
                                              <Image
                                                src={sub?.icon}
                                                width={43}
                                                height={43}
                                                alt={sub?.icon}
                                                className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[#FFFFFF]" : ""}`}
                                              />
                                            </span>

                                            <Link
                                              href={sub.href}
                                              onClick={handleMenuClose}
                                              className={`group flex items-center gap-0.5 transition hover:text-[#FB9100]`}
                                            >
                                              {/* <TiMediaRecordOutline/> */}
                                              <p
                                                className={`my-[0.65rem] block font-Outfit font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
                                              >
                                                {sub.name}
                                              </p>

                                              <GoArrowUpRight
                                                className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${pathname === sub?.href
                                                  ? "opacity-100"
                                                  : "opacity-0 group-hover:opacity-100"
                                                  }`}
                                              />
                                            </Link>
                                            <div className="space-y-0.5">
                                              {sub.subItems?.map(
                                                (item: any, j: number) => {
                                                  const isActive = isPathActive(
                                                    item.href,
                                                  );

                                                  return (
                                                    <Link
                                                      key={j}
                                                      href={item.href}
                                                      onClick={handleMenuClose}
                                                      className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
                                                    >
                                                      {/* <MdOutlineKeyboardDoubleArrowRight /> */}
                                                      <span
                                                        className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
                                                      >
                                                        {item.name}
                                                      </span>

                                                      <GoArrowUpRight
                                                        className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${isActive
                                                          ? "opacity-100"
                                                          : "opacity-0 group-hover:opacity-100"
                                                          }`}
                                                      />
                                                    </Link>
                                                  );
                                                },
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>

                                  <div className="my-[1rem] grid grid-cols-3 gap-2">
                                    {menu?.subItems
                                      ?.slice(3, 6)
                                      .map((sub: any, i: number) => {
                                        const index = i + 3;

                                        return (
                                          <div
                                            key={index}
                                            onMouseEnter={() =>
                                              setActiveMenuTab(index)
                                            }
                                            onMouseLeave={() =>
                                              setActiveMenuTab(null)
                                            }
                                            className={`relative my-[0.65rem] rounded-[1rem] border-r border-[#000000]/15 px-[1rem] ${activeMenuTab === index ||
                                              isCardActive(sub)
                                              ? "bg-"
                                              : ""
                                              }`}
                                          >
                                            <span>
                                              <Image
                                                src={sub?.icon}
                                                width={43}
                                                height={43}
                                                alt={sub?.icon}
                                                className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[]" : ""}`}
                                              />
                                            </span>

                                            <Link
                                              href={sub.href}
                                              onClick={handleMenuClose}
                                              className={`group flex items-center gap-2 transition hover:text-[#FB9100]`}
                                            >
                                              <p
                                                className={`my-[0.65rem] block font-Outfit font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
                                              >
                                                {sub.name}
                                              </p>

                                              <GoArrowUpRight
                                                className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${pathname === sub?.href
                                                  ? "opacity-100"
                                                  : "opacity-0 group-hover:opacity-100"
                                                  }`}
                                              />
                                            </Link>
                                            <div className="space-y-0.5">
                                              {sub.subItems?.map(
                                                (item: any, j: number) => {
                                                  const isActive = isPathActive(
                                                    item.href,
                                                  );

                                                  return (
                                                    <Link
                                                      key={j}
                                                      href={item.href}
                                                      onClick={handleMenuClose}
                                                      className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
                                                    >
                                                      {/* <MdOutlineKeyboardDoubleArrowRight /> */}

                                                      <span
                                                        className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
                                                      >
                                                        {item.name}
                                                      </span>

                                                      <GoArrowUpRight
                                                        className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${isActive
                                                          ? "opacity-100"
                                                          : "opacity-0 group-hover:opacity-100"
                                                          }`}
                                                      />
                                                    </Link>
                                                  );
                                                },
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>

                                  <div className="grid grid-cols-3 gap-2">
                                    {menu?.subItems
                                      ?.slice(6, 9)
                                      .map((sub: any, i: number) => {
                                        const index = i + 6;

                                        return (
                                          <div
                                            key={index}
                                            onMouseEnter={() =>
                                              setActiveMenuTab(index)
                                            }
                                            onMouseLeave={() =>
                                              setActiveMenuTab(null)
                                            }
                                            className={`relative rounded-[1rem] border-r border-[#000000]/15 px-[1rem]`}
                                          >
                                            <span>
                                              <Image
                                                src={sub?.icon}
                                                width={43}
                                                height={43}
                                                alt={sub?.icon}
                                                className={`rounded-[5px] border border-[#FB91001A]/10 p-2 ${activeMenuTab === index || isCardActive(sub) ? "bg-[#FFFFFF]" : ""}`}
                                              />
                                            </span>

                                            <Link
                                              href={sub.href}
                                              onClick={handleMenuClose}
                                              className={`group flex items-center gap-2 transition hover:text-[#FB9100]`}
                                            >
                                              <p
                                                className={`my-[0.65rem] block font-Outfit font-semibold transition ${pathname === sub?.href && "text-[#FB9100]"}`}
                                              >
                                                {sub.name}
                                              </p>

                                              <GoArrowUpRight
                                                className={`transition-all duration-200 ${pathname === sub?.href && "font-bold text-[#FB9100]"} ${pathname === sub?.href
                                                  ? "opacity-100"
                                                  : "opacity-0 group-hover:opacity-100"
                                                  }`}
                                              />
                                            </Link>
                                            <div className="space-y-0.5">
                                              {sub.subItems?.map(
                                                (item: any, j: number) => {
                                                  const isActive = isPathActive(
                                                    item.href,
                                                  );

                                                  return (
                                                    <Link
                                                      key={j}
                                                      href={item.href}
                                                      onClick={handleMenuClose}
                                                      className={`group flex items-center gap-2 py-0.5 transition hover:text-[#FB9100]`}
                                                    >
                                                      {/* <MdOutlineKeyboardDoubleArrowRight /> */}

                                                      <span
                                                        className={`text-[15px] ${isActive && "font-bold text-[#FB9100]"}`}
                                                      >
                                                        {item.name}
                                                      </span>

                                                      <GoArrowUpRight
                                                        className={`transition-all duration-200 ${isActive && "font-bold text-[#FB9100]"} ${isActive
                                                          ? "opacity-100"
                                                          : "opacity-0 group-hover:opacity-100"
                                                          }`}
                                                      />
                                                    </Link>
                                                  );
                                                },
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>

                                <div className="p-[1.5rem]">
                                  <div className="relative flex h-full flex-col justify-between rounded-xl bg-[#F6F1E8] p-[2.5rem]">
                                    <div>
                                      <p className="text-[24px]">Let’s Build</p>
                                      <h2 className="text-[2rem] font-bold text-black">
                                        Something Great
                                      </h2>

                                      <p className="mt-4 text-gray-600">
                                        Talk To Our Experts Today.
                                      </p>

                                      <Link
                                        href="/contact"
                                        className="mt-8 inline-block rounded-full border border-black px-5 py-2 text-sm transition hover:bg-black hover:text-white"
                                      >
                                        Contact Us
                                      </Link>
                                    </div>

                                    <div className="relative mt-8 h-full">
                                      <Image
                                        src={contactus}
                                        fill
                                        alt="illustration"
                                        className="w-full object-contain object-bottom"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mail */}
            <div className="z-50 my-auto hidden gap-2 lg:flex">
              <div className="flex gap-3 items-center justify-center">
                {/* Email */}
                <span className="group">
                  <button
                    onClick={() => {
                      const email = "info@adaired.com";
                      navigator.clipboard.writeText(email);
                      window.location.href = `mailto:${email}`;
                    }}
                    className="bg-[#F5F5F5] cursor-pointer group-hover:bg-[#FB9100]/10 rounded-full p-3 transition-all duration-300"
                  >
                    <TbMailFilled
                      size={25}
                      className="text-[#323232] group-hover:text-[#FB9100] active:scale-95"
                    />
                  </button>
                </span>

                {/* Call + Dropdown */}
                <div className="relative group">
                  <button className="bg-[#F5F5F5] cursor-pointer rounded-full p-3 transition-all duration-300  hover:bg-[#FB9100]/10">
                    <IoCall
                      size={25}
                      className="text-[#323232]  group-hover:text-[#FB9100] transition-colors duration-300"
                    />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-[120%] right-0 w-[22rem] bg-white rounded-2xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {/* Header */}
                    <div className="bg-[#FB9100] px-5 py-3 rounded-t-2xl">
                      <p className="text-[#FFFFFF] font-semibold">Contacts</p>
                    </div>

                    <div className="p-4 space-y-5">
                      {/* Phone */}
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <span className="bg-[#2D8CFF] p-3 my-auto rounded-full flex items-center justify-center">
                          <IoCall size={20} color="white" />
                        </span>

                        {/* Divider */}
                        <div className="w-px bg-gray-300 h-16"></div>

                        {/* Content */}
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Phone</p>
                          <div className="flex items-center gap-2">
                            <ReactCountryFlag
                              countryCode="IN"
                              svg
                              className="w-5 h-5"
                            />

                            <a
                              href="tel:+918907300008"
                              className="font-semibold text-[#323232] hover:text-[#1C5B98] transition"
                            >
                              +91 89072 00008
                            </a>
                          </div>

                          <p className="text-sm text-gray-500 mt-1">
                            (If we don't pick up,{" "}
                            <span
                              onClick={() => setOpen(true)}
                              className="underline cursor-pointer hover:text-[#1C5B98]">
                              drop enquiry
                            </span>
                            .)
                          </p>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <span className="bg-[#25D366] p-3 rounded-full flex items-center justify-center">
                          <RiWhatsappFill size={20} color="white" />
                        </span>

                        {/* Divider */}
                        <div className="w-px bg-gray-300 h-12"></div>

                        {/* Content */}
                        <div>
                          <p className="text-sm text-gray-600 mb-1">WhatsApp</p>

                          <div className="flex items-center gap-2">
                            <ReactCountryFlag
                              countryCode="IN"
                              svg
                              className="w-5 h-5"
                            />

                            <a
                              href="https://wa.me/918907300008"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-[#323232] hover:text-[#1C5B98] transition"
                            >
                              +91 89073 00008
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-50 my-auto hidden gap-2 lg:flex">
                <SaveAndCancel
                  isBorder={true}
                  handleClick={() => router.push("/contact")}
                  isBgWhite={true}
                  buttonWidth={"!w-[10rem]"}
                  name={"Book A Demo"}
                  isIcon={true}
                />
              </div>

              {/* <div className={`flex gap-2 lg:gap-4`}>
                <Button
                  onClick={() => router.push('/contact')}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className={`px-[2rem] text-[#FB9100] flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] 
                  font-montserrat text-xxs font-medium transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px]
                  border-[2px] border-transparent bg-[linear-gradient(#FEF6EA,#FFFFFF),conic-gradient(from_0deg,#FB9100,#FFFFFF,#FB9100)] bg-origin-border
                  [background-clip:padding-box,border-box] animate-borderMove`}
                >
                  Book A Demo
                  <IoIosArrowRoundForward
                    size={25}
                    className={`${isHover
                      ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95'
                      : 'rotate-[310deg]'
                      }`}
                  />
                </Button>
              </div> */}
            </div>
            <IoReorderThreeOutline
              onClick={() => setShow(!show)}
              size={35}
              className="animate-pulse block lg:hidden"
            />
          </div>
        </div>
        <GetQuoteModal isOpen={!open} onClose={() => setOpen(false)} />
      </MaxWidthWrapper>

      {show && (
        <div className="fixed inset-0 z-[40] lg:hidden">
          {/* OVERLAY */}
          <div
            className="absolute inset-0 h-[40rem] w-[40rem] bg-black/60"
            onClick={() => {
              setShow(false);
              setLevel(0);
              setActiveMenu(null);
              setActiveGroup(null);
            }}
          />

          {/* DRAWER */}
          <div
            className={`absolute right-0 top-0 h-full w-full transform bg-white p-5 transition-transform duration-300 ease-in-out md:w-[80%] ${show ? "translate-x-0" : "translate-x-full"} `}
          >
            {/* HEADER */}
            <div className="mb-6 flex items-center justify-between">
              {level > 0 ? (
                <button
                  onClick={() => {
                    if (level === 2) {
                      setLevel(1);
                      setActiveGroup(null);
                    } else {
                      setLevel(0);
                      setActiveMenu(null);
                    }
                  }}
                  className="flex items-center gap-1 text-sm font-medium text-black"
                >
                  <MdKeyboardDoubleArrowLeft />
                  Back
                </button>
              ) : (
                <h3 className="text-lg font-semibold">Menu</h3>
              )}

              <button
                onClick={() => {
                  setShow(false);
                  setLevel(0);
                  setActiveMenu(null);
                  setActiveGroup(null);
                }}
              >
                <IoClose size={22} />
              </button>
            </div>

            {/* LEVEL CONTAINER */}
            <div className="relative h-full overflow-hidden">
              {/* ================= LEVEL 0 – MAIN MENU ================= */}
              <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 0 ? "translate-x-0" : "-translate-x-full"} `}
              >
                <nav className="space-y-4">
                  {websiteNav.map((menu: any) => (
                    <div key={menu.value}>
                      {menu.subItems ? (
                        <div className="flex w-full justify-between">
                          <Link
                            href={menu.href}
                            onClick={() => setShow(false)}
                            className="flex w-fit items-center justify-between text-sm font-medium text-black"
                          >
                            {menu.label}
                          </Link>
                          <MdKeyboardDoubleArrowLeft
                            onClick={() => {
                              setActiveMenu(menu);
                              setLevel(1);
                            }}
                            className="rotate-180"
                          />
                        </div>
                      ) : (
                        <Link
                          href={menu.href}
                          onClick={() => setShow(false)}
                          className="block text-sm font-medium text-black"
                        >
                          {menu.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* ================= LEVEL 1 – SERVICES / RESOURCES ================= */}
              <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 1 ? "translate-x-0" : "translate-x-full"} `}
              >
                <nav className="space-y-4">
                  {activeMenu?.subItems?.map((group: any, i: number) => (
                    <div key={i}>
                      {group.subItems ? (
                        <button
                          onClick={() => {
                            setActiveGroup(group);
                            setLevel(2);
                          }}
                          className="flex w-full items-center justify-between text-sm font-medium text-black"
                        >
                          {group.name}
                          <MdKeyboardDoubleArrowLeft className="rotate-180" />
                        </button>
                      ) : (
                        <Link
                          href={group.href}
                          onClick={() => setShow(false)}
                          className="block text-sm font-medium text-black"
                        >
                          {group.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* ================= LEVEL 2 – FINAL LINKS ================= */}
              <div
                className={`absolute inset-0 transition-transform duration-300 ease-in-out ${level === 2 ? "translate-x-0" : "translate-x-full"} `}
              >
                <nav className="space-y-3">
                  <h4 className="mb-3 text-sm font-semibold">
                    {activeGroup?.name}
                  </h4>

                  {activeGroup?.subItems?.map((item: any, i: number) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setShow(false)}
                      className="flex items-center gap-2 text-xs text-black"
                    >
                      <MdOutlineKeyboardArrowRight />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
