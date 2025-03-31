import { View, Button } from "react-native";

export default function EditOrConfirmScreen({ navigation, route }) {
    const { name, phone, email } = route.params;

    const handleEditNavigate = () => {
        navigation.goBack()
    }
    
    const handleConfirm = () => {
        navigation.navigate("Display", { name, phone, email })
    }

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title='Confirmar Dados' onPress={handleConfirm}/>
            <View style={{ marginBottom: 5 }}></View>
            <Button title='Editar'onPress={handleEditNavigate}/>
        </View>
    )
}