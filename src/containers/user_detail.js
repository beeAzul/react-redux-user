import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserDetail extends Component {
    render () {
        const {user} = this.props;
        if(!user){
            return <div>Selectionner un User pour démarrer</div>
        }
        return (
            <div>
                <h3>Detail de : {user.name}</h3>
                <li>ID : {user.id}</li>
                <li>Role : {user.role} </li>
                <li>Actif : {user.active} </li>
            </div>
        )
    }
}

/**
 * @description     Fonction du reducer, elle sert de pont entre react et redux. Elle retourne le state. Depuis ce state
 *                  on récupere la partie dont le composant a besoin et on la met dans myUsers qui sera disponnible via
 *                  props.myUsers
 * @param state
 * @returns {{myUsers: Function}}
 */
const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

/**
 * @description     Transmet l'action retourné par selectUser() a tous les reducers. Le reducer concernné mettra l'information dans le state
 *                  ex : A l'appel de la props selectUser(), l'action du meme nom est transferé au reducer concerné.
 */
/*
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({selectUser:selectUser}, dispatch)
)
*/

// On connecte le composant a redux avec la function connect()
export default connect(mapStateToProps)(UserDetail);