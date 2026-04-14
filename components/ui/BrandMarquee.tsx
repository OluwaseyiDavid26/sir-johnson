// "use client";

// import Marquee from "react-fast-marquee";
// import { useSettingsStore } from "@/store/useSettingsStore";

// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     weight: ["700"], // or whatever weight you want
// });

// export default function BrandMarquee() {
//     // Replace these with your actual brand logos
//     const brands = [
//         { name: "Hive Incubator", logo: "/icons/logos/hive.webp" },
//         { name: "Repay", logo: "/icons/logos/repay.svg" },
//         { name: "Anmut", logo: "/icons/logos/anmut.jpg" },
//         { name: "Square Farms Africa", logo: "/icons/logos/squarefarmsafrica.png" },
//         { name: "Hive Incubator", logo: "/icons/logos/hive.webp" },
//         { name: "Repay", logo: "/icons/logos/repay.svg" },
//         { name: "Anmut", logo: "/icons/logos/anmut.jpg" },
//         { name: "Square Farms Africa", logo: "/icons/logos/squarefarmsafrica.png" },
//     ];
//     const { isDarkMode } = useSettingsStore();

//     return (
//         <section className="w-full py-16 bg-white dark:bg-[#1b1c26]">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <p className="text-sm text-black/70 uppercase tracking-wider font-semibold mb-2 dark:text-white/70">
//                         Trusted By
//                     </p>
//                     <h2 className="text-3xl md:text-4xl font-bold text-black/70 dark:text-white/70">
//                         These <span className={playfair.className} style={{ fontFamily: "Playfair Display, serif" }}>Lovely</span> Brands
//                     </h2>
//                 </div>

//                 {/* Marquee */}
//                 <Marquee
//                     gradient={true}
//                     // gradientColor="white"
//                     gradientColor={isDarkMode ? "#1b1c26" : "#ffffff"}
//                     gradientWidth={100}
//                     speed={40}
//                     pauseOnHover={true}
//                     className="py-8 overflow-y-hidden"
//                 >
//                     {brands.map((brand, idx) => (
//                         <div
//                             key={idx}
//                             className="mx-8 md:mx-12 flex items-center justify-center group hover:scale-110 transition-transform duration-300"
//                         >
//                             <img
//                                 src={brand.logo}
//                                 alt={`${brand.name} logo`}
//                                 className="h-12 md:h-16 w-auto object-contain grayscal opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
//                                 loading="lazy"
//                             />
//                         </div>
//                     ))}
//                 </Marquee>
//             </div>
//         </section>
//     );
// }

"use client";

import Marquee from "react-fast-marquee";
import { useSettingsStore } from "@/store/useSettingsStore";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function BrandMarquee() {
  const brands = [
    {
      name: "Hive Incubator",
      logo: "https://lh3.googleusercontent.com/d/1lDpk9o5Mo_4wGSS4L4JywTN5XbgQL1Z4",
    },
    {
      name: "Repay",
      logo: "https://lh3.googleusercontent.com/d/1JZB5-PFrgcxvvithCK_kEY9qCErI4y-k",
    },
    {
      name: "Anmut",
      logo: "https://lh3.googleusercontent.com/d/1gin69WJ8TuCeSXO5yarlw6Jy4hujby7p",
    },
    {
      name: "Square Farms Africa",
      logo: "https://lh3.googleusercontent.com/d/1ykUO7eHVaYfLL2XzhFzcL5ogDBpDAYYe",
    },
    {
      name: "Hive Incubator",
      logo: "https://lh3.googleusercontent.com/d/1lDpk9o5Mo_4wGSS4L4JywTN5XbgQL1Z4",
    },
    {
      name: "Repay",
      logo: "https://lh3.googleusercontent.com/d/1JZB5-PFrgcxvvithCK_kEY9qCErI4y-k",
    },
    {
      name: "Anmut",
      logo: "https://lh3.googleusercontent.com/d/1gin69WJ8TuCeSXO5yarlw6Jy4hujby7p",
    },
    {
      name: "Square Farms Africa",
      logo: "https://lh3.googleusercontent.com/d/1ykUO7eHVaYfLL2XzhFzcL5ogDBpDAYYe",
    },
  ];
  const { isDarkMode } = useSettingsStore();

  return (
    <section className="w-full py-16 bg-white dark:bg-[#1b1c26]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-black/70 uppercase tracking-wider font-semibold mb-2 dark:text-white/70">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black/70 dark:text-white/70">
            These{" "}
            <span
              className={playfair.className}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Lovely
            </span>{" "}
            Brands
          </h2>
        </div>

        {/* Marquee */}
        <Marquee
          gradient={true}
          gradientColor={isDarkMode ? "#1b1c26" : "#ffffff"}
          gradientWidth={100}
          speed={40}
          pauseOnHover={true}
          className="py-8 overflow-y-hidden"
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="mx-8 md:mx-12 flex items-center justify-center group hover:scale-110 transition-transform duration-300"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="h-12 md:h-16 w-auto object-contain grayscal opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
