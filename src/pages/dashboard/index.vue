<script setup>

import Card from "../../components/Card.vue";
import Table from "../../components/Table.vue";
import UserService from "../../services/user.service";
import { ref, watchEffect } from 'vue';
import Dialog from '../../components/Dialog.vue';
const response = ref({})
const dialog = ref({})
const dialogState = ref(false)
watchEffect(async () => {
    response.value = await UserService.getUser()
})

const tableColums = [
    {
        id: 1,
        name: "ID",
    },
    {
        id: 2,
        name: "User",
    },
    {
        id: 3,
        name: "Date Of Birth",
    },
    {
        id: 4,
        name: "Email",
    },
    {
        id: 5,
        name: "Job",
    },
    {
        id: 6,
        name: "Country",
    },
    {
        id: 7,
        name: "Action",
    },
]

const payment_mock = [
    {
        amount: 2480,
        status: "Pending",
        isProfit: true,
        isDefisit: false,
        percent: 2.15,
    },
    {
        amount: 84310,
        status: "Paid",
        isProfit: false,
        isDefisit: true,
        percent: 1.10,
    },
    {
        amount: 12155,
        status: "Rejected",
        isProfit: true,
        isDefisit: false,
        percent: 2.15,
    },
]

const setDialog = data => {
    dialog.value = data
    dialogState.value = true
}

const closeDialog = () => {
    dialogState.value = false
}

</script>

<template>
    <div>
        <div class="mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="item in payment_mock">
                <Card :data="item" />
            </div>
        </div>
        <Table :columns="tableColums" :list="response.users" @set-dialog="setDialog" />
        <Dialog :user="dialog?.data" :state="dialogState" :onClose="closeDialog" />
    </div>
</template>