import { createRouter } from 'vue-router'
import { COCKTAIL_CODES } from '../constants/cocktails'
import MainPage from '../MainPage.vue'
import { createWebHistory } from 'vue-router'
import type { CocktailCode } from '@/types/cocktail'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: `/${COCKTAIL_CODES[0]}`,
    },
    {
      path: '/:cocktail',
      component: MainPage,
      beforeEnter: (to) => {
        const cocktail = to.params.cocktail as string
        if (!COCKTAIL_CODES.includes(cocktail as CocktailCode)) {
          return `/${COCKTAIL_CODES[0]}`
        }
      },
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', redirect: `/${COCKTAIL_CODES[0]}` },
  ],
})

export default router
