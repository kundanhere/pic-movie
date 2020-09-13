<template>
  <div class="nav">
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>PicMovie</vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <router-link to="/" class="link">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/about" class="link">About</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#" class="link">Update</a>
      </vs-navbar-item>
      <vs-input icon="search" placeholder="Search" v-model="search" />
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    activeItem: 0,
    search: "",
  }),
};
</script>

<style>
.nav {
  background-color: #fff;
}
.nav a.link {
  color: #888888;
  font-size: 0.9rem;
  transition: color 0.25s ease;
}
.nav a:hover {
  color: #222222;
}
.nav a.router-link-exact-active {
  color: #222222;
  font-weight: bold;
}
.vs-navbar {
  padding: 12px 14px;
}
.vs-input--icon {
  top: 3px !important;
}
.vs-input--input.hasIcon,
.vs-input--input.hasIcon + .vs-input--placeholder {
  padding-left: 38px !important;
}
.vs-input--placeholder {
  width: auto !important;
  top: -1px !important;
}
</style>