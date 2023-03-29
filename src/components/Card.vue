<script setup>
import { RouterLink } from 'vue-router';
const { burito } = defineProps(['burito']);
</script>
<template>
    <div class="col">
      <div class="card h-100">
        <img :src="burito.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ burito.title }}</h5>
          <p class="card-text">15 вопросов</p>
          <RouterLink :to="`/quizes/${burito.id}`" class="btn btn-secondary">Пройти тестирование</RouterLink>
        </div>
      </div>
    </div>
</template>
