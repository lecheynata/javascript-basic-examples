const posts = [
  {
    id: 1,
    title: 'Mi primer post',
    image: 'https://img.com/',
    tags: ['tag1', 'tag2', 'tag3']
  },
  {
    id: 2,
    title: 'Mi segundo post',
    image: 'https://img.com/',
    tags: ['tag1', 'tag2', 'tag3']
  },
  {
    id: 3,
    title: 'Mi tercer post',
    image: 'https://img.com/',
    tags: ['tag1', 'tag2', 'tag3']
  }
]

const post = posts.some(post => post.title == 'Mi primer post')
console.log(post)
