import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles';
import Header from "../../components/molecules/Header";
import { ScrollView } from 'react-native-virtualized-view';
import StatusBarConfig from '../../components/atoms/StatusBarConfig';

export default function SecurityScreen() {
  return (
    <>
      <StatusBarConfig isAuthScreen={false} />

      <Header screenTitle={"Security"} />

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Security</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Password Management</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Two-Factor Authentication</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Device Management</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security Tips</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Preferences</Text>
          <Text style={styles.sectionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae velit sit amet quam fringilla gravida.
          </Text>
        </View>
      </ScrollView>

    </>
  )
}