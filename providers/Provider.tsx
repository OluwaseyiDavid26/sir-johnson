"use client";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { MusicConsentModal } from "@/components/ui/MusicConsentModal";
import { useSound } from "@/hooks/useSound";
import { useSettingsStore } from "@/store/useSettingsStore";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Provider({
    children,
}: PropsWithChildren & { children?: ReactNode }) {
    const { initializeTheme, setSound } = useSettingsStore();

    useEffect(() => {
        // Initialize theme
        initializeTheme();

        // Initialize AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });

        // Check if user has already made a music choice
        const musicChoice = localStorage.getItem('musicChoice');
        if (musicChoice) {
            setSound(musicChoice === 'yes');
        }
    }, [initializeTheme, setSound]);

    const handleMusicChoice = (soundEnabled: boolean) => {
        setSound(soundEnabled);
    };

    return (
        <>
            <MusicConsentModal onChoice={handleMusicChoice} />
            {children}
        </>
    );
}