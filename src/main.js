// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });


// import App from './checkResult.svelte';
import Todo from './todo/todo.svelte';

const app = new Todo({
	target: document.body,
});

export default app;