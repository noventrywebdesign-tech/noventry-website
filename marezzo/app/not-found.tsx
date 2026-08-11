import Media from "@/components/ui/Media";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-char-950 px-6 text-center">
      <div className="absolute inset-0">
        <Media videoSrc="/videos/fire-section.mp4" poster="/images/fire-poster.jpg" alt="" className="h-full w-full opacity-30" />
        <div className="cinematic-overlay" />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10">
        <p className="font-display text-[7rem] leading-none text-linen-50/10 md:text-[11rem]">404</p>
        <h1 className="-mt-6 font-display text-3xl leading-[1.15] text-linen-50 md:-mt-10 md:text-5xl">
          Dieses Feuer
          <br />
          <span className="italic text-copper-400">ist erloschen.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-sm text-linen-400">
          Die gesuchte Seite gibt es bei MAREZZO nicht — oder nicht mehr.
        </p>
        <a
          href="/"
          className="btn-sear mt-10 inline-flex items-center bg-sear-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-linen-50"
        >
          Zurück zu MAREZZO
        </a>
      </div>
    </section>
  );
}
