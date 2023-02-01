import axios from 'axios'

export const apiCodeBurger = axios.create({
    baseURL:'apiburger-production.up.railway.app'
})