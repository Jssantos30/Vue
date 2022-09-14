import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Favoritos from '@/views/Favoritos.vue'
import Datos from '@/views/Datos.vue'

const routes = [{path: '/', name: 'Home', component: Home},
                {path: '/favoritos', name: 'Favoritos', component: Favoritos},
                {path: '/datos', name: 'Datos', component: Datos}
            ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router