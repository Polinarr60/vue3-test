import { createRouter } from 'vue-router'
import { COCKTAIL_CODES } from '../constants/cocktails'
import { createWebHistory } from 'vue-router'
import type { CocktailCode } from '@/types/cocktail'
import NotFound from '@/pages/NotFound.vue'
import MainPage from '@/pages/MainPage.vue'

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
        const cocktail = to.params.cocktail as CocktailCode
        if (!COCKTAIL_CODES.includes(cocktail)) {
          return '/404'
        }
      },
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
})

export default router
