<script setup>
import Button from '../components/Button.vue';
import dayjs from 'dayjs';

const props = defineProps({
    columns: {
        default: []
    },
    list: {
        default: []
    }
})

</script>
<template>
    <div class="rounded-xl shadow-md bg-white">
        <div class="p-5">
            <h1 class="font-bold text-[20px]">User List</h1>
        </div>
        <div class="overflow-auto w-full">
            <table class="min-w-[1400px] w-full">
                <thead class="bg-gray-50">
                    <tr class="h-[49px] px-5">
                        <th class="text-gray-100 font-normal text-left pl-5 text-[12px]" v-for="item in props.columns">
                            <p class="font-bold">{{ item.name }}</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="shadow h-[49px]" v-for="item in props.list">
                        <td class="pl-5 text-[12px]">{{ item.id }}</td>
                        <td class="pl-5 text-[12px]">
                            <div class="flex">
                                <div class="w-[24px] h-[24px] rounded-full overflow-hidden mr-3">
                                    <img class="w-full h-full" :src="item.profile_picture" alt="avatar">
                                </div>
                                <p><span>{{ item.first_name }}</span> <span>{{ item.last_name }}</span></p>
                            </div>
                        </td>
                        <td class="pl-5 text-[12px]">{{ dayjs(item.date_of_birth).format('DD / MM / YYYY') }}</td>
                        <td class="pl-5 text-[12px]">{{ item.email }}</td>
                        <td class="pl-5 text-[12px]">{{ item.job }}</td>
                        <td class="pl-5 text-[12px]">{{ item.country }}</td>
                        <td class="pl-5 text-[12px]">
                            <div class="flex">
                                <Button class="mr-3" text="Select" />
                                <Button class="my-auto" text="View Detail" @click="$emit('setDialog', { state: true, data: item })" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
td:nth-child(odd) {
    color: #686868;
}

td:nth-child(even) {
    font-weight: 700;
}
</style>