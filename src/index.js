import 'react-input-range/dist/react-input-range.css'
import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer, reduxForm, Field } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer);

const App = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="foo"
        maxValue={20}
        minValue={0}
        component={({input: {onChange, ...inputParams}, ...params})=>(
    <InputRange
      {...inputParams}
      {...params}
      onChange={(control, values) => onChange(values)}
      />
          )}
      />
    </form>
  );
};

const AppForm = reduxForm({
  form: 'test',
  initialValues: {
    foo: {
      min: 2,
      max: 10
    }
  },
  onSubmit: (values) => console.log("SUBMIT!", values)
})(App);

ReactDOM.render(
  <Provider store={store}><AppForm /></Provider>,
  document.getElementById('root')
);
