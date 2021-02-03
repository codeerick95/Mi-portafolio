export default {
	getItems() {

		let url = 'https://jsonplaceholder.typicode.com/todos'

		return fetch(url)
			.then(res => res.json())
			.then(data => data)
	}
}