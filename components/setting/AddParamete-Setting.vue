<template>
  <div>
    <div
        class="flex gap-2 items-center justify-center text-white  mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class=""
           viewBox="0 0 14 14">
        <path fill="currentColor" fill-rule="evenodd"
              d="M0 3.5A3.5 3.5 0 0 1 3.5 0h7A3.5 3.5 0 0 1 14 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 0 10.5zm7-.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25"
              clip-rule="evenodd"/>
      </svg>
      add paramete
    </div>
    <div class="border-2 px-5 py-4 space-y-5 bg-gray-200 rounded-md shadow-sm shadow-gray-950">

      <label class="form-control grid grid-cols-2    w-full">
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Name ?</span>
          </div>
          <input type="text" placeholder="name"
                 class="input border-none bg-white shadow-sm shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full max-w-xs placeholder:text-sm placeholder:bade"/>
        </div>
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Parameter ?</span>
          </div>
          <input type="text" placeholder="parameter"
                 class="input border-none bg-white shadow-sm shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full max-w-xs placeholder:text-sm placeholder:bade"/>
        </div>
      </label>

      <label class="form-control grid grid-cols-2    w-full">
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Group ?</span>
          </div>
          <input type="text" placeholder="group"
                 class="input border-none bg-white shadow-sm shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full max-w-xs placeholder:text-sm placeholder:bade"/>
        </div>
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Order ?</span>
          </div>
          <input type="text" placeholder="order"
                 class="input border-none bg-white shadow-sm shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full max-w-xs placeholder:text-sm placeholder:bade"/>
        </div>
      </label>

      <label class="form-control grid grid-cols-2    w-full">
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Mode ?</span>
          </div>
          <input type="text" placeholder="mode"
                 class="input border-none bg-white shadow-sm shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full max-w-xs placeholder:text-sm placeholder:bade"/>
        </div>
      </label>
      <div class="flex items-center justify-center gap-6 pt-4">
        <button className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400  w-36 border-none text-white shadow-sm shadow-gray-950">Confirm</button>
        <button className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400 w-36 border-none text-white shadow-sm shadow-gray-950">Reset</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>