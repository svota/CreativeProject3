<template>
  <div class="home">
    <div class="title">
      <img alt="Daniel Landry" src="../../images/profile.jpg">
      <h1>Daniel Landry</h1>
    </div>
    <div class="blurb">
      <p>I'm a proven language expert with considerable success in learning and adapting to new situations, and I'd love to come work with you. My abilities to work independently, quickly, and collaboratively make me an ideal candidate for you.</p>
      <p>I work well with little oversight. As an undergraduate of BYU living outside of the US, I have learned to manage my time and focus effectively. I get my homework and work done without others having to remind me because I have my activities well-planned. I would be a delight to my managers at your company.</p>
      <p>I can work like the Flash runs. I try and get my assignments done as far ahead as possible, which has been very helpful to avoid stress in my life. I have been working a week or two ahead in my classes. I would love to get your work done faster than you ask for it!</p>
      <p>I am a whiz with remote communication. I have completed product presentations for class with team members that I have never met, as well as taught online with children in China and adult students in the US and Bolivia. I would make an effective team member.</p>
      <p>I am a language specialist who will work hard, work quickly, and communicate effectively, and I am excited for the opportunity to work with you!</p>
      <p>Contact me at svordy@gmail.com or at 601-721-8870.</p>
    </div>
    <div class="samples">
      <p>Have a look at my work</p>
    </div>

    
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title img, h1 {
  margin: 20px;
}

img {
  height: 150px;
}           

.blurb {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}

p {
  margin: 20px 0;
}
</style>
