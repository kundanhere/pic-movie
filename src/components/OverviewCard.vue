<template>
  <div class="overview-card">
    <figure class="overview-card__img">
      <img :src="poster" :alt="title" />
      <img class="glass-host" :src="poster" />
    </figure>
    <div class="overview-card__text">
      <div class="overview-card__title">
        <h6 class="h6">{{ title }}</h6>
      </div>
      <p>{{ genre }}</p>
      <p>{{ ratings }}</p>
    </div>
    <router-link v-if="url" :to="url" class="link" />
  </div>
</template>

<script>
export default {
  name: "OverviewCard",
  props: ["title", "poster", "genre", "ratings", "url"],
};
</script>

<style scoped>
.overview-card {
  display: flex;
  margin-bottom: 3vh;
  padding: 0.625rem;
  background: transparent;
  color: var(--color-primary);
  width: 100%;
  border-radius: 8px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
}
.overview-card__img {
  position: relative;
}
.overview-card__img img {
  border-radius: 5px;
  width: 100px;
  height: 140px;
  object-fit: cover;
}
.overview-card__img img.glass-host {
  position: absolute;
  left: 0;
  top: 6px;
  transform: scale(0.9);
  filter: blur(12px);
  opacity: 0.8;
  z-index: -1;
}
.overview-card__text {
  margin-left: 6px;
  padding: 0 10px 10px;
  width: 100%;
}
.overview-card__title {
  padding-top: 10px;
  padding-bottom: 3px;
  width: 100%;
  max-height: 52px;
  overflow: hidden;
}
.overview-card__title h6 {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: bold;
}
.overview-card__text p {
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.8;
}
.overview-card .link {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.overview-card:hover {
  background: #e6e6e688;
}
@media only screen and (max-width: 480px) {
  .overview-card {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5vh;
  }
  .overview-card__img img {
    width: 120px;
    height: 160px;
  }
  .overview-card__text p {
    font-size: 0.74rem;
  }
}
</style>