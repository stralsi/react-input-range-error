import 'react-input-range/dist/react-input-range.css'
import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const initialState = {
  values: {
    min: 2,
    max: 10
  }
}

const rootReducer = (prevState = initialState, action) => {
  console.log(action);
  if(action.type === "CHANGE"){
    return {values: action.values};
  }
  return prevState;
};

const store = createStore(rootReducer);

const changeAction = (values) => ({
  type: "CHANGE",
  values
});

const App = (props) => {
  return (
    <InputRange
      maxValue={20}
      minValue={0}
      value={props.values}
      onChange={(control, values) => props.handleValuesChange(values)}
      />
  );
}

const AppContainer = connect(
  state => ({values: state.values}),
  {handleValuesChange: changeAction}
)(App);

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById('root')
);
