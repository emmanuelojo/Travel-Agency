<template>
  <!-- <div style="flex-wrap: wrap; margin:auto" class="d-flex jc-center mt-3"> -->
  <div>    
    <div class="card h-100 text-left">
      <div class="card-body">
      <img class="w-100" :src="place.image" alt />
        <h4 class="card-title">
          <!-- <router-link :to="{name: 'places', params: {id: place.id}}">{{ place.city }}</router-link> -->
        </h4>
        <!-- <strong>₦{{ place.price.toFixed(2) }}</strong> -->
        <h3> {{ place.city }} </h3>
        <p class="card-text">{{ place.continent }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary" @click="addToBucket()">Add to BucketList</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
    props: ['place'],
    // computed: {
    //     ...mapGetters(['getPlaces'])
    // }
}
</script>

<style>

</style>