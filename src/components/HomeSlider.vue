<template>
  <div id="homeCarousel" class="fix">
    <carousel
      :loop="true"
      :nav="false"
      :center="true"
      :margin="5"
      :responsive="{
        0: { items: 1, dots: false, stagePadding: 40 },
        480: { items: 1, dots: true, stagePadding: 60 },
        768: { items: 1, dots: true, stagePadding: 80 },
        1024: { items: 1, dots: true, stagePadding: 120 },
      }"
    >
      <div v-for="index in 4" :key="index">
        <img :src="'https://placeimg.com/900/450/any?' + index" />
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'HomeSlider',
  components: { carousel },
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style>
#homeCarousel.fix {
  /* text-align: center; */
  margin: 40px auto;
  /* overflow-x: hidden; */
}
#homeCarousel .owl-item {
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  padding: 0px;
  transition: all 0.5s ease;
  transform: scale(0.9) !important;
}
#homeCarousel .owl-item.active {
  transform: scale(1) !important;
  -moz-box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
  -o-box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
  box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
}

@media only screen and (max-width: 480px) {
  #homeCarousel .owl-item.active {
    -moz-box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
    -o-box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
    box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
  }
}
</style>
