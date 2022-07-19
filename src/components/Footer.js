import React from 'react'

const Footer = () => {
   return (
      <div className="container" style={{ marginTop: '50px' }}>
         <div className="row gx-4">
            <div className="col-lg-6">
               <img
                  src={require('../img/ad.jpg')}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
               />
            </div>
            <div className="col-lg-6">
               <img
                  src={require('../img/ad.jpg')}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
               />
            </div>
         </div>
         <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Footer</h2>
         </div>
         <div className="row" style={{ textAlign: 'center' }}>
            <div className="col-lg-4">
               <h5>Categories listing</h5>
            </div>
            <div className="col-lg-4">
               <h5>Quick Links</h5>
            </div>
            <div className="col-lg-4">
               <h5>Social Media</h5>
            </div>
         </div>
      </div>
   )
}

export default Footer
