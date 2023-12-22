import React from 'react';
import Beer from '../types/Beer';
import '../styles/BeerCard.css'
import question from '../assets/question.png'
import { useNavigate } from 'react-router-dom';

interface BeerCardProps {
  beer: Beer;
  surprise: boolean;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer , surprise}) => {
  const navigateTo = useNavigate();

  function handleBeerChoose() {
    if (surprise === true) { 
 navigateTo(`/details/random`);
    } else {
       navigateTo(`/details/${beer.id}`);
    }
    
 
  }



  return (
    <div className="beerCard" onClick={handleBeerChoose}>
      <div className="cardImage">
        <img
          className="beerImage"
          src={surprise ? question : beer.image_url}
          alt="beerImage"
        />
      </div>

      <div className="sideInfo">
      <h3 className="cardName">{surprise ? "Try Random" : beer.name}</h3>
      <div className="tagline">{surprise ? "???" : beer.tagline}</div>
        <div className="infoItems">
          <b>ABV: {surprise ? "???" : beer.abv}%</b>
        
          <b>IBU: {surprise ? "???" : beer.ibu}</b>
        
          <b>EBS: {surprise ? "???" : beer.ebc}</b>
        
        </div>
      <button  className="btn-more" onClick={handleBeerChoose}>
        {surprise ? "Random Beer" : "Read More"} &rArr;
      </button>
      </div>
    </div>
  );
};

export default BeerCard;
