// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { defaultPortfolioItems } from "@/app/portfolio/[slug]/portfolio";

// export function PortfolioEntry({
//     link, title, description, imageSrc
// }: {
//     link: string;
//     title: string;
//     description: string;
//     imageSrc: string;
// }) {
//     return (
//         <Link href={link} className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#0000001a] relative transition-all" style={{ boxShadow: "inset 0px 3px 0px 0px rgb(255, 255, 255)" }}>
//             <div className="px-5 pt-5 pb-4 rounded-[20px] group">
//                 <div className="relative w-full h-[350px] rounded-[20px] overflow-hidden">
//                     <Image
//                         alt={title}
//                         src={imageSrc}
//                         width={800}
//                         height={600}
//                         decoding="async"
//                         data-nimg="1"
//                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
//                         style={{ color: "transparent" }}
//                     />
//                 </div>
//             </div>
//             <div className="px-7 pb-7">
//                 <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
//                 <p className="text-[#5a5a5a] text-[16px] line-clamp-2">{description}</p>
//                 <button className="mt-5 bg-[#f2f2f2] hover:bg-[#e5e5e5] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-black text-start no-underline transition-all duration-500 group">
//                     <span className="flex items-center group-hover:pr-2 font-medium text-[15px] transition-all duration-300">View Project</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 w-5 h-5" aria-hidden="true">
//                         <path d="m9 18 6-6-6-6"></path>
//                     </svg>
//                 </button>
//             </div>
//         </Link>
//     );
// }

// export default function Portfolio() {
//     return (
//         <div className="bg-white dark:bg-[#1b1c26]">
//             <div className="w-full max-w-[53rem] flex flex-col pt-[58px] px-[1.5rem]  items-center gap-[25px] md:gap-[25px] mx-auto">
//                 <div className="flex items-center gap-2 mb-8">
//                     <h2 className="text-[32px] text-center font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white/90"><i>Johnson's</i> Portfolio.</h2>
//                 </div>
//                 <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//                     {defaultPortfolioItems.slice(0, 3).map((item) => (
//                         <PortfolioEntry
//                             key={item.slug}
//                             link={`/portfolio/${item.slug}`}
//                             title={item.title || ""}
//                             description={item.description || ""}
//                             imageSrc={item.mock_up || ""}
//                         />
//                     ))}
//                     <div className="col-span-2 w-full">
//                         <Link href="/portfolio">
//                             <button className="mt-4 mx-auto bg-[#000] hover:bg-[#121212] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-white text-start no-underline transition-all duration-500 group cursor-pointer">
//                                 <span className="flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300">View All</span>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 w-5 h-5" aria-hidden="true">
//                                     <path d="m9 18 6-6-6-6"></path>
//                                 </svg>
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { defaultPortfolioItems } from "@/app/portfolio/[slug]/portfolio";

// const services = [
//   {
//     number: "01",
//     icon: "fa-server",
//     title: "IT Infrastructure Management",
//     description:
//       "Designing, deploying, and managing robust IT infrastructure that keeps businesses running at peak performance — from servers and storage to cloud environments.",
//     side: "left",
//   },
//   {
//     number: "02",
//     icon: "fa-shield-halved",
//     title: "Cybersecurity & Risk Management",
//     description:
//       "Protecting organisations from evolving cyber threats through risk assessments, security audits, policy development, and proactive defence strategies.",
//     side: "right",
//   },
//   {
//     number: "03",
//     icon: "fa-network-wired",
//     title: "Networking & Connectivity",
//     description:
//       "Planning and implementing reliable, secure, and scalable network architectures — LAN, WAN, VPN, and wireless solutions tailored to business needs.",
//     side: "left",
//   },
//   {
//     number: "04",
//     icon: "fa-headset",
//     title: "IT Service Management (ITSM)",
//     description:
//       "Delivering structured IT service frameworks that align technology operations with business goals, reducing downtime and improving service quality.",
//     side: "right",
//   },
//   {
//     number: "05",
//     icon: "fa-arrows-rotate",
//     title: "Digital Transformation",
//     description:
//       "Guiding organisations through technology-driven change — from legacy system migration to cloud adoption and process automation.",
//     side: "left",
//   },
//   {
//     number: "06",
//     icon: "fa-laptop-code",
//     title: "Managed IT Services",
//     description:
//       "Providing end-to-end managed services so businesses can focus on growth while we handle monitoring, maintenance, and support.",
//     side: "right",
//   },
//   {
//     number: "07",
//     icon: "fa-chart-line",
//     title: "Technology Consulting",
//     description:
//       "Offering strategic technology advisory that helps executives make informed IT investment decisions aligned with long-term business objectives.",
//     side: "left",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-white dark:bg-[#090f1e] pt-32 pb-24 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* ── Page Header ── */}
//         <div className="mb-20">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="block w-7 h-px bg-blue-600" />
//             <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
//               What I Offer
//             </span>
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-4">
//             Services &amp; <span className="text-blue-400">Expertise</span>
//           </h1>
//           <p className="text-[16px] text-[#5a5a5a] dark:text-white/60 max-w-xl leading-relaxed">
//             From infrastructure design to digital transformation, I partner with
//             organisations to deliver technology that works — reliably, securely,
//             and strategically.
//           </p>
//         </div>

