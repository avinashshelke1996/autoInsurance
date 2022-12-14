import React from 'react'
import i from './images.png'

const Carousel = () => {
    return (
        <div className='container'>
        <div id="carouselExampleControls" className="carousel slide h-25" data-bs-ride="carousel">
            <div className="carousel-inner h-50">
                <div className="carousel-item active">
                    <img src={i} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
                <div className="carousel-item">
                    <img src={i} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
                <div className="carousel-item">
                    <img src={i} style={{height: "450px"}} className="w-100 bg-dark" alt="broken img" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}

export default Carousel;