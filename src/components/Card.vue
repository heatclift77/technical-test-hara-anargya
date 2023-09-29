<script setup>
import Transfer from '../assets/svg/transfer.svg'
import { Icon } from '@iconify/vue';
import { thousands } from '../utils';
const props = defineProps({
    data: {
        default: {}
    }
})

</script>
<template>
    <div class="rounded-xl shadow bg-white overflow-hidden">
        <div class="px-5 py-3">
            <div class="mb-1 flex justify-between items-center">
                <p class="font-semibold text-gray-400 text-[12px]">{{ props.data.status }}</p>
                <button>
                    <img :src="Transfer" alt="icon" />
                </button>
            </div>
            <div class="mb-2">
                <h3 class="font-bold text-[20px]">{{ thousands(props.data.amount) }}</h3>
            </div>
        </div>
        <div class="bg-gray-50 flex">
            <div class="px-5 py-3 flex justify-between w-full">
                <div class="flex text-[11px] font-semibold">
                    <div class="flex items-center mr-3">
                        <Icon icon="mdi:arrow-bottom-right" class="mr-1" width="14px" height="14px" color="#f87171"
                            v-if="props.data.isDefisit" />
                        <Icon icon="mdi:arrow-top-right" class="mr-1" width="14px" height="14px" color="#4ade80"
                            v-if="props.data.isProfit" />
                        <p :class="props.data.isDefisit ? 'text-red-400' : 'text-green-400'">{{ props.data.percent.toString() }}%</p>
                    </div>
                    <p class="text-[#9A9A9A]">Last Month</p>
                </div>
                <button class="text-gray-400 font-semibold text-[12px]">View More</button>
            </div>
        </div>
    </div>
</template>