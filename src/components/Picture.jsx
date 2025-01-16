import React from 'react'
import { picture } from '../assets'
import oneImage from '../assets/7.jpg'; // Import 1.jpg
import twoImage from '../assets/6.jpg';
import threeImage from '../assets/5.jpg'; // Import 1.jpg
import fourImage from '../assets/4.jpg';
import fiveImage from '../assets/3.jpg'; // Import 1.jpg
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: oneImage, title: 'October 15, 2022',description: 'Agar kabhi kisi ne meray se poocha ke tum dono ki first picture sath konsi thi to mai ye dikhaoun gi',},
    { Image: twoImage, title: 'October 31, 2024',description: 'Ye to kafi latest hai aur mujhay ye bohot pasand hai cute hai ye',},
    { Image: threeImage, title: 'October 29, 2024',description: 'Ye meri kafi favourites mai se aik favourite hai. is din hum ne tumhara favourite sandwich khaya tha ;)',},
    { Image: fourImage, title: 'October 23, 2024',description: 'ye thi hamari 2 year anniversary date love youuu',},   
    { Image: fiveImage, title: 'September 25, 2024', description:'Ye thi hamari first ever "date" date after two whole years. hum asian wok dobara jayen ge kisi din okay?',
    },

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Pictures
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture