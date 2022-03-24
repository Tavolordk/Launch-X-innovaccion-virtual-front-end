import { createRouter, createWebHistory }  from 'vue-router'
 
import Login from '../components/Login';
import Home from '../components/Home';
import Contacto from '../components/Contacto';
import Compra from '../components/Compra';
import About from '../components/About';
import Productos from '../components/Productos';
import Personalizacion from '../components/Personalizacion';
const routes = [
 {
   path: '/',
   name: 'Home',
   component: Home
 },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
   path: '/contacto',
   name: 'Contacto',
   component: Contacto
 },
 {
   path: '/compra',
   name: 'Compra',
   component: Compra
 },
 {
    path: '/about',
    name: 'About',
    component: About
 },
 {
    path: '/productos',
    name: 'Productos',
    component: Productos
 },
 {
    path: '/personalizacion',
    name: 'Personalizacion',
    component: Personalizacion
 }
]
 
const router = createRouter({
   // 4. createWebHashHistory
   history: createWebHistory(),
   routes, // short for `routes: routes`
 })
 
 export default router