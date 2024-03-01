import React from 'react'
import "./Home.css"
import {CategoryBarData,CarouselData,BestOf,ProductsData}from '../../Datas'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import BannerCarouse from '../../components/BannerCarouse/BannerCarouse'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <div className='Home-CategoryContainer '>
        <div className='Home-CategoryBar'>
        {
          CategoryBarData.map((item,index)=>(
            <CategoryBar
            key={index}
            imgsrc={item.imageSrc}
            categoryName={item.category}
            />
          ))
        }
        </div>
        <div className='Home__Container'>
          <div className='Home__Carousel'>
          <BannerCarouse data={CarouselData}/>
        </div>
        </div>
        <div style={{marginTop:'100px',marginLeft:'20px'}}>
        <h2 style={{color:'gray',marginTop: '25px'}}>Best Of Mobiles... </h2>
        <div  className='products__Container'>
        {
         ProductsData.map((item,index)=>(
          <Link key={index} to={'/productdetails/'+item.id} className='Box'>
            <img src={item.url} className='product__img'/>
            <p className='category__title'>{item.Product}</p>
            <p className='category__brand'>{item.Descripition}</p>
            </Link>

         ))
        }
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home
       
