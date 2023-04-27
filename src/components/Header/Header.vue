<script>
export default {

}
</script>
<template>
    <div class="flex justify-between items-center text-[15px] p-2 shadow">
        <div @click="this.$store.state.header = !this.$store.state.header">
            <i v-if="!this.$store.state.header" class='bx bx-log-out text-2xl cursor-pointer'></i>
            <i v-else class='bx bx-log-in text-2xl cursor-pointer'></i>
        </div>
        <div class="flex gap-10 items-center">
            <div>
                <input type="text" class="border-2 rounded-[5px] p-1 px-5" placeholder="Search...">
                <i class='bx bx-search-alt-2 -ml-8'></i>
            </div>
            <div>
                <i class='bx bx-bell'></i>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>