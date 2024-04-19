<template>
	<aside :class="{ 'is-expanded': isExpanded }">
		<div class="logo">
			<img :src="logoURL" alt="Vue" />
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="toggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3 :class="{ 'visible': isExpanded }">Menu</h3>
		<div class="menu" :class="{ 'visible': isExpanded }">
			<router-link to="/" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class="material-icons">description</span>
				<span class="text">About</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class="material-icons">group</span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Contact</span>
			</router-link>
		</div>

		<div class="flex"></div>

		<div class="menu" :class="{ 'visible': isExpanded }">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(localStorage.getItem("is_expanded") === "true")

const toggleMenu = () => {
	isExpanded.value = !isExpanded.value
	localStorage.setItem("is_expanded", isExpanded.value.toString())
}
</script>

<style scoped>

</style>
