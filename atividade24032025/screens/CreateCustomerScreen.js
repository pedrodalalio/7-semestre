import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CreateCustomerScreen({ navigation }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmit = () => {
      if (!name || !cpf || !email || !phone) {
          alert("Todos os campos são obrigatórios.");
          return;
      }
      setIsModalVisible(true);
    }

    const handleCloseModal = () => {
        setIsModalVisible(false);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.jumpTo("Home")}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </TouchableOpacity>

            <Text style={styles.label}>Nome:</Text>
            <TextInput 
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Digite o nome do cliente"
            />

            <Text style={styles.label}>CPF:</Text>
            <TextInput 
                style={styles.input}
                value={cpf}
                onChangeText={setCpf}
                placeholder="Digite o CPF do cliente"
            />
            
            <Text style={styles.label}>E-mail:</Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o email do cliente"
            />

            <Text style={styles.label}>Telefone:</Text>
            <TextInput 
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                placeholder="Digite o telefone do cliente"
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={isModalVisible} animationType="slide" transparent={false}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Cliente cadastrado:</Text>
                    <Text>Nome: {name}</Text>
                    <Text>CPF: {cpf}</Text>
                    <Text>Email: {email}</Text>
                    <Text>Telefone: {phone}</Text>
                    <Button title="Fechar" onPress={handleCloseModal}></Button>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 40
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1976D2',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: '#1E88E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24, 
        width: '100%'
    }
});