import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import MenuCard from "../../components/molecules/MenuCard";
import { ScrollView } from "react-native-virtualized-view";
import styles from "./styles";
import EmptyScreen from "../../components/templates/EmptyScreen";

const { width } = Dimensions.get("screen");

export default function SearchResultsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [debouncing, setDebouncing] = useState(false);
  const { products } = useSelector((state) => state.menuReducer);
  const navigation = useNavigation();

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResults([]);
      setShowNoResults(false);
      setDebouncing(false);
      return;
    }

    setDebouncing(true);
    const delayDebounceFn = setTimeout(() => {
      performSearch(searchQuery);
      setDebouncing(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const performSearch = (query) => {
    const filteredResults = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredResults.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
    setSearchResults(filteredResults);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-left"
              size={width * 0.07}
              color={theme.colors.darkColor}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Item"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            autoFocus={true}
          />
        </View>

        <ScrollView contentContainerStyle={styles.contentContainerStyle} onScroll={() => Keyboard.dismiss()} keyboardShouldPersistTaps="handled">
          {debouncing ? (
            <ActivityIndicator size="large" color={theme.colors.primaryColor} />
          ) : searchResults.length === 0 ? (
            showNoResults ? (

              <EmptyScreen
                title={"No Results found"}
                description={`Try searching your favourite dish by different keyword`}
                icon={"search"}
                customStyle={{ paddingTop: 0 }}
              />
            ) : (

              <EmptyScreen
                title={"Type something to search"}
                description={`Try searching your favourite dish by keyword`}
                icon={"search"}
                customStyle={{ paddingTop: 0 }}
              />
            )
          ) : (
            <View>
              <Text style={styles.foundResultsText}>
                Found {searchResults.length}{" "}
                {searchResults.length === 1 ? "result" : "results"}
              </Text>

              <FlatList
                numColumns={2}
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MenuCard item={item} />}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
