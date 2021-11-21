import React, { Component } from 'react';
import {connect} from "react-redux"
import {fetchCats} from "./actions/catActions"
import CatList from "./CatList.js"

class App extends Component {   
  
  componentDidMount() {
    // console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading() {
       if (this.props.loading === true) {
          return <h1>Loading...</h1>
        }
        else {
          return <CatList catPics={this.props.catPics}/>
        }
  }

  render() {
        // console.log(this.props.catPics);
    return (
      <div>
        <h1>CatBook</h1>
          {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCats: () => dispatch(fetchCats())
//   }
// }

export default connect(mapStateToProps, {fetchCats})(App)

