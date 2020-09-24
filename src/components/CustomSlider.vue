<template>
  <div class="custom-slider">
    <slot name="header">
      <h4 v-if="header != false" class="h4">{{ header || "Header" }}</h4>
    </slot>
    <carousel
      :autoWidth="true"
      :autoHeight="true"
      :margin="20"
      :nav="false"
      :dots="false"
    >
      <template v-if="nav != false" slot="prev">
        <span class="prev">
          <vs-tooltip text="Previous">
            <i class="las la-chevron-circle-left"></i>
          </vs-tooltip>
        </span>
      </template>
      <template v-if="nav != false" slot="next">
        <span class="next">
          <vs-tooltip text="Next">
            <i class="las la-chevron-circle-right"></i>
          </vs-tooltip>
        </span>
      </template>
      <slot></slot>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "CustomSlider",
  props: ["header", "nav"],
  components: { carousel },
};
</script>

<style scoped>
.custom-slider {
  position: relative;
}
.custom-slider .next,
.custom-slider .prev {
  font-size: 1.875rem;
  margin-top: -16px;
  color: var(--nav-button);
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(-50%, 50%, 0);
  transition: opacity 0.25s ease;
}
.custom-slider .prev {
  right: 40px;
}
.custom-slider .next:hover,
.custom-slider .prev:hover {
  opacity: 0.8;
}
@media only screen and (max-width: 480px) {
  .custom-slider .next,
  .custom-slider .prev {
    visibility: hidden;
  }
}
</style>
