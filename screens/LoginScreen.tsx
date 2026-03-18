import { useState } from "react";
import {
  View,
  Text,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useTheme } from "../context/ThemeContext";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  function handleLogin() {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha e-mail e senha para continuar.");
      return;
    }
    Alert.alert("Login", `Bem-vindo, ${email}!`);
  }

  return (
    <ScrollView
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header FIAP */}
      <View className="bg-red-500 w-full items-center pt-16 pb-10 rounded-b-3xl mb-8">
        <Image
          source={require("../assets/fiap-logo.png")}
          className="w-20 h-20 rounded-2xl mb-4"
          resizeMode="contain"
        />
        <Text className="text-white text-3xl font-bold tracking-widest">FIAP</Text>
        <Text className="text-white text-sm opacity-80 mt-1">Portal do Aluno</Text>
      </View>

      {/* Formulário */}
      <View className="flex-1 px-6">

        {/* Toggle Dark/Light Mode */}
        <View className="flex-row items-center justify-end mb-6">
          <Ionicons
            name={isDark ? "moon" : "sunny"}
            size={18}
            color={isDark ? "#FACC15" : "#F97316"}
          />
          <Text className={`text-sm mx-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {isDark ? "Dark" : "Light"}
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: "#D1D5DB", true: "#4B5563" }}
            thumbColor={isDark ? "#FACC15" : "#F97316"}
          />
        </View>

        <Text className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
          Bem-vindo de volta 👋
        </Text>
        <Text className={`text-sm mb-6 ${isDark ? "text-gray-400" : "text-gray-400"}`}>
          Faça login para acessar sua conta FIAP
        </Text>

        {/* Inputs */}
        <InputField
          label="E-mail institucional"
          placeholder="rm123456@fiap.com.br"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label="Senha"
          placeholder="••••••••"
          isPassword
          value={password}
          onChangeText={setPassword}
        />

        {/* Esqueceu a senha */}
        <TouchableOpacity className="self-end -mt-2 mb-5">
          <Text className="text-red-500 text-sm font-medium">Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Switch - Manter conectado */}
        <View className="flex-row items-center mb-6">
          <Switch
            value={keepSigned}
            onValueChange={setKeepSigned}
            trackColor={{ false: "#D1D5DB", true: "#EF4444" }}
            thumbColor={keepSigned ? "#fff" : "#f4f3f4"}
          />
          <Text className={`text-sm ml-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Manter conectado
          </Text>
        </View>

        {/* Botão Login */}
        <Button title="Entrar" onPress={handleLogin} />

        {/* Divisor */}
        <View className="flex-row items-center my-4">
          <View className={`flex-1 h-px ${isDark ? "bg-gray-700" : "bg-gray-200"}`} />
          <Text className={`text-xs mx-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            ou entre com
          </Text>
          <View className={`flex-1 h-px ${isDark ? "bg-gray-700" : "bg-gray-200"}`} />
        </View>

        {/* Botão Google */}
        <Button
          title="   Continuar com Google"
          variant="outline"
          onPress={() => Alert.alert("Google", "Login com Google em breve!")}
        />

        {/* Rodapé */}
        <View className="flex-row justify-center mt-6 mb-4">
          <Text className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Não tem uma conta?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-red-500 text-sm font-bold">Cadastre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
