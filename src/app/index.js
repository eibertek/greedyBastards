import React from 'react';
// import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import Navigator from '../components/Navigator';

export const App = props => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <Navigator />
        </PersistGate>
    </Provider>
);

export default App;