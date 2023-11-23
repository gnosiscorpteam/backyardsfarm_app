import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../theme/theme";
import Button from "../../../components/atoms/Button";
import NavigationStrings from "../../../constants/NavigationStrings";
import { ScrollView } from "react-native-virtualized-view";

const { width } = Dimensions.get('screen');

export default function ForgotPasswordScreen({ navigation }) {
  const [via, setVia] = useState("sms");
  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.fp_container]}>
          <Text style={styles.heading}>Forgot Password?</Text>
          <Text style={styles.paragraphText}>
            Select which contact details should we {"\n"}use to reset your password
          </Text>

          <TouchableOpacity
            style={[
              styles.fp_card,
              {
                borderWidth: via === "sms" ? 1 : 0,
                borderColor: via === "sms" ? "red" : "#fff",
              },
            ]}
            onPress={() => setVia("sms")}
          >
            <View>
              <Ionicons
                color={theme.colors.primaryColor}
                size={width * 0.09}
                name="chatbubble-ellipses-sharp"
              />
            </View>
            <View style={styles.fp_cardcontent}>
              <Text style={styles.fp_cardText}>Via sms:</Text>
              <View style={styles.fp_optionNumber}>
                <Text style={styles.fp_dotText}>.... ....</Text>
                <Text style={styles.fp_numText}> 4235</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.fp_card,
              {
                borderWidth: via === "email" ? 1 : 0,
                borderColor: via === "email" ? "red" : "#fff",
              },
            ]}
            onPress={() => setVia("email")}
          >
            <View>
              <Ionicons color={theme.colors.primaryColor} size={width * 0.09} name="mail" />
            </View>
            <View style={styles.fp_cardcontent}>
              <Text style={styles.fp_cardText}>Via email:</Text>
              <View style={styles.fp_optionNumber}>
                <Text style={styles.fp_dotText}>.... </Text>
                <Text style={styles.fp_numText}>@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>


        </View>
      </ScrollView>

      <View style={styles.custommBtnStyle}>
        <Button
          btnText={"Next"}
          onPressHandler={() =>
            navigation.navigate(NavigationStrings.OTP_SCREEN)
          }
        />
      </View>
    </>


  );
}
