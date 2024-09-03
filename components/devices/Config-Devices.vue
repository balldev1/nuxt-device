<template>
  <div class="  p-5 bg-gray-100 rounded-md shadow-gray-950 shadow-sm ">
    <div class=" p-2 rounded-md text-center shadow-sm shadow-gray-950 bg-gradient-to-t from-sky-950 to-sky-900 text-white  font-bold"> System Configuration  </div>
    <div class=" grid-cols-2 gap-5 grid mt-5">
      <div class="hover:cursor-pointer  bg-gradient-to-t from-sky-900 to-sky-800 rounded-sm shadow-md shadow-gray-950 text-white   flex flex-col items-center justify-center p-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="" width="40" height="40" viewBox="0 0 20 20">
          <g fill="currentColor"><path d="M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95Z"/><path d="M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664l-3 2Z"/><path d="M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11l2 3Zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95Z"/><path d="M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664l3-2Z"/><path d="M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11l-2-3Z"/></g></svg>
        Refresh All
      </div>
      <div class="hover:cursor-pointer bg-gradient-to-b from-red-500 to-red-800 rounded-sm shadow-md shadow-gray-950 text-white  flex flex-col items-center justify-center p-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42 42"><path fill="currentColor" d="M12.5 16.5v17h3v-17h-3zm6 0v17h3v-17h-3zm6 0v17h3v-17h-3zm3-12c0-2.5-.609-3-3-3h-10c-2.52 0-2.98.55-2.98 3.01L11.5 7.5h-8c-1.48 0-2 .49-2 2v1c0 1.55.52 2 2 2h1v26c0 2.49.55 3 3 3h24c2.5 0 4-.471 4-3v-26h1c1.51 0 2-.48 2-2v-1c0-1.48-.43-2-2-2h-9v-3zm-3 0v3h-10v-3h10zm-15 8h21v24h-21v-24z"/></svg>        Delete
      </div>
      <div class="hover:cursor-pointer bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-sm   shadow-md shadow-gray-950 text-white  flex flex-col items-center justify-center p-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 7.889V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083V16.11m-18.5.001v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833V7.89m10.109-3.557l-6.476 8.76a.57.57 0 0 0-.098.228a.514.514 0 0 0 0 .253a.465.465 0 0 0 .155.196a.408.408 0 0 0 .22.065h4.894l-.742 5.71a.171.171 0 0 0 0 .105a.163.163 0 0 0 .073.074a.139.139 0 0 0 .098 0a.128.128 0 0 0 .09-.057l6.475-8.76a.562.562 0 0 0 .098-.236a.496.496 0 0 0-.195-.44a.408.408 0 0 0-.22-.066h-4.894l.742-5.71a.171.171 0 0 0 0-.105a.163.163 0 0 0-.074-.074a.139.139 0 0 0-.097 0a.13.13 0 0 0-.05.057"/></svg>
        Reboot
      </div>
      <div class="hover:cursor-pointer bg-gradient-to-b from-purple-500 to-purple-700 rounded-sm shadow-md shadow-gray-950 text-white  flex flex-col items-center justify-center p-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><g fill="currentColor"><path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84a.58.58 0 1 1 0-1.16a8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z"/><path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1c0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32c0 .84-.504 1.324-1.386 1.324h-1.6z"/></g></svg>
        Reset
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>