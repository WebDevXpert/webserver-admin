import React from 'react'

const Bu = () => {
    return (
        <div className="">


            <div class="relative  ">
                <table class="w-full mt-40  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-sm  text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                BU Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Bill Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Account Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-7 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                BU5500X
                            </th>
                            <td class="px-7 py-4">
                                Electric
                            </td>
                            <td class="px-10 py-4">
                                00143782342
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-7 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                AF8920X
                            </th>
                            <td class="px-5 py-4">
                                Natural Gas
                            </td>
                            <td class="px-10 py-4">
                                00892658122
                            </td>

                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-7 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                LH0215U
                            </th>
                            <td class="px-7 py-4">
                                Propane
                            </td>
                            <td class="px-10 py-4">
                                00786299744
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Bu
