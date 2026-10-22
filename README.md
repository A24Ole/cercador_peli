# Movie Search

A responsive single-page application for exploring a movie catalog. Users can search movies by title, genre or release year and browse the results in a paginated card grid showing each film's poster, genres, rating and synopsis. The interface adapts to desktop and mobile screens and follows the system's light or dark theme.

**Live demo:** http://a24oleproyat.dam.inspedralbes.cat/movie-search/

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vuetify](https://vuetifyjs.com/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/)
- [ESLint](https://eslint.org/)
- [DevsApiHub Movies API](https://devsapihub.com/)

## Getting started

Requirements: Node.js 20.19+ and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/prochkoyatsko/movie-search-vuetify.git
cd movie-search-vuetify/movie-search
pnpm install
pnpm dev
```

The app runs at http://localhost:3000. To create a production build, run `pnpm build`.

## Project structure

```
movie-search/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   └── MovieCard.vue    # Movie card with expandable synopsis
│   ├── pages/
│   │   └── index.vue        # Search page: search field, results grid, pagination
│   ├── plugins/             # Vuetify and router registration
│   ├── router/              # Route definitions
│   ├── services/
│   │   └── movieService.js  # API requests and search filtering
│   ├── App.vue              # Application shell
│   └── main.js              # Entry point
├── index.html
├── package.json
└── vite.config.mjs
```

## Deployment

The app is deployed automatically with **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). On every push to `main` that changes the `movie-search/` folder, the workflow:

1. Installs the dependencies with pnpm.
2. Runs ESLint and creates the production build (`pnpm build`).
3. Copies the generated `dist/` folder to the web server over SSH.
