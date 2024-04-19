<template>
  <!-- About Section -->
  <section id="about" class="about-section about-section--about">
    <div class="container">

      <div class="about-content about-content--about">
        <div class="about-description about-description--about">
          <p class="about-paragraph">
            CONTACT_HUB is a comprehensive contact management platform designed
            to streamline your contact-related tasks. With CONTACT_HUB, you can
            efficiently organize, manage, and communicate with your contacts.
          </p>
          <h2 class="about-heading">Our features</h2>
          <p class="about-paragraph">
            Our platform offers a range of features to enhance your contact
            management experience, including:
          </p>
        </div>
        <div class="feature-boxes">
          <!-- First Row -->
          <div
            class="feature-box animated-item"
            v-for="(feature, index) in features"
            :key="index"
          >
            <div class="feature-icon">
              <i class="fas" :class="feature.icon"></i>
            </div>
            <div class="feature-text">{{ feature.text }}</div>
            <div class="feature-description">{{ feature.description }}</div> <!-- New description -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      features: [
        { icon: "fa-database", text: "Unified Contact Repository", description: "A centralized repository for storing all contact information, enabling easy access and efficient management of your contacts data." },
        { icon: "fa-sitemap", text: "Contact Organization", description: "Effortlessly categorize and organize your contacts according to various parameters, ensuring a structured approach to managing your contacts." },
        { icon: "fa-file-import", text: "Contact Import/Export", description: "Seamlessly import contacts from external sources and export contacts to other platforms or file formats, enhancing interoperability and data sharing." },
        { icon: "fa-sync-alt", text: "Contact Sync", description: "Synchronize contacts across multiple devices or platforms, ensuring consistent and up-to-date contact information wherever you are." },
        { icon: "fa-user-check", text: "Contact Interaction Tracking", description: "Track and monitor interactions with contacts, gaining valuable insights into communication history and ensuring timely follow-ups." },
        { icon: "fa-cog", text: "Customizable Contact Fields", description: "Tailor contact fields to match your specific business requirements and workflow preferences, providing flexibility and adaptability." },
        { icon: "fa-search", text: "Search and Filter", description: "Efficiently search and filter contacts based on various criteria, enabling quick access to relevant contacts and improving productivity." },
        { icon: "fa-share-alt", text: "Contact Sharing", description: "Share contact lists or individual contacts with team members or collaborators, fostering collaboration and enhancing teamwork." },
        { icon: "fa-bell", text: "Reminders and Notifications", description: "Set reminders and receive notifications for important events or tasks related to contacts, ensuring timely follow-ups and engagements." },
      ],
    };
  },
  mounted() {
    // Call the method to initialize Intersection Observer
    this.observeListItems();
  },
  methods: {
    observeListItems() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75, // When 100% of the element is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, index * 600); // Delay each box by 200ms
            observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observe each feature box
      document.querySelectorAll(".animated-item").forEach((box) => {
        observer.observe(box);
      });
    },
  },
};
</script>

<style scoped>
/* Import Font Awesome styles */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

/* About section styles */
.about-section--about {
  background-color: #f9f9f9;
  padding: 100px 0;
}

.about-section--about .container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-heading {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #010324;
  text-align: center;
}

.about-content--about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.about-description--about {
  margin-bottom: 40px;
}

.about-paragraph {
  font-size: 1.6em;
  line-height: 1.6;
  color: #918784;
}

/* Styling for feature boxes */
.feature-boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 0;
}

.feature-box {
  width: 200px;
  height: 280px;
  margin: 20px;
  padding: 20px;
  background-color: #f3eeee;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease; /* Adjusted transition duration */
}

.feature-box:hover {
  transform: translateY(-5px);
  background: #fdfdfd;
}

.feature-icon {
  font-size: 30px;
  color: #040d83;
  margin-bottom: 10px;
}

.feature-text {
  font-size: 1.5rem;
  color: #0f0f0f;
  text-align: center;
}

.feature-description {
  font-size: 1.2rem;
  color: #05192b;
  text-align: center;
  margin-top: 15px; /* Added margin for better spacing */
}

/* Initial state of animated items */
.animated-item {
  opacity: 0;
  transform: translateY(20px);
}

/* Animation for items when they intersect with the viewport */
.animated-item.animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
