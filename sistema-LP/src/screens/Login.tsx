import {View, Text, TextInput, Pressable} from 'react-native';
// import Login from '../screens/css/Login';
import { useState, useContext } from 'react';
import { UserContext } from '../context/User';      

export default function Login({navigation}: any){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);
    function navToHome(){
        navigation.navigate('Home');
    }

    function Submit(){
        if(!email || !password){
            alert('Preencha o email e a senha');
            return;
        }

        if(userContext){
            userContext.save(email);
        }

        navToHome();
    }

    return (
        <View>
            <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            <TextInput placeholder="Senha" value={password} onChangeText={password => setPassword(password)} secureTextEntry={true}/>
                
            <Pressable style={{padding: 12, backgroundColor: '#2196F3', marginTop: 16, borderRadius: 8}} onPress={Submit}>
                <Text>Login</Text>
            </Pressable>
        </View>
    );
}