import { userService } from "@/services/user.service";

export const userModule = {
    namespaced: true,
    state: {
        users: [],
        favoritos: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        SET_FAVORITOS(state, favoritos) {
            state.favoritos = [ ...favoritos];
        }
    },
    actions: {
        async all({commit, state}, options) {
            try {
                if(state.users.length== 0){
                    let respuesta = await userService.users(options);
                    commit('SET_USERS', respuesta.data);
                }
            } catch (err) {
                commit('SET_USERS', []);
                console.log(err);
            }
        },
        addFavorite({commit,state}, user){
            const existe = state.favoritos.filter(u => parseInt(u.id) === parseInt(user.id) ).length;
            if(!existe){
                const favoritos = [...state.favoritos, user];
                commit('SET_FAVORITOS', favoritos);
            }    
        },
        deleteFavorito({commit,state}, user){
            const favoritos = state.favoritos.filter(u => parseInt(u.id) !== parseInt(user.id));
            commit('SET_FAVORITOS', favoritos);     
        },
    }
}