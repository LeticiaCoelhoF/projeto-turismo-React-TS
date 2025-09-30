import {View, Text, Pressable, Image} from 'react-native';
// import Home from '../screens/css/Home';

export default function Home({navigation}: any){
    function navToCadastro(){
        navigation.navigate('Cadastro');
    }
    return (
        <View>
            <Text>Bem vindo ao sistema</Text>
        <Pressable onPress={navToCadastro}>
            <Text >Cadastro Teste</Text>
        </Pressable>
        </View>
    );
}