import { StatusBar } from "expo-status-bar";

//LIBS
import { TailwindProvider } from "tailwindcss-react-native";

//NAVS
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <TailwindProvider>
      <StatusBar />
      <StackNavigator/>
    </TailwindProvider>
  );
}
