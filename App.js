import { StatusBar } from "expo-status-bar";

//LIBS
import { TailwindProvider } from "tailwindcss-react-native";
import { QueryClient, QueryClientProvider } from "react-query";

//NAVS
import StackNavigator from "./src/navigation/StackNavigator";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider>
        <StatusBar />
        <StackNavigator />
      </TailwindProvider>
    </QueryClientProvider>
  );
}
