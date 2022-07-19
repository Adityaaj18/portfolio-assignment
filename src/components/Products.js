import React from 'react'

const Products = () => {
   return (
      <div className="container">
         <h1>Products</h1>
         <div className="row gy-4">
            <div className="col-lg-3">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Product 1</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Product 2</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Product 3</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Product 4</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Products
