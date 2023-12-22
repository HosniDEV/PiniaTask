import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    isLoading: false,
  }),
  getters: {
    async getTasks() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3000/tasks");
      this.tasks = await res.json();
      this.isLoading = false;
    },
    // naming function u could easily access the proprieties within the state propritie
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },
    // anonymous function u u dont have to use the keyword this
    totalTask: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    // create task
    async createTask(task) {
      this.tasks.push(task);

      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },
    // delete task
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    // UPDATE  TASK
    async addFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
