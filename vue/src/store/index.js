import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {
        user: {
            data: {
                name: "Tom Cook",
                email: "tom@example.com",
            },
            token: sessionStorage.getItem('TOKEN'),
        },
    },
    getters: {},
    actions: {
        register({commit}, user){
            return axiosClient.post('/register', user)
                .then(({data})=>{
                    commit("setUser", data);
                    return data;
                })
    //Alternative way
            // return fetch('http://localhost:8000/api/register',{
            //     headers:{
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     method:"POST",
            //     body: JSON.stringify(user),
            // })
            // .then((res)=> res.json())
            // .then((res)=>{
            //     commit("setUser", res);
            //     return res;
            // });
        },
        login({commit}, user){
            return axiosClient.post('/login', user)
                .then(({data})=>{
                    commit("setUser", data);
                    return data;
                })

        },
    },
    mutations: {
        logout: (state) =>{
            state.user.data = {};
            state.user.token= null;

            sessionStorage.removeItem('TOKEN');
        },
        setUser:(state, userData)=>{
            state.user.token = userData.token;
            state.user.data = userData.user;

            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {},
});

export default store;
