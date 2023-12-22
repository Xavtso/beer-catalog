import '../styles/BeerItem.css';
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Beer from "../types/Beer";
import { useParams } from 'react-router-dom';

export default function BeerItem() {

  const { id } = useParams();
  const [currBeer, setCurrBeer] = useState<Beer | null>(null);
  const [isKeg, setIsKeg] = useState<Boolean>(false);

  const getBeerInfoCallback = useCallback(
    async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/${id}`,
        );
        setCurrBeer(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    },
    [setCurrBeer,id],
  );

  useEffect(() => {
    getBeerInfoCallback();
  }, [ getBeerInfoCallback]);


  useEffect(() => {
    if (currBeer?.image_url.includes('keg.png')) {
      setIsKeg(true);
    }
  }, [currBeer]);

  return (
    <div className="beerItem">
      
      <div className="flexSection">
        <div className="imageBlock">
          <img
            className={`beerItem-image ${isKeg && "kegImage"}`}
            src={currBeer?.image_url}
            alt="beerImage"
          />
        </div>
        <div className="beerInfo">
          <h1 className="beerName">{currBeer?.name}</h1>
          <h4 className="firstBrewed">
            First brewed: {currBeer?.first_brewed}
          </h4>
          <div className="imageInfo">
            <p className="infoItem">
              <b>ABV:</b> {currBeer?.abv}%
            </p>
            <p className="infoItem">
              <b>IBU:</b> {currBeer?.ibu}
            </p>
            <p className="infoItem">
              <b>EBS:</b> {currBeer?.ebc}
            </p>
          </div>

          <p className="textElement">{currBeer?.description}</p>
          <p className="textElement">
            This beer best pairs with : {currBeer?.food_pairing.join(", ")}
          </p>
          <p className="textElement">{currBeer?.brewers_tips}</p>
        </div>

     

        
      </div>
    </div>
  );
}
