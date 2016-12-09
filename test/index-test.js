var level = require('level')
var Secondary = require('level-secondary')
var sub = require('level-sublevel')

var db = sub(level(__dirname + '/db', {
  valueEncoding: 'json'
}))

var posts = db.sublevel('posts')

// add a title index
posts.byTitle = Secondary(posts, 'title')

// add a length index
// append the post.id for unique indexes with possibly overlapping values
posts.byLength = Secondary(posts, 'length', function(post){
  return post.body.length + '!' + post.id
})

posts.put('1337', {
  id: '1337',
  title: 'a title',
  body: 'lorem ipsum'
}, function(err) {
  if (err) throw err

  posts.byTitle.get('a title', function(err, post) {
    if (err) throw err
    console.log('get', post)
    // => get: { id: '1337', title: 'a title', body: 'lorem ipsum' }

    posts.del('1337', function(err) {
      if (err) throw err
      posts.byTitle.get('a title', function(err) {
        console.log(err.name)
        // => NotFoundError
      })
    })
  })

})
