import React from 'react'

const Carousel = () => {
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide carousle-fade mt-2" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/download 1.jpg" className="d-block w-100" alt="no image" style={{height:'500px'}}/>
    </div> 
    <div className="carousel-item">
      <img src="./images/download 2.jpg" className="d-block w-100" alt="no image" style={{height:'500px'}}/>
    </div>
    <div className="carousel-item">
      <img src="./images/narutohinata.jpg" classNameName="d-block w-100" alt="no image" style={{height:'500px'}}/>
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
            
        </>
    )
}

export default Carousel
