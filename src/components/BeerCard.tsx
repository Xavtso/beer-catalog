import React from 'react';
import Beer from '../types/Beer';
import '../styles/BeerCard.css'
import question from '../assets/question.png'
import { useDispatch } from 'react-redux';
import { beerSliceActions } from '../store/beerSlice';
import { useNavigate } from 'react-router-dom';

interface BeerCardProps {
  beer: Beer;
  surprise: boolean;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer , surprise}) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function handleBeerChoose() {
    console.log(surprise)
    if (surprise === true) { 
      dispatch(beerSliceActions.chooseRandomBeer());
    } else {
      dispatch(beerSliceActions.chooseBeer(beer.id));
    }
    
    navigateTo('/details')
  }



  return (
    <div className="beerCard" onClick={handleBeerChoose}>
      <h3 className="cardName">{surprise ? 'Try Random' : beer.name}</h3>
      <div className="cardImage">
        <img
          className="beerImage"
          src={surprise ? question : beer.image_url}
          alt="beerImage"
        />
      </div>

      <div className="sideInfo">
        <p className="infoItem">
          <b>ABV:</b> {surprise ? "???" : beer.abv}%
        </p>
        <p className="infoItem">
          <b>IBU:</b> {surprise ? "???" : beer.ibu}
        </p>
        <p className="infoItem">
          <b>EBS:</b> {surprise ? "???" : beer.ebc}
        </p>
      </div>
      <div className="tagline">{surprise ? "???" : beer.tagline}</div>
      <button className="btn-more" onClick={handleBeerChoose}>
        {surprise ? "Random Beer" : "Read More"}
      </button>
    </div>
  );
};

export default BeerCard;
