import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState();
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone || !email) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    setData([{name, phone, email}]);
    setIsQrCodeVisible(true);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite o nome"
        />
        <Text style={styles.label}>Número de telefone:</Text>
        <TextInput 
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite o número de telefone"
        />
        <Text style={styles.label}>E-mail:</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o e-mail"
        />

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Gerar QR Code</Text>
        </TouchableOpacity>

        {!!isQrCodeVisible ?? <QRCode value={data} size={200}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 180,
    marginLeft: 'auto',
},
});
