//Create an object literal for the properties of twitter post which includes : username, content, likes, repost, tage

const post = {
  username: "Salonimishra25",
  content: "Software Developer",
  likes: 1000,
  reposts: 100,
  tags: ["abhishek", "jahnvi", "aashi"],
};
console.log(post);

//update or change Value
console.log("Updated Data : ");
post.reposts = 120;
post.tags[2] = "priyanka";
console.log(post);
console.log("-------------------\n");

//Add value
console.log("Added Data : ");
post.followers = 500;
post.following = 100;
console.log(post);

//delete value
delete post.reposts;
console.log(post);