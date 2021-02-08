/**
 * The module is responisible for all the api requests to events resource.
 * 
 */

import axios from 'axios'
import { apiBaseUrl } from '../constant/api'

export const getReviewsList = async (page: number = 0, paginationAmount: number = 10, score?: string, productId?: string) => {
    const response = await axios({
      method: 'get',
      url: `${apiBaseUrl}/review?page=${page}&size=${paginationAmount}${score ? `&score=${score}` : ''}${productId ? `&productId=${productId}` : ''}`,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data;
}

export const getReviewById = async (reviewId: string) => {
    const response = await axios({
      method: 'get',
      url: `${apiBaseUrl}/review/${reviewId}`,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data;
}