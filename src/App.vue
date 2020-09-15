<template>
  <div id="app">
    <Navbar />
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Page transition */
.view-enter-active,
view-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease;
}

.view-enter-active {
  transition-delay: 0.25s;
}

.view-enter {
  opacity: 0;
  transform: translate3d(0, -100px, 0);
}

.view-enter-to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.view-leave {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.view-leave-to {
  opacity: 0;
  transform: translate3d(0, 100px, 0);
}
</style>
