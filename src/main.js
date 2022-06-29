import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import Header from "./components/Header.vue";
import Description from "./components/Description.vue";
import Question from "./components/Question.vue";
import Priority from "./components/Priority.vue";
import FormSubmit from "./components/FormSubmit.vue";
import Footer from "./components/Footer.vue";
import ScroolToTopButton from "./components/ScroolToTopButton.vue";

const app = createApp(App);

app.component("Header", Header);
app.component("Description", Description);
app.component("Question", Question);
app.component("Priority", Priority);
app.component("FormSubmit", FormSubmit);
app.component("Footer", Footer);
app.component("ScroolToTopButton", ScroolToTopButton);
app.mount("#app");
