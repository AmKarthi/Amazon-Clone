import React, { useState } from 'react';
import './Menubar.css';

function Menubar() {
  // State to track which menu is open
  const [openMenu, setOpenMenu] = useState(null);

  // Function to handle the click event and open the respective menu
  const handleMenuClick = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName); // Toggle open/close
  };

  // Function to close the menus
  const handleCloseMenu = () => {
    setOpenMenu(null); // Close all menus
  };

  return (
    <nav className="menubar">
      <ul className="menu">
        <li>
          <a href="#all" onClick={() => handleMenuClick('all')}>All</a>
          {openMenu === 'all' && (
            <ul className="submenu">
              <li><a href="#sub1" onClick={handleCloseMenu}>Sub Option 1</a></li>
              <li><a href="#sub2" onClick={handleCloseMenu}>Sub Option 2</a></li>
              <li><a href="#sub3" onClick={handleCloseMenu}>Sub Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#fresh" onClick={handleCloseMenu}>Fresh</a></li>
        <li><a href="#minitv" onClick={handleCloseMenu}>Amazon MiniTV</a></li>
        <li><a href="#todaydeals" onClick={handleCloseMenu}>Today's Deals</a></li>
        <li><a href="#mobiles" onClick={handleCloseMenu}>Mobiles</a></li>
        <li><a href="#electronics" onClick={handleCloseMenu}>Electronics</a></li>
        <li><a href="#fashion" onClick={handleCloseMenu}>Fashion</a></li>
      </ul>
    </nav>
  );
}

export default Menubar;