//         {/* ── Zigzag Timeline — shared on both mobile & desktop ── */}
//         <div className="relative mb-28">
//           {/* Center vertical line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-900/40 dark:bg-blue-800/30 -translate-x-1/2" />

//           <div className="flex flex-col">
//             {services.map((service) => (
//               <div
//                 key={service.number}
//                 className={`relative flex items-center min-h-[140px] ${
//                   service.side === "left" ? "flex-row" : "flex-row-reverse"
//                 }`}
//               >
//                 {/* Card */}
//                 <div
//                   className={`w-[44%] py-4 ${
//                     service.side === "left" ? "pr-6" : "pl-6"
//                   }`}
//                 >
//                   <div className="group border border-black/10 dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:border-blue-400/40 hover:bg-blue-600/[0.03] transition-all duration-300 rounded-2xl p-4 md:p-5">
//                     {/* Icon row */}
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center flex-shrink-0">
//                         <i
//                           className={`fa-solid ${service.icon} text-blue-400 text-xs`}
//                         />
//                       </div>
//                       <span className="text-[10px] font-mono text-blue-400/50 tracking-widest">
//                         {service.number}
//                       </span>
//                     </div>
//                     <h3 className="text-[13px] md:text-[15px] font-semibold text-black dark:text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <p className="text-[11px] md:text-[13px] leading-relaxed text-[#5a5a5a] dark:text-white/50 hidden md:block">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Center dot */}
//                 <div className="w-[12%] flex justify-center items-center relative z-10">
//                   <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-[#090f1e]" />
//                 </div>

//                 {/* Spacer */}
//                 <div className="w-[44%]" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── Divider ── */}
//         <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-20" />

//         {/* ── Client Engagements ── */}
//         <div className="mb-12">
//           <div className="flex items-center gap-3 mb-4">
//             <span className="block w-7 h-px bg-blue-600" />
//             <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
//               Client Engagements
//             </span>
//           </div>
//           <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
//             Work Delivered
//           </h2>
//           <p className="text-[15px] text-[#5a5a5a] dark:text-white/60 max-w-xl leading-relaxed">
//             A selection of organisations I have partnered with through Jowis
//             Studio to deliver technology solutions that drive real results.
//           </p>
//         </div>

//         {/* Engagement Cards */}
//         <div className="flex flex-col gap-6">
//           {defaultPortfolioItems.map((item) => (
//             <Link
//               key={item.slug}
//               href={`/portfolio/${item.slug}`}
//               className="group rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-blue-400/30 transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
//             >
//               {/* Image */}
//               <div className="relative w-full md:w-[280px] h-[200px] md:h-[220px] flex-shrink-0">
//                 <Image
//                   src={item.mock_up || ""}
//                   alt={item.title || ""}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col justify-between p-6 md:p-8 gap-4 flex-1">
//                 <div className="flex flex-col gap-3">
//                   <div className="flex flex-wrap gap-2">
//                     <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 border border-blue-600/20">
//                       {item.type}
//                     </span>
//                     <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[#5a5a5a] dark:text-white/50 border border-black/10 dark:border-white/10">
//                       {item.date}
//                     </span>
//                     <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[#5a5a5a] dark:text-white/50 border border-black/10 dark:border-white/10">
//                       {item.client}
//                     </span>
//                   </div>
//                   <h3 className="text-lg md:text-xl font-bold text-black dark:text-white leading-snug">
//                     {item.title}
//                   </h3>
//                   <p className="text-[14px] leading-relaxed text-[#5a5a5a] dark:text-white/50 line-clamp-3">
//                     {item.description}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
//                   View Engagement
//                   <i className="fa-solid fa-arrow-right text-xs" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { defaultPortfolioItems } from "@/app/portfolio/[slug]/portfolio";

