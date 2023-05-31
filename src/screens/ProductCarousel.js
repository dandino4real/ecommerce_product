import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useProvider } from '../useContext/productContext'
import './ProductCarousel.css'

const ProductCarousel = () => {
    const {getTopProducts, topProducts} = useProvider()
    useEffect(()=>{
        getTopProducts()
    },[])
  return (
    <Carousel pause='hover' className='bg-dark'>
        {topProducts.map(product=>(
            <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                    <Image src={product.image} alt={product.name} fluid/>
                    <Carousel.Caption className='carousel-caption'>
                        <h2>
                            {product.name} (${product.price})
                        </h2>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default ProductCarousel