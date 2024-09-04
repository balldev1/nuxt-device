<template>
  <!--   header   -->
  <div class=" h-full pl-70   px-10 py-5 ">
    <div class="min-h-screen rounded-md  pb-8 pt-4 px-5 bg-white shadow-sm shadow-gray-500  ">
      <div class="pl-4  pb-2">
        <div class="flex items-center  ">
          <div
              class=" flex p-2 px-4 gap-3 items-center rounded-md bg-gradient-to-t from-sky-950 to-sky-900 shadow-md shadow-gray-400">
            <div
                class=" p-2 rounded-md   shadow-sm hover:scale-105 transform transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-400" width="40" height="40" viewBox="0 0 24 24"><rect width="9" height="9" x="1.5" y="1.5" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="1.5" fill="currentColor" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="13.5" y="13.5" fill="currentColor" rx="1"><animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect><rect width="9" height="9" x="1.5" y="13.5" fill="currentColor" rx="1"><animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="1.5;.5;1.5"/><animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="13.5;12.5;13.5"/><animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/><animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1" values="9;11;9"/></rect></svg>
            </div>
            <div class="flex flex-col ">
              <h1 class="text-white font-bold text-xl ">Dashboard </h1>
              <span class="text-sm  text-gray-300">Nt Next, through Technology</span>
            </div>
          </div>
        </div>
        <div class="border-b-2 border-sky-950 pt-2"/>
      </div>
      <!--   content   -->
      <div class=" ml-4">
        <StatusDashboard/>
        <TableDashboard/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TableDashboard from "~/components/dashboard/Table-Dashboard.vue";
import StatusDashboard from "~/components/dashboard/Status-Dashboard.vue";

</script>

<!--bg-gradient-to-b from-sky-950  to-sky-950-->