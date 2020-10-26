import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component { //Conteiner Component (holds the state)

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = () => { // Declare HomePage function Component
      return(
          <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />  {/* Anything that doesn't match any Route, will redirect to /home */}
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;