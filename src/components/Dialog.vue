<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
    user: {
        default: {}
    },
    state: {
        default: false,
    },
    onClose: {
        default: () => {}
    }
}) 

</script>
<template>
    <Transition>
        <div class="h-screen w-screen fixed top-0 left-0 flex z-50 bg-color" v-if="props.state">
            <div
                class="rounded-lg shadow absolute p-5 bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[320px] md:w-[480px] lg:w-[550px] backdrop-opacity-50">
                <button class="absolute top-[20px] right-[20px]" @click="props.onClose">
                    <Icon icon="ic:round-close" height="24" width="24" color="red" />
                </button>
                <div class="flex flex-col md:flex-row items-center justify-center sm:justify-start w-full">
                    <div
                        class="w-[84px] h-[84px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden mb-3 md:mb-0 md:mr-7">
                        <img class="w-full" :src="props?.user?.profile_picture" alt="avatar">
                    </div>
                    <div class="text-center md:text-left">
                        <h1 class="font-bold text-[16px] lg:text-[40px]">{{ props?.user?.first_name }} {{
                            props.user?.last_name }}</h1>
                        <p class="font-bold text-[12px] lg:text-[20px]">{{ props?.user?.email }}</p>
                        <p class="font-bold text-[12px] lg:text-[20px]">{{ props?.user?.phone }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-1 mt-7 text-xs sm:text-sm md:text-md lg:text-lg my-auto">
                    <div>
                        <h2 class="font-bold">City</h2>
                        <p class="text-gray-200">{{ props.user.city }}</p>
                    </div>
                    <div>
                        <h2 class="font-bold">Country</h2>
                        <p class="text-gray-200">{{ props.user.country }}</p>
                    </div>
                    <div>
                        <h2 class="font-bold">Date Of Birth</h2>
                        <p class="text-gray-200">{{ props.user.city }}</p>
                    </div>
                    <div>
                        <h2 class="font-bold">Gender</h2>
                        <p class="text-gray-200">{{ props.user.gender }}</p>
                    </div>
                    <div>
                        <h2 class="font-bold">Job</h2>
                        <p class="text-gray-200">{{ props.user.job }}</p>
                    </div>
                    <div>
                        <h2 class="font-bold">Street</h2>
                        <p class="text-gray-200">{{ props.user.street }}</p>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style scoped>
.bg-color {
    background-color: rgba(247, 248, 250, 0.5);
}
</style>