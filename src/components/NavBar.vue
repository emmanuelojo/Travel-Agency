<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    > 

      <span class="navbar-toggler-icon"> </span>
    </button>
    
    <!-- <a class="navbar-brand" href="#">Jekon SpaceBus</a> -->
    <div class="navbar-brand">
      <img src="@/assets/images/aeroplane.png" alt="" srcset="" />
    </div>
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <!-- <ul class="navbar-nav mr-20">  -->
        <li class="nav-item active">
          <a class="nav-link" href="/"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

    <!-- <div class="wishBtn">
      <div class="dropdown open">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{ bucketItemCount }} <i class="pi pi-heart"></i>
        </button>
        <div @click="$event.stopPropagation()">
          <mini-bucket />
        </div>
      </div>
    </div> -->

    <div class="wishBtn">
      <div class="wishIcon">
        <p> {{ bucketItemCount }}  </p>
        <router-link :to="{ name: 'wishlist' }" class="router"><i class="pi pi-heart"></i></router-link>        
      </div>
    </div>
  </nav>
</template>

<script>
// import MiniBucket from "./MiniBucket";

export default {
  // components: { MiniBucket },
  computed: {
    bucketItemCount() {
      return this.$store.getters.bucketItems.length;
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-color: #fff !important;
}
.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar-brand img{
  width: 40px;
  height: 40px;
  border-radius: 3px;
  object-fit: cover;
}
.nav-item {
  margin: 0 20px;
}
#nav a{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: #0D92AC;
}
.wishBtn{
  float: right;
  margin-right: 0;
}
.wishBtn .wishIcon{
  display: flex;
  margin: auto;
}
.wishBtn .wishIcon .router i{
  font-size: 20px;
  margin-top: 10px;
  color: #0D92AC;
}
/* #triggerId{
  background: #0D92AC;
  color: #fff;
  border: 2px solid #0D92AC;
} */
.navbar-light .navbar-toggler {
  color: #0D92AC;
  border-color: #0D92AC;
}
.navbar-light .navbar-toggler:focus {
  color: #0D92AC;
  border-color: #0D92AC;
  border: 1px solid #0D92AC;
}
.navbar-light .navbar-toggler:hover {
  color: #0D92AC;
  border-color: #0D92AC;
  border: 1px solid #0D92AC;
}
.navbar-light .navbar-toggler-icon i {
  color: #0D92AC;
  margin-top: 5px;
}
</style>