const http = new easyHTTP;

// NOTE can test for error by putting making /posts "posts1" 
// console will log 404 error

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, Posts) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(Posts);  
//     }
// });

// // Get Single Post (w/ the id of 1 in this example)
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, Post) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(Post);  
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(Post);  
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);  
//     }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response) {
    if(err) {
      console.log(err);
    } else {
      console.log(response);  
    }
});