<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Artist from "./components/Artist.vue";
import artists from "./artists";

export default {
  name: "App",
  components: { Artist }
};
</script>
