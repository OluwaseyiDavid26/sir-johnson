// import Image from "next/image";

// // Replace these with your actual image paths
// const photos = [
//   {
//     src: "/images/dude_reading.jpg",
//     alt: "Johnson Ayanda",
//     rotation: "-rotate-12",
//     zIndex: "z-10",
//     translateY: "translate-y-4",
//   },
//   {
//     src: "/images/johnson1.jpg",
//     alt: "Johnson Ayanda",
//     rotation: "rotate-0",
//     zIndex: "z-20",
//     translateY: "-translate-y-2",
//   },
//   {
//     src: "/images/johnson2.jpg",
//     alt: "Johnson Ayanda",
//     rotation: "rotate-6",
//     zIndex: "z-10",
//     translateY: "translate-y-6",
//   },
// ];

// export default function PolaroidSection() {
//   return (
//     <section className="w-full bg-[#0f1117] py-20 flex items-center justify-center">
//       <div className="flex items-center justify-center relative h-[340px] w-[420px]">
//         {photos.map((photo, i) => (
//           <div
//             key={i}
//             className={`
//               absolute
//               ${photo.rotation}
//               ${photo.zIndex}
//               ${photo.translateY}
//               transition-transform duration-300 hover:scale-105 hover:z-30
//               ${i === 0 ? "-translate-x-28" : i === 2 ? "translate-x-28" : "translate-x-0"}
//             `}
//           >
//             {/* Polaroid frame */}
//             <div className="bg-white rounded-xl shadow-2xl p-2 pb-8 w-[160px]">
//               <div className="relative w-full h-[180px] rounded-lg overflow-hidden bg-gray-200">
//                 <Image
//                   src={photo.src}
//                   alt={photo.alt}
//                   fill
//                   className="object-cover object-top"
//                 />
//               </div>
//               {/* Label */}
//               <p className="text-center text-[10px] text-gray-500 mt-2 font-light tracking-wide">
//                 @johnsonayanda
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const photos = [
  {
    src: "/images/dude_reading.jpg",
    alt: "Johnson reading",
    width: 130,
    imgHeight: 160,
    style: {
      left: "10px",
      top: "30px",
      rotate: "-8deg",
      zIndex: 1,
    },
  },
  {
    src: "/images/johnson1.jpg",
    alt: "Johnson Ayanda",
    width: 150,
    imgHeight: 185,
    style: {
      left: "100px",
      top: "10px",
      rotate: "2deg",
      zIndex: 3,
    },
  },
  {
    src: "/images/johnson2.jpg",
    alt: "Johnson Ayanda",
    width: 135,
    imgHeight: 165,
    style: {
      left: "215px",
      top: "45px",
      rotate: "7deg",
      zIndex: 2,
    },
  },
];

const tapePositions = [
  { top: "22px", left: "50px", rotate: "-6deg" },
  { top: "3px", left: "165px", rotate: "3deg" },
  { top: "38px", left: "275px", rotate: "8deg" },
];

export default function PolaroidSection() {
  return (
    <section className="w-full bg-[#0d1117] py-20 px-6 flex items-center justify-center overflow-hidden relative">
      {/* Subtle vertical accent line */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/5"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #c9a96e44, transparent)",
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl w-full">
        {/* ── Left: text block ── */}
        <div className="flex-shrink-0 md:w-56 text-center md:text-left z-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#555] mb-3">
            Portfolio · 2024
          </p>
          <h2
            className="text-4xl font-semibold leading-[1.1] text-[#f0ece6] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            The face
            <br />
            behind the <span className="text-[#c9a96e]">work.</span>
          </h2>
          <p className="text-[13px] text-[#555] leading-relaxed mb-6">
            Designer &amp; developer crafting digital experiences with intention
            and detail.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#1a1f2a] border border-[#2a2f3a] rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
            <span className="text-[12px] text-[#c9a96e] tracking-wide">
              @johnsonayanda
            </span>
          </div>
        </div>

        {/* ── Right: scattered photos ── */}
        <div
          className="relative flex-shrink-0"
          style={{ width: "360px", height: "310px" }}
        >
          {/* Washi tape strips */}
          {tapePositions.map((t, i) => (
            <div
              key={i}
              className="absolute w-10 h-3.5 rounded-sm"
              style={{
                top: t.top,
                left: t.left,
                rotate: t.rotate,
                background: "rgba(220,210,180,0.2)",
                zIndex: 5,
              }}
            />
          ))}

          {/* Photo cards */}
          {photos.map((photo, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-sm transition-all duration-300 hover:scale-105 group"
              style={{
                width: `${photo.width}px`,
                left: photo.style.left,
                top: photo.style.top,
                rotate: photo.style.rotate,
                zIndex: photo.style.zIndex,
                padding: "6px 6px 26px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.zIndex = "10";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 30px 80px rgba(0,0,0,0.85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.zIndex = String(
                  photo.style.zIndex,
                );
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.6)";
              }}
            >
              <div
                className="relative w-full overflow-hidden rounded-[2px] bg-[#c8bfb0]"
                style={{ height: `${photo.imgHeight}px` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Copyright stamp */}
              <span className="absolute bottom-1.5 right-2 text-[9px] text-[#bbb] tracking-wide">
                ©JA
              </span>
            </div>
          ))}

          {/* Film strip bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-7 flex items-center gap-1.5 px-2"
            style={{
              background: "#111",
              borderTop: "1px solid #222",
              zIndex: 0,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-sm bg-[#0d1117]"
                style={{ width: "10px", height: "14px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
