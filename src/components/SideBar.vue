<template>
  <div :class="$style.root">
    <div
      :class="[$style.cocktail, { [$style.active]: props.currentCocktail === cocktail }]"
      v-for="cocktail in COCKTAIL_CODES"
      :key="cocktail"
      @click="emit('update:currentCocktail', cocktail)"
    >
      {{ cocktail }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { COCKTAIL_CODES } from '../constants/cocktails'
import type { CocktailCode } from '../types/cocktail'

const props = defineProps<{
  currentCocktail: CocktailCode
}>()

const emit = defineEmits<{
  (e: 'update:currentCocktail', cocktail: CocktailCode): void
}>()
</script>

<style module>
.root {
  flex: 0 0 33%;
  border-right: 3px solid black;
  display: flex;
  flex-direction: column;
}

.cocktail {
  width: 100%;
  padding: 12px 16px;
  cursor: pointer;
  text-transform: capitalize;

  &.active {
    background-color: gray;
    color: white;
    border-color: black;
  }
}
</style>
