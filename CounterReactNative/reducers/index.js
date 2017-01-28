/**
 * Created by GL on 2017/1/26.
 */
export default (state = 0, action) => {
    console.log('action.type : ' + action.type)
    switch (action.type) {
        case 'INCREMENT':
            console.log('INCREMENT state : ' + state)
            return state + 1
        case 'DECREMENT':
            console.log('DECREMENT state : ' + state)
            return state - 1
        default:
            console.log('default state : ' + state)
            return state
    }
}
