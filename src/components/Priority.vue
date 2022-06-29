<template>
  <div>
    <h2 class="font-bold text-2xl ml-10 md:ml-16 lg:ml-48">Part 2</h2>
    <div class="ml-10 md:ml-16 lg:ml-48 mr-10 md:mr-16 lg:mr-48 py-5">
      <h2 class="font-bold text-2xl">What are your top business priorities?</h2>
      <span class="font-bold">Rank up to five based on importance</span>
      <div
        class="mt-4 flex flex-col md:flex-row justify-between h-full gap-y-5 md:gap-x-5 rounded-lg bg-white"
      >
        <div
          class="relative flex flex-[50%] min-h-full rounded-lg items-center justify-center p-5 bg-stone-700"
        >
        <span v-if="!list1.length>0" class="absolute text-white text-sm font-thin">Önceliklerinizi buraya sürükleyebilirsiniz.</span>
          <draggable
            class="h-full w-full flex flex-col justify-center"
            :class="[!list1.length>0?'md:border md:border-white md:border-dashed':'']"
            v-model="list1"
            group="people"
            @start="drag = true"
            @end="drag = false"
            item-key="id"
  
          >
            <template #item="{ element, index }">
              <div
                class="cursor-pointer flex mb-2 bg-t4 text-gray-700 p-2 rounded-lg text-center"
              >
                <span class="font-bold">Priority #{{ index + 1 }}</span>
                <span class="m-auto">{{ element.name }}</span>
                <XIcon class="ml-auto w-5 hover:scale-125" @click="removeItem(element.name,index)"/>
              </div>
            </template>
          </draggable>
        </div>
        <div
          class="flex-[50%] min-h-full p-5 rounded-lg items-center justify-center bg-stone-700"
        >
          <draggable
            class="h-full w-full flex flex-row gap-1 flex-wrap items-center justify-center"
            v-model="list2"
           group="people"
            @start="drag = true"
            @end="drag = false"
            item-key="id"
            :move="checkMove"
            :sort="false"
          >
            <template #item="{ element }">
              <div
                class="cursor-pointer mb-2 bg-t4 text-gray-700 p-2 rounded-lg text-center"
              >
                {{ element.name }}
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import draggable from "vuedraggable";
import { XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const drag = ref(false);
const list1 = ref([]);
const list2 = ref([
  { name: "Retention", id: 1 },
  { name: "Diversity & Inclusion", id: 2 },
  { name: "Learning & Development", id: 3 },
  { name: "Pay for Performance", id: 4 },
  { name: "Workforce Planning", id: 5 },
  { name: "Quality of Hire", id: 6 },
  { name: "Organization Structure", id: 7 },
  { name: "Cost of Labor", id: 8 },
]);
const checkMove = () => {
  if (list1.value.length === 5) {
    return false;
  }
};


const removeItem = (name, index) => {
  list1.value.splice(index, 1)
  
  list2.value = [...list2.value,{name,id:index+1}]
}
</script>
<style></style>
