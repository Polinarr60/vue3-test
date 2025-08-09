import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { COCKTAIL_CODES } from '@/constants/cocktails'
import type { CocktailCode } from '@/types/cocktail'

export function useCocktails() {
  const currentCocktail = ref<CocktailCode>(COCKTAIL_CODES[0])

  const { data: cocktails, isLoading: loading } = useQuery({
    queryKey: ['cocktail', currentCocktail],
    queryFn: async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentCocktail.value}`,
      )
      const data = await response.json()
      return data.drinks
    },
    enabled: computed(() => !!currentCocktail.value),
  })

  return {
    cocktails,
    loading,
    currentCocktail,
  }
}
