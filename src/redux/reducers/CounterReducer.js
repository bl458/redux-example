import Actions from '../actions/ActionTypes';

const counterReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case Actions.COUNTER_INCREMENT:
      console.log('Entered Increment');
      return {count: state.count + 1};
    case Actions.COUNTER_DECREMENT:
      console.log('Entered Decrement');
      return {count: state.count - 1};
    default:
      return {count: 0};
  }
};

export default counterReducer;
