import { ActionTypes } from "../../constant/action-type";

export const fetchReviews = (page: number, paginationAmount: number, score?: string, productId?: string) => ({
    type: ActionTypes.FETCH_REVIEWS_REQUEST,
    payload: {page, paginationAmount, score, productId}
});

export const fetchReviewById = (id: string) => ({
    type: ActionTypes.FETCH_REVIEW_BY_ID_REQUEST,
    payload: id
});

export const closeReviewDialog = () => ({
    type: ActionTypes.TOGGLE_DIALOG_VIEW,
    payload: false
});

export const openReviewDialog = () => ({
    type: ActionTypes.TOGGLE_DIALOG_VIEW,
    payload: true
});

export const setReviewsFilters = (filterType: string, value: string) => ({
    type: ActionTypes.SET_REVIEWS_FILTERS,
    payload: {filterType, value}
});

export const setPage = (newPage: number) => ({
    type: ActionTypes.SET_REVIEWS_PAGE,
    payload: newPage
});