"use client";
import Image from "next/image";
import Link from "next/link";
import { defaultPortfolioItems } from "@/app/portfolio/[slug]/portfolio";

export function PortfolioEntry({
    link, title, description, imageSrc
}: {
    link: string;
    title: string;
    description: string;
    imageSrc: string;
}) {
    return (
        <Link href={link} className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#0000001a] relative transition-all" style={{ boxShadow: "inset 0px 3px 0px 0px rgb(255, 255, 255)" }}>
            <div className="px-5 pt-5 pb-4 rounded-[20px] group">
                <div className="relative w-full h-[350px] rounded-[20px] overflow-hidden">
                    <Image
                        alt={title}
                        src={imageSrc}
                        width={800}
                        height={600}
                        decoding="async"
                        data-nimg="1"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        style={{ color: "transparent" }}
                    />
                </div>
            </div>
            <div className="px-7 pb-7">
                <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
                <p className="text-[#5a5a5a] text-[16px] line-clamp-2">{description}</p>
                <button className="mt-5 bg-[#f2f2f2] hover:bg-[#e5e5e5] flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-black text-start no-underline transition-all duration-500 group">
                    <span className="flex items-center group-hover:pr-2 font-medium text-[15px] transition-all duration-300">View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 w-5 h-5" aria-hidden="true">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </div>
        </Link>
    );
}


export default function Page() {
    return (
        <div className="bg-white dark:bg-[#1b1c26] pt-30 pb-30">
            <div className="w-full max-w-[53rem] flex flex-col pt-[58px] px-[1.5rem]  items-center gap-[25px] md:gap-[25px] mx-auto">
                <div className="flex items-center gap-2 mb-8">
                    <h2 className="text-[32px] text-center font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white/90"><i>Johnson's</i> Portfolio.</h2>
                </div>
                <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {defaultPortfolioItems.map((item) => (
                        <PortfolioEntry
                            key={item.slug}
                            link={`/portfolio/${item.slug}`}
                            title={item.title || ""}
                            description={item.description || ""}
                            imageSrc={item.mock_up || ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}