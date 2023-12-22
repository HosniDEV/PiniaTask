<template>
  <div class="container">
    <TaskForm />
    <div class="filter">
      <button @click="tog = 'all'">all</button>
      <button @click="tog = 'favs'">favorites</button>
      <button @click="taskStore.$reset">reset state</button>
    </div>

    <!-- all -->
    <div v-if="tog == 'all'">
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!-- favs -->
    <div v-if="tog === 'favs'">
      <div v-for="task in favs" :key="task.id" class=".task-list">
        <TaskDetails :task="task" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore.js";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { tasks, isLoading, getTasks, totalTask, favs } = storeToRefs(taskStore);
taskStore.getTasks;
const tog = ref("all");
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  height: 100vh;
  display: grid;
  place-content: center;
}
</style>
