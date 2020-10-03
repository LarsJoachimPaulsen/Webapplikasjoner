import React from 'react';

const Navbar = ({ leftText, rightText }) => (
  <>
    <nav>
      <h3>{leftText}</h3>
      <h3>{rightText}</h3>
    </nav>
  </>
);
export default Navbar;
