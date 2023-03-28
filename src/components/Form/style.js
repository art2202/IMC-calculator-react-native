import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    FormContext:{
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:"center",
        marginTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20
    },
    formInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    button:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButton:{
        fontSize:22,
        color:"#ffffff"
    },
    erroMessage:{
        fontSize:12,
        color:"#ff0043",
        fontWeight:"bold",
        paddingLeft:20
    },
    exhibitionResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop: 20,
    },
    resultImcItem:{
        fontSize:28,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20
    },
    textResultItemList:{
        color:"red",
        fontSize:16,
    }

})

export default styles