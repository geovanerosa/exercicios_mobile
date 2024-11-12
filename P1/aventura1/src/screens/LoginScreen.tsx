import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import styles from '../styles/LoginScreenStyles';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Profile', { username });
    } else {
      alert('Por favor, insira credenciais válidas!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png' }}
        style={styles.logo}
      />

<TextInput
  style={styles.input}
  placeholder="Email ou número de telefone"
  value={username}
  onChangeText={(text) => setUsername(text)}
  placeholderTextColor="#aaa"
/>
<TextInput
  style={styles.input} //Inserindo asterístico na senha
  placeholder="Senha"
  value={password}
  onChangeText={(text) => setPassword(text)}
  secureTextEntry
  placeholderTextColor="#aaa"
/>
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#fff" />
      </View>
    </View>
  );
};

export default LoginScreen;
