/**
 * @param state         State relatif a ce reducer, et non au state global
 * @param action        Type de l'action
 * @returns {*[]}
 */
export default function (state = null, action)  {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.paylod
    }
    return state
};