"use client";
import { useParams, notFound } from "next/navigation";
import { defaultPortfolioItems } from "./portfolio";
import PortfolioDetail from "@/components/PortfolioDetail";
import { PortfolioItemType } from "@/lib/types";

export default function PortfolioDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    let index = 0;
    let nextItem: PortfolioItemType | null = null;

    const portfolioItem = defaultPortfolioItems.find((item, i) => {
        index = i;
        return item.slug === slug;
    });

    if (!portfolioItem) {
        notFound();
    }

    nextItem = defaultPortfolioItems[(
        (index + 1) % defaultPortfolioItems.length
    )];

    return (
        <PortfolioDetail nextItem={nextItem} {...portfolioItem} />
    );
}
