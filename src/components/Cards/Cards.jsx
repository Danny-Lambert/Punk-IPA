import React from 'react';
import styles from "./Cards.module.scss";

const Cards = (props) => {

    const { name,  tagline, description, image_url} = props.beers;

    return (
 
        <div className={styles.cardFront}>
          {/* <div className={styles.container}> */}
            {/* <ul> */}
              {/* <img className="beer-image" src={image_url} alt={name} /> */}
              <h2>{name}</h2>
              <p>{tagline}</p>
                <div className={styles.links}>
                    Full recipe
                    <p>{description}</p>
                </div>
            {/* </ul> */}
          {/* </div> */}
        </div>
      );
    };
export default Cards;