const services = [
  {
    number: "01",
    icon: "fa-server",
    title: "IT Infrastructure Management",
    description:
      "Designing, deploying, and managing robust IT infrastructure that keeps businesses running at peak performance — from servers and storage to cloud environments.",
    side: "left",
  },
  {
    number: "02",
    icon: "fa-shield-halved",
    title: "Cybersecurity & Risk Management",
    description:
      "Protecting organisations from evolving cyber threats through risk assessments, security audits, policy development, and proactive defence strategies.",
    side: "right",
  },
  {
    number: "03",
    icon: "fa-network-wired",
    title: "Networking & Connectivity",
    description:
      "Planning and implementing reliable, secure, and scalable network architectures — LAN, WAN, VPN, and wireless solutions tailored to business needs.",
    side: "left",
  },
  {
    number: "04",
    icon: "fa-headset",
    title: "IT Service Management (ITSM)",
    description:
      "Delivering structured IT service frameworks that align technology operations with business goals, reducing downtime and improving service quality.",
    side: "right",
  },
  {
    number: "05",
    icon: "fa-arrows-rotate",
    title: "Digital Transformation",
    description:
      "Guiding organisations through technology-driven change — from legacy system migration to cloud adoption and process automation.",
    side: "left",
  },
  {
    number: "06",
    icon: "fa-laptop-code",
    title: "Managed IT Services",
    description:
      "Providing end-to-end managed services so businesses can focus on growth while we handle monitoring, maintenance, and support.",
    side: "right",
  },
  {
    number: "07",
    icon: "fa-chart-line",
    title: "Technology Consulting",
    description:
      "Offering strategic technology advisory that helps executives make informed IT investment decisions aligned with long-term business objectives.",
    side: "left",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#090f1e] pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* ── Page Header ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-px bg-blue-600" />
            <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
              What I Offer
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-4">
            Services &amp; <span className="text-blue-400">Expertise</span>
          </h1>
          <p className="text-[16px] text-[#5a5a5a] dark:text-white/60 max-w-xl leading-relaxed">
            From infrastructure design to digital transformation, I partner with
            organisations to deliver technology that works — reliably, securely,
            and strategically.
          </p>
        </div>

        {/* ── Zigzag Timeline ── */}
        <div className="relative mb-28">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-900/40 dark:bg-blue-800/30 -translate-x-1/2" />
          <div className="flex flex-col">
            {services.map((service) => (
              <div
                key={service.number}
                className={`relative flex items-center min-h-[140px] ${
                  service.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-[44%] py-4 ${service.side === "left" ? "pr-6" : "pl-6"}`}
                >
                  <div className="group border border-black/10 dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:border-blue-400/40 hover:bg-blue-600/[0.03] transition-all duration-300 rounded-2xl p-4 md:p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <i
                          className={`fa-solid ${service.icon} text-blue-400 text-xs`}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-blue-400/50 tracking-widest">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-[13px] md:text-[15px] font-semibold text-black dark:text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[11px] md:text-[13px] leading-relaxed text-[#5a5a5a] dark:text-white/50 hidden md:block">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="w-[12%] flex justify-center items-center relative z-10">
                  <div className="w-3 h-3 rounded-full bg-blue-600 border-2 border-white dark:border-[#090f1e]" />
                </div>

                {/* Spacer */}
                <div className="w-[44%]" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-20" />

        {/* ── Client Engagements ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-px bg-blue-600" />
            <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
              Client Engagements
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
            Work Delivered
          </h2>
          <p className="text-[15px] text-[#5a5a5a] dark:text-white/60 max-w-xl leading-relaxed">
            A selection of organisations I have partnered with through Jowis
            Studio to deliver technology solutions that drive real results.
          </p>
        </div>

        {/* Engagement Cards */}
        <div className="flex flex-col gap-6">
          {defaultPortfolioItems.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-blue-400/30 transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image — plain img tag so browser fetches directly, bypassing Vercel */}
              <div className="relative w-full md:w-[280px] h-[200px] md:h-[220px] flex-shrink-0 overflow-hidden">
                <img
                  src={item.mock_up || ""}
                  alt={item.title || ""}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-6 md:p-8 gap-4 flex-1">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 border border-blue-600/20">
                      {item.type}
                    </span>
                    {/* <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[#5a5a5a] dark:text-white/50 border border-black/10 dark:border-white/10">
                      {item.date}
                    </span> */}
                    <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[#5a5a5a] dark:text-white/50 border border-black/10 dark:border-white/10">
                      {item.client}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#5a5a5a] dark:text-white/50 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  View Engagement
                  <i className="fa-solid fa-arrow-right text-xs" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
