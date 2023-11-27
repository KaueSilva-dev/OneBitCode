const Author = require('./author');

const john = new Author('John Johnes');

const post = john.writePost('Títutlo do Post', 'Lorem ipsum let...');

post.addComment('Isaac', 'Muito bom!');
post.addComment('Lucas', 'achei legal');

console.log(john);
console.log(post);