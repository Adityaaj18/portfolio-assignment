import React from 'react'

const Introduction = () => {
   return (
      <div>
         <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
         >
            <div className="carousel-inner" style={{ height: '60vh' }}>
               <div
                  className="carousel-item active"
                  style={{
                     position: 'relative'
                  }}
               >
                  <img
                     src={require('../img/download.jpg')}
                     className="d-block w-100"
                     alt="..."
                     style={{ height: '100%' }}
                  />
                  <div
                     style={{
                        position: 'absolute',
                        top: '0',
                        left: '10',
                        marginTop: '100px',
                        width: '100%',
                        textAlign: 'center'
                     }}
                  >
                     <h1>Caption</h1>
                     <h2>Sub Caption</h2>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../img/download2.jpg')}
                     className="d-block w-100"
                     alt="..."
                  />
                  <div
                     style={{
                        position: 'absolute',
                        top: '0',
                        left: '10',
                        marginTop: '100px',
                        width: '100%',
                        textAlign: 'center'
                     }}
                  >
                     <h1>Caption</h1>
                     <h2>Sub Caption</h2>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src={require('../img/download3.jpg')}
                     className="d-block w-100"
                     alt="..."
                  />
                  <div
                     style={{
                        position: 'absolute',
                        top: '0',
                        left: '10',
                        marginTop: '100px',
                        width: '100%',
                        textAlign: 'center'
                     }}
                  >
                     <h1>Caption</h1>
                     <h2>Sub Caption</h2>
                  </div>
               </div>
            </div>
            <button
               className="carousel-control-prev"
               type="button"
               data-bs-target="#carouselExampleControls"
               data-bs-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button
               className="carousel-control-next"
               type="button"
               data-bs-target="#carouselExampleControls"
               data-bs-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      </div>
   )
}

export default Introduction
