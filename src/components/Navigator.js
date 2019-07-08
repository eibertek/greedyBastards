import { createStackNavigator, createAppContainer } from "react-navigation";
import MapModule from './Maps.js';

const AppNavigator = createStackNavigator({
    mapModule: MapModule,
}, {
        initialRouteName: "mapModule"
    });

export default createAppContainer(AppNavigator);