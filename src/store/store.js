
import Vuex from 'vuex'
import { userModule } from './modulos/userModule'



export const store = new Vuex.Store({
    modules: {
        userModule
    }
});
