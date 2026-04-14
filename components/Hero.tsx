// "use client";
// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import HALO from "vanta/dist/vanta.halo.min";
// import { useSound } from "@/hooks/useSound";
// import { useSettingsStore } from "@/store/useSettingsStore";

// export default function Hero() {
//   const [vantaEffect, setVantaEffect] = useState<any>(null);
//   const {
//     isSoundOn,
//     playSound,
//     playClickSound,
//     playHoverSound,
//     playToggleSound,
//   } = useSound();
//   const { isDarkMode, toggleTheme } = useSettingsStore();
//   const vantaRef = useRef(null);
//   const avatarRef = useRef(null);
//   // track avatar position
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   // Initialize Vanta
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         HALO({
//           el: vantaRef.current,
//           THREE,
//           mouseControls: false, // we'll handle movement manually
//           touchControls: false,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           amplitudeFactor: 0.25,
//           size: 0.65,
//           backgroundColor: 0x131a43,
//           baseColor: 0x0055ff,
//           xOffset: 0,
//           yOffset: 0,
//         }),
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   // handle magnetic avatar + halo movement
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { innerWidth, innerHeight } = window;
//       // Normalize to -1 to +1 range
//       const x = (e.clientX / innerWidth - 0.5) * 2;
//       const y = (e.clientY / innerHeight - 0.5) * 2;
//       // Smooth easing
//       setPos({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Smooth follow effect for avatar and halo
//   useEffect(() => {
//     let animationFrame;
//     const strength = 40; // movement strength in pixels

//     const animate = () => {
//       if (avatarRef.current && vantaEffect) {
//         const moveX = pos.x * strength;
//         const moveY = pos.y * strength;

//         // Apply same translation to avatar
//         avatarRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;

//         // Convert pixel movement to vanta's coordinate system
//         // Vanta uses a different scale, so we match the pixel movement
//         const { innerWidth, innerHeight } = window;
//         vantaEffect.setOptions({
//           xOffset: (moveX / innerWidth) * 2,
//           yOffset: -(moveY / innerHeight) * 2,
//         });
//       }
//       animationFrame = requestAnimationFrame(animate);
//     };
//     animate();
//     return () => cancelAnimationFrame(animationFrame);
//   }, [vantaEffect, pos]);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden cursor-cell">
//       {/* Vanta Background Layer */}
//       <div ref={vantaRef} className="absolute inset-0 z-0" />

//       {/* Net background */}
//       <div
//         className={
//           "absolute inset-0 z-10 opacity-100 " +
//           (isDarkMode ? "bg-white/10" : "bg-white")
//         }
//       >
//         <img
//           src="/images/backgrounds/net.svg"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-20 min-h-screen flex flex-col items-center justify-center">
//         {/* Avatar with Badge */}
//         <div
//           ref={avatarRef}
//           className="absolute w-48 h-48 z-20 rounded-full border-4 border-white bg-white shadow-xl ease-out hover:scale-125 active:scale-200 transition-transform duration-300"
//         >
//           <img
//             src="/images/avatar.png"
//             alt="Avatar"
//             className="w-full h-full object-cover object-top rounded-full cursor-pointer hover:cursor-zoom-in"
//           />
//           {/* Verification Badge */}
//           <div className="absolute z-20 top-[10px] right-[10px] w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
//             <img src="/icons/check.png" alt="check" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Glass Button */}
//         <div className="absolute bottom-[40px] bg-white/50 backdrop-blur-sm rounded-[20px] border border-zinc-200 px-6 py-3">
//           Meet Joshnson Ayanda
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       {/* <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600&family=DM+Mono&display=swap");

//         :root {
//           --navy: #090f1e;
//           --navy2: #101828;
//           --off: #c8d3e8;
//           --glass: rgba(255, 255, 255, 0.04);
//           --line: rgba(255, 255, 255, 0.07);
//         }

//         @keyframes scroll-drop {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.2;
//           }
//         }
//         @keyframes fade-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .hero-fade-up {
//           opacity: 0;
//           animation: fade-up 0.7s ease forwards;
//         }
//         .hero-fade-in {
//           opacity: 0;
//           animation: fade-in 1s ease forwards 0.3s;
//         }

//         .font-playfair {
//           font-family: "Playfair Display", serif;
//         }
//         .font-outfit {
//           font-family: "Outfit", sans-serif;
//         }
//         .font-mono-dm {
//           font-family: "DM Mono", monospace;
//         }
//       `}</style> */}

//       <section
//         className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-10"
//         style={{
//           background: "var(--navy)",
//           fontFamily: "'Outfit', sans-serif",
//           paddingTop: "140px",
//           paddingBottom: "80px",
//         }}
//       >
//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         {/* Glow orbs */}
//         <div
//           className="absolute rounded-full pointer-events-none z-0"
//           style={{
//             width: 480,
//             height: 480,
//             background: "rgba(37,99,235,0.13)",
//             top: -80,
//             left: -100,
//             filter: "blur(140px)",
//           }}
//         />
//         <div
//           className="absolute rounded-full pointer-events-none z-0"
//           style={{
//             width: 320,
//             height: 320,
//             background: "rgba(99,37,235,0.08)",
//             bottom: -40,
//             right: -40,
//             filter: "blur(130px)",
//           }}
//         />

//         {/* Main grid */}
//         <div
//           className="relative z-10 w-full max-w-5xl mx-auto grid items-center gap-16"
//           style={{ gridTemplateColumns: "1fr 380px" }}
//         >
//           {/* ── LEFT ── */}
//           <div className="flex flex-col gap-7">
//             {/* Eyebrow */}
//             <div
//               className="hero-fade-up flex items-center gap-3 font-mono-dm tracking-widest text-xs text-blue-400"
//               style={{ animationDelay: "0.05s" }}
//             >
//               <span className="block w-7 h-px bg-blue-600" />
//               WELCOME TO MY SPACE
//             </div>

//             {/* Headline */}
//             <div className="hero-fade-up" style={{ animationDelay: "0.15s" }}>
//               <span
//                 className="block font-playfair italic font-bold text-blue-400 mb-2"
//                 style={{ fontSize: "clamp(15px, 1.6vw, 21px)" }}
//               >
//                 Hi, I&apos;m
//               </span>
//               <h1
//                 className="font-playfair text-white m-0 leading-none tracking-tight"
//                 style={{
//                   fontSize: "clamp(36px, 4.2vw, 58px)",
//                   fontWeight: 900,
//                 }}
//               >
//                 Johnson Ayanda.
//               </h1>
//               <p
//                 className="font-outfit text-[var(--off)] mt-3 mb-0 leading-snug font-normal"
//                 style={{ fontSize: "clamp(14px, 1.4vw, 19px)" }}
//               >
//                 IT Consultant &amp; Technology Service Manager
//               </p>
//             </div>

//             {/* Rule */}
//             <div
//               className="hero-fade-up w-10 h-0.5 bg-blue-600 rounded-sm"
//               style={{ animationDelay: "0.25s" }}
//             />

//             {/* Bio */}
//             <p
//               className="hero-fade-up font-outfit font-light leading-relaxed m-0 max-w-md"
//               style={{
//                 fontSize: 15,
//                 color: "rgba(200,211,232,0.55)",
//                 animationDelay: "0.25s",
//               }}
//             >
//               I partner with organisations to align technology with business
//               goals — overseeing IT infrastructure, driving digital
//               transformation, and delivering reliable managed services that keep
//               businesses running at their best.
//             </p>

//             {/* Chips */}
//             <div
//               className="hero-fade-up flex flex-wrap gap-2"
//               style={{ animationDelay: "0.35s" }}
//             >
//               {[
//                 { icon: "fa-server", label: "IT Infrastructure" },
//                 { icon: "fa-shield-halved", label: "Cybersecurity" },
//                 { icon: "fa-gears", label: "Service Management" },
//                 { icon: "fa-chart-line", label: "Digital Transformation" },
//               ].map((chip) => (
//                 <span
//                   key={chip.label}
//                   className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono-dm tracking-wider"
//                   style={{
//                     fontSize: 12,
//                     background: "var(--glass)",
//                     border: "0.5px solid var(--line)",
//                     color: "var(--off)",
//                   }}
//                 >
//                   <i
//                     className={`fa-solid ${chip.icon} text-blue-400`}
//                     style={{ fontSize: 10 }}
//                   />
//                   {chip.label}
//                 </span>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div
//               className="hero-fade-up flex flex-wrap items-center gap-3 pt-1"
//               style={{ animationDelay: "0.45s" }}
//             >
//               <button
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-px cursor-pointer"
//                 style={{ fontFamily: "'Outfit', sans-serif" }}
//               >
//                 <i className="fa-solid fa-briefcase text-xs" />
//                 View Services
//               </button>
//               <button
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   color: "var(--off)",
//                   background: "transparent",
//                   border: "0.5px solid rgba(255,255,255,0.14)",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background =
//                     "var(--glass)";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor =
//                     "rgba(255,255,255,0.26)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background =
//                     "transparent";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor =
//                     "rgba(255,255,255,0.14)";
//                 }}
//               >
//                 <i className="fa-solid fa-file-arrow-down text-xs" />
//                 Download CV
//               </button>
//             </div>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="hero-fade-in flex flex-col gap-3">
//             {/* Photo — clean, no overlay */}
//             <div
//               className="relative rounded-2xl overflow-hidden"
//               style={{
//                 border: "0.5px solid var(--line)",
//                 background: "var(--navy2)",
//                 height: 340,
//               }}
//             >
//               <img
//                 src="/images/avatar.png"
//                 alt="Johnson Ayanda"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>

//             {/* Name / title card — replaces where stats were */}
//             <div
//               className="rounded-2xl p-4 flex items-center gap-3"
//               style={{
//                 background: "var(--glass)",
//                 border: "0.5px solid var(--line)",
//               }}
//             >
//               <div
//                 className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center
//                               justify-center text-white font-semibold text-sm font-outfit"
//               >
//                 JA
//               </div>
//               <div>
//                 <p className="text-white font-medium text-sm m-0">
//                   Johnson Ayanda
//                 </p>
//                 <p
//                   className="font-mono-dm tracking-widest m-0 mt-0.5"
//                   style={{ fontSize: 10, color: "rgba(200,211,232,0.4)" }}
//                 >
//                   IT CONSULTANT · SERVICE MANAGER
//                 </p>
//               </div>
//             </div>

//             {/* Service strip — pushed down with mt-1 */}
//             <div
//               className="rounded-2xl p-4 flex items-center gap-3 mt-1"
//               style={{
//                 background: "var(--glass)",
//                 border: "0.5px solid var(--line)",
//               }}
//             >
//               <div
//                 className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center
//                               text-blue-400 text-base"
//                 style={{
//                   background: "rgba(37,99,235,0.1)",
//                   border: "0.5px solid rgba(37,99,235,0.22)",
//                 }}
//               >
//                 <i className="fa-solid fa-building-columns" />
//               </div>
//               <div>
//                 <p className="text-white font-medium text-sm m-0">
//                   Enterprise IT Management
//                 </p>
//                 <p
//                   className="font-mono-dm tracking-widest m-0 mt-0.5"
//                   style={{ fontSize: 10, color: "rgba(200,211,232,0.35)" }}
//                 >
//                   END-TO-END SERVICE DELIVERY
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useSettingsStore } from "@/store/useSettingsStore";

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const { isDarkMode } = useSettingsStore();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const isLight = mounted && !isDarkMode;

//   return (
//     <>
//       <style jsx global>{`
//         @keyframes fade-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes pulse-dot {
//           0%,
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.4;
//             transform: scale(0.8);
//           }
//         }
//         .hero-fade-up {
//           opacity: 0;
//           animation: fade-up 0.7s ease forwards;
//         }
//         .hero-fade-in {
//           opacity: 0;
//           animation: fade-in 1s ease forwards 0.3s;
//         }
//         .pulse-dot {
//           animation: pulse-dot 1.8s ease-in-out infinite;
//         }
//       `}</style>

//       <section
//         className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-10"
//         style={{
//           background: isLight ? "#f0f4ff" : "#090f1e",
//           fontFamily: "'Outfit', sans-serif",
//           paddingTop: "140px",
//           paddingBottom: "80px",
//           transition: "background 0.4s ease",
//         }}
//       >
//         {/* Grid overlay */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />

//         {/* Glow orbs */}
//         <div
//           className="absolute rounded-full pointer-events-none z-0"
//           style={{
//             width: 480,
//             height: 480,
//             background: "rgba(37,99,235,0.13)",
//             top: -80,
//             left: -100,
//             filter: "blur(140px)",
//           }}
//         />
//         <div
//           className="absolute rounded-full pointer-events-none z-0"
//           style={{
//             width: 320,
//             height: 320,
//             background: "rgba(99,37,235,0.08)",
//             bottom: -40,
//             right: -40,
//             filter: "blur(130px)",
//           }}
//         />

//         {/* Main grid */}
//         <div
//           className="relative z-10 w-full max-w-5xl mx-auto grid items-center gap-16"
//           style={{ gridTemplateColumns: "1fr 380px" }}
//         >
//           {/* ── LEFT ── */}
//           <div className="flex flex-col gap-7">
//             {/* Eyebrow */}
//             <div
//               className="hero-fade-up flex items-center gap-3 tracking-widest text-xs text-blue-400"
//               style={{
//                 animationDelay: "0.05s",
//                 fontFamily: "'DM Mono', monospace",
//               }}
//             >
//               <span className="block w-7 h-px bg-blue-600" />
//               WELCOME TO MY SPACE
//             </div>

//             {/* Headline */}
//             <div className="hero-fade-up" style={{ animationDelay: "0.15s" }}>
//               <span
//                 className="block italic font-bold text-blue-400 mb-2"
//                 style={{
//                   fontSize: "clamp(15px, 1.6vw, 21px)",
//                   fontFamily: "'Playfair Display', serif",
//                 }}
//               >
//                 Hi, I&apos;m
//               </span>
//               <h1
//                 className="m-0 leading-none tracking-tight"
//                 style={{
//                   fontSize: "clamp(36px, 4.2vw, 58px)",
//                   fontWeight: 900,
//                   fontFamily: "'Playfair Display', serif",
//                   color: isLight ? "#0f172a" : "#ffffff",
//                   transition: "color 0.4s ease",
//                 }}
//               >
//                 Johnson Ayanda.
//               </h1>
//               <p
//                 className="mt-3 mb-0 leading-snug font-normal"
//                 style={{
//                   fontSize: "clamp(14px, 1.4vw, 19px)",
//                   color: isLight ? "#334155" : "#c8d3e8",
//                   transition: "color 0.4s ease",
//                 }}
//               >
//                 IT Consultant &amp; Technology Service Manager
//               </p>
//             </div>

//             {/* Rule */}
//             <div
//               className="hero-fade-up w-10 h-0.5 bg-blue-600 rounded-sm"
//               style={{ animationDelay: "0.25s" }}
//             />

//             {/* Bio */}
//             <p
//               className="hero-fade-up font-light leading-relaxed m-0 max-w-md"
//               style={{
//                 fontSize: 15,
//                 color: isLight
//                   ? "rgba(51,65,85,0.75)"
//                   : "rgba(200,211,232,0.55)",
//                 animationDelay: "0.25s",
//                 transition: "color 0.4s ease",
//               }}
//             >
//               I partner with organisations to align technology with business
//               goals — overseeing IT infrastructure, driving digital
//               transformation, and delivering reliable managed services that keep
//               businesses running at their best.
//             </p>

//             {/* Chips */}
//             <div
//               className="hero-fade-up flex flex-wrap gap-2"
//               style={{ animationDelay: "0.35s" }}
//             >
//               {[
//                 { icon: "fa-server", label: "IT Infrastructure" },
//                 { icon: "fa-shield-halved", label: "Cybersecurity" },
//                 { icon: "fa-gears", label: "Service Management" },
//                 { icon: "fa-chart-line", label: "Digital Transformation" },
//               ].map((chip) => (
//                 <span
//                   key={chip.label}
//                   className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 tracking-wider"
//                   style={{
//                     fontSize: 12,
//                     fontFamily: "'DM Mono', monospace",
//                     background: isLight
//                       ? "rgba(37,99,235,0.07)"
//                       : "rgba(255,255,255,0.04)",
//                     border: `0.5px solid ${isLight ? "rgba(37,99,235,0.18)" : "rgba(255,255,255,0.07)"}`,
//                     color: isLight ? "#1e3a8a" : "#c8d3e8",
//                     transition: "all 0.4s ease",
//                   }}
//                 >
//                   <i
//                     className={`fa-solid ${chip.icon} text-blue-400`}
//                     style={{ fontSize: 10 }}
//                   />
//                   {chip.label}
//                 </span>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div
//               className="hero-fade-up flex flex-wrap items-center gap-3 pt-1"
//               style={{ animationDelay: "0.45s" }}
//             >
//               <Link
//                 href="/#portfolio"
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-px cursor-pointer"
//                 style={{ fontFamily: "'Outfit', sans-serif" }}
//               >
//                 <i className="fa-solid fa-briefcase text-xs" />
//                 View Services
//               </Link>
//               <button
//                 className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer"
//                 style={{
//                   fontFamily: "'Outfit', sans-serif",
//                   color: isLight ? "#334155" : "#c8d3e8",
//                   background: "transparent",
//                   border: `0.5px solid ${isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.14)"}`,
//                   transition: "all 0.4s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background =
//                     isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor =
//                     isLight ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.26)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLButtonElement).style.background =
//                     "transparent";
//                   (e.currentTarget as HTMLButtonElement).style.borderColor =
//                     isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.14)";
//                 }}
//               >
//                 <i className="fa-solid fa-file-arrow-down text-xs" />
//                 Download CV
//               </button>
//             </div>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="hero-fade-in flex flex-col gap-3">
//             {/* Photo */}
//             <div
//               className="relative rounded-2xl overflow-hidden"
//               style={{
//                 border: `0.5px solid ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.07)"}`,
//                 background: isLight ? "#dde6f5" : "#101828",
//                 height: 340,
//                 transition: "all 0.4s ease",
//               }}
//             >
//               <img
//                 src="/images/avatar.png"
//                 alt="Johnson Ayanda"
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>

//             {/* ── Availability badge ── */}
//             <div
//               className="rounded-2xl px-4 py-3 flex items-center gap-3"
//               style={{
//                 background: isLight
//                   ? "rgba(22,163,74,0.07)"
//                   : "rgba(22,163,74,0.08)",
//                 border: `0.5px solid ${isLight ? "rgba(22,163,74,0.25)" : "rgba(22,163,74,0.2)"}`,
//                 transition: "all 0.4s ease",
//               }}
//             >
//               <span className="pulse-dot flex-shrink-0 w-2.5 h-2.5 rounded-full bg-green-400" />
//               <div>
//                 <p
//                   className="font-medium text-sm m-0"
//                   style={{ color: isLight ? "#166534" : "#86efac" }}
//                 >
//                   Available for Consulting
//                 </p>
//                 <p
//                   className="m-0 mt-0.5 tracking-widest"
//                   style={{
//                     fontSize: 10,
//                     fontFamily: "'DM Mono', monospace",
//                     color: isLight
//                       ? "rgba(22,101,52,0.6)"
//                       : "rgba(134,239,172,0.5)",
//                   }}
//                 >
//                   OPEN TO NEW ENGAGEMENTS
//                 </p>
//               </div>
//             </div>

//             {/* ── Quick stats strip ── */}
//             <div
//               className="rounded-2xl px-4 py-3 flex items-center justify-between gap-2"
//               style={{
//                 background: isLight
//                   ? "rgba(37,99,235,0.05)"
//                   : "rgba(255,255,255,0.04)",
//                 border: `0.5px solid ${isLight ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.07)"}`,
//                 transition: "all 0.4s ease",
//               }}
//             >
//               {[
//                 { value: "8+", label: "Years Exp." },
//                 { value: "50+", label: "Clients" },
//                 { value: "3", label: "Countries" },
//               ].map((stat, i, arr) => (
//                 <div key={stat.label} className="flex items-center gap-3">
//                   <div className="text-center">
//                     <p
//                       className="font-bold m-0 leading-none"
//                       style={{
//                         fontSize: 20,
//                         fontFamily: "'Playfair Display', serif",
//                         color: isLight ? "#1e40af" : "#93c5fd",
//                       }}
//                     >
//                       {stat.value}
//                     </p>
//                     <p
//                       className="m-0 mt-1 tracking-widest"
//                       style={{
//                         fontSize: 9,
//                         fontFamily: "'DM Mono', monospace",
//                         color: isLight
//                           ? "rgba(30,64,175,0.6)"
//                           : "rgba(200,211,232,0.4)",
//                       }}
//                     >
//                       {stat.label}
//                     </p>
//                   </div>
//                   {i < arr.length - 1 && (
//                     <div
//                       className="h-6 w-px"
//                       style={{
//                         background: isLight
//                           ? "rgba(37,99,235,0.15)"
//                           : "rgba(255,255,255,0.07)",
//                       }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useSettingsStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && !isDarkMode;

  return (
    <>
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(0.75);
          }
        }
        .hero-fade-up {
          opacity: 0;
          animation: fade-up 0.7s ease forwards;
        }
        .hero-fade-in {
          opacity: 0;
          animation: fade-in 1s ease forwards 0.3s;
        }
        .pulse-dot {
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-5 md:px-10"
        style={{
          background: isLight ? "#f0f4ff" : "#090f1e",
          fontFamily: "'Outfit', sans-serif",
          paddingTop: "120px",
          paddingBottom: "80px",
          transition: "background 0.4s ease",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 480,
            height: 480,
            background: "rgba(37,99,235,0.13)",
            top: -80,
            left: -100,
            filter: "blur(140px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: 320,
            height: 320,
            background: "rgba(99,37,235,0.08)",
            bottom: -40,
            right: -40,
            filter: "blur(130px)",
          }}
        />

        {/* ── MOBILE layout: text then image stacked ── */}
        {/* ── DESKTOP layout: side by side grid ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto">
          {/* Desktop grid */}
          <div
            className="hidden md:grid items-center gap-16"
            style={{ gridTemplateColumns: "1fr 380px" }}
          >
            {/* LEFT */}
            <LeftContent isLight={isLight} />
            {/* RIGHT */}
            <RightContent isLight={isLight} />
          </div>

          {/* Mobile stack: text first, image second */}
          <div className="flex flex-col gap-8 md:hidden">
            <LeftContent isLight={isLight} />
            <RightContent isLight={isLight} />
          </div>
        </div>
      </section>
    </>
  );
}

