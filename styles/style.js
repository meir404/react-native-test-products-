import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#989696',
        marginTop: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loading: {
        flex: 1
    },
    textBig: {
        fontSize: 35, backgroundColor: "red"
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
    },
    product: {
        flex: 1,
        flexDirection: "column",
        width: '80%',
        height: 200,
        alignSelf: 'center',
        margin: 10,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        elevation: 30,
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Allan_400Regular'
    },
    textWhite: {
        color: '#fff',
    },
    buttonBuyView: {
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    wrapperCustom: {
        width: "40%",
        margin: "5%",
        borderRadius: 12,
        padding: 8,
    }
});
export { styles };  