import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

export const viewport = {
    state,
    actions,
    mutations,
    namespaced: true,
}