import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if(email !== "pedro@gmail.com" || password !== "123456"){
            alert("E-mail ou Senha incorretos")
            inputCleaner()
            return;
        }

        alert("Bem vindo de volta!");
        navigation.jumpTo('Home')
    }

    const inputCleaner = () =>{
        setEmail("")
        setPassword("")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>E-mail:</Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                inputMode='email'
                placeholder="Digite o e-mail de login"
            />

            <Text style={styles.label}>Senha:</Text>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="Digite a senha"
            />

            <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
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
        color: '#C62828',
    },
    label: {
        marginBottom: 8,
        fontSize: 18,
        color: '#1565C0',
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 15,
        padding: 12,
        borderWidth: 1,
        borderColor: '#64B5F6',
        borderRadius: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    submitButton: {
        backgroundColor: '#1E88E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24, 
        width: '100%',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});