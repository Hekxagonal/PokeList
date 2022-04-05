import * as types from './actions'
import theme from '../../global/theme'

interface iState {
    theme: number,
}

interface iAction {
    type: string,
    payload?: object
}

const reducer = (state : iState, action: iAction) => {
    switch (action.type) {
        default: return {...state};

        case types.CHARGE_THEME: 
            let newTheme = state.theme + 1
            if(newTheme > Object.keys(theme).length) newTheme = 0
            return {...state, theme: newTheme}
    }
}

export default reducer