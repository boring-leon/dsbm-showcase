<template>
  <div class="text-center">
    <h1>{{ artist.text }}</h1>
    <ArtistInfo :artist="artist" />
    <SoundPlayer :artist="artist" />

    <transition name="modal">
      <Modal v-if="shouldShowModal" @close="$store.commit('hideModal')" />
    </transition>
  </div>
</template>

<script>
import SoundPlayer from "../components/SoundPlayer";
import ArtistInfo from "../components/ArtistInfo";
import Modal from "../components/Modal";

export default {
  name: "ArtistView",
  components: { SoundPlayer, ArtistInfo, Modal },
  props:{
    artist:{
      type: Object,
      required: true
    }
  },
  computed:{
    shouldShowModal(){
      return this.$store.state.shouldShowModal;
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
</style>