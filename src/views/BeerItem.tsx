import '../styles/BeerItem.css';
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Beer from "../types/Beer";
import { RootState } from "../types/BeerState";

export default function BeerItem() {
  const { choosenBeer, surprise } = useSelector(
    (state: RootState) => state.beer,
  );
  const [currBeer, setCurrBeer] = useState<Beer | null>(null);
  const [isKeg, setIsKeg] = useState<Boolean>(false);

  const getBeerInfoCallback = useCallback(
    async (endpoint: string | number) => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/${endpoint}`,
        );
        setCurrBeer(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    },
    [setCurrBeer],
  );

  useEffect(() => {
    let endpoint: string | number;
    if (surprise === true) {
      endpoint = "random";
    } else {
      endpoint = choosenBeer || 0;
    }

    getBeerInfoCallback(endpoint);
  }, [choosenBeer, surprise, getBeerInfoCallback]);


  useEffect(() => {
    if (currBeer?.image_url.includes('keg.png')) {
      setIsKeg(true);
    }
  }, [currBeer]);

  return (
    <div className="beerItem">

      <div className="titleBlock">
        <h1 className="beerName">{currBeer?.name}</h1>
        <h4 className="firstBrewed">First brewed: {currBeer?.first_brewed}</h4>
      </div>
      <div className='flexSection'>
        
      <div className="imageBlock">
        <img
          className={`beerItem-image ${isKeg && 'kegImage'}`}
          src={currBeer?.image_url}
          alt="beerImage"
          />

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
      </div>

        <div className='infoBlock'>
          
      <div className="description">
        <h3>Description:</h3>
        <p className="textElement">{currBeer?.description}</p>
      </div>

        <div className="foodPairs">
          <h3>Best Pairs:</h3>
        <p className="textElement">
          This beer best pairs with : {currBeer?.food_pairing.join(", ")}
        </p>
      </div>

      <div className="tips">
        <h3>Tips:</h3>
        <p className="textElement">{currBeer?.brewers_tips}</p>
      </div>
      </div>
          </div>

    </div>
  );
}
