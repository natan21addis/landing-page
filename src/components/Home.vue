<template>
  <div id="top">
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
            <a href="#top" class="button">
              <span class="material-icons">home</span>
              <span class="text">Home</span>
            </a>
            <a href="#about" class="button">
              <span class="material-icons">description</span>
              <span class="text">About</span>
            </a>
            <a href="#contact" class="button">
              <span class="material-icons">email</span>
              <span class="text">Contact Us</span>
            </a>
            <router-link to="/settings" class="button">
              <span class="material-icons">settings</span>
              <span class="text">Settings</span>
            </router-link>
            <router-link to="/login" class="button">
              <span class="material-icons">login</span>
              <span class="text">Login</span>
            </router-link>
            <router-link to="/logout" class="button">
              <span class="material-icons">logout</span>
              <span class="text">Logout</span>
            </router-link>
            <router-link to="/sign-up" class="button">
              <span class="material-icons">person_add</span>
              <span class="text">Sign-up</span>
            </router-link>
            <router-link to="/MyContacts" class="button">
              <span class="material-icons">contacts</span>
              <span class="text">MyContacts</span>
            </router-link>
          </div>

          <div class="flex"></div>
          <div class="menu" :class="{ 'visible': isExpanded }">
            <!-- Additional menu items -->
          </div>
        </aside>

        <!-- Logo and navigation links -->
        <router-link to="/" class="logo">
          <img src="../assets/logoo.png" alt="Vue" />
          <span>ONTACT_HUB</span>
        </router-link>
        <ul class="nav-links">
          <li><router-link to="/"><span class="material-icons">home</span> Home</router-link></li>
          <li><router-link to="/MyContacts"><span class="material-icons">contacts</span> MyContacts</router-link></li>
          <li v-if="!loggedIn"><router-link to="/login"><span class="material-icons">login</span> Login</router-link></li>
          <li v-if="!loggedIn"><router-link to="/sign-up"><span class="material-icons">person_add</span> Signup</router-link></li>
        </ul>

      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" :class="{ 'pushed': isExpanded }" :style="{ marginLeft: heroMarginLeft }">
      <div class="hero-content">
        <h1>Effortless Contact Management</h1>
        <p>Simplify your life with our intuitive contact handling platform.</p>
        <router-link to="/sign-up" class="btn btn-primary">Get Started</router-link>
      </div>
    </section>

    <!-- Main Content Area -->
    <div class="main-content" :class="{ 'pushed': isExpanded }" :style="{ marginLeft: mainContentMarginLeft }">
      <router-view></router-view>
    </div>

    <!-- Elements below the hero section -->
    <div class="elements-below-hero" :class="{ 'is-expanded': isExpanded }" :style="{ marginLeft: belowHeroMarginLeft }">
      <!-- Content here -->
      <!-- About Section -->
      <AboutSection></AboutSection>
      <contact-page></contact-page>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import AboutSection from './AboutSection.vue';
import contactPage from './ContactPage.vue';
import Footer from './Footer.vue';



export default {
  name: 'TaskHome',
  components: {
    AboutSection,
    contactPage,
    Footer,
  },
  data() {
    return {
      loggedIn: false,
      isExpanded: false,
      sidebarWidth: '125px',
      heroMarginLeft: '0',
      mainContentMarginLeft: '0',
      belowHeroMarginLeft: '0'
    };
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
      localStorage.setItem("is_expanded", this.isExpanded.toString());

      if (this.isExpanded) {
        this.heroMarginLeft = this.sidebarWidth;
        this.mainContentMarginLeft = this.sidebarWidth;
        this.belowHeroMarginLeft = this.sidebarWidth;
      } else {
        this.heroMarginLeft = '0';
        this.mainContentMarginLeft = '0';
        this.belowHeroMarginLeft = '0';
      }
    }
  },

};
</script>

<style scoped>
/* Navigation bar styles */

@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
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
/* Additional style for logo and text */
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  margin-right: -310px; /* Adjust the margin between logo and text */
}

.logo span {
  font-size: 1rem; /* Adjust the font size of the text */
  font-weight: bold;
  color: #010007;
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
.nav-links li :hover{
  font-size: 18px;
  color: #007bff;
}

/* Hero section styles */
.hero {
  background-image: url("../assets/hero.webp");
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding: 100px 0;
  text-align: center;
  transition: margin-left 0.3s ease;
  margin-top: 116px; /* Adjust the margin-top to move the hero section downwards */
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

/* Sidebar styles */

/* Adjusted styles for the aside element */
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

.is-expanded aside {
  width: 20px; /* Adjusted width */
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

.menu-toggle-wrap .menu-toggle {
  transition: 0.2s ease-in-out;
}

.menu-toggle-wrap .menu-toggle .material-icons {
  font-size: 2rem;
  color: var(--light);
  transition: 0.2s ease-out;
}

.menu-toggle-wrap .menu-toggle.reversed .material-icons {
  transform: rotate(180deg);
}

.menu-toggle-wrap .menu-toggle:hover .material-icons {
  color: var(--primary);
  transform: translateX(0.5rem);
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

.visible {
  opacity: 1;
}

/* Adjusted styles for menu items */
.menu .button {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  margin-left: -2rem; /* Adjusted margin */
}

.menu .button .material-icons {
  font-size: 2rem;
  color: rgba(3, 0, 41, 0.829);
  transition: 0.2s ease-in-out;
}

.menu .button .text {
  color: black;
  transition: 0.2s ease-in-out;
}

.menu .button:hover {
  background-color: var(--dark-alt);
}

.menu .button:hover .material-icons,
.menu .button:hover .text {
  color: var(--primary);
}

.menu .button.router-link-exact-active {
  background-color: var(--dark-alt);
  border-right: 5px solid var(--primary);
}

.menu .button.router-link-exact-active .material-icons,
.menu .button.router-link-exact-active .text {
  color: black;
}

/* Adjusted styles for the flex container */
.flex {
  flex: 1 1 0%;
}

/* Footer styles */
.footer {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.footer p {
  font-size: 0.875rem;
  color: var(--grey);
}

/* Apply styles when the sidebar is expanded */
.is-expanded {
  margin-left: var(--sidebar-width);
}

.is-expanded .menu-toggle-wrap {
  top: 1rem;
  left: 5rem;
}

.is-expanded .menu-toggle-wrap .menu-toggle {
  transform: rotate(-180deg);
}

.is-expanded h3,
.is-expanded .menu {
  opacity: 1;
}

.is-expanded .button .material-icons {
  margin-right: 0rem;
}

.is-expanded .footer {
  opacity: 0;
}

/* Define media query for smaller screens */
@media (max-width: 768px) {
  aside {
    position: absolute;
    z-index: 99;
  }

  .is-expanded .navbar {
    margin-left: var(--sidebar-width);
  }

  .is-expanded .hero,
  .is-expanded .main-content,
  .is-expanded .elements-below-hero {
    margin-left:var(--sidebar-width);
  }
}
</style>
