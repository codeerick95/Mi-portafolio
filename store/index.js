export const state = () => ({
  appDark: false
});

export const mutations = {
  SET_DARK_MODE(state, value) {
    state.appDark = value;
  },
};

export const actions = {
  nuxtServerInit({
    commit
  }, context) {
    let darkModeValue = context.$cookies.get('erickhl-darkmode')
    commit('SET_DARK_MODE', darkModeValue)
  }
};

export const getters = {
  currentUser(state) {
    return state.auth.user;
  },
  getAppDark(state) {
    return state.appDark;
  },
};
