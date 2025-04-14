import { useState, useEffect } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

import api from "./services/api"

export default function App() {
  const [res, setRes] = useState([]);
  const [cep, setCep] = useState("");

  const handleGet = async () => {
    console.log(cep);
    const response = await api.get(`/${cep}/json`)
    console.log(response);
  }

  return(
    <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value={cep}
          onChangeText={setCep}
          placeholder="Digite o CEP"
        />
      <Button title="Enviar" onPress={handleGet}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
})