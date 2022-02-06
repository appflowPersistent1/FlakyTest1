<script>
	let hide = true;
</script>

<button
	on:click={() => {
		console.log('clicked');
		hide = false;
	}}>Show</button
>

<span class:hide>Content</span>

<style>
	.hide {
		visibility: hidden;
	}
</style>
