const todos = ['study js', 'teach js', 'teach jus', 'do homework', 'do workout'];

//delete the 3rd item
todos.splice(2,1);

//add a new item at the end
todos.push('last item');

//remove the first item fro the list
todos.shift();

console.log(`You have ${todos.length} todos.`);
todos.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
});


//console.log(todos);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);



