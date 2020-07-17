<template>
  <div id="app">
    <Artist v-for="(artist, key) in getShuffledArtists()" :key="key" :artist="artist" />
  </div>
</template>

<script>
import Artist from "./components/Artist.vue";
import artists from "./artists";

export default {
  name: "App",
  components: { Artist },
  methods: {
    getShuffledArtists() {
      return artists.sort(() => Math.random() - 0.5);
    }
  }
};
</script>
