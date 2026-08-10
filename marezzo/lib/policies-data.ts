export type Policy = { label: string; text: string };

// Kleine, glaubwürdige Realismus-Details — bewusst zurückhaltend platziert
// (Reservierung, Kontaktseite), nicht als eigene prominente Section.
export const policies: Policy[] = [
  { label: "Kleiderordnung", text: "Smart Casual — von Turnschuhen bis Sakko, kein Ausschluss durch Dresscode." },
  { label: "Allergien & Unverträglichkeiten", text: "Bitte bei Reservierung angeben, wir bereiten Alternativen individuell zu." },
  { label: "Vegetarische Optionen", text: "Auf Anfrage ein eigenes Menü abseits der Fleischkarte, auch kurzfristig." },
  { label: "Gruppenreservierungen", text: "Ab 8 Personen bitte telefonisch, für ein individuelles Menü empfohlen." },
  { label: "Barrierefreiheit", text: "Ebenerdiger Zugang, keine Stufen im Hauptrestaurant und im Ember Room." },
  { label: "Korkgeld", text: "Mitgebrachte Weine gegen 25 £ Korkgeld, bitte vorab ankündigen." },
  { label: "Küchenschluss", text: "Letzte Bestellung eine Stunde vor Ladenschluss." },
  { label: "Stornierung", text: "Kostenfrei bis 24 Stunden vor dem reservierten Termin." },
];
