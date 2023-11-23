import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";

const { width } = Dimensions.get("screen");

const SplitOTPInput = ({ length, onChange }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    onChange(otp);
  }, [otp, onChange]);

  const handleChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    if (text !== "" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    onChange(newOTP);
  };

  const handleBackspace = (index) => {
    if (otp[index] === "" && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    } else {
      const newOTP = [...otp];
      newOTP[index] = "";
      setOTP(newOTP);
      if (inputRefs.current[index]) {
        inputRefs.current[index].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <View key={index} style={styles.inputContainer}>
          <Input
            ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === "Backspace") {
                handleBackspace(index);
              }
            }}
            keyboardType="numeric"
            maxLength={1}
            inputContainerStyle={styles.input}
            inputStyle={styles.inputText}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    width: width * 0.16,
  },
  inputText: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SplitOTPInput;
