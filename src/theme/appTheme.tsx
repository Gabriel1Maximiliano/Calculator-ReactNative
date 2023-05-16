/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backGround:{
        backgroundColor:'black',
        flex:1,
    },
    containerCalculator:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
    },
    result:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10,
    },
    smallResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:35,
        textAlign:'right',
    },
    button:{
        borderRadius:100,
        height:80,
        justifyContent:'center',
        width:80,
        marginHorizontal:10,
    },
    textButton:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10,
    },
});
