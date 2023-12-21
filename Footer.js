import React from 'react';
//import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
              <p>We studied and compared sites against each other to see which provided more information, <br/>how easy it was to find, and whether we could do it on the run with a mobile app. <br/>Based on these factors, we selected the best real estate websites.</p>
                <p className='text'>We will give our best!</p>
                <span className='text'>&copy; {date.getFullYear().toString()} GPS CITY</span><br/>
                
                  
                    <div>
                      <h4>CONTACT US ON</h4>
<h5>www.gpscity@gmail.com</h5>
                    </div>
                  
                
            </div>
        </div>
    </footer>
  )
}

export default Footer;