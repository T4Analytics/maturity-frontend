<template>
  <div>
    <h2 class="font-bold text-2xl ml-10 md:ml-16 lg:ml-48">Part 1</h2>
  
    <div
      class="flex flex-col justify-center items-start ml-10 md:ml-16 lg:ml-48 mr-10 md:mr-16 lg:mr-48 py-5"
      v-for="question in questions"
      :key="question.questionNumber"
    >
      <h3 class="font-bold">
        {{ question.questionNumber }}. {{ question.questionText }}
       
      </h3>
     
      <form>
        <div v-for="answer in question.answers" :key="answer.id" class="mt-3">
          <input
            type="radio"
            :id="answer.id"
            name="answers"
            :value="answer.text"
            @change="onChange(question.questionNumber, answer.text)"
            class="mr-2 accent-red-500"
          />
          <label :for="answer.id">{{ answer.text }}</label>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineProps(["questions"]);
const onChange = (questionNumber, answer) => {
  let index = answers.value.findIndex(
    (x) => x.questionNumber === questionNumber
  );

  if (index === -1) {
    answers.value.push({
      questionNumber,
      answer,
    });
  } else {
    answers.value[index] = {
      questionNumber,
      answer,
    };
  }

  answers.value.sort((a, b) => {
    return a.questionNumber - b.questionNumber;
  });
};
const answers = ref([]);
</script>