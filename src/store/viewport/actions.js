import actionNames from "./actionNames";

export default {
    initViewportWidth({ commit }, width) {
        commit(actionNames.SET_VIEWPORT_WIDTH, width);
    },
}