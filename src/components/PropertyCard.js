import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-details">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span className="rating">⭐ {property.rating}</span>
      </div>
    </div>
  );
}

export default PropertyCard;
