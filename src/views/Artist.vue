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

<style>
.text-center{
  text-align: center;
  margin-top: 5px;
  padding: 10px;
  position: relative;
  height: 100%;
}
p{
  font-size:2.5em
}

h1{
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

i{
  font-size: 2.2rem;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 1.5em;
  }
  i{
    font-size: 1.3rem;
  }
  h1{
    font-size: 2rem;
  }
  button{
    margin-left:-140px;
  }
}
</style>