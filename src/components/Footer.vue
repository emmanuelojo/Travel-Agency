<template>
  <div class="footer">
    <div class="sub-foot">
      <img src="@/assets/images/aeroplane.png" />
    </div>
    <div class="footer-main">
      <div class="links">
        <h5>Our Branches</h5>
        <i class="fa fa-map-marker"> <span> Lagos </span></i>
        <i class="fa fa-map-marker"> <span> Accra </span></i>
        <i class="fa fa-map-marker"> <span> Johannesburg </span></i>
        <i class="fa fa-map-marker"> <span> London </span></i>
      </div>
      <div class="links">
        <h5>Quick Links</h5>
        <i class="fa fa-chevron-right"> <span> Home </span> </i>
        <i class="fa fa-chevron-right"> <span> Destinations </span> </i>
        <i class="fa fa-chevron-right"> <span> Favourites </span> </i>
      </div>
      <div class="links">
        <h5>Contact Info</h5>
        <i class="fa fa-phone"> <span> +123-456-789 </span> </i>
        <i class="fa fa-phone"> <span> +987-654-321 </span> </i>
        <i class="fa fa-envelope"> <span> travels@travels.com </span> </i>
        <i class="fa fa-map-marker"> <span> Abuja, Nigeria </span> </i>
      </div>
      <div class="links">
        <h5>Follow Us</h5>
        <i class="fa fa-facebook"> <span> Facebook </span> </i>
        <i class="fa fa-instagram"> <span> Instagram </span> </i>
        <i class="fa fa-twitter"> <span> Twitter </span> </i>
        <i class="fa fa-linkedin"> <span> LinkedIn </span> </i>
      </div>
      
    </div>

    <br />
    <hr />
    <div class="copy">
      <p>Created By <span> <a href="https://jekon-dev.netlify.app/">Jekon 007</a> </span> | All Rights Reserved </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 99%;
  background: white;
  border-radius: 20px 20px 0 0 ;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  /* border-top: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  border-right: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);*/
  /* box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%); */
}
.sub-foot {
  display: flex;
  justify-content: center;
}
.sub-foot img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.footer-main {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: left;
}
.footer-main .links {
  display: grid;
}

.footer-main .links i {
  color: #3c99d2;
  margin-top: 7px;
}
.footer-main .links i span{
  color: #2C3E50;
  margin-left: 7px;
}
.footer-main .links i span:hover{
  cursor: pointer;
}

.social i {
  margin-top: 20px;
  margin-bottom: auto;
  margin-left: 20px;
  font-size: 18px;
  /* color */
}
.social i:hover {
  color: #3c99d2;
  cursor: pointer;
}
.copy p{
  padding: 20px;
}
.copy p span a{
  text-decoration: none;
  color: #3c99d2;
}
.copy p span:hover{
  cursor: pointer;
}
@media screen and (max-width: 480px) {
  .footer-main{
    /* display: grid; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .footer-main .links{
    margin-left: 20px;
    margin-right: 20px;
  }
  .footer-main h5{
    margin-top: 20px;
  }
}
</style>


<!--
<template>
  <div class="hero">
    <div class="links-holder">
      <div class="q-links">
        <h4>Quick Links</h4>
        <div class="links">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Featured</a>
          <a href="">Deals</a>
          <a href="">Reviews</a>
        </div>
      </div>
      <div class="q-links">
        <h4>Extra Links</h4>
        <div class="links">
          <a href="">My Account</a>
          <a href="">My Favourite</a>
          <a href="">My Cart</a>
          <a href="">My Order</a>
        </div>
      </div>
      <div class="q-links">
        <h4>Download Links</h4>
        <div class="links">
          <a href="">Windows Store</a>
          <a href="">Apple Store</a>
          <a href="">Play Store</a>
        </div>
      </div>
      <div class="q-links">
        <h4>Contact Us</h4>
        <div class="links">
          <a href=""> +123-456-789</a>
          <a href="">example@gmail.com</a>
          <a href="">Lagos, Nigeria</a>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer">
      <p> Created by <span> 007 </span> | All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  border: 1px solid gray;
  margin: 50px;
  margin-bottom: 0px;
  /* overflow: hidden; */
}
.links-holder{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.q-links{
  margin: 10px 50px;
}
.q-links h4{
  color: goldenrod;
  font-size: 20px;
  margin-top: 20px;
}
.q-links .links{
  display: grid;
}
.q-links .links a{
  text-decoration: none;
  color: gray;
}
hr{
  width: 90%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background-color: gray;
}
.footer p{
  color: #f3f3f3;
  padding-top: 20px;
}
.footer p span{
  color: goldenrod;
}
</style>-->
