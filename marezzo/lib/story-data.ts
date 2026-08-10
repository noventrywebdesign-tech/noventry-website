export type StoryChapter = {
  label: string;
  heading: string;
  text: string;
  image: string;
};

export const storyChapters: StoryChapter[] = [
  {
    label: "01 / Der Gedanke",
    heading: "Eine einfache Überzeugung.",
    text: "MAREZZO entstand aus einer einfachen Überzeugung: Ein außergewöhnliches Stück Fleisch braucht nicht möglichst viele Techniken, Zutaten und Inszenierungen. Es braucht Herkunft, Zeit, Temperatur und Feuer — mehr nicht.",
    image: "/images/sear-crust.jpg",
  },
  {
    label: "02 / Die Entscheidung",
    heading: "Holz statt Gas.",
    text: "Deshalb verzichten wir bewusst auf Gas. Jeder Grill im Haus arbeitet ausschließlich mit Holz und Kohle, weil sich Rauch, Hitze und Glut nicht simulieren lassen. Es ist der unbequemere Weg — schwerer zu kontrollieren, weniger verzeihend. Genau deshalb gehen wir ihn.",
    image: "/images/origin-argentina.jpg",
  },
  {
    label: "03 / Der Anspruch",
    heading: "Kein gewöhnliches Steakhouse.",
    text: "Wir glauben, dass die meisten Steakhouses an der falschen Stelle sparen: an der Reifezeit, an der Herkunft, an der Geduld vor dem Feuer. Bei MAREZZO beginnt jeder Abend lange bevor der erste Gast den Raum betritt — in der Reifekammer, am Kohlebett, in der Ruhe vor dem Service.",
    image: "/images/origin-usa.jpg",
  },
  {
    label: "04 / Der Raum",
    heading: "Was das Feuer nicht stört.",
    text: "Ein perfekter Cut verdient einen Raum, der ihm nicht im Weg steht. Kein lautes Design, kein hektischer Service — nur gedämpftes Licht, das Knistern der Kohle und ein Team, das weiß, wann ein Tisch Ruhe braucht und wann ein Glas nachgefüllt gehört.",
    image: "/images/interior-wide.jpg",
  },
];
