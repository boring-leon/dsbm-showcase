import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      visitedArtists: [],
      shouldShowModal: !JSON.parse(localStorage.getItem('artistModalShown'))
    },
    mutations: {
      addVisitedArtistRoute: (state, artistID) => state.visitedArtists.push(artistID),
      hideModal : (state) => {
        state.shouldShowModal = false;
        localStorage.setItem('artistModalShown', true);
      }
    }
})

export default store;