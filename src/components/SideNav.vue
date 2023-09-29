<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue';
import menu1 from '../assets/svg/menu1.svg';
import menu2 from '../assets/svg/menu2.svg';

const router = useRoute()
const menus = ref([])
watchEffect(() => {
    menus.value = [
        {
            to: "dasboard",
            name: "Dasboard",
            active: router.name == 'dasboard',
            img: menu2,
        },
        {
            to: "overview",
            name: "Overview",
            active: router.name == 'overview',
            img: menu1,
        }
    ]
})

const setActive = (idx) => {
    const dataMap = menus.value.map((item, index) => {
        if (index === idx) {
            return {
                ...item,
                active: true
            }
        } else {
            return {
                ...item,
                active: false
            }
        }
    })

    menus.value = dataMap
}

</script>

<template>
    <div class="pl-7 pt-7 pr-3 shadow w-[280px] h-screen hidden lg:block">
        <h1 class="font-bold text-4xl mb-7">heylink.</h1>
        <ul>
            <li v-for="(item, index) in menus">
                <router-link class="text-gray-200 w-full rounded-lg block py-3 hover:text-gray-200 px-2 font-semibold"
                    :class="{ 'bg-sky-100': item.active }" :to="item.to" @click="setActive(index)">
                <img :src="item.img" alt="icon" /></router-link>
            </li>

        </ul>
    </div>
</template>