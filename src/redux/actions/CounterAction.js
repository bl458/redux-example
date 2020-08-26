import {connect} from 'react-redux';
import Counter from '../../components/Counter';
import * as Actions from './ActionTypes';

const counterIncrement = () => ({type: Actions.COUNTER_INCREMENT});

const counterDecrement = () => ({type: Actions.COUNTER_DECREMENT});

const mapStateToProps = (state) => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: dispatch(counterIncrement),
  decrement: dispatch(counterDecrement),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;
