'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomScrollbar() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [windowHeight, setWindowHeight] = useState(0);

    // Initialize window height on mount
    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll Animation State
    const [isScrollingState, setIsScrollingState] = useState(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Update scroll progress and handle animation state
    useEffect(() => {
        const handleScroll = () => {
            // Set scrolling state
            setIsScrollingState(true);

            // Clear existing timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Set timeout to stop scrolling animation
            scrollTimeout.current = setTimeout(() => {
                setIsScrollingState(false);
            }, 150);

            if (!isDragging) {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                // Avoid division by zero
                if (totalHeight <= 0) return;

                const progress = window.scrollY / totalHeight;
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, [isDragging]);

    // Handle Dragging
    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            setIsScrollingState(true); // Animate while dragging

            let newProgress = e.clientY / windowHeight;
            newProgress = Math.min(Math.max(newProgress, 0), 1);

            setScrollProgress(newProgress);

            const totalHeight = document.documentElement.scrollHeight - windowHeight;
            window.scrollTo(0, newProgress * totalHeight);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setIsScrollingState(false);
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, windowHeight]);

    const startDrag = (e: React.MouseEvent) => {
        setIsDragging(true);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };

    // Thumb height constant for calculation (includes skater + oval)
    const thumbHeight = 140;
    // Calculate translateY position. Ensure it stays within bounds [0, windowHeight - thumbHeight]
    // We use inline style for performance
    const translateY = scrollProgress * (windowHeight - thumbHeight - 20); // 20px bottom buffer

    if (windowHeight === 0) return null; // Don't render until client-side hydration

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '50px', // Increased hit area width
                height: '100vh',
                zIndex: 9999,
                pointerEvents: 'none', // Allow clicks through the track
            }}
        >
            {/* Draggable Thumb Wrapper */}
            <div
                onMouseDown={startDrag}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '5px',
                    width: '40px', // Width to fit bigger skater
                    height: `${thumbHeight}px`,
                    transform: `translateY(${translateY}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                    cursor: 'grab',
                    pointerEvents: 'auto', // Capture events on thumb
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '5px', // Space between skater and oval
                }}
            >
                {/* Visual Child 1: Bigger Skater Sprite (Outside Oval) */}
                <div className={`skater-sprite ${isScrollingState ? 'scrolling' : ''}`} />

                {/* Visual Child 2: The Oval Highlight with Text */}
                <div style={{
                    width: '24px', // Original width
                    height: '80px', // Original height for text area
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1.5px solid #ffb700',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                }}>
                    <span style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                        color: '#fff',
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        letterSpacing: '0.15em',
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                    }}>
                        SKATECLUB
                    </span>
                </div>
            </div>
        </div>
    );
}
