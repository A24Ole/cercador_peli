import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  theme: {
    defaultTheme: "system",
    themes: {
      light: { colors: { primary: "#C62828" } },
      dark: { colors: { primary: "#EF5350" } },
    },
  },
});
