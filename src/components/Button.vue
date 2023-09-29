<script setup>
const props = defineProps({
    text: {
        default: "button"
    }
})
</script>
<template>
    <button class="px-5 py-1 shadow rounded-md font-semibold text-black">{{ props.text }}</button>
</template>