import React from 'react'

const Blogs = () => {
   return (
      <div style={{ marginTop: '50px' }} className="container">
         <h1>Blogs</h1>
         <div className="row gy-4">
            <div className="col-lg-4">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Blog 1</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Blog 2</h5>
                     <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                     </p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div class="card" style={{ width: '100%' }}>
                  <div className="card-body">
                     <h5 className="card-title">Blog 3</h5>
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

export default Blogs
