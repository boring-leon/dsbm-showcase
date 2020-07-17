<template>
  <div class="artist">
    <img
      :src="require(`../assets/img/${artist.image}`)"
      :style="{opacity: artist.opacity ? artist.opacity : ''}"
    />
    <div class="overlay">
      <p>{{ artist.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artist",
  props: {
    artist: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
img {
  display: block;
  height: 100%;
  width: 100%;
  opacity: 55%;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.9s ease;
}

.artist:hover > img {
  opacity: 100%;
  transform: scale(1.08);
}

.overlay {
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
}

.artist:hover > .overlay {
  opacity: 0.8;
}

.overlay > p {
  color: white;
  font-size: 2.3em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.artist {
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
}

@media only screen and (max-width: 768px) {
  .artist{
    width: 320px;
    height: 320px;
  }
}
</style>