<template>
  <div class="hero1">
    <h2 class="und">Explore the world with ease</h2>

    <div class="places" v-for="place in getPlaces" :key="place.id">
      <div class="place">
        <img :src="place.image" alt="image" />
        <router-link :to="{ name: 'place', params: { id: place.id } }">{{
          place.city
        }}</router-link>
        <p> <i id="map-marker" class="pi pi-map-marker"></i> {{ place.continent }}</p>
        <div class="ratings">
          <Rating
            :modelValue="place.ratings"
            :readonly="true"
            :stars="5"
            :cancel="false"
            class="p-rating"
            id="ratingNumber"
          />
        </div>
        <div class="btns">
          <button
            id="btn"
            class="btn btn-secondary"
            @click="addToBucket(place)"
          >
            <i class="pi pi-heart"></i>
          </button>
          <router-link
            id="arrow-btn"
            :to="{ name: 'place', params: { id: place.id } }"
            ><i class="pi pi-arrow-right"></i
          ></router-link>
        </div>       
      </div>
    </div>

    <div class="hero2">
      <div class="cont">
        <img src="@/assets/images/photo2.jpeg" />
        <p>Let's make your next trip awesome</p>
      </div>
      <!-- <div class="more">
        <p>
          Read More <a href="#"><i class="fa fa-arrow-right"></i></a>
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";

export default {
  components: { Rating },
  methods: {
    addToBucket(place) {
      this.$store.commit("addToBucket", {
        place: place,
        spaces: 1,
      });
    },
  },
  computed: {
    // ...mapGetters["getPlaces"],
    getPlaces() {
      return this.$store.getters.getPlaces;
    },
  },
};
</script>

<style scoped>
.hero1 {
  width: 100%;
  /* display: flex;
  flex-wrap: wrap; */
  /* place-items: center;
  justify-content: center; */
}
.hero1 h2 {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: 700;
  width: 100%;
}
.hero1 h2 {
  margin: 80px 0 30px 0;
}
/* .und {
  display: inline-block;
  position: relative;
  margin-bottom: 50px;
}

.und::after {
  content: "";
  height: 3px;
  width: 15%;
  background: orange;
  position: absolute;
  bottom: -10px;
} */
.hero1 h5 {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  width: 100%;
}

.places {
  display: inline-flex;
  justify-content: center;
}
.place {
  /* height: 400px; */
  height: 430px;
  width: 330px;
  /* margin: 15px auto; */
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.place img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  /* padding: 3px; */
  padding-bottom: 25px;
}

.place a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 30px;
}
#map-marker{
  color: #0d92ac;
}
.place p {
  font-size: 20px;
}
.p-rating .p-rating-icon.pi-star  {
  color: green;
  font-size: 14px;
}
.p-rating , .p-rating-star, .p-rating-icon.pi-star , .ratingNumber {
  color: gold;
  font-size: 14px;
}
.btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* .place button {
  margin: 20px 10px;
} */

/* .router-link{  
  padding-top: 50px;
  margin-top: 50px;
}

.arrow-btn{  
  padding-top: 50px;
} */

/* #arrow-btn i{
  height: 38px;
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
} */
#arrow-btn i {
  height: 38px;
  color: #0d92ac;
  padding: 10px;
  margin-top: 20px;
}
#arrow-btn i:hover {
  height: 38px;
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
}
#btn {
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
  margin: 20px 10px;
  /* margin-top: 0; */
}

/* .hero .cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
} */
.departure,
.arrival,
.date,
.adult,
.children {
  margin: 10px;
}
/* .hero .cont .fa {
  margin-left: -20px;
} */
.hero2 .cont {
  width: 85%;
  height: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.hero2 .cont img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.hero2 .cont p {
  color: #fff;
  font-size: 45px;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
  margin-top: -220px;
}

.more {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  place-items: center;
}
.more p {
  padding: 5px;
  border-radius: 5px;
  background: orange;
  color: #fff;
  font-weight: 600;
}
.hero2 .fa {
  color: #fff;
  padding: 5px;
}
.card {
  width: 500px;
  margin: auto;
}

@media screen and (max-width: 489px) {
  .p-formgroup-inline .p-field {
    margin-bottom: 1em !important;
  }
  .schedule-flight {
    width: 330px;
    margin: auto;
  }
  .card {
    width: 330px;
    margin-left: 5px auto;
    margin-right: 5px auto;
    /* margin-left: 10px auto; */
    /* margin-right: 10px auto; */
    /* margin-right: 5px auto; */
  }
}
</style>