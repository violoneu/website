import ecolesthippolyte from "./projects/img/ecole-st-hippolyte.jpeg";
import placejacquescartier from "./projects/img/place-jacques-cartier.jpg";
import haltescyclables from "./projects/img/haltes-cyclables.jpg";
import montorfordplage from "./projects/img/mont-orford-plage.jpg";
import quintessence from "./projects/img/quintessence.jpg";

export default [
  {
    id: 1,
    image: ecolesthippolyte,
    title: "école primaire lac connelly",
    category: "institutionnel",
    description: "école primaire lac connelly",
  },
  {
    id: 2,
    image: placejacquescartier,
    title: "place jacques-cartier",
    category: "urbain",
    description: "place jacques-cartier",
  },
  {
    id: 3,
    image: haltescyclables,
    title: "haltes cyclables",
    category: "recreotouristique",
    description: "haltes cyclables",
  },
  {
    id: 4,
    image: montorfordplage,
    title: "mont-orford plage stukely",
    category: ["recreotouristique", "parc"],
    description: "mont-orford plage stukely",
  },
  {
    id: 5,
    image: quintessence,
    title: "quintessence",
    category: "immobilier",
    description: "quintessence",
  },
];
