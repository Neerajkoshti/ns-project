import React from 'react'

export const Slideshow = () => {
    return (
        <div className="slide">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/7795510bfaf2adcf.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/1688/280/image/89f8d817a47fa997.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/50/50/image/f96a2ca3dc040cdd.jpg?q=50" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}
