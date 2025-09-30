import {View, Text, TextInput, Pressable, Image} from 'react-native';
import styleLogin from './css/Login';
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
        <View style={styleLogin.containerPrincipal}>
            <Image source ={require('../../assets/img/loginBG.png')} style={styleLogin.imagemBG} ></Image>
            <View style={styleLogin.containerLogin}>
                
                <Text style={styleLogin.tituloLogin}>Login</Text>
                <TextInput style={styleLogin.dados} placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
                <TextInput style={styleLogin.dados} placeholder="Senha" value={password} onChangeText={password => setPassword(password)} secureTextEntry={true}/>
                    <Pressable onPress={Submit}><Text style={styleLogin.semSenha}>Esqueceu a senha?</Text></Pressable>
                <Pressable onPress={Submit}>
                    <Text style={styleLogin.acessar}>Login</Text>
                </Pressable>
                    <Pressable onPress={Submit}><Text style={styleLogin.semRegistro}>Não tenho registro</Text></Pressable>
            </View>    
        </View>
    );
}