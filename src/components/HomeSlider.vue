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
        1024: { items: 1, dots: true, stagePadding: 140 },
      }"
    >
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <img src="https://placeimg.com/900/450/any?1" />
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <img src="https://placeimg.com/900/450/any?2" />
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <img src="https://placeimg.com/900/450/any?3" />
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center">
          <img src="https://placeimg.com/900/450/any?4" />
        </vs-col>
      </vs-row>
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
.fix {
  width: 90%;
  margin: 40px auto;
  overflow-x: hidden;
}
.owl-item {
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  padding: 0px;
  transition: all 0.5s ease;
  transform: scale(0.9) !important;
}
.owl-item.active {
  transform: scale(1) !important;
  -moz-box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
  -o-box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
  box-shadow: 0 20px 30px -19px rgb(0 0 0 / 58%);
}

@media only screen and (max-width: 480px) {
  .owl-item.active {
    -moz-box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
    -o-box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
    box-shadow: 0 12px 24px -19px rgb(0 0 0 / 58%);
  }
}

.owl-carousel .owl-stage-outer {
  overflow: visible; /* fix shadow visibility */
  padding-bottom: 20px;
}
.owl-theme .owl-dots {
  display: inline-flex;
  align-items: center;
}
.owl-theme .owl-dots .owl-dot span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  transition: all 0.25s ease, background 0.25s ease-in;
}
.owl-theme .owl-dots .owl-dot.active span {
  width: 10px;
  height: 10px;
}
</style>
