import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions';
import './App.css';

class App extends PureComponent{

  clickHanlder = () => {
    const {simpleAction} = this.props
    simpleAction({
      "author":"Abhishek Wadhawan",
      "desciprtion":"Boilerpalte for react and redux"
    })
  }

  render(){
    const {data} = this.props
    return (
      <div className="App">
        Simple Boilerplate for REACT + REDUX
        <br/>
        <button onClick={this.clickHanlder}>Test Redux</button>
        <pre>{JSON.stringify(data.simpleReducer)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
 data: {...state}
})

const mapDispatchToProps = dispatch => ({
 simpleAction: (obj) => dispatch(simpleAction(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
