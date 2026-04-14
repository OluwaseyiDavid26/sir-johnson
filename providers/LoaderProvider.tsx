"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";

type LoaderContextType = {
    showLoader: (msg?: string) => void;
    hideLoader: () => void;
    isLoading: boolean;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const showLoader = (msg = "Loading...") => {
        setMessage(msg);
        setIsLoading(true);
    };

    const hideLoader = () => {
        setMessage("");
        setIsLoading(false);
    };

    // Auto-show loader whenever route changes
    useEffect(() => {
        showLoader("Loading page...");
        const timeout = setTimeout(() => hideLoader(), 250);
        return () => clearTimeout(timeout);
    }, [pathname, searchParams]);

    return (
        <LoaderContext.Provider value={{ showLoader, hideLoader, isLoading }}>
            {children}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4 bg-whit rounded-2xl p-8 shadow-2xl">
                        <ClipLoader color="#3b82f6" size={50} speedMultiplier={0.8} />
                        {message && <p className="text-gray-700 font-medium">{message}</p>}
                    </div>
                </div>
            )}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error("useLoader must be used within a LoaderProvider");
    }
    return context;
};
