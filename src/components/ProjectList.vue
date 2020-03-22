<template>
  <div class="wrapper">
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <div class="title">
          <h2><a :href="'//' + project.url" target="_blank">{{ project.title }}</a></h2>
        </div>
        <div class="description">
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    projects: Array
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
}

.project {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px auto;
  margin: 30px;
}

.title {
  grid-column-start: 1;
  grid-column-end: 2;
  text-align: right;
}

.description {
  grid-column-start: 2;
  grid-column-end: 3;
  width: 300px;
  text-align: left;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
