<template>
  <div id="movieCarousel">
    <h3 class="h4">{{ title }}</h3>
    <carousel
      :autoWidth="true"
      :autoHeight="true"
      :margin="20"
      :nav="false"
      :dots="false"
    >
      <template slot="prev">
        <span class="prev">
          <vs-tooltip text="Previous">
            <i class="las la-long-arrow-alt-left"></i>
          </vs-tooltip>
        </span>
      </template>
      <template slot="next">
        <span class="next">
          <vs-tooltip text="Next">
            <i class="las la-long-arrow-alt-right"></i>
          </vs-tooltip>
        </span>
      </template>

      <div v-for="index in 10" :key="index">
        <img :src="'https://placeimg.com/320/220/any?' + index" />
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'MovieSlider',
  components: { carousel },
  data: () => {
    return {
      title: 'Slider Title',
    };
  },
  methods: {},
};
</script>

<style>
#movieCarousel .owl-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.25s ease;
}
#movieCarousel .owl-item:hover img {
  transform: scale(0.9);
  border-radius: 30px;
}
#movieCarousel .owl-item > div {
  width: 180px !important;
  height: 240px;
  border-radius: 30px;
  padding: 15px;
  box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;
  background: transparent;
  cursor: pointer;
}
#movieCarousel .owl-item:hover > div {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  transform: translateY(7px);
}
#movieCarousel {
  position: relative;
}
#movieCarousel .next,
#movieCarousel .prev {
  font-size: 30px;
  margin-top: -16px;
  color: #3e4241;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(-50%, 50%, 0);
}
#movieCarousel .prev {
  right: 40px;
}

@media only screen and (max-width: 480px) {
  #movieCarousel .owl-item > div {
    width: 130px !important;
    height: 170px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 12px 18px -8px rgba(0, 0, 0, 0.08);
  }
  #movieCarousel .owl-item:hover img {
    border-radius: 15px;
  }
  #movieCarousel .next,
  #movieCarousel .prev {
    visibility: hidden;
  }
}
</style>
