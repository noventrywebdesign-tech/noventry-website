// Fills its parent with a real photo or a muted looping video — this project
// ships only real sourced photography/video, never a placeholder-labeled box.
// Tailwind generates `.relative` after `.absolute` in its utility layer, so on
// any single element `.relative` always wins the cascade regardless of which
// one appears later in a className string — a caller passing `absolute
// inset-0` would silently get pushed back into normal flow if this component
// hardcoded `relative` unconditionally. Detect the caller's own position
// utility first and only fall back to `relative` when none was supplied.
type MediaProps = {
  alt: string;
  className?: string;
  src?: string;
  videoSrc?: string;
  poster?: string;
  priority?: boolean;
};

function positionClass(className: string) {
  return /\b(absolute|fixed|sticky|static)\b/.test(className) ? "" : "relative";
}

export default function Media({ alt, className = "", src, videoSrc, poster, priority = false }: MediaProps) {
  const position = positionClass(className);

  if (videoSrc) {
    return (
      <div className={`${position} overflow-hidden bg-char-800 ${className}`}>
        <video
          src={videoSrc}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          className="h-full w-full object-cover"
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className={`${position} overflow-hidden bg-char-800 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export with images.unoptimized; a plain <img> avoids the next/image loader entirely. */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
