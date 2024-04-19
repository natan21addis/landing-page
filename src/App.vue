<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.logo {
  width: 500px;
  height: 100px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(180px);
}

.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.register button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.router-link-container {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.router-link-container p {
  margin-right: 10px;
  color: #333;
  font-size: 16px;
}

.router-link {
  color: skyblue;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid rgb(24, 149, 199);
  border-radius: 4px;
  transition: color 0.3s ease;
}

.router-link:hover {
  color: dodgerblue;
}

h1 {
  font-size: 44px;
  color: rgb(68, 191, 240);
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 768px) {
   .register input,
  .login input,
  .register button,
  .login button,.router-link-container ,{
    width: 40%;
    margin-left:auto;
    margin-right:auto;
  }
  .logo{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }


}
</style>
