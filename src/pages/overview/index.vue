<script setup>
import { ref } from 'vue';
import provinces from '../../assets/js/province';
import citys from '../../assets/js/city';
import { sortProvinceById, sortProvinceByName, sortCityById, sortCityByName, getCityByProvince, getProvinceByCity } from '../../utils';
const render = ref(citys)
const active = ref("city")
const sortFlag = ref("")
const showListSort = ref(false)

const setRender = (arg) => {
    if (arg.toLowerCase() === "city") {
        render.value = citys
        active.value = "city"
        sortFlag.value = ""
    }

    if (arg.toLowerCase() === "province") {
        render.value = provinces
        active.value = "province"
        sortFlag.value = ""
    }
}

const setDefault = (state) => {
    if (state === 'city') {
        render.value = citys
        sortFlag.value = ""
    }

    if (state === 'province') {
        render.value = provinces
        sortFlag.value = ""
    }

    return
}

const requestSort = (state, type, field) => {
    if (type === 'none') return setDefault(state)

    let result = []
    if (state === 'city') {
        if (field === 'id') {
            result = sortCityById(type, render.value)
            sortFlag.value = `${type}Id`
        }
        if (field === 'name') {
            result = sortCityByName(type, render.value)
            sortFlag.value = `${type}Name`
        }
    }

    if (state === 'province') {
        if (field === 'id') {
            result = sortProvinceById(type, render.value)
            sortFlag.value = `${type}Id`
        }
        if (field === 'name') {
            result = sortProvinceByName(type, render.value)
            sortFlag.value = `${type}Name`
        }
    }

    render.value = result
    showListSort.value = false
}

const setCitysByProvince = (e) => {
    render.value = getCityByProvince(e.target.value)
}

const setProvinceByCity = (e) => {
    render.value = getProvinceByCity(e.target.value)
}


</script>
<template>
    <div class="p-10 text-xs sm:text-sm md:text-md">
        <div v-if="active === 'city'" class="mb-5">
            <label for="Province" class="pr-5 font-semibold text-gray-200">Select Province : </label>
            <select name="Province" id="1" class="rounded-lg shadow bg-white px-3 py-2 outline-none" @change="setCitysByProvince">
                <option selected value="none" class="text-gray-200">NONE</option>
                <option v-for="item in provinces" :value="item.id" class="text-gray-200">{{ item.name }}</option>
            </select>
        </div>
        <div v-if="active === 'province'" class="mb-5">
            <label for="Province" class="pr-5 font-semibold text-gray-200">Select City : </label>
            <select name="Province" id="1" class="rounded-lg shadow bg-white px-3 py-2 outline-none" @change="setProvinceByCity">
                <option selected value="none" class="text-gray-200">NONE</option>
                <option v-for="item in citys" :value="item.id" class="text-gray-200">{{ item.name }}</option>
            </select>
        </div>
        <div class="rounded-xl shadow bg-white overflow-hidden relative">
            <div class="absolute top-0 shadow w-full bg-white">
                <div class="float-left">
                    <button class="text-gray-100 py-3 px-5 lg:hidden bg-gray-50" @click="() => { showListSort = !showListSort }">SORT</button>
                    <div class="absolute lg:relative" :class="!showListSort ? 'hidden lg:block': ''">
                        <button class="text-gray-100 py-3 px-5 block shadow w-full bg-white lg:w-auto lg:shadow-none lg:inline-block" :class="sortFlag === 'ascId' ? '!bg-gray-50 font-semibold' : ''"
                            @click="requestSort(active, 'asc', 'id')">ASC BY ID</button>
                        <button class="text-gray-100 py-3 px-5 block shadow w-full bg-white lg:w-auto lg:shadow-none lg:inline-block" :class="sortFlag === 'descId' ? '!bg-gray-50 font-semibold' : ''"
                            @click="requestSort(active, 'desc', 'id')">DESC BY ID</button>
                        <button class="text-gray-100 py-3 px-5 block shadow w-full bg-white lg:w-auto lg:shadow-none lg:inline-block" :class="sortFlag === 'ascName' ? '!bg-gray-50 font-semibold' : ''"
                            @click="requestSort(active, 'asc', 'name')">ASC BY NAME</button>
                        <button class="text-gray-100 py-3 px-5 block shadow w-full bg-white lg:w-auto lg:shadow-none lg:inline-block" :class="sortFlag === 'descName' ? '!bg-gray-50 font-semibold' : ''"
                            @click="requestSort(active, 'desc', 'name')">DESC BY NAME</button>

                    </div>
                </div>
                <div class="float-right">
                    <button class="text-gray-100 py-3 px-5" :class="active === 'city' ? 'bg-gray-50 font-semibold' : ''"
                        @click="setRender('city')">City</button>
                    <button class="text-gray-100 py-3 px-5" :class="active === 'province' ? 'bg-gray-50 font-semibold' : ''"
                        @click="setRender('province')">Province</button>
                </div>
            </div>
            <div class="p-5 mt-10 max-h-[480px] md:max-h-[600px] overflow-auto">
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 list-disc px-5 text-gray-100">
                    <li v-for="item in render">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>