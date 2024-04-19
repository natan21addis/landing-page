<template>
  <div>
    <img class="logo" alt="Vue logo" src="../assets/logoo.png" />
    <h1>Login</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="login">Login</button>
      <div class="router-link-container">
        <p>Haven't an account?</p>
        <router-link class="router-link" to="/sign-up">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
   async  login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status === 200 && result.data.length>0) {
          localStorage.setItem("user info", JSON.stringify(result.data));
          this.$router.push({name:'Home'});
        }
    },
    mounted()
    {
      let user=localStorage.getItem('user info');
      if(user)
      {
        this.$router.push({name:'Home'})
      }
    } 
  },
};
</script>
