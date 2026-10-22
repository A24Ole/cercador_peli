<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <v-container class="d-flex align-center">
        <v-icon class="mr-3" icon="mdi-movie-open" />
        <span class="text-h6 font-weight-bold">Movie Search</span>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
