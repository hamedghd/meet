import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import './nprogress.css';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 32,
    warningText: '',
    showWelcomeScreen: undefined,
  }
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // It doesn't show the welcome screen, if the code in url or access_token is valid.
    //this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    this.setState({
      showWelcomeScreen: !(
        code ||
        isTokenValid ||
        window.location.hostname === 'localhost'
      )
    });
    // In case that the code or access_token are valid, then it gets events
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.numberOfEvents),
            locations: extractLocations(events)
          });
        }
        /*
        if (!navigator.onLine) {
          this.setState({
            warningText:
              'You are currently using the app offline and viewing data from your last visit. Data will not be up-to-date.',
          });
        } else {
          this.setState({ warningText: '' });
        }
        */
      });
    }
    window.addEventListener('offline', this.toggleOfflineMessage);
    window.addEventListener('online', this.toggleOfflineMessage);

  }

  toggleOfflineMessage() {
    if (!navigator.onLine) {
      this.setState({
        warningText: "You are currently using the app offline.",
      });
    } else {
      this.setState({
        warningText: "",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = (location === 'all' && eventCount === 0) ?
        events : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  }
  render() {
    // When the showWelcomeScreen state is undefined,
    // an empty div will be rendered until the state gets either true or false
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <h1>Meet Application</h1>
        <WarningAlert text={this.state.warningText} />
        <h2>Please choose your nearest city:</h2>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
