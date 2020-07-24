<template>
  <p :id="`${artistID}_info`"></p>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
  name: "ArtistInfo",
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  beforeDestroy() {
    this.$store.commit("addVisitedArtistRoute", this.artistID);
  },

  mounted() {
    const root = document.querySelector(`#${this.artistID}_info`);

    if (this.hasArtistBeenAlreadyVisited) {
      root.innerHTML = this.artist.about;
    } else {
      this.startWriting(root);
    }
  },
  methods: {
    startWriting(root) {
      const writer = new Typewriter(root);
      writer
        .typeString(this.artist.about)
        .start()
        .callFunction(() => {
          const cursor = document.querySelector(".Typewriter__cursor");
          cursor ? cursor.remove() : () => {};
        });
    }
  },

  computed: {
    artistID() {
      const s = this.artist.image;
      return s.substring(0, s.length - 4);
    },
    hasArtistBeenAlreadyVisited() {
      return this.$store.state.visitedArtists.includes(this.artistID);
    }
  }
};
</script>