export default function contadorReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENTE':
            return state + action.payload;

        case 'DECREMENTE':
            return state - action.payload;

        default:
            return state;
    }
}