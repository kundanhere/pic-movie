<template>
  <div class="home container">
    <home-carousel />
    <custom-slider header="Top Movies">
      <slider-card
        class="custom"
        v-for="m in movie"
        :key="m.id"
        :src="m.poster"
        :alt="m.title"
        :title="m.title"
        :subtitle="m.genre"
      />
    </custom-slider>
    <div id="discover-movies" class="mx-t">
      <vs-row>
        <vs-col
          class="flex-direction-column"
          vs-type="flex"
          vs-lg="9"
          vs-sm="12"
        >
          <h3 class="h4">Discover</h3>
          <vs-row>
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-lg="4"
              vs-sm="6"
              vs-xs="6"
              v-for="m in movie"
              :key="m.id"
            >
              <overview-card
                :poster="m.poster"
                :title="m.title"
                :genre="m.genre"
                ratings="7.5"
              />
            </vs-col>
          </vs-row>
        </vs-col>
        <vs-col
          class="hidden-sm"
          vs-type="flex"
          vs-offset="0.2"
          vs-align="flex-start"
          vs-w="2.8"
        >
          <vs-table
            class="custom-table"
            v-model="selected"
            @selected="handleSelected"
            @dblSelection="doubleSelection"
            :data="users"
          >
            <template slot="header">
              <h3 class="h4">Trailer</h3>
            </template>
            <template slot="thead">
              <vs-th>#</vs-th>
              <vs-th>Title</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td :data="data[indextr].id">{{ data[indextr].id }}</vs-td>
                <vs-td :data="data[indextr].name">{{
                  data[indextr].name
                }}</vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vs-col>
      </vs-row>
      <vs-popup
        class="holamundo"
        :title="selected.name"
        :active.sync="popupActivo"
      >
        <pre>{{ selected }}</pre>
        <div class="centerx">
          <!-- <iframe
          width="540"
          height="345"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>-->
        </div>
      </vs-popup>
    </div>
    <custom-slider header="Top rated">
      <slider-card
        class="custom"
        v-for="m in movie"
        :key="m.id"
        :src="m.poster"
        :alt="m.title"
        :title="m.title"
        :subtitle="m.genre"
      />
    </custom-slider>
  </div>
</template>

<script>
import HomeSlider from "@/components/HomeSlider";
import CustomSlider from "@/components/CustomSlider";
import SliderCard from "@/components/SliderCard";
import OverviewCard from "@/components/OverviewCard";

export default {
  name: "Home",
  components: {
    "home-carousel": HomeSlider,
    "custom-slider": CustomSlider,
    "slider-card": SliderCard,
    "overview-card": OverviewCard,
  },
  data: () => ({
    popupActivo: false,
    selected: [],
    users: [
      {
        id: 1,
        name: "Money Plane",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Mulan",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Santana",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Hard Kill",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Rogue",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Unknown Origins",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
    ],
    movie: [
      {
        id: 1,
        title: "Money Plane",
        genre: "Action, Sci-fi",
        poster:
          "https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 2,
        title: "Mulan",
        genre: "Adventure, Thriller",
        poster:
          "https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 3,
        title: "Santana",
        genre: "Adventure",
        poster:
          "https://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 4,
        title: "Hard Kill",
        genre: "Action, Adventure",
        poster:
          "https://image.tmdb.org/t/p/w500/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 5,
        title: "Rogue",
        genre: "Action",
        poster:
          "https://image.tmdb.org/t/p/w500/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
      {
        id: 6,
        title: "Unknown Origins",
        genre: "Action, Thriller",
        poster:
          "https://image.tmdb.org/t/p/w500/sMO1v5TUf8GOJHbJieDXsgWT2Ud.jpg",
        plot: "Lorem ipsum dolor sit amet.",
      },
    ],
  }),
  methods: {
    handleSelected(tr) {
      this.$vs.notify({
        title: `Selected ${tr.username}`,
        text: `Email: ${tr.email}`,
      });
      this.popupActivo = true;
    },
    doubleSelection(tr) {
      this.$vs.notify({
        title: `Double Selection ${tr.username}`,
        text: `Email: ${tr.email}`,
        color: "success",
      });
    },
  },
};
</script>

<style scoped>
.flex-direction-column {
  flex-direction: column;
}
.custom-table {
  background: transparent !important;
}
.custom-table .vs-table--content {
  box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
}
.custom-table .vs-table--content th {
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.custom-slider .custom {
  width: 165px;
}
@media only screen and (max-width: 900px) {
  .hidden-sm {
    visibility: hidden;
    display: none !important;
  }
}
@media only screen and (max-width: 480px) {
  .custom-slider .custom {
    width: 135px;
  }
}
</style>