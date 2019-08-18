<script>
  function createPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var n = (Math.random() * 10).toFixed(0);
        if (n >= 5) {
          resolve(`passed with ${n} marks`);
        } else {
          const err = new Error(`failed with ${n} marks`);
          reject(err);
        }
      }, 2000);
    });
  }
  let p = createPromise();
  function handleClick() {
    p = createPromise();
  }
</script>

<style>
  .passed {
    color: green;
  }
  .failed {
    color: red;
  }
</style>

<button on:click={handleClick}>Get Next result</button>
{#await p}
  <p>getting result...</p>
{:then x}
  <p class="passed">{x}</p>
{:catch err}
  <p class="failed">{err.message}</p>
{/await}
