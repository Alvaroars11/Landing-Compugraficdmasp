import { useEffect, useRef, useState } from 'react';

// Reusable animated marquee banner — infinite loop without jumps
// Uses ResizeObserver to measure exact track width for pixel-perfect looping
export const MarqueeBanner = ({ items, variant = 'cg' }) => {
  const isDP = variant === 'dp';
  const bannerClass = isDP ? 'dp-marquee-banner' : 'marquee-banner';
  const contentClass = isDP ? 'dp-marquee-content' : 'marquee-content';
  const itemClass = isDP ? 'dp-marquee-item' : 'marquee-item';
  const keyPrefix = isDP ? 'dp-marquee' : 'cg-marquee';

  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      // Use Math.round to keep it pixel-aligned and avoid sub-pixel jumps
      setTrackWidth(Math.round(entry.contentRect.width));
    });
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const animationStyle = trackWidth
    ? { '--marquee-distance': `${trackWidth}px` }
    : { animation: 'none' };

  return (
    <div className={bannerClass}>
      <div className={contentClass} style={animationStyle}>
        {['a', 'b'].map((id, i) => (
          <div
            key={`${keyPrefix}-${id}`}
            className="marquee-track"
            ref={i === 0 ? trackRef : null}
            aria-hidden={i === 1}
          >
            {items.map((text, idx) => (
              <span key={`${keyPrefix}-${id}-${idx}`} className={itemClass}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
