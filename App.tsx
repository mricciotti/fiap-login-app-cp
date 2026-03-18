import "./styles/global.css";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LoginScreen } from "./screens/LoginScreen";

function Root() {
  const { isDark } = useTheme();
  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <LoginScreen />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  );
}
