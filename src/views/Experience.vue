<template>
  <div class="wrapper">
    <h1>Work Experience</h1>
    <ExperienceList :jobs="jobs"/>    
  </div>
</template>

<script>
import ExperienceList from "../components/ExperienceList.vue"
export default {
  name: 'Experience',
  components: {
    ExperienceList
  },
  data() {
    return {
    }
  },
  computed: {
    jobs() {
      return this.$root.$data.work;
    }
  },
}
</script>
