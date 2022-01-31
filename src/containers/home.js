import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions/payments';
import Home from '../screens/HomeScreen';

const mapStateToProps = ({paymentReducer}) => {
  return {
    petExpenses: paymentReducer.petExpenses,
    price: paymentReducer.price,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
