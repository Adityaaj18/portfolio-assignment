import React from 'react'

const Header = () => {
   return (
      <div>
         <nav
            class="navbar navbar-light bg-light"
            style={{ padding: '0px 20px' }}
         >
            <h1>Logo</h1>
            <div>
               <ul
                  style={{
                     display: 'flex',
                     listStyle: 'none',
                     gap: '20px',
                     fontSize: '20px'
                  }}
               >
                  <li>Home</li>
                  <li>Store</li>
                  <li>Products</li>
                  <li>Blog</li>
                  <li>Brands</li>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Header
