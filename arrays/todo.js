const todos = [{
  text: 'study js',
  completed: true
},
{
  text: 'teach js',
  completed: false
},
{
  text: 'teach jus',
  completed: true
},
{
  text: 'do homework',
  completed: false
},
{
  text: 'do workout',
  completed: true
}];

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if(index > -1) {
    todos.splice(index, 1);
  }
};
deleteTodo(todos, 'do homework');
console.log(todos);

// //delete the 3rd item
// todos.splice(2,1);

// //add a new item at the end
// todos.push('last item');

// //remove the first item fro the list
// todos.shift();

// console.log(`You have ${todos.length} todos.`);

// todos.forEach((todo, index) => {
//   console.log(`${index + 1}. ${todo}`);
// });

// for(let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1} ${todos[i]}`);
// }


//console.log(todos);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);



