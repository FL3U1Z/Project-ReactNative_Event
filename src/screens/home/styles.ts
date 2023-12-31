import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#131016',
      padding:24
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold'
    },
    eventDate:{
      color: '#6B6B6B',
      fontSize: 16,
    },
    inpunt:{
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        marginRight: 12
    },
    buttonText:{
        color: '#FDFCFE',
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form:{
        width: "100%",
        flexDirection: 'row',
        marginTop:36,
        marginBottom:42

    },
    listEmptyText: {
      color: '#FDFCFE',
      fontSize: 14,
      textAlign: "center"
    }
  
  });