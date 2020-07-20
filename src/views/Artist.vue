<template>
  <div class="text-center">
    <h1>{{ artist.text }}</h1>
    <ArtistInfo :artist="artist" />
    <SoundPlayer :artist="artist" />
  </div>
</template>

<script>
import SoundPlayer from "../components/SoundPlayer";
import ArtistInfo from "../components/ArtistInfo";

export default {
  name: "ArtistView",
  components: { SoundPlayer, ArtistInfo },
  props:{
    artist:{
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.text-center{
  text-align: center;
  margin-top: 5px;
  padding: 10px;
  position: relative;
  height: 100%;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 1.3em;
  }
  i{
    font-size: 1.2rem;
  }
  h1{
    font-size: 2rem;
  }
}
</style>