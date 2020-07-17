<template>
  <p :id="`${artistID}_info`"></p>
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
  mounted(){
    new Typewriter(`#${this.artistID}_info`).typeString(this.artist.about).start();
  },
  computed:{
    artistID(){
      const s = this.artist.image;
      return s.substring(0, s.length - 4);
    }
  }
};
</script>