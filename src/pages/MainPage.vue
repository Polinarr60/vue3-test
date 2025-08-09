<template>
  <div :class="$style.root">
    <SideBar
      :currentCocktail="currentCocktailFromRoute"
      @update:currentCocktail="handleCocktailChange"
    />

    <div :class="$style.content">
      <ErrorMesage v-if="error" :message="error.message" :class="$style.error" />
      <MainInfo v-else-if="!loading && cocktails" :cocktails="cocktails" />
      <div v-else-if="loading" :class="$style.loading">Loading...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCocktails } from '../composables/useCocktails'
import type { CocktailCode } from '../types/cocktail'
import { COCKTAIL_CODES } from '../constants/cocktails'
import SideBar from '@/components/SideBar.vue'
import MainInfo from '@/components/MainInfo.vue'
import ErrorMesage from '@/components/ErrorMesage.vue'

const route = useRoute()
const router = useRouter()

const currentCocktailFromRoute = computed(() => {
  return (route.params.cocktail as CocktailCode) || COCKTAIL_CODES[0]
})

const { cocktails, loading, currentCocktail, error } = useCocktails()

const handleCocktailChange = (newCocktailCode: CocktailCode) => {
  currentCocktail.value = newCocktailCode
  router.push(`/${newCocktailCode}`)
}
</script>

<style module lang="scss">
@import '../assets/global.scss';

.root {
  display: flex;
  width: 80%;
  max-width: $desktop;
  min-width: 360px;
  height: 80vh;
  min-height: 500px;
  border: 3px solid black;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;

  @media (max-width: $mobile) {
    @include flex-column;
    height: 100vh;
    min-width: 320px;
  }
}

.content {
  flex: 1;
  @include flex-column;
  overflow: hidden;
}

.loading {
  flex: 1;
  @include flex-center;
}
</style>
