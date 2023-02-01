import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import * as LocalAuthentication from "expo-local-authentication";
import { useUserLogin } from "../hooks/useUserLogin";
import { useUserStore } from "../store/userStore";

const FingerAndFaceId = ({ navigation,setLoading }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);

  const {email,pass} = useUserStore(state => state.user)

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      const enroll = await LocalAuthentication.isEnrolledAsync();
      if (enroll) {
        setFingerprint(true);
      }
    })();
  }, []);

  const handle = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
      });
      if (biometricAuth.success) {
        setLoading(true)
        let password = pass
        const user = await useUserLogin({ email, password });

        if(user?.user?.uid !== undefined){
          setLoading(false)
          navigation.replace("Home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View>
      {isBiometricSupported && fingerprint ? (
        <TouchableOpacity onPress={handle}
        className='flex items-center w-full mt-4'
        >
          <Image 
          className="w-7 h-7"
          source={require('../assets/fingerprint-scan.png')} />
        </TouchableOpacity>
      ) : (
        <View>
          <Text>fingerprint not supported/ allocated</Text>
        </View>
      )}
    </View>
  );
};

export default FingerAndFaceId;
