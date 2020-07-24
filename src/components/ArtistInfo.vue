<template>
  <p
    :id="`${artistID}_info`"
    @dblclick="hasArtistBeenAlreadyVisited ? {} : handleDbClick()"
    style="cursor:pointer;"
  ></p>
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
    if (!this.hasArtistBeenAlreadyVisited) {
      this.$store.commit("addVisitedArtistRoute", this.artistID);
    }
  },

  mounted() {
    if (this.hasArtistBeenAlreadyVisited) {
      this.writerRoot.innerHTML = this.artist.about;
    } else {
      this.startWriting();
    }
  },
  methods: {
    startWriting() {
      this.writer = new Typewriter(this.writerRoot);
      this.writer
        .typeString(this.artist.about)
        .start()
        .callFunction(() => {
          this.removeCursor();
        });
    },
    handleDbClick() {
      this.writer.stop();
      this.removeCursor();
      this.writerRoot.innerHTML = this.artist.about;
    },

    removeCursor() {
      const cursor = document.querySelector(".Typewriter__cursor");
      if (cursor) cursor.remove();
    }
  },

  computed: {
    artistID() {
      const s = this.artist.image;
      return s.substring(0, s.length - 4);
    },
    hasArtistBeenAlreadyVisited() {
      return this.$store.state.visitedArtists.includes(this.artistID);
    },
    writerRoot() {
      return document.querySelector(`#${this.artistID}_info`);
    }
  }
};
</script>