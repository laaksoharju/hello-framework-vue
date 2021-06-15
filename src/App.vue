<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "@/components/NavBar.vue";

  export default {
    components: {
      NavBar
    }
  }
</script>
<style>

:root {
  --background: #fff;
  --text: #282c34;
  --link: #2196f3;
  --white: #fff;
}

body {
  background-color: var(--background);
  color: var(--text);
  transition: 0.5s;
}

.dark {
    --background: #282c34;
    --text: #fff;
    --link: #61dafb;
    --white: #fff;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: var(--link);
}

a.router-link-exact-active {
  color: var(--link);
}

</style>
