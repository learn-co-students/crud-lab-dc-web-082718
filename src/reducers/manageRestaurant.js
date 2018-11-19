
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type){
    case "ADD_RESTAURANT":
      let restaurant = {
        id: cuid(),
        name: action.payload,
        reviews: [],
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

      case "DELETE_RESTAURANT":
        let index = state.restaurants.findIndex(restaurant => restaurant.id === action.payload);
        let rstrnt = state.restaurants[index];

        return {...state, restaurants: [...state.restaurants.filter(restaurant => restaurant !== rstrnt)]};

      case "ADD_REVIEW":
        let reviewID = cuid();
        let content = action.payload.content;
        let restaurantID = action.payload.restaurantID
        let thisRestaurant = state.restaurants.find(restaurant => restaurant.id === restaurantID)
        let restIndex = state.restaurants.findIndex(restaurant => restaurant === thisRestaurant)

        let updatedRestaurant = {...thisRestaurant, reviews: [...thisRestaurant.reviews, {id: reviewID, content: content}]}

        return {...state, restaurants: [...state.restaurants.slice(0, restIndex), updatedRestaurant, ...state.restaurants.slice(restIndex+1)]}

    default:
      return state;
  }

}
