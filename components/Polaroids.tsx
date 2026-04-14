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

import Image from "next/image";

const photos = [
  {
    src: "/images/dude_reading.jpg",
    alt: "Johnson Ayanda",
    rotation: "-rotate-12",
    zIndex: "z-10",
    translateY: "translate-y-4",
    translateX: "-translate-x-32",
  },
  {
    src: "/images/johnson1.jpg",
    alt: "Johnson Ayanda",
    rotation: "rotate-0",
    zIndex: "z-20",
    translateY: "-translate-y-2",
    translateX: "translate-x-0",
  },
  {
    src: "/images/johnson2.jpg",
    alt: "Johnson Ayanda",
    rotation: "rotate-6",
    zIndex: "z-10",
    translateY: "translate-y-6",
    translateX: "translate-x-32",
  },
];

export default function PolaroidSection() {
  return (
    <section className="w-full bg-[#0d1117] py-24 flex items-center justify-center">
      <div className="flex items-center justify-center relative h-[400px] w-[560px]">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`
              absolute
              ${photo.rotation}
              ${photo.zIndex}
              ${photo.translateY}
              ${photo.translateX}
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:z-30
            `}
          >
            {/* Polaroid frame */}
            <div className="bg-white rounded-2xl shadow-2xl p-2.5 pb-9 w-[190px]">
              <div className="relative w-full h-[230px] rounded-xl overflow-hidden bg-gray-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Label */}
              <p className="text-center text-[10px] text-gray-400 mt-2.5 font-light tracking-wide">
                @johnsonayanda
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
