import BeerCard from "../components/BeerCard";
import "../styles/Homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../types/Beer";

export default function Homepage() {
    const [beer,setBeer] = useState<Beer[]>([])


  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main">
      <h2 className="pageTitle">Beer's Catalog</h2>
      <div className="catalog">
        {beer.map((beerItem,index) => (
          <BeerCard
            key={beerItem.id}
            beer={beerItem}
            surprise={index === beer.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
