<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <div :class="$style.info">
        <h2>{{ cocktail.strDrink }}</h2>
        <div :class="$style.details">
          <p><strong>Category:</strong> {{ cocktail.strCategory }}</p>
          <p><strong>Type:</strong> {{ cocktail.strAlcoholic }}</p>
          <p><strong>Glass:</strong> {{ cocktail.strGlass }}</p>
        </div>
      </div>

      <div :class="$style.imageContainer">
        <img
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
          :class="$style.image"
          width="120"
          height="120"
          loading="lazy"
        />
      </div>
    </div>

    <div :class="$style.info">
      <h3>Instructions:</h3>
      <p>{{ cocktail.strInstructions }}</p>
    </div>

    <div :class="$style.info">
      <h3>List of ingredients:</h3>
      <ul :class="$style.details">
        <li v-for="ingredient in ingredients" :key="ingredient.name" :class="$style.ingredient">
          <span :class="$style.measure">{{ ingredient.measure || '' }}</span>
          <span :class="$style.name">{{ ingredient.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Cocktail } from '../types/cocktail'

const props = defineProps<{
  cocktail: Cocktail
}>()

const ingredients = computed(() => {
  return Object.entries(props.cocktail)
    .filter(([key, value]) => key.startsWith('strIngredient') && value?.trim())
    .map(([key, ingredient]) => {
      const index = key.replace('strIngredient', '')
      const measure = props.cocktail[`strMeasure${index}` as keyof Cocktail] as string
      return {
        name: (ingredient as string).trim(),
        measure: measure?.trim() || '',
      }
    })
})
</script>

<style module>
.root {
  width: 100%;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.header {
  display: flex;
  gap: var(--gap);
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.imageContainer {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border: 2px solid black;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.ingredientsList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.ingredient {
  display: flex;
  gap: var(--gap);
}

.measure {
  min-width: 80px;
  flex-shrink: 0;
}

.name {
  flex: 1;
}
</style>
