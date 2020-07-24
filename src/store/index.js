import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      visitedArtists: []
    },
    mutations: {
      addVisitedArtistRoute (state, artistID) {
        state.visitedArtists.push(artistID);
      }
    }
})

export default store;