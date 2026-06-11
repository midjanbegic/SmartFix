// Importuj slike
import sprayImg from '../assets/spray.png';
import wischerImg from '../assets/wischer.png';
import safeDrivePlusImg from '../assets/safe-drive-plus.png';
import filterRenderImg from '../assets/filter-render.png';

export const shopProducts = [
  {
    id: 1,
    name: "SAFE VIEW",
    subtitle: "Scheibenversiegelung",
    price: "29,90 €",
    image: sprayImg,
    imageScale: 1.34
  },
  {
    id: 2,
    name: "SAFE DRIVE PLUS",
    subtitle: "Komplettschutz",
    price: "49,90 €",
    image: safeDrivePlusImg,
    imageScale: 1.24
  },
  {
    id: 3,
    name: "Innenraumfilter Pollenfilter",
    subtitle: "Premium Schutz",
    price: "69,90 €",
    image: filterRenderImg,
    imageScale: 1.14
  },
  {
    id: 4,
    name: "BOSCH WISCHER",
    subtitle: "Hochleistungswischer",
    price: "19,90 €",
    image: wischerImg,
    imageScale: 1.16
  }
];
