<template>
  <div>
    <h2>Your WishList</h2>
    <div class="wishlist" v-for="item in bucketItems" :key="item.place.id">
      <div id="wish-holder">
        <div class="wishItem">
          <img :src="item.place.image" alt="">
          <h5> <strong>{{ item.place.city }}</strong></h5>
          <br />
          <p v-if="item.spaces === 1"> {{ item.spaces }} space </p>
          <p v-else> {{ item.spaces }} spaces</p>
        </div>
        <div class="removeItem">
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeFromBucket(item.place)"
            >Remove</a
          >
        </div>
      </div>
      <hr />
    </div>
    <div class="clearList d-flex justify-content-between">
      <a href="#" @click.prevent="clearBucketItems()">Clear Wishlist</a>
    </div>
  </div>
</template>

<script>
export default {
computed: {
    bucketItems() {
      return this.$store.getters.bucketItems;
    },
    bucket() {
      return this.$store.state.bucket;
    }
  },
  methods: {
    removeFromBucket(place) {
      this.$store.commit("removeFromBucket", place);
    },
    clearBucketItems() {
      this.$store.commit("clearBucketItems");
    },    
  },
}
</script>

<style scoped>
h2{
  margin-top: 50px;
  margin-bottom: 30px;
}
.badge{
  background: #0D92AC;
  color: #fff;
  border: 2px solid #0D92AC;
}
.wishlist{
  width: 90%;
  margin: auto;
}
#wish-holder{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}
.wishItem{
  display: flex;
}
.wishItem h5, .wishItem p{
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
img{
  width: 80px;
  height: 70px;
  object-fit: cover;
  margin: 10px;
  border-radius: 5px;
}
.removeItem{
  display: flex;
  justify-content: flex-end;
}
.removeItem a{
  margin: auto;
}
.clearList{
  margin-left: 50px;
}
@media screen and (max-width: 450px) {
  #wish-holder{
    display: grid;
  }
  .removeItem a{
    margin-left: 10px;
  } 
}
</style>