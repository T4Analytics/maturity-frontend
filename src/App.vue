<script setup>
import questionsJson from "./questions.json";
import { ref } from "vue";
const questions = ref([]);

questionsJson.questions.forEach((question) => {
  questions.value.push(question);
});
</script>

<template>
  <Header />
  <Question :questions="questions" />
  <Priority />
  <FormSubmit />
  <Footer />
  <ScroolToTopButton />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px 0px;
  background: url("./src/assets/bg-image.jpg") no-repeat center top;
  background-size: contain;
  height: 100%;
  font-family: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: #212529;
  background-color: #fff;
  border-top: 36px solid #a6ffff;
}
@media (min-width: 768px) {
  #app {
    gap: 100px 0px;
  }
}
</style>
