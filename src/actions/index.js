export function selectUser(user){
    console.log('----------------')
    console.log('selected',user.name);
    console.log('----------------');
    return {
        type : 'USER_SELECTED',
        payload : user
    }
}