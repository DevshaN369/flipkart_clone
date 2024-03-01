import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import {MdKeyboardArrowDown}from 'react-icons/md'
import {FaShoppingCart}from 'react-icons/fa'
import LoginModal from '../LoginModal/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../../supabase'
import { removeUser } from '../../slices/userSlice'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const user=useSelector((state)=>state.userData.user)
    const Dispatch=useDispatch()
    useEffect(()=>{
        if(user){
            setIsOpen(false)
        }
    console.log(user);

    },[user])

    const signOut=async()=>{
        // const {error}=await supabase.auth.signOut()
        // if(!error){
        //     Dispatch(removeUser())
        // }
    }
  return (
    <>
    <div className='navbar_container'>
        <div className='navbar'>
            <Link to='/'>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipcartlogo"
              className="navbar_logo"
            />
            </Link>
            <div className='navbar_search'>
                <input
                type='text'
                placeholder='Search for Products, brands and more'
                className='navbar_searchbox'
                />
                <button className='search_btn'>
                    <IoSearch/>
                </button>
                </div>
                {
                    user ?(
                    <h3 style={{cursor:'pointer'}} onClick={signOut}>@{user.email.slice(0,10)}</h3>
                ):(
                    <button className='navbar_btn' onClick={()=>{
                        setIsOpen(true)}} >Login</button>
                )
            }

                <div className='navbar_bcs'>
                    <h3>Become a Seller</h3>
                </div>
                <div className='navbar_more'>
                    <h3>more
                        <i className='moredown'>
                            <MdKeyboardArrowDown/>
                        </i>
                    </h3>
                </div>
                <div className='navbar_cart'>
                    <div className='cart_icon'>
                        <FaShoppingCart/>
                    </div>
                    <Link to={'/cart'} className='cart'>Cart</Link>

                </div>
        </div>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    </>
  )
}

export default Navbar