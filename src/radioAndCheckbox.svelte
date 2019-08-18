<script>
	var scoops = 0;
	var items = [];
	var scoopOptions = [1,2,3,4];
	var menu = ['a', 'b', 'c'];
</script>

{#each scoopOptions as scoop}
	<label>
		<input type=radio bind:group={scoops} value={scoop}>
		 select {scoop} scoops
	</label>
{/each}

<hr />
{#each menu as item}
	<label>
		<input type=checkbox bind:group={items} value={item}>
		 select {item} flavor
	</label>
{/each}

<p>
	number of scoops selected is {scoops}
</p>
<p>
	items selected are {items}
</p>