function LeftContent({ isLight }: { isLight: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Eyebrow */}
      <div
        className="hero-fade-up flex items-center gap-3 tracking-widest text-xs text-blue-400"
        style={{ animationDelay: "0.05s", fontFamily: "'DM Mono', monospace" }}
      >
        <span className="block w-7 h-px bg-blue-600" />
        WELCOME TO MY SPACE
      </div>

      {/* Headline */}
      <div className="hero-fade-up" style={{ animationDelay: "0.15s" }}>
        <span
          className="block italic font-bold text-blue-400 mb-2"
          style={{
            fontSize: "clamp(14px, 1.6vw, 21px)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Hi, I&apos;m
        </span>
        <h1
          className="m-0 leading-none tracking-tight"
          style={{
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            color: isLight ? "#0f172a" : "#ffffff",
            transition: "color 0.4s ease",
          }}
        >
          Johnson Ayanda.
        </h1>
        <p
          className="mt-3 mb-0 leading-snug font-normal"
          style={{
            fontSize: "clamp(14px, 1.4vw, 19px)",
            color: isLight ? "#334155" : "#c8d3e8",
            transition: "color 0.4s ease",
          }}
        >
          IT Consultant &amp; Technology Service Manager
        </p>
      </div>

      {/* Rule */}
      <div
        className="hero-fade-up w-10 h-0.5 bg-blue-600 rounded-sm"
        style={{ animationDelay: "0.25s" }}
      />

      {/* Bio */}
      <p
        className="hero-fade-up font-light leading-relaxed m-0"
        style={{
          fontSize: 15,
          color: isLight ? "rgba(51,65,85,0.75)" : "rgba(200,211,232,0.55)",
          animationDelay: "0.25s",
          transition: "color 0.4s ease",
          maxWidth: "480px",
        }}
      >
        I partner with organisations to align technology with business goals —
        overseeing IT infrastructure, driving digital transformation, and
        delivering reliable managed services that keep businesses running at
        their best.
      </p>

      {/* Chips */}
      <div
        className="hero-fade-up flex flex-wrap gap-2"
        style={{ animationDelay: "0.35s" }}
      >
        {[
          { icon: "fa-server", label: "IT Infrastructure" },
          { icon: "fa-shield-halved", label: "Cybersecurity" },
          { icon: "fa-gears", label: "Service Management" },
          { icon: "fa-chart-line", label: "Digital Transformation" },
        ].map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 tracking-wider"
            style={{
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              background: isLight
                ? "rgba(37,99,235,0.07)"
                : "rgba(255,255,255,0.04)",
              border: `0.5px solid ${isLight ? "rgba(37,99,235,0.18)" : "rgba(255,255,255,0.07)"}`,
              color: isLight ? "#1e3a8a" : "#c8d3e8",
              transition: "all 0.4s ease",
            }}
          >
            <i
              className={`fa-solid ${chip.icon} text-blue-400`}
              style={{ fontSize: 10 }}
            />
            {chip.label}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div
        className="hero-fade-up flex flex-wrap items-center gap-3 pt-1"
        style={{ animationDelay: "0.45s" }}
      >
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-px cursor-pointer"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <i className="fa-solid fa-briefcase text-xs" />
          View Services
        </Link>

        <a
          href="https://drive.google.com/uc?export=download&id=1x15lcT3SKcAxV0cMQH_mFFbTme814Gjm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer"
          style={{
            fontFamily: "'Outfit', sans-serif",
            color: isLight ? "#334155" : "#c8d3e8",
            background: "transparent",
            border: `0.5px solid ${isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.14)"}`,
            textDecoration: "none",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = isLight
              ? "rgba(0,0,0,0.04)"
              : "rgba(255,255,255,0.04)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = isLight
              ? "rgba(0,0,0,0.28)"
              : "rgba(255,255,255,0.26)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = isLight
              ? "rgba(0,0,0,0.15)"
              : "rgba(255,255,255,0.14)";
          }}
        >
          <i className="fa-solid fa-file-arrow-down text-xs" />
          Download CV
        </a>
      </div>
    </div>
  );
}

function RightContent({ isLight }: { isLight: boolean }) {
  return (
    <div className="hero-fade-in flex flex-col gap-3">
      {/* Photo — full width on mobile, fixed height on desktop */}
      <div
        className="relative rounded-2xl overflow-hidden w-full"
        style={{
          border: `0.5px solid ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.07)"}`,
          background: isLight ? "#dde6f5" : "#101828",
          height: "340px",
          transition: "all 0.4s ease",
        }}
      >
        <img
          src="https://lh3.googleusercontent.com/d/1LPTKCin0Y8alB-rIzLurevYN26S_AUWX"
          alt="Johnson Ayanda"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Availability badge */}
      <div
        className="rounded-2xl px-4 py-3 flex items-center gap-3"
        style={{
          background: isLight ? "rgba(22,163,74,0.07)" : "rgba(22,163,74,0.08)",
          border: `0.5px solid ${isLight ? "rgba(22,163,74,0.25)" : "rgba(22,163,74,0.2)"}`,
          transition: "all 0.4s ease",
        }}
      >
        <span
          className="pulse-dot flex-shrink-0 w-2.5 h-2.5 rounded-full"
          style={{ background: "#4ade80" }}
        />
        <div>
          <p
            className="font-medium text-sm m-0"
            style={{
              color: isLight ? "#166534" : "#86efac",
              transition: "color 0.4s ease",
            }}
          >
            Available for Consulting
          </p>
          <p
            className="m-0 mt-0.5 tracking-widest"
            style={{
              fontSize: 10,
              fontFamily: "'DM Mono', monospace",
              color: isLight ? "rgba(22,101,52,0.6)" : "rgba(134,239,172,0.5)",
              transition: "color 0.4s ease",
            }}
          >
            OPEN TO NEW ENGAGEMENTS
          </p>
        </div>
      </div>
    </div>
  );
}
