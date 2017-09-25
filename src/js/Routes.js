import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Routes = (props) => {
    if (props.routes) {
        let countRouteText = props.routes.length ? `You have ${props.routes.length} route(s).` : 'You have no route(s).'
        return (
            <div>
                <div className="recent-routes">
                {props.routes.map((route, index) =>
                    <li key={ index }>
                        <span>#{index + 1} {route.start} - {route.end}</span>
                        <Link to={{ pathname: 'details', query: { rIndex: `${index}` } }}>
                        <div className="btn detail">
                            Details
                        </div>
                        </Link>
                        <div className="btn delete" onClick={() => { props.deleteRoute(index); }}>
                        Delete
                        </div>
                    </li>
                )}
                </div>
                <div className="route-count">{countRouteText}</div>
            </div>
        );
    }
};

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  deleteRoute: PropTypes.func.isRequired
};

export default Routes;
