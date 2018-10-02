import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class UserList extends Component {

    render () {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myUsers.map( (user) => (
                                <li className="list-group-item"
                                    key={user.name} onClick={() => this.props.selectUser(user)}>
                                    {user.name}
                                </li>
                            )
                        )
                    }
                </ul>
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
        myUsers: state.users
    }
}

/**
 * @description     Transmet l'action retourné par selectUser() a tous les reducers. Le reducer concernné mettra l'information dans le state
 *                  ex : A l'appel de la props selectUser(), l'action du meme nom est transferé au reducer concerné.
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectUser:selectUser},dispatch)
}


// On connecte le composant a redux avec la function connect()
export default connect(mapStateToProps,mapDispatchToProps)(UserList);