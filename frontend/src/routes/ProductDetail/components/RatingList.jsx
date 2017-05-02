import React, {Component} from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {LoadingSpinner} from '../../components/Loading/index.jsx'

const RATINGS = [
    {
        "id": 1,
        "user": "abc123",
        "rating": 4,
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor mi, cursus a malesuada id, egestas non tellus. Sed eget lacus a enim sagittis bibendum. Phasellus mollis, ligula iaculis sagittis tempor, neque nibh pulvinar mauris, et convallis purus erat ut felis. Nam in quam vitae sapien tempus dictum id quis ante. Vivamus tortor lectus, tempus sed lectus non, auctor tempor mi. Nam iaculis luctus lectus, in viverra tellus dignissim commodo. Nulla congue quam vestibulum, fringilla magna eget, laoreet augue. Aenean nisi purus, fringilla non metus ut, finibus ullamcorper dui. Praesent at dui luctus, vulputate mauris eleifend, tincidunt ante. Morbi efficitur, nulla vel laoreet consequat, nibh arcu feugiat orci, vitae dignissim orci tortor a leo. Nam in sapien ex."
    },
    {
        "id": 2,
        "user": "cde345",
        "rating": 5,
        "content": "Duis blandit eu urna nec blandit. Quisque porta elit malesuada urna varius tristique. Aenean eu porta ex, a laoreet eros. Nam et pretium diam, at faucibus est. Cras vehicula ac tortor a bibendum. Vestibulum sodales nisl in elementum pulvinar. Curabitur a aliquam ante. Curabitur porta, lectus vel fringilla porta, purus urna malesuada erat, id finibus lectus metus nec nisl. Phasellus a sagittis metus. Ut et orci in tellus scelerisque vestibulum eget non ligula. Sed viverra dolor est, a dictum ligula sollicitudin ut."

    },
    {
        "id": 3,
        "user": "cde345",
        "rating": 3,
        "content": "Duis blandit eu urna nec blandit. Quisque porta elit malesuada urna varius tristique. Aenean eu porta ex, a laoreet eros. Nam et pretium diam, at faucibus est. Cras vehicula ac tortor a bibendum. Vestibulum sodales nisl in elementum pulvinar. Curabitur a aliquam ante. Curabitur porta, lectus vel fringilla porta, purus urna malesuada erat, id finibus lectus metus nec nisl. Phasellus a sagittis metus. Ut et orci in tellus scelerisque vestibulum eget non ligula. Sed viverra dolor est, a dictum ligula sollicitudin ut."
    }
];


/*** Reducers ***/

const ratingsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_RATINGS':
            return action.ratings;
        default:
            return state
    }
};

const loadingReducer = (state={}, action) => {
    switch(action.type) {
        case 'LOAD_RATINGS':
            return false;
        default:
            return true
    }
};

const ratingsListReducer = combineReducers({
    loading: loadingReducer,
    ratings: ratingsReducer
});


const store = createStore(
  ratingsListReducer,
  applyMiddleware(logger)
);


const Rating = ({rating}) => (
    <div>
        <h3>{rating.user}</h3>
        <h3>{rating.content}</h3>
        <h3>{rating.rating}</h3>
    </div>
);

const RateList = ({ratings}) => {
    return (
        <div>
            {ratings.map(rating => <Rating key={rating.id} rating={rating}/>)}
        </div>
    )
};


class RatingsList extends Component {

    componentDidMount() {
        this.props.loadRatings(RATINGS)
    }

    render() {
        const content = this.props.loading ? <LoadingSpinner/> : <RateList ratings={this.props.ratings}/>;
        return (
            <div>
                {content}
            </div>
        )
    }
}

const mapDispatchToRatingsListProps = (dispatch) => ({
    loadRatings: (ratings) => dispatch({
        type: 'LOAD_RATINGS',
        ratings
    })
});

const mapStateToRatingsListProps = (state) => ({
    ratings: state.ratings,
    loading: state.loading
});

const Ratings = connect(
    mapStateToRatingsListProps,
    mapDispatchToRatingsListProps
)(RatingsList);


class RatingsContainer extends Component {

    render() {
        return (
            <Provider store={store}>
                <Ratings/>
            </Provider>
        )
    }
}

export {RatingsContainer}

