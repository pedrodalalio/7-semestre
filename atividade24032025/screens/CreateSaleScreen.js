import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CreateSaleScreen({ navigation }) {
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [client, setClient] = useState("");
    const [employee, setEmployee] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSubmit = () => {
      if (!product || !quantity || !price || !client || !employee) {
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

            <Text style={styles.label}>Produto:</Text>
            <TextInput 
                style={styles.input}
                value={product}
                onChangeText={setProduct}
                placeholder="Digite o nome do Produto"
            />

            <Text style={styles.label}>Quantidade:</Text>
            <TextInput 
                style={styles.input}
                value={quantity}
                onChangeText={setQuantity}
                placeholder="Digite a quantidade"
            />
            
            <Text style={styles.label}>Valor:</Text>
            <TextInput 
                style={styles.input}
                value={price}
                onChangeText={setPrice}
                placeholder="Digite o valor"
            />

            <Text style={styles.label}>Cliente:</Text>
            <TextInput 
                style={styles.input}
                value={client}
                onChangeText={setClient}
                placeholder="Digite o cliente"
            />

            <Text style={styles.label}>Vendedor:</Text>
            <TextInput 
                style={styles.input}
                value={employee}
                onChangeText={setEmployee}
                placeholder="Digite o vendedor"
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
                    <Text style={styles.modalText}>Venda cadastrada:</Text>
                    <Text>Produto: {product}</Text>
                    <Text>Quantidade: {quantity}</Text>
                    <Text>Valor: R$: {price}</Text>
                    <Text>Cliente: {client}</Text>
                    <Text>Vendedor: {employee}</Text>
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
        paddingHorizontal: 40,
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
        width: '100%',
    }
});