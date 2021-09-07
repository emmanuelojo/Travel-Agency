<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="5000">
        <img src="@/assets/images/hotel.jpg" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>NATURE</h5>
          <p>Experience nature in tranquility</p>
        </div>
      </div>
      <div class="carousel-item" data-interval="5000">
        <img src="@/assets/images/ba1.jpg" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>COMFORT</h5>
          <p>Your comfort is our priority</p>
        </div>
      </div>
      <div class="carousel-item" data-interval="5000">
        <img src="@/assets/images/londonWheels.jpg" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>SERENDIPITY</h5>
          <p>Gather lovely experiences</p>
        </div>
      </div>
      
      <div class="carousel-item" data-interval="5000">
        <img src="@/assets/images/pyramid.jpg" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>SOOTHING</h5>
          <p>Give yourself the best of treat</p>
        </div>
      </div>
      <div class="carousel-item" data-interval="5000">
        <img src="@/assets/images/photo.jpeg" class="d-block w-100" />
        <div class="carousel-caption d-none d-md-block">
          <h5>PERSPECTIVE</h5>
          <p>View travelling through a different lens</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-inner img {
  height: 450px;
  object-fit: cover;
}
.carousel-caption h5 {
  margin-top: -250px;
  font-size: 50px;
}
@media screen and (max-width: 450px) {
  /*  */
  .carousel-caption h5 {
    margin-top: -220px;
  }
  .d-none {
    display: block !important;
  }
}
</style>