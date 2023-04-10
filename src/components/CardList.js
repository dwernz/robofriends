import React from 'react';
import Card from './Card.js';

const CardList = ( { robots }) => {

    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                phone={robots[i].phone}
                city={robots[i].address.city}
            />
        );
    });

    return (
        <div>
            {cardComponent};
        </div>
    );
}

export default CardList;