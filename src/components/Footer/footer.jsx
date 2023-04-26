import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt-footer'>
        <div className='gpt-footer-section'>
            <div>
                <h2>Do you want to step in to the future before others</h2>
            </div>
            <div>
                <button>Request Early Access</button>
            </div>
        </div>
        <div className='gpt-footer-details'>
            <div>
                <h5>GPT_3</h5>
                 <p>K12 182 DK,All right Reserved</p>
            </div>
            <div>
                <h6>Links</h6>
                <p>Social Media</p>
                
            </div>
            <div>
                <h6>Company</h6>
                <p>Terms & Conditions</p>
                
            </div>
        </div>
        <div className='gpt-footer-p'>
            <p>&copy; GPT-3 {new Date().getFullYear()} All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer;