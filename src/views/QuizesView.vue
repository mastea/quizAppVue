<script setup>
import Card from '../components/Card.vue'
import { ref, watch } from "vue";
import q from "../data/predmety.json";

const quizes = ref(q);
const searchQuiz = ref("");

watch(searchQuiz, () => {
  quizes.value = q.filter(predmet => predmet.title.toLowerCase().includes(searchQuiz.value.toLowerCase()));
});
</script>

<template>
  <div class="container">
    <nav class="navbar bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand text-light">Проверьте свои знания с QuizApp</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" v-model="searchQuiz" placeholder="Поиск предметов..." aria-label="Search" />
        </form>
      </div>
    </nav>
    <div class="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
      <Card v-for="quiz in quizes" :key="quiz.id" :burito="quiz" />
    </div>
  </div>
</template>

<style scoped>
div.row {
    margin-top: 20px;
}
</style>