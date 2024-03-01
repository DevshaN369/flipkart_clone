import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Product from './Pages/Products/Produtc'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import { BrowserRouter  as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { Provider, useDispatch } from 'react-redux'
import supabase from './supabase'
import { addUser } from './slices/userSlice'
const App = () => {
  const Dispatch=useDispatch()
  const getUser=async()=>{
    const {data,error}=await supabase.auth.getSession() 
    if(data.session){
    console.log(data);
    Dispatch(addUser(data.session.user))
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Productdetails/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>

  )
}

export default App