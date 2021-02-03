import api from '@/api/api.js'

export const state = () => ({
	items: []
})

export const mutations = {
	SET_ITEMS(state, data) {
		state.items = data
	}
}

export const actions = {
	getItems({ commit }) {
		return new Promise(resolve => {
			api.getItems()
				.then(data => commit('SET_ITEMS', data))

			resolve()
		})
	}
}