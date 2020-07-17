<template>
  <button v-show="isLoaded" :class="buttonClass" @click="isPlayed = !isPlayed">
    {{ buttonText }}
  </button>
</template>

<script>
import { Howl, Howler } from "howler";

export default {
  name: "SoundPlayer",
  props: {
    artist: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      player: null,
      isPlayed: false,
      isLoaded: false,
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    this.player = new Howl({
      src: [`${this.publicPath}audio/${this.artist.path}`],
      volume: 0.1,
      autoload: true
    });
    
    this.player.once("load", () => {
      this.isLoaded = true;
      this.$nextTick(() => this.setBtnMarginLeft());
    });
  },
  beforeDestroy(){
    this.player.unload();
  },

  methods:{
    setBtnMarginLeft(){
      const btn = document.querySelector('button');
      btn.style.marginLeft = btn.offsetWidth / -2 + 'px';
    }
  },

  computed: {
    buttonClass() {
      return this.isPlayed ? "pause" : "play";
    },
    buttonText(){
      return this.isPlayed ? "Click again to pause": this.artist.path.substring(0, this.artist.path.length -4 );
    }
  },
  watch: {
    isPlayed(shouldPlay) {
      if (shouldPlay) {
        this.player.play();
      } else {
        this.player.pause();
      }
      this.$nextTick(() => this.setBtnMarginLeft());
    }
  }
};
</script>

<style>
button {
  margin-top: 30px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 18px 48px 16px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  min-width: 160px;
  text-transform: uppercase;
  white-space: normal;
  position:absolute;
  left:50%;
  bottom: 0;
  outline:none;
}

button:disabled {
  background-color: grey;
}

.play {
  background-color: #1aa34a;
}

.pause {
  background-color: #DC143C;
}
</style>