<script>
export default {

}
</script>

<template>
    <div class="bg-[#8080803b]">
        <div class="flex justify-between items-center p-5 ]">
            <h1 class="font-bold text-2xl">Students List</h1>
            <div class="flex justify-between w-1/5">
                <svg class="my-5" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.6 11.375H1.39998C0.157481 11.375 -0.472519 12.8574 0.411231 13.7211L6.01123 19.2211C6.55811 19.7582 7.44623 19.7582 7.99311 19.2211L13.5931 13.7211C14.4681 12.8574 13.8425 11.375 12.6 11.375ZM6.99998 18.25L1.39998 12.75H12.6L6.99998 18.25ZM1.39998 8.625H12.6C13.8425 8.625 14.4725 7.14257 13.5887 6.2789L7.98873 0.7789C7.44186 0.241791 6.55373 0.241791 6.00686 0.7789L0.406856 6.2789C-0.468144 7.14257 0.157481 8.625 1.39998 8.625ZM6.99998 1.74999L12.6 7.24999H1.39998L6.99998 1.74999Z"
                        fill="#FEAF00" />
                </svg>
                <button class="px-3 my-2 h-10 rounded-xl bg-yellow-300">ADD NEW STUDENT</button>
            </div>
        </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col" class="pl-0 px-6">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Email
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Phone
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Enroll Number
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Date of admission
                        </th>
                        <th scope="col" class="py-3"></th>
                        <th scope="col" class="py-3 px-6"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6">
                            <img class="h-14 w-14 rounded" src="../components/icons/userPhoto.png" alt="">
                        </th>
                        <td>
                            Karthi
                        </td>
                        <td class="py-4 px-6">
                            karthi@gmmail.com
                        </td>
                        <td class="py-4 px-6">
                            7305477760
                        </td>
                        <td class="py-4 px-6">
                            1234567305477760
                        </td>
                        <td class="py-4 px-6">
                            08-Dec, 2021
                        </td>
                        <td>
                            <i class='bx bxs-pencil text-yellow-400'></i>
                        </td>
                        <td>
                            <i class='bx bxs-trash text-yellow-400'></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>