import { useState, useEffect } from 'react';
import { Button, TextInput, View } from "react-native";

export default function LoginScreen({ navigation }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleLogin = () => {
        if(!password || !email){
            alert("Todos os campos sao obrigatorios")
            return
        }

        if(email !== "pedro@gmail.com" || password !== "123456"){
            alert("E-mail ou Senha incorreto")
            return
        }

        navigation.navigate("Home")
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10}}
                value={email}
                onChangeText={setEmail}
                placeholder='Digite o e-mail'
            />

            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10}}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder='Digite a senha'
            />
            <Button title='Logar' onPress={handleLogin}/>
        </View>
    );
}