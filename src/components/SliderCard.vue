<template>
  <div class="slider-card">
    <div class="slider-card__img">
      <img :src="src" :alt="alt" />
    </div>
    <div class="slider-card__text">
      <div class="slider-card__title">
        <h3>{{title}}</h3>
      </div>
      <p>{{subtitle}}</p>
    </div>
    <router-link v-if="link" :to="link" />
  </div>
</template>

<script>
export default {
  name: "SliderCard",
  props: ["src", "alt", "title", "subtitle", "link"],
};
</script>

<style scoped>
.slider-card {
  background: rgba(255, 255, 255, 1);
  color: rgba(44, 62, 80, 1);
  width: 100%;
  max-width: 180px;
  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
}
.slider-card__img,
.slider-card__img img {
  border-radius: 20px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.slider-card__img {
  position: relative;
  max-height: 180px;
  overflow: hidden;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.slider-card__img img {
  width: 100%;
  display: block;
}
.slider-card__text {
  font-size: 0.85rem;
  padding: 0 10px 8px;
  text-align: left;
}
.slider-card__title {
  padding-top: 10px;
  padding-bottom: 3px;
  max-height: 52px;
  width: 100%;
  overflow: hidden;
}
.slider-card__text p {
  font-size: inherit;
  margin: 0;
  opacity: 0.8;
  line-height: 1.4;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.slider-card__title h3 {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: bold;
}
.slider-card a {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.slider-card:hover {
  -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.05);
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
}
.slider-card:hover .slider-card__img img {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}
@media only screen and (max-width: 480px) {
  .slider-card {
    max-width: 140px;
    border-radius: 12px;
  }
  .slider-card__img {
    max-height: 140px;
    border-radius: 12px;
  }
}
</style>