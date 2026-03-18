import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

type InputFieldProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
};

export function InputField({ label, isPassword = false, ...rest }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { isDark } = useTheme();

  return (
    <View className="w-full mb-4">
      <Text className={`text-sm font-medium mb-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        {label}
      </Text>
      <View
        className={`flex-row items-center rounded-xl px-4 border ${
          isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
        }`}
      >
        <TextInput
          className={`flex-1 py-3 text-base ${isDark ? "text-white" : "text-gray-900"}`}
          placeholderTextColor={isDark ? "#6B7280" : "#A0A0A0"}
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={isDark ? "#9CA3AF" : "#666"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
