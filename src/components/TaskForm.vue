<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");
import { useTaskStore } from "@/stores/taskStore";
const taskStore = useTaskStore();
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.createTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 1000000),
    });
    newTask.value = "";
  }
};
</script>

<style lang="scss" scoped></style>
