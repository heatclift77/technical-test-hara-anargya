<script setup>
  import SideNav from './components/SideNav.vue'
  import Header from './components/Header.vue'
  import Dialog from './components/Dialog.vue'
</script>
<template>
  <Dialog v-if="false" />
  <div class="flex h-screen">
    <SideNav />
    <div class="w-[100vw] lg:w-[85vw]">
      <div class="h-[7.5vh]">
        <Header />
      </div>
      <div class="h-[92.5vh]">
        <div class="bg-gray-50 h-full">
          <router-view class="px-7 py-5"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
