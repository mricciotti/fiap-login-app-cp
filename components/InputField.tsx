import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

type InputFieldProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  inputClassName?: string;
  iconColor?: string;
};

export function InputField({
  label,
  isPassword = false,
  containerClassName = "",
  labelClassName = "",
  inputContainerClassName = "",
  inputClassName = "",
  iconColor,
  placeholderTextColor,
  ...rest
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { isDark } = useTheme();

  const basePlaceholderColor = isDark ? "#6B7280" : "#A0A0A0";
  const baseIconColor = iconColor ?? (isDark ? "#9CA3AF" : "#666");

  return (
    <View className={`w-full mb-4 ${containerClassName}`}>
      <Text
        className={`text-sm font-medium mb-1 ${
          isDark ? "text-gray-300" : "text-gray-600"
        } ${labelClassName}`}
      >
        {label}
      </Text>

      <View
        className={`flex-row items-center rounded-xl px-4 border ${
          isDark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300"
        } ${inputContainerClassName}`}
      >
        <TextInput
          className={`flex-1 py-3 text-base ${isDark ? "text-white" : "text-gray-900"} ${inputClassName}`}
          placeholderTextColor={placeholderTextColor ?? basePlaceholderColor}
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={baseIconColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
