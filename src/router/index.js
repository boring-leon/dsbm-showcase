import Vue from 'vue'
import VueRouter from 'vue-router'
import ArtistView from '../views/Artist.vue';
import HomeView from '../views/Home.vue';
import artists from '../artists';

const getArtists = () => artists.sort((a, b) => a.text.localeCompare(b.text))

const getArtist = name => artists.find(i => i.text.toLowerCase() == name);

Vue.use(VueRouter)

  const routes = [
    { 
      path: '/artist/:name', 
      name: 'artist',
      component: ArtistView,
      props: (route) => ({ artist: getArtist(route.params.name) }),
      beforeEnter: (to, from, next) => {
        artists.find(a => a.text.toLowerCase() == to.params.name) ? next() : next('/');
      }
    },
    {
      path: '*',
      name: 'home',
      component: HomeView,
      props:{
        artists: getArtists()
      }
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
