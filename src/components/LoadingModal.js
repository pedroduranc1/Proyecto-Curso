import AnimatedLottieView from "lottie-react-native";
import { View } from "react-native";

const LoadingModal = ({pos}) => {
  return (
    <View className={`absolute ${pos === 'Registro' ? "top-[30%]" : "top-[38%]"} left-0 flex items-center w-[100%] h-[100%]`}>
      <View className="bg-white/90 rounded-lg w-[30%] flex items-center justify-center">
        <AnimatedLottieView
          className="w-[100%]"
          source={require("../assets/loading.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default LoadingModal;
