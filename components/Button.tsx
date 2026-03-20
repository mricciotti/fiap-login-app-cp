import { TouchableOpacity, Text, TouchableOpacityProps, TextStyle } from "react-native";
import { useTheme } from "../context/ThemeContext";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "primary" | "outline";
  className?: string;
  textClassName?: string;
  textStyle?: TextStyle;
};

export function Button({
  title,
  variant = "primary",
  className = "",
  textClassName = "",
  textStyle,
  ...rest
}: ButtonProps) {
  const { isDark } = useTheme();
  const isOutline = variant === "outline";

  const baseButtonClass = isOutline
    ? isDark
      ? "border border-gray-600 bg-gray-800"
      : "border border-gray-300 bg-white"
    : "bg-red-500";

  const baseTextClass = isOutline
    ? isDark
      ? "text-gray-200"
      : "text-gray-700"
    : "text-white";

  return (
    <TouchableOpacity
      className={`w-full py-4 rounded-xl items-center mb-3 ${baseButtonClass} ${className}`}
      activeOpacity={0.8}
      {...rest}
    >
      <Text className={`text-base font-bold ${baseTextClass} ${textClassName}`} style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
