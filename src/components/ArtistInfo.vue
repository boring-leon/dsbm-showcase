<template>
  <p :id="`${artistName}_info`" v-once></p>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "ArtistInfo",
  props: {
    artist:{
      type: Object,
      required: true
    }
  },
  mounted() {
    new Typewriter(`#${this.artistName}_info`, {
      loop: false
    }).typeString(this.artist.about).start();
  },
  computed:{
    artistName(){
      return this.artist.text.toLowerCase();
    }
  }
};
</script>