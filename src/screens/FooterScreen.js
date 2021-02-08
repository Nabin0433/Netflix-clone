import React from 'react';
import './FooterScreen.css';
import ShopIcon from "@material-ui/icons/Shop";
import AndroidIcon from "@material-ui/icons/Android";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from "@material-ui/icons/Email";


function FooterScreen() {
    return (
        <div className="footerscreen">
            <div className='footer-avatar'>
                <div style={{ fontSize:'33px',fontWeight:'800'}}>Reality.</div>
                <div className='footer-social-link'>
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <EmailIcon />
                    
                </div>
            </div>
        <div className="footer-waper">
                <div>
                    <h5>COMPANY</h5>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
          </div>
                <div>
                    <h5>SUPPORT</h5>
                    <p>Contact Support</p>
                    <p>Help Center</p>
                    <p>Supported Devices</p>
                    <p>Activate Your Device</p>
          </div>
                <div>
                    <h5>PARTNERS</h5>
                    <p>Advertise with Us</p>
          </div>
                <div>
                    <h5>GET THE APPS</h5>
                    <p>IOS</p>
                    <p>Android</p>
                    <p>Play Store</p>
                    <p>Amazon Fire</p>
          </div>
                <div>
                    <h5>PRESS / LEGAL </h5>
                    <p>Press Releases</p>
                    <p>Tubi in the News</p>
                    <p>*****</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Do Not Sell My PI.</p>
          </div>
            </div>
            <div className='footer-bottom'>
                <button><ShopIcon /> Play Store</button>
                <button><AndroidIcon /> Google</button>
            </div>
            <div className='footer-copy'>
                <p>Copyright &copy; 2021 Reality.inc.</p>
                <p>Reality is a registered trademark of R.</p>
                <p>All rights reserved.</p>
                <br />
                <p>Device ID:3ff-cf45-55fc99op</p>
                <br />
                <small>Made By Mr.Nabin karki</small>
            </div>
      </div>
    );
};

export default FooterScreen;
