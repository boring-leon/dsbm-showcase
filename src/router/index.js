import Vue from 'vue'
import VueRouter from 'vue-router'
import ArtistView from '../views/Artist.vue';
import HomeView from '../views/Home.vue';
import artists from '../artists';

const getShuffledArtists = () => artists.sort(() => Math.random() - 0.5);

const getArtist = name => artists.find(i => i.text.toLowerCase() == name);

Vue.use(VueRouter)

  const routes = [
    { 
      path: '/artist/:name', 
      name: 'artist',
      component: ArtistView,
      props: (route) => ({ artist: getArtist(route.params.name) })
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props:{
        artists: getShuffledArtists()
      }
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
