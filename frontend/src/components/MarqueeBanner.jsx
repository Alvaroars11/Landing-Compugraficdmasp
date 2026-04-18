// Reusable animated marquee banner — infinite loop without jumps
export const MarqueeBanner = ({ items, variant = 'cg' }) => {
  const isDP = variant === 'dp';
  const bannerClass = isDP ? 'dp-marquee-banner' : 'marquee-banner';
  const contentClass = isDP ? 'dp-marquee-content' : 'marquee-content';
  const itemClass = isDP ? 'dp-marquee-item' : 'marquee-item';
  const keyPrefix = isDP ? 'dp-marquee' : 'cg-marquee';

  return (
    <div className={bannerClass}>
      <div className={contentClass}>
        {['a', 'b'].map((id, i) => (
          <div key={`${keyPrefix}-${id}`} className="marquee-track" aria-hidden={i === 1}>
            {items.map((text, idx) => (
              <span key={`${keyPrefix}-${id}-${idx}`} className={itemClass}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
