import { useState } from "react"
import { View, Text, Modal, Button, StyleSheet } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function DisplayScreen({ route }) {
    const { name, phone, email } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState(false);

    const handleQRCode = () => {
        setData({name, phone, email})
        setModalVisible(true);
    }

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title='Gerar QR Code' onPress={handleQRCode}/>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                <View style={styles.centeredView}>
                    <QRCode value={`Nome: ${name}, Telefone: ${phone}, E-mail ${email}`} size={200}/>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });