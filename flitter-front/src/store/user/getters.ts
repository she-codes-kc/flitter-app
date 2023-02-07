import { GetterTree } from "vuex";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, unknown> =  {
    getUser(state) {
        return state.user;
    },
    getIsLoading(state) {
        return state.isLoading;
    }
}

export default getters;