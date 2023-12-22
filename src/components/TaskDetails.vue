<template>
  <div class=".task-list">
    <div class="task">
      <h3>{{ task.title }}</h3>
      <div class="icons">
        <i class="material-icons" @click="taskStore.deleteTask(task.id)"
          >delete</i
        >
        <i
          class="material-icons"
          @click="taskStore.addFav(task.id)"
          :class="{ active: task.isFav }"
          >favorite</i
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/taskStore";
const taskStore = useTaskStore();
defineProps({
  task: Object,
});
</script>
<style scoped>
.active {
  color: red;
}
</style>
