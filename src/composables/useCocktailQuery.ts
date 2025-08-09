import { computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { cocktailApi, cocktailKeys } from '../api/cocktails'
import type { CocktailCode } from '../types/cocktail'

export function useCocktailQuery(cocktailCode: CocktailCode) {
  const {
    data: cocktails,
    isLoading,
    error,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: cocktailKeys.byCode(cocktailCode),
    queryFn: () => cocktailApi.getCocktailsByCode(cocktailCode),
    enabled: !!cocktailCode, // запрос выполняется только если есть код
  })

  // Computed свойства для удобства
  const hasData = computed(() => !!cocktails.value && cocktails.value.length > 0)
  const hasError = computed(() => isError.value)
  const isEmpty = computed(() => !isLoading.value && !hasError.value && !hasData.value)

  return {
    // Данные
    cocktails,
    loading: isLoading,
    error,

    // Состояния
    hasData,
    hasError,
    isEmpty,
    isFetching, // фоновое обновление

    // Методы
    refetch, // ручная перезагрузка
  }
}
