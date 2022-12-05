import { createStore } from "vuex";
import axiosClient from "../axios";

// const tmpSurveys = [
//     {
//         id: 100,
//         title: "Weeb Nation",
//         slug: "weeeb-nation",
//         status: "draft",
//         image: "https://dummyimage.com/480x360/fff/aaa",
//         status: "draft",
//         description: "My name is Harry Potter.<br>I am the boy who lived",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
//             {
//                 id: 1,
//                 type: "select",
//                 question: "From which house are you?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "14bda2bb-7a8c-434a-9dee-75e7f5fd12a0",
//                             text: "Gryffindor",
//                         },
//                         {
//                             uuid: "1b05f545-f665-455b-86f1-d7da82a2c3a6",
//                             text: "Slytherin",
//                         },
//                         {
//                             uuid: "e9426838-6716-419c-8687-d5c5815fe695",
//                             text: "Hufflepuff",
//                         },
//                         {
//                             uuid: "05823f38-cf27-4b41-9bbb-50b544777e78",
//                             text: "Ravenclaw",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 2,
//                 type: "checkbox",
//                 question:
//                     "Who is the Headmaster of Hogwarts when Harry arrives?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "91dd5ebc-8ef9-459c-a62a-f81166f5c833",
//                             text: "Dumblebore",
//                         },
//                         {
//                             uuid: "04aa36a7-2a27-4196-add1-655e2aa1a188",
//                             text: "Severus Snape",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 3,
//                 type: "radio",
//                 question: "What animal represents Hufflepuff house?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "291189bf-ef84-4a07-a517-393c3c853bf1",
//                             text: "Badger",
//                         },
//                         {
//                             uuid: "c05ef4e9-26a6-4b9d-b20e-c7dd61b3dacd",
//                             text: "Snake",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 4,
//                 type: "text",
//                 question: "Who created the Sorting Hat?",
//                 description: null,
//                 data: {},
//             },
//             {
//                 id: 5,
//                 type: "textarea",
//                 question:
//                     "What is the name of the train that takes students to Hogwarts?",
//                 description: "No hint",
//                 data: {},
//             },
//         ],
//     },
//     {
//         id: 200,
//         title: "Learning-Project",
//         slug: "learning-project",
//         status: "draft",
//         image: "https://dummyimage.com/640x360/fff/aaa",
//         status: "draft",
//         description: "My name is Gerry J .<br>I ama full stack developer",
//         created_at: "2021-12-20 18:00:00",
//         updated_at: "2021-12-20 18:00:00",
//         expire_date: "2021-12-31 18:00:00",
//         questions: [
//             {
//                 id: 1,
//                 type: "select",
//                 question: "From which house are you?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "14bda2bb-7a8c-434a-9dee-75e7f5fd12a0",
//                             text: "Gryffindor",
//                         },
//                         {
//                             uuid: "1b05f545-f665-455b-86f1-d7da82a2c3a6",
//                             text: "Slytherin",
//                         },
//                         {
//                             uuid: "e9426838-6716-419c-8687-d5c5815fe695",
//                             text: "Hufflepuff",
//                         },
//                         {
//                             uuid: "05823f38-cf27-4b41-9bbb-50b544777e78",
//                             text: "Ravenclaw",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 2,
//                 type: "checkbox",
//                 question:
//                     "Who is the Headmaster of Hogwarts when Harry arrives?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "91dd5ebc-8ef9-459c-a62a-f81166f5c833",
//                             text: "Dumblebore",
//                         },
//                         {
//                             uuid: "04aa36a7-2a27-4196-add1-655e2aa1a188",
//                             text: "Severus Snape",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 3,
//                 type: "radio",
//                 question: "What animal represents Hufflepuff house?",
//                 description: null,
//                 data: {
//                     options: [
//                         {
//                             uuid: "291189bf-ef84-4a07-a517-393c3c853bf1",
//                             text: "Badger",
//                         },
//                         {
//                             uuid: "c05ef4e9-26a6-4b9d-b20e-c7dd61b3dacd",
//                             text: "Snake",
//                         },
//                     ],
//                 },
//             },
//             {
//                 id: 4,
//                 type: "text",
//                 question: "Who created the Sorting Hat?",
//                 description: null,
//                 data: {},
//             },
//             {
//                 id: 5,
//                 type: "textarea",
//                 question:
//                     "What is the name of the train that takes students to Hogwarts?",
//                 description: "No hint",
//                 data: {},
//             },
//         ],
//     },
// ];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        dashboard: {
            loading: false,
            data: {},
        },
        currentSurvey: {
            loading: false,
            data: {},
        },
        surveys: {
            loading: false,
            links: [],
            data: [],
        },
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        notification: {
            show: false,
            type: null,
            message: null,
        },
    },
    getters: {},
    actions: {
        getDashboardData({ commit }) {
            commit("dashboardLoading", true);
            return axiosClient
                .get(`/dashboard`)
                .then((res) => {
                    commit("dashboardLoading", false);
                    commit("setDashboardData", res.data);
                    return res;
                })
                .catch((error) => {
                    commit("dashboardLoading", false);
                    return error;
                });
        },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);

                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        getSurveys({ commit }, { url = null } = {}) {
            commit("setSurveysLoading", true);
            return axiosClient.get("/survey").then((res) => {
                commit("setSurveysLoading", false);
                commit("setSurveys", res.data);
                return res;
            });
        },
        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;

            let response;
            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient.post("/survey", survey).then((res) => {
                    commit("setCurrentSurvey", res.data);
                    return res;
                });
            }
            return response;
        },
        saveSurveyAnswer({ commit }, { surveyId, answers }) {
            return axiosClient.post(`/survey/${surveyId}/answer`, { answers });
        },
        deleteSurvey({ dispatch }, id) {
            return axiosClient.delete(`/survey/${id}`).then((res) => {
                dispatch("getSurveys");
                return res;
            });
        },
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
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
        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("logout");
                return response;
            });
        },
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;

            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;

            sessionStorage.setItem("TOKEN", userData.token);
        },
        // saveSurvey: (state, survey) =>{
        //     state.surveys = [...state.surveys, survey.data];
        // },
        // updateSurvey: (state, survey) =>{
        //     state.surveys = state.surveys.map((s)=>{
        //         if(s.id == survey.data.id){
        //             return survey.data;
        //         }
        //         return s;
        //     });
        // },
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data
          },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setSurveys: (state, surveys) => {
            state.surveys.links = surveys.meta.links;
            state.surveys.data = surveys.data;
        },
        notify: (state, { message, type }) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false;
            }, 3000);
        },
    },
    modules: {},
});

export default store;
