import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => { // Will map the Store state into props (takes the Redux Store state => reducer.js)
  return {
    dishes: state.dishes, // These 4 become available as props to MainComponent, by connecting the Component to the Store.
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
} 

const mapDispatchToProps = dispatch => ({ // dispatch function from our store
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  // addComment(dishId, rating, author, comment) = action creator that will return the action object
  fetchDishes: () => { dispatch(fetchDishes())}, // make fetchDishes available for use in my component
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))} // we will label the model as feedback
});

//Update the Main component to use redux: Main Component will now obtain the state from my redux store. I will connent Main to the Store.
class Main extends Component { //Conteiner Component (holds the state)

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail selectedDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> {/* passing props */}
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
            <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />  {/* Anything that doesn't match any Route, will redirect to /home */}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // connect MainComponent to the React Store.
                                                                              // WithRouter to work with React Router