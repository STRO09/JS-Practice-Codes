function getUser(id) {
  return new Promise((resolve,reject)=> {
    if(id) {
        resolve("User of"+id)
    }
    else {
        reject("User Id invalid")
    }
  });
}

function getPosts(user) {
  return new Promise((resolve,reject)=> {
    if(user) {
        resolve("Posts of"+user)
    }
    else {
        reject("User Invalid")
    }
  });
}

function getComments(posts) {
  return new Promise( (resolve,reject)=> {
    if(posts) {
        resolve("Comments of"+posts)
    }
    else {
        reject("No posts found")
    }
  });
}


getUser(false)
  .then(user => getPosts(user))
  .then(posts => getComments(posts))
  .then(comments => {
    console.log("Done!", comments);
  })
  .catch(error => {
    console.log("Error:", error);
  });


