"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicConsentModalProps {
    onChoice?: (choice: boolean) => void;
}

export const MusicConsentModal: React.FC<MusicConsentModalProps> = ({ onChoice }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);

    useEffect(() => {
        const hasChosenMusic = localStorage.getItem('musicChoice');
        if (!hasChosenMusic) {
            setTimeout(() => setOpen(true), 500);
        }
    }, []);

    const handleChoice = (choice: 'yes' | 'no') => {
        setSelectedOption(choice);
        const soundEnabled = choice === 'yes';

        localStorage.setItem('musicChoice', choice);
        onChoice?.(soundEnabled);

        setTimeout(() => {
            setOpen(false);
        }, 400);
    };

    return (
        <>
            <style>{`
        .liquidGlass-wrapper {
          color: #000;
          cursor: pointer;
          font-weight: 600;
          transition: all .4s cubic-bezier(.175, .885, .32, 2.2);
          display: flex;
          position: relative;
          overflow: hidden;
        }
        .liquidGlass-effect {
          z-index: 0;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          filter: url(#glass-distortion);
          isolation: isolate;
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .liquidGlass-tint {
          z-index: 1;
          background: #ffffff40;
          position: absolute;
          inset: 0;
        }
        .liquidGlass-shine {
          z-index: 2;
          position: absolute;
          inset: 0;
          overflow: hidden;
          box-shadow: inset 2px 2px 1px #ffffff80, inset -1px -1px 1px 1px #ffffff80;
        }
        .liquidGlass-text {
          z-index: 3;
          color: #000;
        }
        
        .liquidGlass-wrapper:hover {
          transform: translateY(-2px);
        }
        
        .liquidGlass-wrapper:active {
          transform: translateY(0);
        }
      `}</style>

            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <filter id="glass-distortion">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.01 0.003"
                            numOctaves="1"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="8"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md border-white/60">
                    <DialogHeader className="space-y-3">
                        <div className="mx-auto bg-purple-100 p-3 rounded-full w-fit">
                            <Music className="w-8 h-8 text-purple-600" />
                        </div>

                        <DialogTitle className="text-xl font-semibold text-center">
                            Enable Music?
                        </DialogTitle>

                        <DialogDescription className="text-center text-gray-600">
                            Would you like background music and sound effects?
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => handleChoice('yes')}
                            className="liquidGlass-wrapper flex-1 rounded-lg px-4 py-3 border-2 border-white/60"
                            style={{
                                background: selectedOption === 'yes'
                                    ? 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
                                    : 'transparent'
                            }}
                        >
                            <div className="liquidGlass-effect rounded-lg" />
                            <div className="liquidGlass-tint rounded-lg" />
                            <div className="liquidGlass-shine rounded-lg" />
                            <div className="liquidGlass-text w-full flex items-center justify-center gap-2">
                                <Volume2 className="w-4 h-4" />
                                <span>Yes</span>
                            </div>
                        </button>

                        <button
                            onClick={() => handleChoice('no')}
                            className="liquidGlass-wrapper flex-1 rounded-lg px-4 py-3 border-2 border-white/60"
                            style={{
                                background: selectedOption === 'no'
                                    ? 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)'
                                    : 'transparent'
                            }}
                        >
                            <div className="liquidGlass-effect rounded-lg" />
                            <div className="liquidGlass-tint rounded-lg" />
                            <div className="liquidGlass-shine rounded-lg" />
                            <div className="liquidGlass-text w-full flex items-center justify-center gap-2">
                                <VolumeX className="w-4 h-4" />
                                <span>No</span>
                            </div>
                        </button>
                    </div>

                    {/* <p className="text-xs text-center text-gray-500 mt-3">
                        You can change this later in settings
                    </p> */}
                </DialogContent>
            </Dialog>
        </>
    );
};