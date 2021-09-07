<template>
  <div v-if="place">
    <h2>Tour the beautiful city of {{ place.city }} </h2>
    <div class="card">
      <div class="card-body" >
        <img class="w-100" :src="place.image" alt />
        <h3>{{ place.city }}</h3>
        <h5 class="card-text"> <i id="map-marker" class="pi pi-map-marker"></i> {{ place.continent }}</h5>
        <p> {{ place.fact }} </p>
        <p> <span> Currency: </span> {{ place.currency }}</p>
        <button class="btn btn-secondary" @click="addToBucket(place)">
          <i class="pi pi-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      //   spaces: 1,
    };
  },
  computed: {
    ...mapGetters({ place: "singleTouristSite" }),
  },
  mounted() {
    this.$store.commit("setSinglePlace", this.id);
  },

  methods: {
    addToBucket(place) {
      this.$store.commit("addToBucket", {
        place: place,
        spaces: 1,
      });
    },
  },
};
</script>

<style scoped>
h2{
  margin-top: 50px;
  text-transform: capitalize;
}
.card {
  /* height: 450px; */
  /* height: 100vh; */
  height: 650px;
  width: 500px;
  margin: 100px auto;
  /* margin: 20px; */
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  /* padding: 3px; */
  padding-bottom: 25px;
}

.card a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 30px;
}
.card-text{
  padding-bottom: 30px;
}
.card-text i{
  color: #0d92ac;
}
.card p {
  font-size: 20px;
}
.card p span{
  color: #2e2e2e;
  font-weight: bold;
}
.card button {
  margin-top: 25px;
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
}
@media screen and (max-width: 450px) {
  .card{
    width: 330px;
    height: 700px;
  }
  /* .card-body{
    height: 100vh;
  } */
}
</style>