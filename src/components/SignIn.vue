<script>
export default {

}
</script>
<template>
    <div class="bg-[#FFFF] flex flex-col w-[500px] p-14 my-auto rounded-xl">
        <div class="text-center">
            <a href="#"><strong class="border-l-4 text-[25px] border-[#F8D442] px-5">CRUD OPERATIONS</strong></a>
            <h1 class="mt-10 p-2 font-bold">SIGN IN</h1>
            <p class="text-gray-400">Enter your credentials to access your account</p>
        </div>
        <form class="pt-10">
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email" required>
            </div>
            <div class="mb-6">
                <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input type="password" id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your password" required>
            </div>
            <div class="flex justify-center" @click="this.$store.state.signin = !this.$store.state.signin">
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    SIGN IN
                </button>  
            </div>
            <p class="text-center p-2">Forgot your password? <a href="#" class="text-yellow-800">Reset Password</a></p>
        </form>
    </div>
</template>