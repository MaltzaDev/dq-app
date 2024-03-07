import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import COLORS from '../constants/colors'
import SIZES from '../constants/sizes'

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Welcome</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableHighlight
                        style={[styles.button, { backgroundColor: COLORS.secondary }]}
                        onPress={() => navigation.navigate('Login')}
                        underlayColor={COLORS.white}
                    >
                        <Text style={{ ...styles.buttonText, color: COLORS.white }}>Login</Text>
                    </TouchableHighlight>
                    <View style={styles.divisor}>
                        <View style={styles.divisorCenter} />
                    </View>
                    <TouchableHighlight
                        style={[styles.button, { backgroundColor: COLORS.grey }]}
                        onPress={() => navigation.navigate('Signup')}
                        underlayColor={COLORS.white}
                    >
                        <Text style={{ ...styles.buttonText, color: COLORS.white }}>Sign up</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 20,
        shadowColor: COLORS.black,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.largeTitle,
        fontWeight: 'bold',
        alignSelf: 'center',
        textShadowColor: COLORS.black,
        textShadowOffset: {
            width: 1,
            height: 2
        },
        textShadowRadius: 10
    },
    buttons: {
        flex: 2,
        justifyContent: 'center'
    },
    button: {
        height: 46,
        width: 280,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonText: {
        fontSize: SIZES.buttonText,
        fontWeight: 'bold',
        alignSelf: 'center',
        textShadowColor: COLORS.black,
        textShadowOffset: {
            width: 0.5,
            height: 1
        },
        textShadowRadius: 4
    },
    divisor: {
        height: 1,
        width: 300,
        marginVertical: SIZES.padding,
        backgroundColor: COLORS.white,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    divisorCenter: {
        height: 10,
        width: 10,
        backgroundColor: COLORS.white,
        borderRadius: 50,
        alignSelf: 'center'
    }
})

export default Welcome