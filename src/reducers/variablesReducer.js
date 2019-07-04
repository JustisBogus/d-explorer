import setLoadingAction from '../actions/Loading/setLoadingAction';
import setLoadedAction from '../actions/Loading/setLoadedAction';
import setSourcesAction from '../actions/setSourcesAction';
import addLevelWidth from '../actions/addLevelWidth';
import setFocus from '../actions/setFocus';
import setLoadMoreIndex from '../actions/setLoadMoreIndex';

const defaultState = {
    maxColumnSize: 5,
    loading: false,
    sourceUrl: '',
    detailsUrl: '',
    inModal: true,
    focusNode: '',
    loadMoreIndex: 0,
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case setLoadingAction(state).type:
            {
                return {...state, ...action.data};
            }
        case setLoadedAction(state).type:
            {
                return {...state, ...action.data};
            }
        case setSourcesAction(state).type:
            {
                return {...state, ...action.data};
            }
        case addLevelWidth(state).type:
            {
                return {...state, maxColumnSize: action.levelWidth};
            }
        case setFocus(state).type:
            {
                return {...state, focusNode: action.id};
            }
        case setLoadMoreIndex(state).type:
            {
                return {...state, loadMoreIndex: action.i};
            }
        default:
            return state;
    }
}
