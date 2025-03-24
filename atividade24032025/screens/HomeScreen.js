import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Home</Text>
            <View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Criar Cliente")}
                >
                    <Text style={styles.buttonText}>Cadastrar Cliente</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap}></View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Criar Funcionário")}
                >
                    <Text style={styles.buttonText}>Cadastrar Funcionário</Text>
                </TouchableOpacity>
                <View style={styles.buttonGap}></View>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate("Criar Venda")}
                >
                    <Text style={styles.buttonText}>Cadastrar Venda</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#1565C0',
    },
    button: {
        backgroundColor: '#1E88E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 25, 
        width: '100%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonGap: {
        marginBottom: 8 
    }
});