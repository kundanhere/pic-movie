<template>
  <div class="home container">
    <HomeSlider />
    <MovieSlider />
  </div>
</template>

<script>
import HomeSlider from "@/components/HomeSlider";
import MovieSlider from "@/components/MovieSlider";

export default {
  name: "Home",
  components: {
    HomeSlider,
    MovieSlider,
  },
};
</script>
