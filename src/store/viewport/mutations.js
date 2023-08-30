import actionNames from "./actionNames.js";

export default {
    [actionNames.SET_VIEWPORT_WIDTH](state, width) {
        state.viewportWidth = width;
    },
    [actionNames.SET_VIEWPORT_HEIGHT](state, height) {
        state.viewportHeight = height;
    }
}