import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function MenuCliente({ userId, csrfToken, navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate('Listagem', { userId, csrfToken })} style={styles.menuItem}><Text>Início</Text></TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}><Text>Meus pedidos</Text></TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}><Text>Opções</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        height: 50,
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
});
