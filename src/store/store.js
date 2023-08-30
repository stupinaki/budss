import {createStore} from "vuex";
import {viewport} from "./viewport";

const store = createStore({
    modules: {
        viewport,
    },
})

export default store;