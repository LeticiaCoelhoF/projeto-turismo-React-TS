import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Cadastro from '../screens/CadastroUG';
import Home from '../screens/Home';

export function StackRoutes() {
    const {Screen, Navigator} = createStackNavigator();

    return (
        <Navigator>
            <Screen name="Login" component={Login} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}