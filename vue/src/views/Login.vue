<template>
  <div>
    <img
      class="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt="Your Company"
    />
    <h2
      class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
    >
      Sign in to your account
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      {{ " " }}
      <router-link
        :to="{ name: 'Register' }"
        class="font-medium text-indigo-600 hover:text-indigo-500"
        >Register for free</router-link
      >
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit="login">
    <div
      v-if="errorMsg"
      class="
        flex
        items-center
        justify-between
        py-3
        px-3
        bg-red-500
        text-white
        rounded
      "
    >
      {{ errorMsg }}
      <span @click="errorMsg = ''" class="w-8 h-8 flex
        items-center
        justify-center
        rounded-full
        transition-colors
        cursor-pointer
        hover:bg-[rgba(0,0,0,0.2)]
        ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
    <input type="hidden" name="remember" value="true" />
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input
          v-model="user.email"
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-t-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Email address"
        />
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input
          v-model="user.password"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required=""
          class="
            relative
            block
            w-full
            appearance-none
            rounded-none rounded-b-md
            border border-gray-300
            px-3
            py-2
            text-gray-900
            placeholder-gray-500
            focus:z-10
            focus:border-indigo-500
            focus:outline-none
            focus:ring-indigo-500
            sm:text-sm
          "
          placeholder="Password"
        />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          v-model="user.remember"
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="
            h-4
            w-4
            rounded
            border-gray-300
            text-indigo-600
            focus:ring-indigo-500
          "
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900"
          >Remember me</label
        >
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="
          group
          relative
          flex
          w-full
          justify-center
          rounded-md
          border border-transparent
          bg-indigo-600
          py-2
          px-4
          text-sm
          font-medium
          text-white
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
        "
      >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        Sign in
      </button>
    </div>
  </form>
</template>
  
  <script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

let errorMsg = ref("");

const user = {
  email: "",
  password: "",
  remember: false,
};

const login = (ev) => {
  ev.preventDefault();
  store
    .dispatch("login", user)
    .then((res) => {
      router.push({ name: "Dashboard" });
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
};
</script>
  
  
  