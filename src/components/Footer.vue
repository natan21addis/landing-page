<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-section">
        <h3>Get Updates</h3>
        <form @submit.prevent="subscribe">
          <input type="email" placeholder="Enter your email" v-model="email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="scroll-to-top" :class="{ 'visible': isScrollVisible }" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </div>
    <div class="media-content">
      <!-- Add your media content here, like images or videos -->
      <!-- Example: -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TaskFooter',
  data() {
    return {
      email: '',
      isScrollVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() { // Use unmounted instead of destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    subscribe() {
      // Implement subscription logic here
      console.log('Subscribed with email:', this.email);
      // Clear email input after subscription
      this.email = '';
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.isScrollVisible = window.scrollY > 100; // Adjust the threshold as needed
    }
  }
}
</script>


<style scoped>
/* Your existing styles */

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease; /* Add transition for smooth visibility */
}

.scroll-to-top.visible {
  opacity: 1; /* Make the arrow visible */
}

.scroll-to-top i {
  font-size: 1.5rem;
}

/* Your existing styles */


.custom-footer {
  background-color: #ebf2f7;
  color: #181616;
  padding: 15px 0;
  text-align: center; /* Align content to center */
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.footer-section {
  flex: 1;
  margin-right: 20px; /* Add margin to separate sections */
}

.footer-section:last-child {
  margin-right: 0; /* Remove margin for the last section */
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.footer-section form {
  display: flex;
  align-items: center;
}

.footer-section input[type="email"] {
  width: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

.footer-section button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.social-icons a {
  color: #1d1b1b;
  margin-right: 10px;
  font-size: 1.5rem;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
}

.scroll-to-top i {
  font-size: 1.5rem;
}

.media-content {
  margin-top: 20px;
}

.media-content img {
  max-width: 100%;
}
</style>
