<template>
  <v-card border class="h-100 d-flex flex-column" flat>
    <v-img :alt="movie.title" :aspect-ratio="2 / 3" cover :src="movie.image_url" />

    <v-card-item>
      <v-card-title class="font-weight-bold" :title="movie.title">
        {{ movie.title }}
      </v-card-title>

      <v-card-subtitle>{{ movie.year }}</v-card-subtitle>
    </v-card-item>

    <v-card-text class="pb-0">
      <div class="d-flex flex-wrap ga-1">
        <v-chip
          v-for="genre in movie.genre"
          :key="genre"
          size="small"
          :text="genre"
          variant="tonal"
        />
      </div>
    </v-card-text>

    <v-card-actions class="mt-auto px-4">
      <v-rating
        color="amber"
        density="compact"
        half-increments
        :model-value="movie.stars"
        readonly
        size="small"
      />

      <span class="text-body-2 text-medium-emphasis ml-1">{{ movie.stars }}</span>

      <v-spacer />

      <v-btn
        :append-icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        color="primary"
        :text="show ? 'Less' : 'More info'"
        variant="tonal"
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
