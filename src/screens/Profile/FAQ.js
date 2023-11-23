import { View, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Entypo } from '@expo/vector-icons';
import theme from '../../theme/theme';

const { width } = Dimensions.get('screen');

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = [
    {
      question: "How do I place an order?",
      answer:
        "You can place an order by selecting the items you want from the menu and adding them to your cart. Once you've reviewed your cart, proceed to checkout and follow the instructions to complete your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, mobile wallets, and cash on delivery. You can choose your preferred payment method during checkout.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "Yes, there is a minimum order amount of $10 for delivery. Orders below this amount may not be eligible for delivery and may need to be picked up from the restaurant.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by going to the 'Order Tracking' section in the app. Enter your order number, and you'll be able to see the real-time status and location of your order.",
    },
  ];

  return (
    <View>
      <Text style={styles.modalHeading}>FAQ</Text>

      {faqData.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            onPress={() => toggleExpand(index)}
            style={styles.accordion}
          >
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Entypo
              name={
                expandedIndex === index ? "circle-with-minus" : "circle-with-plus"
              }
              size={width * 0.065}
              color={theme.colors.darkColor}
            />
          </TouchableOpacity>
          {expandedIndex === index && (
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          )}

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  modalHeading: {
    fontSize: theme.fonts.fontSizeMedium,
    fontFamily: theme.fonts.RobotoBold,
    color: theme.colors.darkColor,
    marginBottom: width * 0.06
  },
  faqItem: {
    marginBottom: width * 0.065,
  },
  faqQuestion: {
    fontSize: width * 0.045,
    color: theme.colors.darkColor,
    marginBottom: width * 0.02,
    fontFamily: theme.fonts.RobotoBold
  },
  faqAnswer: {
    fontSize: width * 0.038,
    color: theme.colors.darkColor,
    fontFamily: theme.fonts.RobotoRegular,
    lineHeight: width * 0.06
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
