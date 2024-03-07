import { View, Text, Image, StyleSheet, TouchableHighlight, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import SIZES from '../constants/sizes'

const Login = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Welcome back!</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder='Username'></TextInput>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry></TextInput>
                <TouchableHighlight
                    style={[styles.button, { backgroundColor: COLORS.secondary }]}
                    onPress={() => { }}
                    underlayColor={COLORS.white}
                >
                    <Text style={{ ...styles.buttonText, color: COLORS.white }}>Login</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    body: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.grey
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20,
        shadowColor: COLORS.black,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.title,
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
        height: 48,
        width: 300,
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
    input: {
        height: 48,
        width: 300,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 12,
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1,
        paddingLeft: 12,

    }
})

export default Login