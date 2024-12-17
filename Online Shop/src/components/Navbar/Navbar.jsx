/* eslint-disable react/prop-types */
import './navbar.css';

const Navbar = ({ onCartClick }) => {
  return (
    <div>
      <div className='navbar'>
        <ul className='navbarLinks'>
          <li><a href='#home' className='homeLink'>Home</a></li>
          <li><a href='#contact' className='ContactLink'>Contacts</a></li>

          <li className='dropdown'>
            <a href='#' className='BrandsLink'>Brands</a>
            <div className='dropdown-content'>

              <div className='dropdown-item'>
                <a href='#nzxt'>NZXT</a>
                <div className='submenu'>
                  <a href='#nzxt-cases'>Cases</a>
                  <a href='#nzxt-aio'>AIO Coolers</a>
                  <a href='#nzxt-psu'>Power Supplies</a>
                </div>
              </div>

              <div className='dropdown-item'>
                <a href='#deepcool'>Deepcool</a>
                <div className='submenu'>
                  <a href='#deepcool-cases'>Cases</a>
                  <a href='#deepcool-aio'>AIO Coolers</a>
                  <a href='#deepcool-psu'>Power Supplies</a>
                </div>
              </div>

              <div className='dropdown-item'>
                <a href='#corsair'>Corsair</a>
                <div className='submenu'>
                  <a href='#corsair-cases'>Cases</a>
                  <a href='#corsair-aio'>AIO Coolers</a>
                  <a href='#corsair-keyboards'>Keyboards</a>
                </div>
              </div>

              <div className='dropdown-item'>
                <a href='#gigabyte'>Gigabyte</a>
                <div className='submenu'>
                  <a href='#gigabyte-cases'>Motherboards</a>
                  <a href='#gigabyte-psu'>GPUS</a>
                  <a href='#gigabyte-psu'>Power Supply</a>
                </div>
              </div>
              <div className='dropdown-item'>
                <a href='#msi'>MSI</a>
                <div className='submenu'>
                  <a href='#msi-motherboards'>Motherboards</a>
                  <a href='#msi-keyboards'>Keyboards</a>
                  <a href='#msi-mouses'>Mouses</a>
                  <a href='#msi-monitors'>Monitors</a>
                  <a href='#msi-headphones'>Headphones</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href='#cart' className='CartLink' onClick={onCartClick}>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
