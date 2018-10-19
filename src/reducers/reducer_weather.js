import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // Not mutation state, returning a new instance.
      // ALWAYS RETURN A NEW OBJECT INSTEAD OF MUTATING
      // return state.concat([action.payload.data]);

      // ES6 syntactic sugar
      // '...' flattens original array
      if (action.payload.status === undefined) {
        return state;
      }
      const new_state = []
      state.forEach(cityData => {
        if (action.payload.data.city.id != cityData.city.id) {
          new_state.push(cityData);
        }
      });
      return [action.payload.data, ...new_state];
  }
  return state;
}
