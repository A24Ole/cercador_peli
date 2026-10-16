<template>
  <v-card border class="h-100" flat>
    <v-img :alt="movie.title" cover height="300" :src="movie.image_url" />
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-subtitle>{{ movie.year }} · {{ movie.genre.join(", ") }}</v-card-subtitle>

    <v-card-text class="pb-0">
      <v-rating
        density="compact"
        half-increments
        :model-value="movie.stars"
        readonly
        size="small"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        :append-icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        :text="show ? 'Menos info' : 'Más info'"
        @click="show = !show"
      />
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-card-text>{{ movie.description }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
  import { ref } from "vue";

  defineProps({
    movie: { type: Object, required: true },
  });

  const show = ref(false);
</script>
