import { useState } from "react";
import {
  View,
  Text,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { useTheme } from "../context/ThemeContext";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const { isDark, toggleTheme } = useTheme();

  function showAlert(title: string, message: string) {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertVisible(true);
  }

  function handleLogin() {
    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (!normalizedEmail) {
      showAlert("Atenção", "Preencha o usuário (e-mail institucional).");
      return;
    }

    if (!normalizedPassword) {
      showAlert("Atenção", "Preencha a senha para continuar.");
      return;
    }

    showAlert("Acesso autorizado", `Bem-vindo, ${normalizedEmail}!`);
  }

  return (
    <>
      <View className={`flex-1 overflow-hidden ${isDark ? "bg-[#05070D]" : "bg-[#F6F7FB]"}`}>
        <View className={`absolute inset-0 ${isDark ? "bg-black/50" : "bg-white/30"}`} />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 24 }}
          horizontal={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 items-center px-5">
            <View
              className={`w-full rounded-3xl border p-6 ${
                isDark ? "border-fuchsia-500/40 bg-[#080B12]/95" : "border-[#EC145D]/40 bg-white/95"
              }`}
              style={{ maxWidth: 420 }}
            >
              <View className="mb-4 flex-row items-center justify-end">
                <Text
                  className={`mr-3 text-xs font-semibold uppercase tracking-widest ${
                    isDark ? "text-fuchsia-300" : "text-[#B01045]"
                  }`}
                >
                  Modo escuro
                </Text>
                <Switch
                  value={isDark}
                  onValueChange={toggleTheme}
                  trackColor={{ false: "#F8B4CC", true: "#EC145D" }}
                  thumbColor={isDark ? "#FFFFFF" : "#FFF1F6"}
                />
              </View>

              <Image
                source={
                  isDark
                    ? require("../assets/fiap-logo2.png")
                    : require("../assets/fiap-logo.png")
                }
                className="mb-5 display-block self-center"
                style={{
                  width: Platform.OS === "web" ? 100 : 96,
                  height: Platform.OS === "web" ? 100 : 96,
                  borderRadius: isDark ? 0 : 14,
                }}
                resizeMode="contain"
              />

              <Text className={`text-4xl font-extrabold leading-tight ${isDark ? "text-fuchsia-500" : "text-[#EC145D]"}`}>
                CONECTE-SE COM
              </Text>
              <Text className={`mb-7 text-4xl font-extrabold leading-tight ${isDark ? "text-fuchsia-500" : "text-[#EC145D]"}`}>
                SUA JORNADA
              </Text>
              <Text className={`-mt-6 mb-8 text-4xl font-extrabold leading-tight ${isDark ? "text-fuchsia-300" : "text-[#B01045]"}`}>
                ACADÊMICA
              </Text>

              <InputField
                label="USUÁRIO*"
                placeholder="rm@fiap.com.br"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                containerClassName="mb-5"
                labelClassName={`uppercase tracking-widest text-[12px] ${isDark ? "text-gray-400" : "text-[#6E6E80]"}`}
                inputContainerClassName={`rounded-none border ${isDark ? "border-white/30 bg-transparent" : "border-[#D8D8E5] bg-white"}`}
                inputClassName={`py-3 ${isDark ? "text-white" : "text-[#111827]"}`}
                placeholderTextColor={isDark ? "#7D8698" : "#9AA3B2"}
              />

              <InputField
                label="SENHA*"
                placeholder="••••••••"
                isPassword
                value={password}
                onChangeText={setPassword}
                containerClassName="mb-4"
                labelClassName={`uppercase tracking-widest text-[12px] ${isDark ? "text-gray-400" : "text-[#6E6E80]"}`}
                inputContainerClassName={`rounded-none border ${isDark ? "border-white/30 bg-transparent" : "border-[#D8D8E5] bg-white"}`}
                inputClassName={`py-3 ${isDark ? "text-white" : "text-[#111827]"}`}
                placeholderTextColor={isDark ? "#7D8698" : "#9AA3B2"}
                iconColor={isDark ? "#6B7280" : "#8A8FA1"}
              />

              <View className="mb-5 mt-1 flex-row items-center justify-between">
                <Text className={`text-xs uppercase tracking-widest ${isDark ? "text-gray-400" : "text-[#6E6E80]"}`}>
                  Lembrar usuário
                </Text>
                <Switch
                  value={keepSigned}
                  onValueChange={setKeepSigned}
                  trackColor={{ false: isDark ? "#3F3F46" : "#E5E7EB", true: "#EC145D" }}
                  thumbColor={keepSigned ? "#FFFFFF" : isDark ? "#D4D4D8" : "#F3F4F6"}
                />
              </View>

              <Button
                title="LOGAR"
                onPress={handleLogin}
                className={`rounded-none border py-3 ${isDark ? "border-fuchsia-500 bg-transparent" : "border-[#EC145D] bg-transparent"}`}
                textClassName={`text-xs font-semibold tracking-widest ${isDark ? "text-fuchsia-300" : "text-[#B01045]"}`}
                textStyle={{ color: isDark ? "#F5A2D3" : "#B01045" }}
              />

              <TouchableOpacity className="mt-2 self-start">
                <Text className={`text-sm ${isDark ? "text-gray-400" : "text-[#6E6E80]"}`}>Esqueci minha senha.</Text>
              </TouchableOpacity>

              <View className="my-5 flex-row items-center">
                <View className={`h-px flex-1 ${isDark ? "bg-white/15" : "bg-[#DFE3EA]"}`} />
                <Text className={`mx-3 text-xs uppercase tracking-widest ${isDark ? "text-gray-500" : "text-[#9AA3B2]"}`}>
                  ou
                </Text>
                <View className={`h-px flex-1 ${isDark ? "bg-white/15" : "bg-[#DFE3EA]"}`} />
              </View>

              <Button
                title="CONTINUAR COM GOOGLE"
                variant="outline"
                className={`rounded-none ${isDark ? "border-white/30 bg-transparent" : "border-[#D8D8E5] bg-white"}`}
                textClassName={`text-xs font-semibold tracking-wide ${isDark ? "text-gray-300" : "text-[#374151]"}`}
                onPress={() => showAlert("Google", "Login com Google em breve!")}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        transparent
        visible={alertVisible}
        animationType="fade"
        onRequestClose={() => setAlertVisible(false)}
      >
        <View className={`flex-1 items-center justify-center px-6 ${isDark ? "bg-black/70" : "bg-black/40"}`}>
          <View
            className={`w-full max-w-sm rounded-2xl border p-5 ${
              isDark ? "border-fuchsia-500/40 bg-[#0B0F17]" : "border-[#EC145D]/30 bg-white"
            }`}
          >
            <Text className={`mb-2 text-lg font-bold ${isDark ? "text-fuchsia-300" : "text-[#B01045]"}`}>{alertTitle}</Text>
            <Text className={`mb-5 text-sm ${isDark ? "text-gray-300" : "text-[#374151]"}`}>{alertMessage}</Text>
            <TouchableOpacity
              className={`items-center rounded-xl border py-3 ${
                isDark ? "border-fuchsia-500 bg-fuchsia-500/20" : "border-[#EC145D] bg-[#FDE7F1]"
              }`}
              onPress={() => setAlertVisible(false)}
            >
              <Text className={`font-bold ${isDark ? "text-fuchsia-200" : "text-[#B01045]"}`}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
