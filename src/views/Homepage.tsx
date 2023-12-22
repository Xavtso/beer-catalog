import BeerCard from "../components/BeerCard";
import "../styles/Homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Beer from "../types/Beer";
import intro from '../assets/image 2header.jpg'

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
      <div className="intro">
        <div className="introText">
          <h1>Modern Ukrainian brewery</h1>
          <p>
            We are sure that you will find something close to you, no matter
            what you like - a classic blanche or a mango milkshake, a strong
            stout or a light berliner. Even if you like sports, we have
            something for you.
          </p>
        </div>
        <div className="introImage">
          <img src={intro} alt="introImage" className="introImage" />
        </div>
      </div>

      <h2 className="pageTitle">Our Products</h2>
      <div id="products" className="catalog">
        {beer.map((beerItem, index) => (
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
