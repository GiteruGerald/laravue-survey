import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id:100,
        title:'Learning-Project',
        slug:'learning-project',
        status:'draft',
        image:'https://dummyimage.com/640x360/fff/aaa',
        status:'draft',
    }
];

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
        logout({commit}){
            return axiosClient.post('/logout')
                .then(response =>{
                    commit('logout');
                    return response;
                })
        }
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
