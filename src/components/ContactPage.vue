<template>
  <div id="contact" class="contact-page">
    <div class="contact-container">
      <div class="contact-content">
        
        <p>reach out us using.</p>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="contact-image">
        <img src="../assets/contact.webp" alt="Contact Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
  background-color: #f7f7f7;
  padding: 50px 0;
}

.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.contact-content {
  flex: 1;
  padding: 0 20px;
  text-align: left;
}

.contact-content h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.contact-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.contact-image {
  flex: 1;
  padding: 0 20px;
  position: relative;
}

.contact-image img {
  max-width: 100%;
  border-radius: 5px;
  border: 2px solid #007bff;
  transition: transform 0.3s ease;
}

.contact-image img:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-content,
  .contact-image {
    padding: 0;
    width: 100%;
  }
}
</style>
