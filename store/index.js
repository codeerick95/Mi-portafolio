import api from '@/api/api.js'

export const state = () => ({
	items: [],
	products: [
		{
			id: 1,
			name: 'Producto',
			stock: 3,
			price: 10.50
		},
		{
			id: 2,
			name: 'Producto 2',
			stock: 3,
			price: 15.00
		},
		{
			id: 3,
			name: 'Producto 3',
			stock: 3,
			price: 20.00
		},
		{
			id: 4,
			name: 'Producto 4',
			stock: 0,
			price: 20.00
		}
	],
	cart: [],
	productoSeleccionado: null
})

export const mutations = {
	SET_ITEMS(state, data) {
		state.items = data
	},
	ADD_PRODUCT_CART_QUANTITY(state, product) {
		let item = state.cart.find(item => item.id === product.id)

		if(item) {
			item.quantity++
		}
	},
	ADD_PRODUCT_TO_CART(state, product) {
		state.cart.push({
			id: product.id,
			quantity: 1
		})
	},
	REMOVE_PRODUCT_FROM_CART(state, index) {
		state.cart.splice(index, 1)
	},
	DECREMENT_PRODUCT_QUANTITY(state, product) {
		product.stock--
	},
	INCREMENT_PRODUCT_QUANTITY(state, product) {
		let item = state.products.find(item => item.id === product.id)

		if(item) {
			item.stock += product.quantity
		}
	},
	ASIGNAR_PRODUCTO_SELECCIONADO(state, product) {
		state.productoSeleccionado = product
	},
	ACTUALIZAR_NOMBRE(state, value) {
		// Encontrar índice
		let index = state.products.findIndex(item => item.id === state.productoSeleccionado.id)

		// Asignar nuevo valor
		let productoAModificar = state.products[index]

		productoAModificar.name = value
	}
}

export const actions = {
	getItems({ commit }) {
		return new Promise(resolve => {
			api.getItems()
				.then(data => commit('SET_ITEMS', data))

			resolve()
		})
	},
	addProductToCart(context, product) {
		// ¿El producto tiene stock disponible?
		if(product.stock <= 0) return

		// ¿Ya existe en el carrito?
		const item = context.state.cart.find(item => item.id === product.id)

		if(item) {
			// Añadir 1 a la cantidad actual
			context.commit('ADD_PRODUCT_CART_QUANTITY', product)
		} else {
			// Añadir todo el producto
			context.commit('ADD_PRODUCT_TO_CART', product)
		}

		// Independientemente restar el stock
		context.commit('DECREMENT_PRODUCT_QUANTITY', product)
	},
	removeProductCart(context, index) {
		const item = context.state.cart[index]

		// Eliminar de carrito
		context.commit('REMOVE_PRODUCT_FROM_CART', index)

		// Restaurar inventario
		context.commit('INCREMENT_PRODUCT_QUANTITY', item)
	},
	setProductoSeleccionado({commit}, data) {
		commit('ASIGNAR_PRODUCTO_SELECCIONADO', data)
	}
}

export const getters = {
	currentUser(state) {
		return state.auth.user
	},
	todosCompleted(state) {
		return state.items.filter(item => item.completed)
	},
	productsWithStock(state) {
		return state.products.filter(item => item.stock >= 1)
	},
	productsOnCart(state) {
		return state.cart.map(item => {
			const product = state.products.find(product => product.id === item.id)

			return {
				name: product.name,
				price: product.price,
				quantity: item.quantity
			}
		})
	},
	cartTotal(state, getters) {
		let total = getters.productsOnCart.reduce((total, item) => total += item.price * item.quantity, 0)

		return parseFloat(total)
	},
	datosProductoSeleccionado(state) {
		return state.productoSeleccionado
	},
	productoConStockMinimo(state) {
		return id => {
			let producto = state.products.find(item => item.id === id)

			return producto.stock <= 1
		}
	}
}