import Link from "next/link";

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Plätze", href: "#plaetze" },
  { label: "Training", href: "#training" },
  { label: "Mitgliedschaft", href: "#mitgliedschaft" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060F09] py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2D7A4F] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                  TCI
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
                  TENNISCLUB
                </p>
                <p className="text-[#2D7A4F] text-xs tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
                  ISERLOHN
                </p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
              Wo Tennis zur Leidenschaft wird. Direkt am Seilersee in Iserlohn.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#7ECFA0] text-xs tracking-widest uppercase mb-4 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#7ECFA0] text-xs tracking-widest uppercase mb-4 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              Kontakt
            </p>
            <address className="not-italic space-y-2">
              <p className="text-white/40 text-sm" style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}>
                Seilerblick 24<br />58636 Iserlohn
              </p>
              <a
                href="tel:+4923712336"
                className="block text-white/40 text-sm hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                02371 23366
              </a>
              <a
                href="mailto:info@tc-iserlohn.de"
                className="block text-white/40 text-sm hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                info@tc-iserlohn.de
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Tennisclub Iserlohn e.V. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/10 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            Impressum · Datenschutz
          </p>
        </div>
      </div>
    </footer>
  );
}
