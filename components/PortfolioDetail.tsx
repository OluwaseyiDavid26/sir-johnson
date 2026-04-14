"use client";
import Link from "next/link";
import { useSettingsStore } from "@/store/useSettingsStore";
import { PortfolioItemType } from "@/lib/types";


export default function PortfolioDetail({
    title,
    description,
    longer_description,
    link,
    stack,
    date,
    type,
    client,
    main_image,
    other_images,
    nextItem,
}: {
    title?: string;
    description?: string;
    longer_description?: string;
    link?: string;
    stack?: string[];
    date?: string;
    type?: string;
    client?: string;
    main_image?: string;
    other_images?: string[];
    nextItem?: PortfolioItemType | null;
}) {
    const { isDarkMode, toggleTheme } = useSettingsStore();

    return (
        <div className="relative">
            <div className={"fixed inset-0 z-10 opacity-100 " + (isDarkMode ? "bg-white/10" : "bg-white")}>
                <img
                    src="/images/backgrounds/net.svg"
                    alt=""
                    className="w-full min-h-screen object-cover"
                />
            </div>
            <div className="w-full max-w-[53rem] p-6 flex flex-col py-[8rem] md:py-[12rem] items-center gap-[25px] mx-auto z-20">
                <div className="w-full max-w-[75rem] mx-auto md:px-6 m:py-12 z-20" style={{ opacity: 1, transform: "none" }}>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[32px] md:text-[42px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white/90">
                                {title || "Project Title"}
                            </h1>
                            <p className="md:text-[18px] text-[#5a5a5a] dark:text-white/70">
                                {description || "Project description"}
                            </p>
                        </div>
                        <div className="gap-6 bg-[#fafafa] dark:bg-[#1b1c26] p-6 md:p-8 rounded-[20px] border-[1.5px] border-[#f2f2f2] dark:border-white/70">
                            <div className="prose max-w-none">
                                <h3 className="text-[16px] font-bold mb-1">Description</h3>
                                <p className="text-[16px] text-[#5a5a5a] dark:text-white/70 leading-relaxed">
                                    {longer_description || description || "Project description"}
                                </p>
                            </div>

                            {stack && stack.length > 0 && (
                                <>
                                    <div className="flex w-full h-[1px] bg-[#E5E5E5] my-[25px] md:my-[25px]"></div>
                                    <div>
                                        <h3 className="text-[16px] font-semibold my-2">Technologies</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {stack.map((tech, index) => (
                                                <span key={index} className="bg-[#e1f9dc] text-[#178d00] px-3 py-1 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {(date || type || client) && (
                                <>
                                    <div className="flex w-full h-[1px] bg-[#E5E5E5] my-[25px] md:my-[25px]"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">
                                        {date && (
                                            <div>
                                                <h3 className="text-[16px] font-semibold mb-2">Date</h3>
                                                <p className="text-[14px] text-[#5a5a5a] dark:text-white/70">{date}</p>
                                            </div>
                                        )}
                                        {type && (
                                            <div>
                                                <h3 className="text-[16px] font-semibold mb-2">Type</h3>
                                                <p className="text-[14px] text-[#5a5a5a] dark:text-white/70">{type}</p>
                                            </div>
                                        )}
                                        {client && (
                                            <div>
                                                <h3 className="text-[16px] font-semibold mb-2">Client</h3>
                                                <p className="text-[14px] text-[#5a5a5a] dark:text-white/70">{client}</p>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-0 justify-between items-center mb-2">
                            {link && (
                                <a target="_blank" rel="noopener noreferrer" href={link}>
                                    <button className="bg-black text-white flex items-center gap-2 px-6 py-3 rounded-[14px] hover:bg-[#121212] transition-all duration-300 cursor-pointer">
                                        <span>Visit Project</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-5 h-5" aria-hidden="true">
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14 21 3"></path>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        </svg>
                                    </button>
                                </a>
                            )}
                            {
                                nextItem && (
                                    <div className="flex gap-4">
                                        <Link href={`/portfolio/${nextItem.slug}`} key={nextItem.slug}>
                                            <button className="flex items-center gap-2 bg-[#f2f2f2] hover:bg-[#e5e5e5] dark:text-black px-6 py-3 rounded-[14px] transition-all duration-300 cursor-pointer">
                                                <span>Next</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5" aria-hidden="true">
                                                    <path d="m9 18 6-6-6-6"></path>
                                                </svg>
                                            </button>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>

                        {main_image && (
                            <div className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] bg-[#fafafa] dark:bg-white/10 dark:border-white/10 cursor-zoom-in" style={{ boxShadow: "inset 0px 3px 0px 0px rgb(255, 255, 255)" }}>
                                <div className="p-8">
                                    <div className="relative" style={{ filter: "drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.25))" }}>
                                        <img
                                            alt={title || "Project main image"}
                                            loading="lazy"
                                            width="1200"
                                            height="675"
                                            decoding="async"
                                            className="w-full rounded-[20px] object-cover"
                                            src={main_image}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {other_images && other_images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {other_images.map((image, index) => (
                                    <div key={index} className="rounded-[20px] overflow-hidden border-[1.5px] border-[#f2f2f2] bg-[#fafafa] cursor-zoom-in dark:bg-white/10 dark:border-white/10" style={{ boxShadow: "inset 0px 3px 0px 0px rgb(255, 255, 255)" }}>
                                        <div className="p-6">
                                            <img
                                                alt={`${title || "Project"} image ${index + 1}`}
                                                loading="lazy"
                                                width="600"
                                                height="400"
                                                decoding="async"
                                                className="rounded-[20px] w-full object-cover"
                                                src={image}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}