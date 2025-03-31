import { View, Text } from "react-native";

export default function DisplayScreen({ route }) {
    const { name, phone, email } = route.params;

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Nome: {name}</Text>
            <Text>Telefone: {phone}</Text>
            <Text>E-mail: {email}</Text>
        </View>
    )
}