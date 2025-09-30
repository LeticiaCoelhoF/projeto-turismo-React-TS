import {View, Text, Pressable, TextInput, Image} from 'react-native';
// import Cadastro from '../screens/css/Cadastro';
import { useState, useContext } from 'react';
import { UserContext } from '../context/User';   

export default function Cadastro({navigation}: any){
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const userContext = useContext(UserContext);
    function navToLogin(){
        navigation.navigate('Login');
    }

    function Submit(){
        if(!email || !senha || !nome || !cidade || !uf || !confSenha){
            alert('Preencha os dados corretamente');
            return;
        }

        if(senha !== confSenha){
            alert('Preencha as senhas corretamente');
            return;
        }

        if(userContext){
            userContext.save(email);
        }

        navToLogin();
    }

    return (
        <View>
            <TextInput placeholder="Nome" value={nome} onChangeText={nome => setNome(nome)}/>
            <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)}/>
            <TextInput placeholder="Senha" value={senha} onChangeText={senha => setSenha(senha)} secureTextEntry={true}/>
            <TextInput placeholder="Confirmar Senha" value={confSenha} onChangeText={confSenha => setConfSenha(confSenha)} secureTextEntry={true}/>
            <TextInput placeholder="Cidade" value={cidade} onChangeText={cidade => setCidade(cidade)}/>
            <TextInput placeholder="UF" value={uf} onChangeText={uf => setUf(uf)}/>
            <Pressable onPress={Submit}>
                <Text>Cadastrar</Text>
            </Pressable>
        </View>
    );

}