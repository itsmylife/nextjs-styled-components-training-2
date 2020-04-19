import React from 'react';


const Card = ({
                title,
                subtitle,
                icon,
                color,
              }) => {
  return (
    <div>
      Boarder Top Color: {color}
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {icon}
    </div>
  );
};

export default Card;
