const DefaultController = require("./src/controllers/DefaultController");
const postTags = require("./inputs/post_tags");

let input = postTags;
let flexGen = new DefaultController(input)
console.log(flexGen.run())