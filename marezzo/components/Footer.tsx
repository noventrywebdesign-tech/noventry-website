"use client";

import { restaurant, openingHours } from "@/lib/restaurant-data";
import { useReservation } from "@/components/Reservation";

export default function Footer() {
  const { open } = useReservation();

  return (
    <footer className="relative overflow-hidden border-t border-slate-500/20 bg-char-950 pt-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-6">Visit</p>
            <p className="max-w-xs text-lg text-linen-200">
              {restaurant.address.street}
              <br />
              {restaurant.address.city} {restaurant.address.postalCode}
            </p>
            <a href={restaurant.phoneHref} className="mt-4 block text-lg text-copper-400 hover:text-sear-400">
              {restaurant.phone}
            </a>
            <a href={`mailto:${restaurant.email}`} className="mt-1 block text-sm text-linen-400 hover:text-copper-400">
              {restaurant.email}
            </a>
          </div>

          <div>
            <p className="eyebrow mb-6">Hours</p>
            <ul className="space-y-1.5 text-sm text-linen-300">
              {openingHours.slice(0, 4).map((h) => (
                <li key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span className="tnum text-linen-400">{h.hours}</span>
                </li>
              ))}
              <li className="flex justify-between gap-6">
                <span>Fri – Sat</span>
                <span className="tnum text-linen-400">17:00 – 00:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sunday</span>
                <span className="tnum text-linen-400">17:00 – 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Explore</p>
            <ul className="space-y-2 text-lg text-linen-200">
              <li><a href="/menu" className="hover:text-copper-400">Menu</a></li>
              <li><button onClick={open} className="hover:text-copper-400">Reservations</button></li>
              <li><a href="/#private-dining" className="hover:text-copper-400">Private Dining</a></li>
              <li><a href={restaurant.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-copper-400">Instagram</a></li>
              <li><a href="/contact" className="hover:text-copper-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="sear-rule-static mt-16" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-linen-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {restaurant.legalName}. All rights reserved.</p>
          <p className="text-linen-400/70">A concept showcase by Noventry Webdesign — fictional restaurant, demonstration only.</p>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.08em] select-none text-center font-display leading-none text-linen-50/5"
        style={{ fontSize: "min(22vw, 260px)" }}
      >
        MAREZZO
      </p>
    </footer>
  );
}
