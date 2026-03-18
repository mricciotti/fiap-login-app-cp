import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { useTheme } from "../context/ThemeContext";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "primary" | "outline";
};

export function Button({ title, variant = "primary", ...rest }: ButtonProps) {
  const { isDark } = useTheme();
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      className={`w-full py-4 rounded-xl items-center mb-3 ${
        isOutline
          ? isDark
            ? "border border-gray-600 bg-gray-800"
            : "border border-gray-300 bg-white"
          : "bg-red-500"
      }`}
      activeOpacity={0.8}
      {...rest}
    >
      <Text
        className={`text-base font-bold ${
          isOutline
            ? isDark ? "text-gray-200" : "text-gray-700"
            : "text-white"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
