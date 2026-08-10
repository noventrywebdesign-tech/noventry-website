"use client";

import { useReservation } from "@/components/Reservation";

export default function ContactActions() {
  const { open } = useReservation();
  return (
    <button onClick={open} className="btn-sear mt-12 inline-flex items-center bg-sear-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-linen-50">
      Tisch reservieren
    </button>
  );
}
