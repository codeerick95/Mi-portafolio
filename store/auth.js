import { auth } from '@/plugins/firebase'

export const state = () => ({
	usuarioLogueado: false
})

export const mutations = {
	ASIGNAR_USUARIO_LOGUEADO(state, value) {
		state.usuarioLogueado = value
	}
}

export const actions = {
	login({commit}, data) {
		let { email, password } = data

		auth.signInWithEmailAndPassword(email, password)
		  .then((user) => {
		    console.log(user)
		    commit('ASIGNAR_USUARIO_LOGUEADO', true)
		  })
		  .catch((error) => {
		    var errorCode = error.code;
		    var errorMessage = error.message;
		    console.log(errorMessage)
		  });
	}
}