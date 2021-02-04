import { ActionTypes } from "../../constant";

export const fetchFoodList = (score: string, productId: string) => ({
    type: ActionTypes.FETCH_FOOD_LIST_REQUEST,
    payload: {score, productId}
});