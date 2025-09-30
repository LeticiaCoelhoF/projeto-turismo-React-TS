import {StyleSheet} from "react-native";

const styleLogin = StyleSheet.create({
    acessar:{
        flex:1,
        padding:8,
        width:330,
        borderRadius:35,
        backgroundColor:'#1462D9',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:27,
        fontFamily:'Arial,Inter, sans-serif',
        
    },
    containerPrincipal:{
        flex:1,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    containerLogin:{
        height:600,
        width:430,
        borderRadius:10,
        backgroundColor:'rgba(255, 255, 255, 0.39)',
        justifyContent:'center',
        alignItems:'center',

    },
    imagemBG:{
        flex:1,
        position:'absolute',
           
    },
    dados:{
        height:50,
        width:330,
        borderColor:'gray',
        marginBottom:20,
        borderRadius:30,
        paddingLeft:20,
        fontSize:25,
        color:'#1462D9',
        border:'1px solid #1462D9',
    },
    tituloLogin:{
        fontFamily:'arial,Inter, sans-serif',
        fontSize:60,
        fontWeight:'bold',
        marginBottom:90,
        marginTop:-90,
        color:'#FFA91F',
    },
    semSenha:{
        color:'#1462D9',
        marginTop:10,
        marginBottom:20,
        marginLeft:130,
        fontWeight:'semibold',
        fontFamily:'Arial,Inter, sans-serif',
        fontSize:19,
    },
    semRegistro:{
        color:'#1462D9',
        marginTop:40,
        marginBottom:-40,
        fontSize:19,
        fontWeight:'semibold',
        fontFamily:'Arial,Inter, sans-serif',
        
    }
});
export default styleLogin;