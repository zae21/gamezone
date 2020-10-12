import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
    fontFamily:'comic-reguler'
  },
  headerText:{
    fontSize:28,
    textAlign:'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    fontSize:18,
    borderRadius:6,
  },
  errorTextInput:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:10,
    textAlign:'center',
  }
});

export const app = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const home = StyleSheet.create({
  modalContent:{
    flex:1,
    padding:20,
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    backgroundColor:'#ccfffe',
    padding:10,
    borderRadius:10,
    alignSelf:'center',
  },
  modalClose:{
    marginTop:20,
    marginBottom:0,
    backgroundColor:'#ffcccc',
  }
});

export const header = StyleSheet.create({
  header:{
      width:'100%',
      height:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
  },
  headerText:{
      fontWeight:'bold',
      fontSize:20,
      color:'#333',
      letterSpacing:1,
  },
  icon: {
      position:'absolute',
      left:16,
  },
  headerTitle:{
    flexDirection:'row'
  },
  headerImage:{
    height:25,
    width: 25,
    marginHorizontal:10,
  }
})

export const card = StyleSheet.create({
  card:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical:6,
  },
  cardContent:{
    marginHorizontal:18,
    marginVertical:10,
  }
})

export const review = StyleSheet.create({
  rating_style:{

  },
})

export const button = StyleSheet.create({
  wrap:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#f01d71',
  },
  text:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center'
  }
})

export const images = {
  ratings: {
    '1' : require('../assets/rating-1.png'),
    '2' : require('../assets/rating-2.png'),
    '3' : require('../assets/rating-3.png'),
    '4' : require('../assets/rating-4.png'),
    '5' : require('../assets/rating-5.png'),
  }
}
