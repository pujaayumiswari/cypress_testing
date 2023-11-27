<template>
  <div>
    <h1>Add Your Activity</h1>
    <form class="form" @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add new item"/>
      <button class="btn" type="submit">Add</button>
    </form>
    <div class="contain">
      <div class="main" v-for="(todo, index) in todos" :key="index">
        <h3>My Activity</h3>
        {{ todo }}
        <div class="btn-2">
        <button class="edit" @click="editTodo(index)">Edit</button>
        <button class="delete" @click="deleteTodo(index)">Delete</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = '';
      }
    },
    editTodo(index) {
      const updatedTodo = prompt('Edit the item:', this.todos[index]);
      if (updatedTodo !== null) {
        this.todos[index] = updatedTodo;
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
body{
  background-color: black;
  color: white;
}

.form input{
 width: 100%;
 height: 40px;
 border-radius: 5px;
 padding: 10px;
}

.btn {
  background-color: rgb(255, 200, 0);
  margin-top: 30px;
  width: 80%;
}

.main {
  margin-top: 30px;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 6px;
}

.btn-2 button {
margin: 8px;
background-color: bisque;
margin-top: 20px;
}


</style>
