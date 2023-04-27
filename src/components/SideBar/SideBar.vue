<script>
export default {

}
</script>

<template>
    <div class="text-center p-2 -ml-10 shadow min-h-screen bg-[#F2EAE1]">
        <a href="#"><strong class="text-[20px] border-l-4 border-[#F8D442] whitespace-nowrap px-5">CRUD OPERATIONS</strong></a>
        <div>
            <img class="mx-auto rounded-[50%] mt-14 h-40 whitespace-nowrap" src="../icons/userPhoto.png" alt="userPhoto">
            <h2 class="text-xl whitespace-nowrap"><strong>Karthi Madesh</strong></h2>
            <p class="text-[#FEAF00] p-2">Admin</p>
        </div>
        <ul class="w-[150px] text-start mx-auto" v-for="i in this.$store.state.sidebar">
            <router-link :to="i.link" :key="i.id" @click="this.$store.state.id = i.id">
                <li class="flex items-center h-12 cursor-pointer rounded-md px-3" :class="{'bg-[#FEAF00]':this.$store.state.id==i.id}" >
                    <i class="w-10 text-2xl pt-2" :class="i.icon"></i><span class="inline-block">{{ i.title }}</span>
                </li>
            </router-link>
        </ul>
        <div class="flex absolute bottom-0 left-[70px] py-10 overflow-hidden" :class="{'w-0': this.$store.state.header}">
            <button>Logout</button><i class='bx bxs-log-in text-2xl ml-5'></i>
        </div>
    </div>
</template>