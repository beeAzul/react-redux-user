import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_active_user'

/**
 * @description     Tous les retours des reducers sont stoqués ici. On les set dans des clés du combineReducers.
 *                  ex: Le retour du UsersReducer est setté dans la clé users, il sera ensuite récupéré dans le mapStateToProp
 *                  du composant UserList
 * @type {Reducer<any>}
 */
const rootReducer = combineReducers({
    users : UsersReducer,
    activeUser : ActiveUserReducer
});

export default rootReducer;
