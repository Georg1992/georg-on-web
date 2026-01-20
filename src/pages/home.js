import React, { useState, useEffect } from "react";
import Graphics from "../components/graphics";

const HOME = () => {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [glitch, setGlitch] = useState(false);
    const fullText = "> SYSTEM_STATUS: UNDER_CONSTRUCTION // ACCESS_CV: GRANTED_";
    
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 40);

        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        // Random glitch effect
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.95) {
                setGlitch(true);
                setTimeout(() => setGlitch(false), 100);
            }
        }, 2000);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div className="graphic-container" style={{ 
            position: 'relative', 
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
            overflow: 'hidden'
        }}>
            {/* Scanlines effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
                pointerEvents: 'none',
                zIndex: 2
            }}></div>
            
            <div style={{ 
                position: 'relative', 
                zIndex: 1,
                paddingTop: '20vh'
            }}>
                <div className="justify-content-center text-center lead" 
                     style={{ 
                         fontFamily: '"Courier New", monospace',
                         fontSize: '1.8rem',
                         fontWeight: 'bold',
                         color: '#ff0055',
                         textShadow: glitch 
                            ? '2px 2px #00ffff, -2px -2px #ff00ff' 
                            : '0 0 20px #ff0055, 0 0 40px #ff0055',
                         padding: '30px',
                         backgroundColor: 'rgba(0, 0, 0, 0.9)',
                         border: '3px solid #ff0055',
                         borderImage: 'linear-gradient(45deg, #ff0055, #00ffff, #ff00ff) 1',
                         clipPath: 'polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)',
                         maxWidth: '900px',
                         margin: '0 auto',
                         transform: glitch ? 'translate(5px, 2px) skew(2deg)' : 'none',
                         transition: 'transform 0.05s'
                     }}>
                    <div style={{
                        letterSpacing: '2px',
                        position: 'relative'
                    }}>
                        {displayText}
                        <span style={{ 
                            opacity: showCursor ? 1 : 0,
                            color: '#00ffff'
                        }}>█</span>
                    </div>
                </div>
                
                <div style={{ marginTop: '80px' }}>
                    <Graphics />
                </div>
            </div>
        </div>
    );
};

export default HOME;