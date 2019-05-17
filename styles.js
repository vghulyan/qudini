import { StyleSheet, Dimensions } from 'react-native';
const  { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    space: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        alignItems: 'flex-start',
    },
    right: {
        alignItems: 'flex-end',
    },
    row: {
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold',
    },
    white: {
        color: '#fff',
    },
    gray: {
        color: '#adadad',
    },
    small: {
        fontSize: 10,
    },
    input: {
        width: width*.90,
        margin: 15,
        padding: 15,
        alignSelf: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 16,
    },
    border: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    roundImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#adadad'
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonSmall: {
        margin: 10,
        marginBottom: 0,
        padding: 5,
        alignItems: 'center',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 5,
        width: 125
    },
    itemSeparator: {
        height: 1,
        width: '186%',
        backgroundColor: '#ced0ce',
        marginLeft: '0%',
    }
});
