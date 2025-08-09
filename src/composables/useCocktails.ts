import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { COCKTAIL_CODES } from '@/constants/cocktails'
import type { CocktailCode } from '@/types/cocktail'

export function useCocktails() {
  const currentCocktail = ref<CocktailCode>(COCKTAIL_CODES[0])

  const {
    data: cocktails,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['cocktail', currentCocktail],
    queryFn: async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${currentCocktail.value}`,
      )

      if (!response.ok) {
        throw new Error(`Failed to get cocktails`)
      }

      const data = await response.json()

      if (!data.drinks) {
        throw new Error(`No cocktails found`)
      }

      return data.drinks
    },
    enabled: computed(() => !!currentCocktail.value),
  })

  return {
    cocktails,
    loading,
    error,
    currentCocktail,
  }
}
