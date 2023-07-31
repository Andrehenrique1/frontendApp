import React, { useEffect, useState } from 'react';
import {
    BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function EntrarCliente({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const goToRegister = () => {
        navigation.navigate('Cliente');
    }

    const handleSubmit = () => {
        // Enviar dados do formulário para um servidor
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Image
                    source={require('../img/logo.png')}
                    style={{ width: 140, height: 140 }}
                />
                <Text style={styles.title}>Login Cliente</Text>
                <Text style={styles.subtitle}>
                    Entre e explore todas as vantagens do nosso aplicativo
                </Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.toggleButton} onPress={goToRegister}>
                <Text style={styles.toggleButtonText}>Não tenho uma conta</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flex: 1,
    },
    topo: {
        padding: 15,
        paddingBottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 40,
        color: '#1333cd',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
        textAlign: 'center',
    },
    heading: {
        color: '#1333cd',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666666',
        textAlign: 'center',
    },
    form: {
        padding: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: 'transparent',
        transitionProperty: 'borderColor, boxShadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-in-out',
        width: '100%',
        padding: 12,
        marginVertical: 8,
        borderRadius: 11,
        boxSizing: 'border-box',
        height: 50,
        backgroundColor: '#f3f3fd',
    },
    button: {
        backgroundColor: '#1333cd',
        color: 'white',
        padding: 12,
        marginVertical: 8,
        borderWidth: 0,
        fontWeight: '600',
        borderRadius: 4,
        width: '100%',
        fontSize: 17,
        shadowColor: '#00000033',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleButtonText: {
        // aqui você define o estilo do Text
    },
});