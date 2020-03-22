<template>
  <div class="wrapper">
    <div class="jobs">
      <div class="job" v-for="job in jobs" :key="job.id">
        <div class="line">
          <div class="title">
            <h2>{{ job.title }}</h2>
          </div>
          <div class="dates">
            <p>{{ job.start }} - {{ job.end }}</p>
          </div>
        </div>
        <div class="line">
          <div class="company">
            <h3>{{ job.company }}</h3>
          </div>
          <div class="location">
            <p>{{ job.state }}, {{ job.country }}</p>
          </div>
        </div>
        <div class="description">
          <p>{{ job.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceList',
  props: {
    jobs: Array
  }
}
</script>

<style scoped>
.jobs {
}

.job {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 500px;
}

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title, .company, .description {
  text-align: left;
}
</style>
