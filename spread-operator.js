const user1 = {
	name: 'John',
	lastname: 'Doe',
	username: '@johndoe',
	location: {
		planet: 'Tatooine'
	}
}

const user2 = {
	name: 'Luke',
	lastname: 'Skywalker',
	username: '@lukeskywalker',
	location: {
		planet: 'Tatooine',
		system: 'Sistema Tatoo'
	}
}

const user = { ...user1, ...user2 }

console.log(user)
