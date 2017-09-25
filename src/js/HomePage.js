import React, { Component } from 'react';
import Routes from './Routes';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);

        if (!localStorage.getItem("routesSet")) {
            localStorage.setItem("routes", JSON.stringify([{ start: 'Novi Sad', end: 'Belgrade' }, { start: 'Belgrade', end: 'Nis' }]));
            localStorage.setItem("routesSet", "true");
        }

        this.state = {
            startValue: '',
            endValue: '',
            routes: JSON.parse(localStorage.getItem('routes'))
        };

        this.addRoute = this.addRoute.bind(this);
        this.deleteRoute = this.deleteRoute.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addRoute(event) {
        let routesArray = [...this.state.routes, { start: this.state.startValue, end: this.state.endValue }];
        localStorage.setItem("routes", JSON.stringify(routesArray));

        this.setState({
            startValue: '',
            endValue: '',
            routes: routesArray
        });
    }

    deleteRoute(index) {
        let routesArray = [...this.state.routes];

        routesArray.splice(index, 1);
        localStorage.setItem("routes", JSON.stringify(routesArray));

        this.setState({ routes: routesArray });
    }

    onChange(event) {
        let target = event.target;
        this.setState({ [target.name]: target.value });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src="../images/driving-app-logo.png" />
                    </div>
                    <h1>Driving App</h1>
                    <h2>Goal</h2>
                    <p>Create application that is be able to add, store and display driving routes.</p>
                </header>
                <main>
                    <div className="add-routes">
                        <input type="text" name="startValue" value={this.state.startValue} onChange={this.onChange} className="route-field" id="route1" placeholder="e.g. Start - Novi Sad" />
                        <input type="text" name="endValue" value={this.state.endValue} onChange={this.onChange} className="route-field" id="route2" placeholder="e.g. End - Belgrade" />
                        <div className="btn submit" onClick={this.addRoute}>Submit</div>
                    </div>
                </main>
                    <Routes
                        routes = { this.state.routes }
                        deleteRoute = { this.deleteRoute }
                    />
                <footer>
                    <p>Made with <i>&#10084;</i> in React and build with Webpack | &copy; 2017.  </p>
                </footer>
            </div>
        );
    }
}

export default HomePage;
