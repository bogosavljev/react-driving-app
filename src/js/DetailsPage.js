import React from 'react';
import { Link } from 'react-router-dom';
import Directions from './GoogleMap.js';
import PropTypes from 'prop-types';

const DetailsPage = (props) => {
    let routes = JSON.parse(localStorage.getItem('routes'));
    let routeIndex = parseInt(props.location.query.rIndex);
    let selectedRoute = routes[routeIndex];

    if (selectedRoute) {
      return (
        <div className="container">
            <Link to="/">
                <div className="btn back">Go Back</div>
            </Link>
            <h2 className="alt-header">Route Details</h2>
            <h1>
                #{routeIndex + 1} {selectedRoute.start} - {selectedRoute.end}
            </h1>
            <div className="google-maps">
                <Directions route={selectedRoute} />
            </div>
        </div>
      );
    }
    return (
      <div className="container">
        <Link to="/">
            <div className="btn back">Go Back</div>
        </Link>
        <h1 className="warning">Invalid Route</h1>
      </div>
    );
  };

  DetailsPage.propTypes = {
    route: PropTypes.shape({
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired
    }),
    index: PropTypes.number
  };

  export default DetailsPage;

