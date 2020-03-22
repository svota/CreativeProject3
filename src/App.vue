<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/experience">Work Experience</router-link>
    </div>
    <router-view/>
    <Footer url="https://github.com/svota/CreativeProject3"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
