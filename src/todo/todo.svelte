<script>
  let todos = [];
  let todoDesc = "";

  function onAddTodo() {
    if (!todoDesc) { return }
    const creationTime = new Date();
    todos = [...todos, { creationTime, desc: todoDesc, completed: false }];
    todoDesc = "";
  }

  function clearCompleted() {
    todos = todos.filter(todo => {
      return !todo.completed;
    });
  }

  function groupTodo() {
    todos = todos.sort((a,b) => a.completed - b.completed);
    console.log('sordting', todos);
  }
</script>

<style>
  input {
    border: 2px solid grey;
    border-radius: 5px;
    outline: none;
  }
  button {
    border-radius: 5px;
    background-color: blue;
    color: white;
    border: none;
    outline: none;
  }
  input:focus {
    border: 2px solid skyblue;
  }
  .todo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .todoContainer {
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.25em;
    margin: 5px 0;
    width: 100%;
  }
  .completed {
    background-color: green;
  }
  .pending {
    background-color: purple;
  }
</style>

<div class="todo">
  <div>
    <input bind:value={todoDesc} placeholder="Enter todo desc" />
    <button on:click={onAddTodo}>Add Todo</button>
  </div>
  {#each todos as todo, index (todo.creationTime.getTime())}
    <div
      class={todo.completed ? 'todoContainer completed' : 'todoContainer pending'}>
      <label>
        <input type="checkbox" bind:checked={todo.completed} />
        {todo.desc}
      </label>
    </div>
  {/each}

  {#if todos.length > 0}
    <div>
      <button on:click={clearCompleted}>Clear completed</button>
      <button on:click={groupTodo}>Group Items</button>
    </div>
  {/if}
</div>
