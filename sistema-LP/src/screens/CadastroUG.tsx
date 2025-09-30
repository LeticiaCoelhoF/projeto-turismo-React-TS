import {View, Text, Pressable, TextInput, Image, TouchableOpacity, Button} from 'react-native';
// import Cadastro from '../screens/css/Cadastro';
import { useState, useContext, use } from 'react';
import { UserContext } from '../context/User';   

export default function Cadastro({navigation}: any){
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const deficiencias = [
        "Sim, auditiva",
        "Sim, física",
        "Sim, intelectual",
        "Sim, visual",
        "Sim, outra",
        "Não possuo"
      ];
    const [selDefic, setSelDefic] = useState('');
    const [selUser, setSelUser] = useState(false);


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

    function UsuarioGeral(){
        return (
            <View>
                <TextInput placeholder="Nome completo ou entidade" value={nome} onChangeText={nome => setNome(nome)}/>
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

    function AgenteTuristico(){
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

    function Prefeitura(){
        
    }


    return (
        <View>
            <Image source = {require('../../assets/img/logo.png')}></Image>
            <Text>Descubra, colabore e monte roteiros incríveis em um só lugar!</Text>

            
            <TouchableOpacity onPress={() => setSelUser(!selUser)}>
                    <Text>Selecionar</Text>
            </TouchableOpacity>
             
            {/* Se selUser for true, então renderiza o conteúdo que está entre os parênteses. */}
            {selUser && 
            (<View> 
                <Button onPress = {} placeholder = "Agente Turístico"/>
                <Button onPress = {} placeholder = "Prefeitura"/>
                <Button onPress = {UsuarioGeral} placeholder = "Usuário Geral"/>

            </View>)}
            
            <View>
                <Text>Clique em Selecionar e fortaleça o turismo da sua região...</Text>

                UsuarioGeral();
            </View>
       

               
        </View>
    );




}