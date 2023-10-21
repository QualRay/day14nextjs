import React from 'react';
import { APP_DEVELOPER, APP_NAME } from '../../Helper/helper';

function Footer() {
    
    return (
        <>
            
            <footer id="footer" className="footer">
                <div className="copyright">
                    © Copyright <strong><span>{APP_DEVELOPER} </span></strong>. All Rights Reserved 
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">{APP_DEVELOPER}</a>
                </div>
            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
   
        </>
    );
}

export default Footer;