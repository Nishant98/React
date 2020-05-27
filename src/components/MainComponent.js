import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators'

// map redux store state into props that will be available to the component by connecting this component to Redux store (wrap the component inside connect)
const mapStateToProps = state => {
    return{
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }         
}

// receives dispatch as a parameter, addComment is a property that takes 4 parameter and dispatches the action (ActionCreator gives the object that is passed to dispatch)
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {


  // constructor(props) {
  //   super(props);
  // }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
                promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const AboutPage = () => {
      return(
          <About leaders={this.props.leaders} />
      );
    }

    // ignore location and history, take only match
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment }
          />  
      );
    }
    
    return (
      <div>
          <Header />
              {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
              <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={Contact} />
              <Route exact path="/aboutus" component={AboutPage} /> 
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

// connect takes mapStateToProps as a parameter, also takes mapDispatchToProps and makes them available in react component.
// if using react router, then we have to surrond connect with "withRouter"
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));