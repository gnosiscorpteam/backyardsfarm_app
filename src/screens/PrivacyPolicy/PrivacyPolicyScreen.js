import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import { ScrollView } from 'react-native-virtualized-view';
import Header from "../../components/molecules/Header";
import StatusBarConfig from '../../components/atoms/StatusBarConfig';

export default function PrivacyPolicyScreen() {
  return (
    <>
      <StatusBarConfig isAuthScreen={false} />

      <Header screenTitle={"Privacy Policy"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.sectionText}>
            Welcome to the FoodHolic app Privacy Policy. At FoodHolic, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our app and services.
          </Text>
        </View>

        {/* Data Collection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Collection</Text>
          <Text style={styles.sectionText}>
            When you use the FoodHolic app, we may collect certain information from you, including your name, contact information, delivery address, payment details, and order history. We also collect device information, such as your device type, operating system, and unique device identifiers.
          </Text>
        </View>

        {/* Data Usage */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Usage</Text>
          <Text style={styles.sectionText}>
            We use the collected information to provide and improve our food delivery services, process your orders, and communicate with you. We may also use your information for marketing and promotional purposes, but you can opt out of marketing communications at any time.
          </Text>
        </View>

        {/* Data Sharing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Sharing</Text>
          <Text style={styles.sectionText}>
            We may share your information with our restaurant partners, delivery drivers, and payment processing providers to fulfill your orders. We do not sell or rent your personal information to third parties.
          </Text>
        </View>

        {/* Security */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Text style={styles.sectionText}>
            We take reasonable security measures to protect your information from unauthorized access and disclosure. However, no data transmission over the internet can be guaranteed as 100% secure, so we cannot ensure or warrant the security of any information you transmit to us.
          </Text>
        </View>

        {/* Contact Us */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionText}>
            If you have any questions, concerns, or requests regarding your personal information or our Privacy Policy, please contact us at support@foodholicapp.com.
          </Text>
        </View>
      </ScrollView>

    </>
  )
}