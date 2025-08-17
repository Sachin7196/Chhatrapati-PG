// import React from 'react';
// // import "./App.css"
// import logo from "../PG Logo.jpeg"

// function Header() {
//   return (
//     <header className="header">
//       <div className='heading'>
//          <div className='logo-grid'>
//         <img src={logo}/>
//       </div>
//       <h1>Chhatrapati PG</h1>
//       <div className='logo-grid'>
//         <img src={logo}/>
//       </div>
//       </div>
//       {/* <p>Comfortable and affordable PG accommodations for students and professionals</p> */}
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import logo from "../PG Logo.jpeg";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
  <header className="header">
  <div className="header-container">
    <div className="header-left">
      <img src={logo} alt="Logo" className="header-logo" />
      <h2>Sunrise PG</h2>
    </div>

    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="#">Rent Stays</a>
      <a href="#">Students</a>
      <a href="#">Couples</a>
      <a href="#">PG</a>
      <a href="#">PropEx</a>
    </nav>

    <div className="header-icons">
      <a
        href="tel:+919876543210"
        className="call-icon-link"
        title="Call"
      >
     <FaPhoneAlt/>
      </a>
      <a
        href="https://wa.me/919876543210"
        className="whats-app-icon-link"
        title="WhatsApp"
      >
        <FaWhatsapp/>
      </a>
    </div>
  </div>
</header>

  );
}

export default Header;
