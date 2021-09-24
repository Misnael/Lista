const input = document.getElementById('todo');
const button = document.getElementById('add')
const list = document.getElementById('list');

const todos = [
  { text: 'Hej på Dig!', done: false }
  { text: 'Programmera', done: true }
  { text: 'Gå hem', done: false }
];

button.addEventListener('click', onButtonClicked);

updateView();

function onButtonClicked() {

  // Arrayfunktionen push lägger till en item till arrayns sista plats.
  todos.push(input.value);

  updateView();
}

function updateView(){

  list.innerHTML = ('');

  for(let i = 0; i < todos.length; i++)
{
   // 1. Skapa ett li element: <li></li>
   const li = document.createElement('li');
  // 2. Ändra på texten inuti li-elementet: <li>Programmera</li>
  li.textContent = todos[i];
  // 3. Lägg till li-elementet till vårt ul-element
  list.appendChild(li);

  li.addEventListener('click', onItemClicked);
}
}


function onItemClicked(e) {
  if(e.target.style.textDecoration) 
  {
    e.target.style.textDecoration = null;
  }
  else 
  {
    e.target.style.textDecoration = 'line-through';
  }
}