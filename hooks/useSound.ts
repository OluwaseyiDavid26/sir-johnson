import { useSettingsStore } from "@/store/useSettingsStore";
import { useEffect, useRef } from "react";

// Global singleton audio instance outside the hook
let globalBgMusic: HTMLAudioElement | null = null;
let isInitialized = false;

const initializeGlobalMusic = () => {
    if (!isInitialized) {
        globalBgMusic = new Audio("/music/bg-music.mp3");
        globalBgMusic.loop = true;
        globalBgMusic.volume = 0.3;
        isInitialized = true;
    }
    return globalBgMusic;
};

/**
 * Custom hook for handling app sounds.
 * Relies on Zustand store for sound toggle state.
 */
export const useSound = () => {
    const isSoundOn = useSettingsStore((state) => state.isSoundOn);
    const componentMountedRef = useRef(false);

    // Initialize global music once
    useEffect(() => {
        componentMountedRef.current = true;
        initializeGlobalMusic();

        return () => {
            componentMountedRef.current = false;
        };
    }, []);

    // Handle sound toggle changes for background music
    useEffect(() => {
        const bgMusic = initializeGlobalMusic();

        if (isSoundOn) {
            bgMusic.play().catch((error: unknown) =>
                console.error("Error playing background music:", error)
            );
        } else {
            bgMusic.pause();
        }
    }, [isSoundOn]);

    const playSound = (soundFile: string, volume: number = 0.5): void => {
        if (!isSoundOn) return;
        try {
            const audio = new Audio(soundFile);
            audio.volume = volume;
            audio
                .play()
                .catch((error: unknown) => console.error("Error playing sound:", error));
        } catch (error) {
            console.error("Error creating audio:", error);
        }
    };

    const playClickSound = (): void => {
        playSound("/sounds/click.mp3", 0.3);
    };

    const playHoverSound = (): void => {
        playSound("/sounds/hover.mp3", 0.2);
    };

    const playToggleSound = (): void => {
        playSound("/sounds/toggle.mp3", 0.4);
    };

    const playBackgroundMusic = (): void => {
        if (globalBgMusic && isSoundOn) {
            globalBgMusic.play().catch((error: unknown) =>
                console.error("Error playing background music:", error)
            );
        }
    };

    const pauseBackgroundMusic = (): void => {
        if (globalBgMusic) {
            globalBgMusic.pause();
        }
    };

    const setBackgroundMusicVolume = (volume: number): void => {
        if (globalBgMusic) {
            globalBgMusic.volume = Math.max(0, Math.min(1, volume));
        }
    };

    return {
        playSound,
        playClickSound,
        playHoverSound,
        playToggleSound,
        playBackgroundMusic,
        pauseBackgroundMusic,
        setBackgroundMusicVolume,
        isSoundOn,
    };
};