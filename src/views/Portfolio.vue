<template>
  <div class="wrapper">
    <h1>Portfolio</h1>
    <ProjectList :projects="projects"/>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue"
export default {
  name:  'Portfolio',
  components: {
    ProjectList
  },
  data() {
    return {
    }
  },
  computed: {
    projects() {
      return this.$root.$data.projects;
    }
  },
}
</script>
