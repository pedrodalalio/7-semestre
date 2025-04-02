import { useState, useEffect } from 'react';
import { Button, TextInput, View } from "react-native";

export default function HomeScreen({ navigation }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleNavigate = () => {
        if(!name || !phone || !email){
            alert("Todos os campos sao obrigatorios")
            return
        }

        navigation.navigate("EditOrConfirm", { name, phone, email })
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10}}
                value={name}
                onChangeText={setName}
                placeholder='Digite o nome'
            />

            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10}}
                value={phone}
                onChangeText={setPhone}
                placeholder='Digite o Telefone'
            />

            <TextInput
                style={{ borderWidth: 1, padding: 10, marginBottom: 10}}
                value={email}
                onChangeText={setEmail}
                placeholder='Digite o e-mail'
            />
            <Button title='Cadastrar' onPress={handleNavigate}/>
        </View>
    );
}