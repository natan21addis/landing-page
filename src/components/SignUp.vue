<template>
  <div>
    <div class="form-container">
      <img class="logo" alt="Vue logo" src="../assets/logoo.png" />
      <h1>Sign Up</h1>
      <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button @click="signUp">Sign Up</button>
      </div>
    </div>
    <div class="router-link-container">
      <p>Have an Account ?</p>
      <router-link class="router-link" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  data() {
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods: {
    async signUp() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          email: this.email,
          password: this.password,
          name: this.name
        });
        console.log(response);
        if (response.status === 201) {
          localStorage.setItem("user info", JSON.stringify(response.data));
          this.$router.push({name:'Home'});
        } else {
          // Handle other HTTP status codes if needed
          alert("Failed to sign up. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error.message);
        alert("Failed to sign up. Please try again later.");
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
