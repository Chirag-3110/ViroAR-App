import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor:"#101010",
    },
    text:{
        padding:10,
        fontFamily:"Alias",
        color:"white",
        padding:20
    },
    card:{
        width:windowWidth-20,
        // height:windowHeight/3.5,
        backgroundColor:'#1E1E1E',
        borderColor:'white',
        borderWidth:2,
        borderRadius:5,
        alignSelf:'center',
        elevation:20,
        shadowColor: 'white',
        // shadowOffset: {width: -2, height: -54},
        shadowOpacity: 2,
        // shadowRadius: 3,
        padding:10,
        margin:10
    },
    title:{
        fontWeight:'bold',
        color:'white',
        fontSize:30,
        fontFamily:'Alias',
        marginTop:20,
        marginLeft:20,
        marginBottom:10
    },
    description:{
        fontWeight:'bold',
        color:'white',
        fontSize:20,
        fontFamily:'Alias',
        marginLeft:30,
        flexWrap:'wrap'
    },
    btnContainer:{
        width:windowWidth-50,
        height:50,
        backgroundColor:'#0073FF',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal:20,
        borderColor:'white',
        borderRadius:5,
        borderWidth:2
    },
    btnTxt:{
        fontWeight:'bold',
        color:'white'
    },
    ARText:{
        fontWeight:'bold',
        fontSize:30,
        color:'red',
        fontFamily:"Arial",    
    },
    input:{
        width:windowWidth-50,
        height:50,
        backgroundColor:'white',
        color:'black',
        alignSelf:'center',
        marginVertical:10,
        borderColor:'black',
        borderRadius:5,
        borderWidth:2
    }
});
  export default styles;