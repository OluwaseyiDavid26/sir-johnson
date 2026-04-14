// store/useSettingsStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingsState {
    // persisted state
    isDarkMode: boolean;
    isSoundOn: boolean;

    // actions
    toggleTheme: () => void;
    toggleSound: () => void;
    setSound: (value: boolean) => void;
    initializeTheme: () => void;
}

/**
 * Settings store with persistence (localStorage).
 * Only `isDarkMode` and `isSoundOn` are persisted via `partialize`.
 */
export const useSettingsStore = create<SettingsState>()(
    persist<SettingsState>(
        (set, get) => ({
            // persisted primitives
            isDarkMode: false,
            isSoundOn: true,

            // toggle theme and apply class to <html> (guarded for SSR)
            toggleTheme: () => {
                const newMode = !get().isDarkMode;
                set({ isDarkMode: newMode });

                if (typeof window !== "undefined" && typeof document !== "undefined") {
                    if (newMode) {
                        document.documentElement.classList.add("dark");
                    } else {
                        document.documentElement.classList.remove("dark");
                    }
                }
            },

            // toggle sound
            toggleSound: () => {
                set({ isSoundOn: !get().isSoundOn });
            },

            // explicit setter for soundw
            setSound: (value: boolean) => {
                set({ isSoundOn: value });
            },

            // initializes theme on app load (safe for SSR)
            initializeTheme: () => {
                if (typeof window === "undefined" || typeof document === "undefined") return;
                const { isDarkMode } = get();
                if (isDarkMode) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            },
        }),
        {
            name: "settings-storage", // localStorage key
            // Persist only primitives (not functions) to storage
            partialize: (state) => ({
                isDarkMode: state.isDarkMode,
                isSoundOn: state.isSoundOn,
            }),
        }
    )
);
