import './App.css'

import Introduction from './components/Introduction'
import Header from './components/Header'
import Products from './components/Products'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {
   return (
      <div className="App">
         <Header />
         <Introduction />
         <Cards />
         <Products />
         <Blogs />
         <Footer />
      </div>
   )
}

export default App
