export type AgingCheckpoint = { day: number; label: string; text: string };

export const agingCheckpoints: AgingCheckpoint[] = [
  { day: 1, label: "Temperatur", text: "Konstant 1 bis 3 Grad — kalt genug, um unerwünschte Bakterien zu stoppen, warm genug, damit die eigentliche Arbeit beginnen kann." },
  { day: 7, label: "Luftfeuchtigkeit", text: "Rund 80 Prozent — genug, um ein Austrocknen von außen zu verhindern, wenig genug für spürbare Konzentration." },
  { day: 14, label: "Luftzirkulation", text: "Ein permanenter, leiser Luftstrom verhindert unkontrollierten Schimmel auf der Oberfläche." },
  { day: 21, label: "Feuchtigkeitsverlust", text: "Der Cut verliert kontinuierlich Wasser — das verbleibende Aroma konzentriert sich messbar." },
  { day: 30, label: "Enzymatische Veränderung", text: "Körpereigene Enzyme beginnen, die Muskelfasern langsam zu zersetzen — der Anfang von Zartheit." },
  { day: 38, label: "Geschmacksintensität", text: "Nussige, fast käsige Noten entstehen, die junges Fleisch schlicht nicht kennt." },
  { day: 45, label: "Trimmen", text: "Die getrocknete Außenschicht wird großzügig entfernt, bevor der Cut überhaupt die Küche erreicht." },
];
