import React, { useState } from 'react';
import './pixel-font.css';
import ContactModal from '../Contatti/ContactModal';


const groupStyle = {
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '5px',
  fontFamily: 'pixel-font',
};

const linkStyle = {
  background: 'white',
  zIndex: '2',
};

const largerLogoStyle = {
  width: '30px',
  height: '30px',
};

const logoStyle = {
  width: '115px',
  height: '115px',
};

const whiteBackground = {
  backgroundColor: 'white', 
  padding: '8px', 
  borderRadius: '10px', 
  margin: '2px',
};



const backgroundOverlayStyle = {
  position: 'absolute',
  top: '20px',
  left: '0',
  width: '10%',
  height: '10%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.9, 
  zIndex: '1',
};

const backgroundOverlayStyle2 = {
  position: 'absolute',
  top: '20%',
  left: '30%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};

const backgroundOverlayStyle3 = {
  position: 'absolute',
  top: '20%',
  left: '90%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const backgroundOverlayStyle4 = {
  position: 'absolute',
  top: '60%',
  left: '65%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};

const backgroundOverlayStyle5 = {
  position: 'absolute',
  top: '17%',
  left: '57%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7,
};

const backgroundOverlayStyle6 = {
  position: 'absolute',
  top: '70%',
  left: '8%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};


function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  
  return (
   <footer className='w-full footer'>
      <div className='groupsContainerStyle'>
        {/* Gruppo 1 */}
        <div style={{ ...groupStyle, }}>
          <p className='greenTextStyle'>Generale</p>
          <a className='link-style' href="#">Chi siamo</a>
          <a className='link-style' href="#">Centro Assistenza</a>
          <a
          className='link-style'
          href="#"
          onClick={openContactModal} 
        >
          Contatti
        </a>
      </div>

      <ContactModal isOpen={isContactModalOpen} toggleModal={closeContactModal} />
      

        {/* Gruppo 2 */}
        <div style={{ ...groupStyle, flex: 1 }}>
          <p className='greenTextStyle'>Framework</p>
          <p className='link-style'>Esempio</p>
          <p className='link-style'>Esempio</p>
          <div>
            <img src="image/logo.png" alt="Logo" style={logoStyle} />
          </div>
        </div>

        {/* Gruppo 3 */}
        <div className='displayNoneSocial'>
        <div style={{ ...groupStyle, flex: 1, paddingRight: '55px'}}>
          <p className='greenTextStyle'>Seguiteci</p>
          <div style={{ display: 'flex', gap: '6px', padding: '5px' }}>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/github-logo.png" alt="GitHub Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/discord.png" alt="Discord Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/instagram.png" alt="Instagram Logo" style={largerLogoStyle} /></a>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/linkedin.png" alt="LinkedIn Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/pixil.png" alt="Pixil Logo" style={largerLogoStyle} /></a>
          </div>
        </div>
      </div>
      <div style={backgroundOverlayStyle}></div>
      <div style={backgroundOverlayStyle2}></div>
      <div style={backgroundOverlayStyle3}></div>
      <div style={backgroundOverlayStyle4}></div>
      <div style={backgroundOverlayStyle6}></div>
      <div style={backgroundOverlayStyle5}></div>
      </div>
      <span className='copyrightStyle'>© 2023 Codeventure</span>
    </footer>
  );
}

export default Footer;





