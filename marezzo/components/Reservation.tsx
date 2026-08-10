"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { restaurant } from "@/lib/restaurant-data";

type ReservationContextValue = {
  open: () => void;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx) throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
}

const GUEST_OPTIONS = ["2 Gäste", "3 Gäste", "4 Gäste", "5 Gäste", "6 Gäste", "7+ Gäste · Ember Room"];
const TIME_OPTIONS = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const open = useCallback(() => {
    setSubmitted(false);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <ReservationContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              aria-label="Reservierungsformular schließen"
              className="absolute inset-0 bg-char-950/85 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Tisch reservieren"
              className="relative grain max-h-[90vh] w-full max-w-lg overflow-y-auto border border-copper-500/25 bg-char-900 p-8 shadow-2xl md:p-12"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={close}
                aria-label="Schließen"
                className="absolute right-6 top-6 text-xs uppercase tracking-[0.2em] text-linen-400 transition-colors hover:text-copper-400"
              >
                Schließen ✕
              </button>

              {!submitted ? (
                <>
                  <p className="eyebrow mb-4">Reservierung</p>
                  <h2 className="font-display text-3xl text-linen-50 md:text-4xl">Ihr Tisch wartet.</h2>
                  <p className="mt-3 text-sm text-linen-400">
                    Eine Konzept-Demonstration — es wird keine echte Reservierung verarbeitet. In der Produktivversion
                    wäre dies an MAREZZOs Live-Buchungssystem angebunden.
                  </p>

                  <form
                    className="mt-8 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Personen</span>
                        <select required defaultValue="" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 focus:border-copper-400 focus:outline-none">
                          <option value="" disabled>Auswählen</option>
                          {GUEST_OPTIONS.map((g) => <option key={g}>{g}</option>)}
                        </select>
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Uhrzeit</span>
                        <select required defaultValue="" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 focus:border-copper-400 focus:outline-none">
                          <option value="" disabled>Auswählen</option>
                          {TIME_OPTIONS.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Datum</span>
                      <input required type="date" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 focus:border-copper-400 focus:outline-none" />
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Vorname</span>
                        <input required type="text" placeholder="Alexandra" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 placeholder:text-linen-400/40 focus:border-copper-400 focus:outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Nachname</span>
                        <input required type="text" placeholder="Hart" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 placeholder:text-linen-400/40 focus:border-copper-400 focus:outline-none" />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">E-Mail</span>
                        <input required type="email" placeholder="sie@email.de" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 placeholder:text-linen-400/40 focus:border-copper-400 focus:outline-none" />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Telefon</span>
                        <input required type="tel" placeholder="020 0000 0000" className="w-full border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 placeholder:text-linen-400/40 focus:border-copper-400 focus:outline-none" />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.18em] text-linen-400">Besondere Wünsche</span>
                      <textarea
                        rows={2}
                        placeholder="Allergien, Anlass, Sitzwunsch …"
                        className="w-full resize-none border border-slate-500/40 bg-char-800 px-3 py-2.5 text-sm text-linen-50 placeholder:text-linen-400/40 focus:border-copper-400 focus:outline-none"
                      />
                    </label>

                    <button type="submit" className="btn-sear mt-2 w-full bg-sear-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-linen-50">
                      Tisch anfragen
                    </button>

                    <p className="pt-1 text-center text-[0.7rem] leading-relaxed text-linen-400/70">
                      Smart Casual · kostenfreie Stornierung bis 24 Std. vorher · Allergien bitte oben angeben
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="py-6 text-center"
                >
                  <div className="ember-glow mx-auto h-24 w-24 animate-glow-pulse" />
                  <p className="eyebrow mx-auto mb-4 justify-center">Anfrage erhalten</p>
                  <h2 className="font-display text-3xl text-linen-50">Wir sehen uns am Feuer.</h2>
                  <p className="mx-auto mt-4 max-w-sm text-sm text-linen-400">
                    Dies ist ausschließlich eine Demo-Bestätigung — MAREZZO ist ein fiktives Showcase-Restaurant, es
                    wurde keine echte Reservierung vorgenommen. Für einen echten Tisch:{" "}
                    <span className="text-copper-400">{restaurant.phone}</span>.
                  </p>
                  <button onClick={close} className="mt-8 border border-linen-50/25 px-7 py-3 text-xs uppercase tracking-[0.2em] text-linen-50 transition-colors hover:border-copper-400">
                    Schließen
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReservationContext.Provider>
  );
}
