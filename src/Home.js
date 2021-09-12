import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
        src='https://aamazoncommytv.files.wordpress.com/2021/08/amazon-prime-page-banner-desktop-01-en-12nov20.png?w=768' 
        alt='amazon banner' />
      </div>

      <div className='home__row'>
        <Product 
        id='23904712'
        title='SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR' 
        price={949.99} 
        image='https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg' 
        rating={3}
        />
      </div>

      <div className='home__row'>
      <Product 
        id='2452342'
        title='The lean startup' 
        price={29.99} 
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
        rating={4}
        />
        <Product 
        id='34523523'
        title='NUBWO G06 Wireless Gaming Headset for PS5, PS4, PC' 
        price={57.99} 
        image='https://m.media-amazon.com/images/I/61MHW9Ti7YL._AC_SL1500_.jpg' 
        rating={5}
        />
        <Product 
        id='67989674'
        title='The Legend of Zelda: Skyward Sword HD - Nintendo Switch' 
        price={49.94} 
        image='https://m.media-amazon.com/images/I/81y8cNk-v1L._SL1500_.jpg' 
        rating={5}
        />
      </div>

      <div className='home__row'>
      <Product 
        id='12412345'
        title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)' 
        price={299.99} 
        image='https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg' 
        rating={5}
        />
        <Product 
        id='23456436'
        title='Radeon RX 6700 XT Gaming OC 12G Graphics Card, WINDFORCE 3X Cooling System, 12GB 192-bit GDDR6, GV-R67XTGAMING OC-12GD Video Card' 
        price={479.99}
        image='https://m.media-amazon.com/images/I/81L7-qPS0ZL._AC_SL1500_.jpg' 
        rating={5}
        />
      </div>
    </div>
  )
}

export default Home
