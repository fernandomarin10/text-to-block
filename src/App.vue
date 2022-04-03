<template>
  <nav>
    <router-link to="/post">Post</router-link> |
    <router-link to="/read">Read</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
export default {
  name: "App",
  setup() {
    onBeforeMount(()=> {
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
