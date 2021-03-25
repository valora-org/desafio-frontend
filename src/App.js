import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route path={"/"} exact component={Dashboard} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}
