import React from "react";
import PageComponent from "../components/page/PageComponent";
import AdvertisementComponent from "../components/advertisement/AdvertisementComponent";

interface Advertisement {
  title: string;
  description: string;
  price: number;
  date: Date;
}

const Advertisements: Advertisement[] = [
  {
    title: "Bicyclette",
    description: "Achetez ma bicyclette très peu servie",
    price: 280,
    date: new Date()
  },
  {
    title: "ford mustang 1969",
    description: "Voiture de collection 280 000 km peu servie pas cher !",
    price: 48000,
    date: new Date()
  },
  {
    title: "Maisonnette",
    description: "Maison située à livry-gargan 4pièces 69m² meublée...",
    price: 280000,
    date: new Date()
  }
];

const AdvertisementContent = PageComponent(AdvertisementComponent);

class AdvertisementContainer extends React.PureComponent {
  render(){
    return(
      <AdvertisementContent />
    )
  }
};

export default AdvertisementContainer;