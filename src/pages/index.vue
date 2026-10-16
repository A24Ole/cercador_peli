<template>
  <v-container class="py-8">
    <section class="mb-8">
      <h1 class="text-h4 font-weight-bold mb-1">Troba la teva pel·lícula</h1>

      <p class="text-body-1 text-medium-emphasis mb-4">
        Cerca per títol, gènere o any.
      </p>

      <v-text-field
        v-model="search"
        clearable
        hide-details
        label="Cercar pel·lícules"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
      />

      <p v-if="!loading && !error" class="text-body-2 text-medium-emphasis mt-2">
        {{ movies.length }} resultats
      </p>
    </section>

    <v-progress-linear v-if="loading" color="primary" indeterminate />

    <v-alert v-else-if="error" :text="error" type="error" variant="tonal" />

    <v-alert
      v-else-if="movies.length === 0"
      text="No s'ha trobat cap pel·lícula."
      type="info"
      variant="tonal"
    />

    <template v-else>
      <v-row>
        <v-col
          v-for="movie in pageMovies"
          :key="movie.id"
          cols="12"
          md="4"
          sm="6"
        >
          <MovieCard :movie="movie" />
        </v-col>
      </v-row>

      <v-pagination
        v-if="pageCount > 1"
        v-model="page"
        active-color="primary"
        class="mt-8"
        :length="pageCount"
      />
    </template>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref, watch } from "vue";
  import MovieCard from "@/components/MovieCard.vue";
  import { searchMovies } from "@/services/communicationManager";

  const PER_PAGE = 9;

  const search = ref("");
  const movies = ref([]);
  const loading = ref(false);
  const error = ref("");
  const page = ref(1);

  const pageCount = computed(() => Math.ceil(movies.value.length / PER_PAGE));
  const pageMovies = computed(() => {
    const start = (page.value - 1) * PER_PAGE;
    return movies.value.slice(start, start + PER_PAGE);
  });

  async function loadMovies() {
    loading.value = true;
    error.value = "";
    try {
      movies.value = await searchMovies(search.value ?? "");
      page.value = 1;
    } catch {
      error.value = "No s'ha pogut connectar amb l'API.";
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
