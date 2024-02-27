/*eslint-disable*/
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useStore } from "../store/store";


const getCategoriesFromData = (data) => {
  let temp = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

const getCoffeeList = (category, data) => {
  if (category === "All") {
    return data;
  } else {
    return data.filter((item) => item.name === category);
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeanList = useStore((state) => state.BeanList);
  const addToCart = useStore((state) => state.addToCart);
  const calculateCartPrice = useStore((state) => state.calculateCartPrice);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = useState("");
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
