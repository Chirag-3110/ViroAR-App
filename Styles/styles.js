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
        backgroundColor:"#B8E4FD",
    },
    text:{
        padding:10,
        fontFamily:"Alias",
        color:"black",
        padding:20
    },
    card:{
        width:windowWidth-20,
        // height:windowHeight/3.5,
        backgroundColor:'#60BEFF',
        borderColor:'#505251',
        borderWidth:2,
        borderRadius:5,
        alignSelf:'center',
        elevation:20,
        shadowColor: 'black',
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
        marginBottom:10,
        color:'white'
    },
    description:{
        fontWeight:'bold',
        color:'#DBDEE0',
        fontSize:20,
        fontFamily:'Alias',
        marginLeft:30,
        flexWrap:'wrap'
    },
    btnContainer:{
        backgroundColor:"#0EA8FF",
        width:windowWidth-50,
        height:50,
        alignItems:'center',
        justifyContent:"center",
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        borderColor:'#C7C7C7',
        borderWidth:1,
        borderRadius:10,
        overflow: 'hidden',
        marginBottom:10,
        alignSelf:"center",
        margin:10
    },
    btnTxt:{
        fontWeight:'bold',
        color:'white'
    },
    ARText:{
        fontWeight:'bold',
        fontSize:30,
        color:'cyan',
        fontFamily:"Arial",    
        padding:10
    },
    input:{
        width:windowWidth-50,
        alignSelf:"center",
        backgroundColor:"#E4E6E6",
        borderColor:'#636363',
        borderBottomWidth:2,
        fontWeight:"bold",
        color:"black",
        margin:10
    },
    textBackground:{
        backgroundColor:"#B0E2FE",
        borderBottomLeftRadius:0,
        borderBottomRightRadius:200,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        marginBottom: 10,
    }
});
  export default styles;