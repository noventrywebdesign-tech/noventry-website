export type JourneyStep = {
  index: string;
  title: string;
  text: string;
  image: string;
};

export const journeySteps: JourneyStep[] = [
  {
    index: "01",
    title: "Herkunft",
    text: "Wir arbeiten ausschließlich mit ausgewählten Erzeugern und Regionen, die wir persönlich kennen — von den Pampas Argentiniens bis zu den Weiden Galways.",
    image: "/images/origin-ireland.jpg",
  },
  {
    index: "02",
    title: "Auswahl",
    text: "Marmorierung, Faserstruktur, Rasse und Reifepotenzial entscheiden darüber, welcher Cut es überhaupt in unsere Küche schafft.",
    image: "/images/origin-japan.jpg",
  },
  {
    index: "03",
    title: "Reifung",
    text: "Ausgewählte Stücke verbringen bis zu 60 Tage unter kontrollierten Bedingungen in unserer Reifekammer — konstante Temperatur, definierte Luftfeuchtigkeit, permanente Luftzirkulation.",
    image: "/images/cut-tomahawk.jpg",
  },
  {
    index: "04",
    title: "Vorbereitung",
    text: "Jeder Cut wird erst unmittelbar vor dem Service zugeschnitten, gesalzen und auf Zimmertemperatur gebracht.",
    image: "/images/butter-baste.jpg",
  },
  {
    index: "05",
    title: "Feuer",
    text: "Holz, Kohle und Temperaturen jenseits von 600 °C erzeugen die charakteristische Kruste — für jeden Cut individuell gesteuert.",
    image: "/images/smoke-grill.jpg",
  },
  {
    index: "06",
    title: "Ruhe",
    text: "Nach dem Feuer bekommt jedes Steak genau die Zeit, die es braucht, damit sich die Fleischsäfte gleichmäßig verteilen können.",
    image: "/images/knife-cut.jpg",
  },
  {
    index: "07",
    title: "Service",
    text: "Erst danach wird angeschnitten, final gewürzt und serviert — nie früher.",
    image: "/images/gallery-1.jpg",
  },
];
