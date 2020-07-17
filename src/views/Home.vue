<template>
  <div class="grid-container">
    <router-link
      v-for="(artist, key) in artists"
      :key="key"
      :to="{name: 'artist', params: {'name' : artist.text.toLowerCase() }}"
    >
      <Artist :key="key" :artist="artist" />
    </router-link>
  </div>
</template>

<script>
import Artist from "../components/Artist";

export default {
  name: "HomeView",
  components: { Artist },
  props:{
    artists:{
      type: Array,
      required: true
    }
  },
};
</script>