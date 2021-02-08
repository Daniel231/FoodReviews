import { ActionTypes } from "../../constant/action-type";


const INITIAL_STATE = {
    reviews:[],
    reviewsLoading: true,
    reviewsTablePage: 0,
    reviewsTotalPages: 0,
    reviewsTablePaginationAmount: 10,
    error: false,
    isDialogOpen: false,
    score: null,
    productId: null,
    currentReview: null,
    dialogLoading: true,
    dialogError: false,
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ActionTypes.FETCH_REVIEWS_REQUEST:
                return {...state, reviewsLoading: true, error:null};
        case ActionTypes.FETCH_REVIEWS_SUCCESS:
                return {...state, reviewsLoading: false, error:null, reviews: action.payload.reviews, reviewsTableTotalPages: action.payload.totalPages};
        case ActionTypes.FETCH_REVIEWS_FAIL:
                return {...state, reviewsLoading: false, error:action.payload.error};
        case ActionTypes.TOGGLE_DIALOG_VIEW:
                return {...state, isDialogOpen: action.payload}
        case ActionTypes.SET_REVIEWS_FILTERS:
                return {...state, [action.payload.filterType]: action.payload.value, reviewsTablePage: 0}
        case ActionTypes.FETCH_REVIEW_BY_ID_REQUEST:
                return {...state, dialogLoading: true, dialogError:null, currentReview: null};
        case ActionTypes.FETCH_REVIEW_BY_ID_SUCCESS:
                return {...state, dialogLoading: false, dialogError:null, currentReview: action.payload};
        case ActionTypes.FETCH_REVIEW_BY_ID_FAIL:
                return {...state, dialogLoading: false, dialogError:action.payload.error};
        case ActionTypes.SET_REVIEWS_PAGE:
                return {...state, reviewsLoading: true, reviewsTablePage:action.payload};
       default:
            return {...state}
    }
}