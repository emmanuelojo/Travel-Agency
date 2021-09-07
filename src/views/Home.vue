<template>
  <div class="home">
    <!-- <NavBar /> -->
    <Slider />
    <Destinations />  
    <Services />  
    <Form />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from "@/components/NavBar.vue";
import Slider from "@/components/Slider.vue";
import Destinations from "@/components/Destinations.vue";
import Services from "@/components/Services.vue";
import Form from '@/components/Form.vue' 
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // NavBar,
    Slider,
    Destinations,
    Services,
    Form,
    Contact,
    Footer,
  },
};
</script>
