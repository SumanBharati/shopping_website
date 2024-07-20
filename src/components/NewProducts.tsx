import React from 'react'
import ProductCard from './ProductCard'

const productsData = [
    {
        img: "/Spring-dress1.jpg",
        title: "Foliage Charm",
        desc: "Chic leaves print dress",
        rating: 5,
        price: "45.00",
    },
    {
        img: "/Summer-dress1.jpg",
        title: "Mustard Marvel",
        desc: "Cozy jumper dress for autumn",
        rating: 4,
        price: "35.00",
    },
    {
        img: "/Summer-dress2.jpg",
        title: "Sleek Elegance",
        desc: "Timeless allure redefined",
        rating: 3,
        price: "40.00",
    },
    {
        img: "/Summer-dress3.jpg",
        title: "Olive Comfort",
        desc: "Versatile, cozy and stylish jumper",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/Summer-cloth.jpg",
        title: "Denim Blues",
        desc: "Classic shorts: casual comfort",
        rating: 5,
        price: "45.00",
    },
    {
        img: "/Summer-clothes.jpg",
        title: "Chic V-Neck",
        desc: "Essential timeless style",
        rating: 4,
        price: "35.00",
    },
    {
        img: "/Summer-cloth2.jpg",
        title: "Printed Noir",
        desc: "Elegant black printed dress",
        rating: 3,
        price: "40.00",
    },
    {
        img: "/Summer-cloth1.jpg",
        title: "Striped Elegance",
        desc: "Chic white striped dress",
        rating: 5,
        price: "55.00",
    },
]

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'></h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {productsData.map((item, index) => (
                    <ProductCard 
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts