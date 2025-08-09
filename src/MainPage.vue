<template>
  <div :class="$style.root">
    <SideBar
      :currentCocktail="currentCocktailFromRoute"
      @update:currentCocktail="handleCocktailChange"
    />
    <MainInfo v-if="!loading && cocktails" :cocktails="cocktails" />
    <div v-else :class="$style.loading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MainInfo from './components/MainInfo.vue'
import SideBar from './components/SideBar.vue'
import { useCocktails } from './composables/useCocktails'
import type { CocktailCode } from './types/cocktail'
import { COCKTAIL_CODES } from './constants/cocktails'

const route = useRoute()
const router = useRouter()

const currentCocktailFromRoute = computed(() => {
  return (route.params.cocktail as CocktailCode) || COCKTAIL_CODES[0]
})

const { cocktails, loading, currentCocktail } = useCocktails()

const handleCocktailChange = (newCocktailCode: CocktailCode) => {
  currentCocktail.value = newCocktailCode
  router.push(`/${newCocktailCode}`)
}
</script>

<style module>
.root {
  display: flex;
  width: 80%;
  height: 80%;
  border: 3px solid black;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
