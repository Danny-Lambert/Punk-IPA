import React, {useState} from 'react';
import styles from "./Cards.module.scss";

const Cards = (props) => {

    const { name,  tagline, description, image_url, brewers_tips } = props.beers;

    const [searchTerm, setSearchTerm] = useState('');


    return (

        <div className={styles.cardFront}>
          <img className ="beer-image" src={image_url} alt={name} />
            <div class = {styles.cardText}>
              <h2>{name}</h2>
              <p className= {styles.tagline}>'{tagline}'</p>
              <p className= {styles.description}>{description}</p>
              <span>Tip from the pro's - "{brewers_tips}"</span>
            </div>
        </div>
      
      );
    };
export default Cards;
