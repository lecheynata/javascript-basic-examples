const user = {
	name: 'John',
	lastname: 'Doe',
	username: '@johndoe',
	location: {
		planet: 'Tatooine'
	}
}

const username = user.username ? user.username : null

console.log(username)
