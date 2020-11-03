import React from 'react';
import styles from "./Cards.module.scss";

const Cards = (props) => {

    const { name,  tagline, description, image_url} = props.beers;

    // return (
    //     <div className={styles.cardFront}>
    //         <h2>Name: {name}</h2>
    //         <img src= {image_url} alt={name} />
    //             <span>Tagline: {tagline}</span>
    //             <span>Description: {description} </span>
    //     </div> 
    //     );
    // };
return (
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src={image_url} class="card-img" alt="...">
   
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><small class="text-muted">{tagline}</small></p>
                            </div>
                            </div>
                            </div>
                            
        </div>
    </div>
  </div>
)

export default Cards;
