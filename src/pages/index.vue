<template>
  <v-container>
    <h1 class="mb-4">Cercador de pel·lícules</h1>

    <v-text-field
      v-model="search"
      clearable
      label="Buscar por título, género o año"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
    />

    <v-progress-linear v-if="loading" class="mb-4" indeterminate />

    <v-alert v-else-if="error" class="mb-4" :text="error" type="error" />

    <p v-else-if="movies.length === 0">No se han encontrado películas.</p>

    <v-row v-else>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        cols="12"
        md="4"
        sm="6"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted, ref, watch } from "vue";
  import MovieCard from "@/components/MovieCard.vue";
  import { searchMovies } from "@/services/communicationManager";

  const search = ref("");
  const movies = ref([]);
  const loading = ref(false);
  const error = ref("");

  async function loadMovies() {
    loading.value = true;
    error.value = "";
    try {
      movies.value = await searchMovies(search.value ?? "");
    } catch {
      error.value = "No se ha podido conectar con la API.";
    } finally {
      loading.value = false;
    }
  }

  let timer;
  watch(search, () => {
    clearTimeout(timer);
    timer = setTimeout(loadMovies, 300);
  });

  onMounted(loadMovies);
</script>
