<script setup>
import { useRoute } from "vue-router";
import quizes from "../data/predmety.json";

const route = useRoute();
const quiz = quizes.find((q) => q.id === route.params.id);
</script>
<template>
  <div class="content">
    <div class="text">
      <h2>{{ quiz.title }}</h2>
      <p>{{ quiz.description }}</p>
    </div>
    <img :src="quiz.image" />
  </div>
</template>
<style scoped>
.content {
    margin-top: 20px;
}
.text {
  width: 55%;
  float: left;
  margin-right: 2%;
}
img {
  width: 30%;
  float: left;
}
</style>
