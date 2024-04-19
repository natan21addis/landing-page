<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="container">
        <!-- Sidebar -->
        <aside :class="{ 'is-expanded': isExpanded }">
          <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
              <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
          </div>

          <h3 :class="{ 'visible': isExpanded }">Menu</h3>
          <div class="menu">
            <!-- Menu items here -->
          </div>
        </aside>

        <!-- Logo and navigation links -->
        <router-link to="/" class="logo">
          <img src="../assets/logoo.png" alt="Vue" />
          <span>ONTACT_HUB</span>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/"><span class="material-icons">home</span> Home</router-link></li>
          <li><router-link to="/sign-up"><span class="material-icons">contacts</span> MyContacts</router-link></li>
          <li v-if="!loggedIn"><router-link to="/login"><span class="material-icons">login</span> Login</router-link></li>
          <li v-if="!loggedIn"><router-link to="/sign-up"><span class="material-icons">person_add</span> Signup</router-link></li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TaskNavbar',
  data() {
    return {
      loggedIn: false,
      isExpanded: false,
      sidebarWidth: '250px', // Adjusted sidebar width
    };
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
      localStorage.setItem("is_expanded", this.isExpanded.toString());
    }
  },
};
</script>

<style scoped>
/* Navigation bar styles */
nav {
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar {
  background-color: #ffffff;
  padding: 1px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  margin-left: -150px;
  margin-top: -20px;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.nav-links button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}

/* Define styles for the aside element */
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: var(--sidebar-width);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  transition: width 0.2s ease-in-out;
}

/* Define styles for the menu toggle button */
.menu-toggle-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  position: absolute;
  top: 0;
  transition: 0.2s ease-in-out;
}

/* Define styles for the menu heading */
h3 {
  color: var(--grey);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.visible {
  opacity: 1;
}

/* Define styles for the menu items */
.menu {
  margin: 100px 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.menu .button {
   display: flex;
   align-items: center;
   text-decoration: none;
   transition: 0.2s ease-in-out;
   padding: 0.5rem 1rem;
   margin-left: -2rem; /* Adjusted margin */
 }
/* Define styles for the flex container */
.flex {
  flex: 1 1 0%;
}

/* Apply styles when the sidebar is expanded */
.is-expanded {
  margin-left: var(--sidebar-width);
}

.is-expanded .menu-toggle-wrap {
  top: 1rem;
  left: 5rem;
}

.is-expanded h3,
.is-expanded .menu {
  opacity: 1;
}

/* Adjust other sections when sidebar expands */
.pushed {
  transition: margin-left 0.3s ease;
}

.hero.pushed {
  margin-left: var(--sidebar-width);
}

.main-content.pushed {
  margin-left: var(--sidebar-width);
}

.elements-below-hero.pushed {
  margin-left: var(--sidebar-width);
}
</style>