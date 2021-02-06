/**
 * The module is responisible for all the api requests to events resource.
 * 
 */

import axios from 'axios'
import { apiBaseUrl } from '../constant/api'

export const getFoodReviews = async (score?: string, productId?: string, page: number = 1, paginationAmount: number = 10) => {
    const response = await axios({
      method: 'get',
      url: `${apiBaseUrl}/food/reviews?score=${score}&productId=${productId}&page=${page}&paginationAmount=${paginationAmount}`,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data;
}