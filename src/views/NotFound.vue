<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <h1 :class="$style.title">404</h1>
      <h2 :class="$style.subtitle">Cocktail Not Found</h2>
      <p :class="$style.message">
        Sorry, the cocktail you're looking for doesn't exist in our database.
      </p>
      <p :class="$style.availableCocktails">Available cocktails: {{ COCKTAIL_CODES.join(', ') }}</p>
      <router-link to="/" :class="$style.homeLink"> Go back to home </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COCKTAIL_CODES } from '../constants/cocktails'
</script>

<style module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
}

.content {
  text-align: center;
  max-width: 500px;
}

.title {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 2rem;
  margin: 1rem 0;
  opacity: 0.9;
}

.message {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  opacity: 0.8;
}

.availableCocktails {
  font-size: 1rem;
  margin: 1rem 0;
  opacity: 0.7;
  font-style: italic;
}

.homeLink {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.2s ease;
  margin-top: 1rem;
}

.homeLink:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 480px) {
  .title {
    font-size: 4rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .message {
    font-size: 1rem;
  }

  .homeLink {
    padding: 0.8rem 1.5rem;
  }
}
</style>
