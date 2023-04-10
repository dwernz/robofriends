import React from 'react';


const Card = ({ name, email, id, phone, city }) => {

    return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?200x200`} alt='Robot'/>
        <div>
            <h2>{name}</h2>
            <p><strong>E-mail:</strong>{email}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>City:</strong> {city}</p>
        </div>
    </div>
  );
}

export default Card;