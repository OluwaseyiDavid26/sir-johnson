// "use client";

// export default function About() {
//     return (
//         <>
//             <div className="flex items-center py-12 justify-center w-full bg-white dark:bg-[#1b1c26]">
//                 <div className="relative w-full max-w-[500px] h-[400px] group">
//                     {/* First Polaroid - Left */}
//                     <div className="absolute top-8 left-[5%] bg-white px-2 pt-2 pb-3 rotate-[-15deg] shadow-xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[-18deg] group-hover:translate-y-[-10px] group-hover:translate-x-[-50px] group-hover:scale-105 z-10">
//                         <img
//                             alt="About image 1"
//                             loading="lazy"
//                             width={180}
//                             height={180}
//                             decoding="async"
//                             className="object-cover object-top rounded-sm w-[180px] h-[180px]"
//                             src="/images/johnson1.jpg"
//                         />
//                         <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
//                             @johnsonayanda
//                         </span>
//                     </div>

//                     {/* Second Polaroid - Center */}
//                     <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-2 pt-2 pb-3 rotate-[8deg] shadow-2xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[10deg] group-hover:translate-y-[-15px] group-hover:scale-110 z-20">
//                         <img
//                             alt="About image 2"
//                             loading="lazy"
//                             width={200}
//                             height={200}
//                             decoding="async"
//                             className="object-cover object-top rounded-sm w-[200px] h-[200px]"
//                             src="/images/johnson2.jpg"
//                         />
//                         <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
//                             @johnsonayanda
//                         </span>
//                     </div>

//                     {/* Third Polaroid - Right */}
//                     <div className="absolute top-12 right-[5%] bg-white px-2 pt-2 pb-3 rotate-[12deg] shadow-xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[15deg] group-hover:translate-y-[-10px] group-hover:translate-x-[50px] group-hover:scale-105 z-10">
//                         <img
//                             alt="About image 3"
//                             loading="lazy"
//                             width={180}
//                             height={180}
//                             decoding="async"
//                             className="object-cover object-top rounded-sm w-[180px] h-[180px]"
//                             src="/images/johnson3.jpg"
//                         />
//                         <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
//                             @johnsonayanda
//                         </span>
//                     </div>
//                 </div>

//                 <style jsx>{`
//                 .font-handwriting {
//                     font-family: 'Caveat', 'Comic Sans MS', cursive;
//                 }
//             `}</style>
//             </div>
//             <div className="bg-white dark:bg-[#1b1c26]">
//                 <div
//                     className="w-full max-w-[53rem] mx-auto p-6 flex flex-col pb-[100px] md:py-[158px] px-[1.5rem] md:px-[8rem] items-start gap-[25px] bg-white dark:bg-[#1b1c26]"
//                     style={{ opacity: 1, transform: "none" }}
//                 >
//                     <h2
//                         className="text-[25px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white/90"
//                         style={{ opacity: 1, transform: "none" }}
//                     >
//                         About
//                     </h2>

//                     <div className="flex flex-col gap-6" style={{ opacity: 1, transform: "none" }}>
//                         <p
//                             className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
//                             style={{ opacity: 1, transform: "none" }}
//                         >
//                             Being the Director of Jowis Studio, I am passionate about creating technology-based solutions that will enable business and individuals to prosper in a computerized world.
//                         </p>

//                         <p
//                             className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
//                             style={{ opacity: 1, transform: "none" }}
//                         >
//                             We do not only build products at Jowis, but possibilities that will initiate growth, inspire innovation, and make a lasting impact. All our projects are the expression of the idea that technology can make life easier, smarter, and more connected.
//                         </p>

//                         <p
//                             className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
//                             style={{ opacity: 1, transform: "none" }}
//                         >
//                             Outside of work, I strongly believe in purpose and faith. I enjoy giving people knowledge, motivating and assisting others in discovering their personal life paths. Otherwise, when I am not busy in tech or mentoring, you are likely to find me in a football field having a wonderful game, not in a professional way, just because I love it.
//                         </p>
//                         <p
//                             className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
//                             style={{ opacity: 1, transform: "none" }}
//                         >
//                             To me, life is all about balance, which means faith, purpose, impact and some football on the side.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

"use client";

export default function About() {
  return (
    <section className="w-full bg-white dark:bg-[#090f1e] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-7 h-px bg-blue-600" />
          <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
            About
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-14 leading-tight">
          The Person Behind <br className="hidden md:block" />
          <span className="text-blue-400">the Strategy</span>
        </h2>

        {/* Two-column content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left col */}
          <div className="flex flex-col gap-5">
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              As the Director &amp; CEO of{" "}
              <a
                href="https://www.jowistudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Jowis Studio
              </a>
              , Johnson Ayanda is driven by one core belief — that technology,
              when properly aligned with business objectives, becomes an
              unstoppable force for growth.
            </p>
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              He partners with organisations to design, manage, and optimise
              their IT ecosystems — from infrastructure and cybersecurity to
              service delivery and digital transformation. His approach is
              methodical, people-first, and always outcome-driven.
            </p>
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              At Jowis Studio, the mission goes beyond building products. It is
              about creating possibilities that initiate growth, inspire
              innovation, and leave a lasting impact on every organisation
              served.
            </p>
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-5">
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              Johnson brings a rare combination of technical depth and executive
              clarity. He does not just solve IT problems — he translates
              complex infrastructure challenges into clear business language,
              enabling leaders to make confident, informed decisions.
            </p>
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              Outside the boardroom and server rooms, Johnson is a man of faith
              and purpose. He is passionate about mentorship, helping people
              find clarity in their personal and professional journeys.
            </p>
            <p className="text-[16px] leading-relaxed text-[#5a5a5a] dark:text-white/70">
              To him, life is about balance — faith, purpose, impact, and a good
              game of football on the side.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 dark:bg-white/10 mb-14" />

        {/* Life Outside Work */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-px bg-blue-600" />
            <span className="text-xs tracking-widest text-blue-400 font-mono uppercase">
              Life Outside Work
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-10">
            More Than an IT Consultant
          </h3>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: "fa-cross",
              label: "Gospel Preacher",
              desc: "Sharing faith and purpose with those who will listen.",
            },
            {
              icon: "fa-hand-holding-heart",
              label: "Counsellor",
              desc: "Helping people navigate life's challenges with clarity.",
            },
            {
              icon: "fa-futbol",
              label: "Football",
              desc: "Not professional — just pure love for the beautiful game.",
            },
            {
              icon: "fa-gamepad",
              label: "Gaming",
              desc: "Unwinding with a good game after a long week.",
            },
          ].map((hobby) => (
            <div
              key={hobby.label}
              className="rounded-2xl p-5 flex flex-col gap-3 border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center">
                <i className={`fa-solid ${hobby.icon} text-blue-400 text-sm`} />
              </div>
              <p className="text-sm font-semibold text-black dark:text-white">
                {hobby.label}
              </p>
              <p className="text-xs leading-relaxed text-[#5a5a5a] dark:text-white/50">
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
