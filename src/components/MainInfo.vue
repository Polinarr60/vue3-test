<template>
  <div :class="$style.root">
    <CocktailDetails
      v-for="cocktail in props.cocktails"
      :key="cocktail.idDrink"
      :cocktail="cocktail"
    ></CocktailDetails>
  </div>
</template>

<script setup lang="ts">
import type { Cocktail } from '@/types/cocktail'
import CocktailDetails from './CocktailDetails.vue'

const props = defineProps<{
  cocktails: Cocktail[]
}>()
</script>

<style module lang="scss">
@use '../assets/index.scss' as *;

.root {
  flex: 1;
  overflow-y: auto;
}
</style>
