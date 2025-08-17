// import React from 'react';
// // import "./App.css"
// // import images from "../../public"

// const images = [
//     "/images/pg1.jpg",
//     "/images/pg5.jpg",
//     "/images/pg2.jpg",
//     "/images/pg3.jpg",
//     "/images/pg4.jpg",
//     "/images/pg5.jpg",
// ];

// function ImageGallery() {
//     console.log("images",images)
//   return (
//     <div className="gallery">
//       <h2>Our Facilities</h2>
//       <div className="image-grid">
//         {images.map((src, index) => (
//           <img key={index} src={src} alt={`PG ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageGallery;

import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    title: "Colive 1229 Town Center",
    location: "PG in Pimpri Chinchwad, Pune",
    image: "/images/pg1.jpg",
    rating: "4.1"
  },
  {
    title: "Colive 1216 VJ Grand Center",
    location: "PG in Pimpri Chinchwad, Pune",
    image: "/images/pg2.jpg",
    rating: "4.1"
  },
    {
    title: "Colive 1216 VJ Grand Center",
    location: "PG in Pimpri Chinchwad, Pune",
    image: "/images/pg3.jpg",
    rating: "4.1"
  },
    {
    title: "Colive 1216 VJ Grand Center",
    location: "PG in Pimpri Chinchwad, Pune",
    image: "/images/pg4.jpg",
    rating: "4.1"
  },
    {
    title: "Colive 1216 VJ Grand Center",
    location: "PG in Pimpri Chinchwad, Pune",
    image: "/images/pg5.jpg",
    rating: "4.1"
  },
];

function ImageGallery() {
  return (
    <div className="body-section">
      <h2>Our Facilities</h2>
      <div className="property-grid">
        {properties.map((prop, index) => (
          <PropertyCard key={index} property={prop} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;


