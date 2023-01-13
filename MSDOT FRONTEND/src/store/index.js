import { createStore } from "vuex";
import authModule from './module/auth.js';
import createPersistedState from "vuex-persistedstate";
 
const store = createStore({
    modules:{
        auth: authModule
    },
    plugins: [createPersistedState()],
});
 
export default store;