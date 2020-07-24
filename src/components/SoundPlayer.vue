<template>
  <div class="player-container">
    <template v-if="isLoaded">
      <p class="player-info" v-if="!isPlayed">Click the button or press space to play</p>
      <p class="player-info" v-else>Use arrows to control volume (current vol {{ volume }})</p>
      <button :class="buttonClass" @click="isPlayed = !isPlayed">{{ buttonText }}</button>
    </template>
    <button disabled v-else>Your song is loading...</button>
  </div>
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
      volume: 0.5,
      player: null,
      isPlayed: false,
      isLoaded: false,
      publicPath: process.env.BASE_URL
    };
  },
  
  mounted() {
    this.player = new Howl({
      src: [`${this.publicPath}audio/${this.artist.path}`],
      volume: this.volume,
      autoload: true
    });

    this.player.once("load", () => {
      this.isLoaded = true;
    });

    document.body.onkeyup = e => {
      this.bindSpaceToButtonAction(e);
      this.bindArrowsToVolumeControl(e);
    };

    this.$nextTick(() => this.setContainerMarginLeft());
  },
  beforeDestroy() {
    this.player.unload();
  },

  methods: {
    setContainerMarginLeft(
      container = document.querySelector(".player-container")
    ) {
      const parent = document.querySelector(".text-center");
      container.style.marginLeft = parent.offsetWidth / -2 + "px";
    },
    bindSpaceToButtonAction(e) {
      if (e.keyCode == 32) {
        this.isPlayed = !this.isPlayed;
      }
    },
    bindArrowsToVolumeControl(e) {
      if (e.keyCode == 38 && this.isPlayed) {
        this.changeVolumeBy(0.1);
      } else if (e.keyCode == 40 && this.isPlayed) {
        this.changeVolumeBy(-0.1);
      }
    },
    changeVolumeBy(val) {
      let vol = Math.round((this.player.volume() + val) * 10) / 10;
      vol = vol < 0 ? 0 : vol;
      vol = vol > 1 ? 1 : vol;
      this.volume = vol;
    }
  },

  computed: {
    buttonClass() {
      return this.isPlayed ? "pause" : "play";
    },
    buttonText() {
      return this.isPlayed ? "Click me or press space to pause" : this.songName;
    },
    songName() {
      return this.artist.path.substring(0, this.artist.path.length - 4);
    }
  },
  watch: {
    isPlayed(shouldPlay) {
      if (shouldPlay) {
        this.player.play();
      } else {
        this.player.pause();
      }
      this.$nextTick(() => this.setContainerMarginLeft());
    },
    volume() {
      this.player.volume(this.volume);
    }
  }
};
</script>

<style scoped>
.player-container {
  left: 50%;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 5px 5px 5px;
}

.player-info {
  font-style: italic;
  margin-bottom: 10px;
  color: grey;
  font-size: 1.8rem;
}

@media only screen and (max-width: 768px) {
  .player-info {
    display: none;
  }
}

.play {
  background-color: #1aa34a;
}

.pause {
  background-color: #dc143c;
}
</style>