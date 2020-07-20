<template>
  <div id="app">
    <transition name="fade" mode="out-in" appear>
      <router-view ></router-view>
    </transition>
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
