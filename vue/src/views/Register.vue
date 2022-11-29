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
      Register for free
    </h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      {{ " " }}
      <router-link
        :to="{ name: 'Login' }"
        class="font-medium text-indigo-600 hover:text-indigo-500"
        >Login to your account</router-link
      >
    </p>
  </div>
  <form class="mt-8 space-y-6" @submit="register">
    <input type="hidden" name="remember" value="true" />
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="fullname" class="sr-only">Name</label>
        <input
        v-model="user.name"
          id="fullname"
          name="name"
          type="text"
          autocomplete="name"
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
          placeholder="Full Name"
        />
      </div>
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
            rounded-none
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
            rounded-none
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
      <div>
        <label for="password_confirmation" class="sr-only"
          >Password Confirmation</label
        >
        <input
        v-model="user.password_confirmation"
          id="password_confirmation"
          name="password-confirmation"
          type="password"
          autocomplete="current-password-confirmation"
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
          placeholder="Password Confirmation"
        />
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
        Sign Up
      </button>
    </div>
  </form>
</template>
  
  <script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const register = (ev) => {
  ev.preventDefault();
  store.dispatch('register', user)
      .then((res)=>{
        router.push({name:'Dashboard'})
      })
      // .catch((er)=>{
      //   router.go(-1);
      // })
};
</script>
  
  
  