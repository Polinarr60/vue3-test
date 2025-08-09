import { computed, type Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import type { CocktailCode } from '@/types/cocktail'

export function useCocktails(cocktail: Ref<CocktailCode>) {
  const {
    data: cocktails,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['cocktail', cocktail],
    queryFn: async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail.value}`,
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
    enabled: computed(() => !!cocktail.value),
  })

  return {
    cocktails,
    loading,
    error,
  }
}
