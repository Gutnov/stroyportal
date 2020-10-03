o2.header =
{
	init() {
		const app = new Vue({
			el: '#header',
			data: {
				search: '',
				todos: []
			},
			delimiters: ['{', '}'],
			computed: {
				filteredTodos() {
					return this.todos.filter(item => item.title.indexOf(this.search) !== -1)
				}
			},
			beforeMount() {
				let arr;
				fetch('https://jsonplaceholder.typicode.com/todos')
					.then(response => response.json())
					.then(json => {
						this.todos = json
					})
			},
			methods: {
				cat() {
					console.log(this.filteredTodos)
				}
			},
			
		})
	}
}