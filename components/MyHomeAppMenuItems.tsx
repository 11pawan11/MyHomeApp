import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface SectionProps {
  title: string;
  data: MenuItems[];
}

interface MenuItems {
  name: string;
  price: string;
}

//header attached twith flatList inti it
// const Header = () => (
//   <Text style={menuStyles.menuItemsText}>View Menu Items</Text>
// );

//footer renderrer
const Footer = () => (
  <View style={menuStyles.containerFooter}>
    <Text style={menuStyles.innerFooterText}>
      All Right Reserved, Copyright to @2024 My Home
    </Text>
  </View>
);
//seperator is used  atached with menuitems as border in the bottom
const Separator = () => <View style={menuStyles.borderInMenuItems}></View>;

//this is for the component to render the items of the menu
const Item: React.FC<{ name: string; price: string }> = ({ name, price }) => {
  return (
    <View style={menuStyles.sectionStyle}>
      <Text style={menuStyles.menuItemsListText}>{name}</Text>
      <Text style={menuStyles.menuItemsListPriceText}>{price}</Text>
    </View>
  );
};

// rendering teh lilst item in the flat list
interface MenuProps {
  showMenus: boolean;
}
const MyHomeAppMenuItems: React.FC<MenuProps> = ({ showMenus }) => {
  const menuItemsToDisplay: SectionProps[] = [
    {
      title: "Appetizers",
      data: [
        { name: "Hummus", price: "$5.00" },
        { name: "Moutabal", price: "$5.00" },
        { name: "Falafel", price: "$7.50" },
        { name: "Marinated Olives", price: "$5.00" },
        { name: "Kofta", price: "$5.00" },
        { name: "Eggplant Salad", price: "$8.50" },
      ],
    },
    {
      title: "Main Dishes",
      data: [
        { name: "Lentil Burger", price: "$10.00" },
        { name: "Smoked Salmon", price: "$14.00" },
        { name: "Kofta Burger", price: "$11.00" },
        { name: "Turkish Kebab", price: "$15.50" },
      ],
    },
    {
      title: "Sides",
      data: [
        { name: "Fries", price: "$3.00" },
        { name: "Buttered Rice", price: "$3.00" },
        { name: "Bread Sticks", price: "$3.00" },
        { name: "Pita Pocket", price: "$3.00" },
        { name: "Lentil Soup", price: "$3.75" },
        { name: "Greek Salad", price: "$6.00" },
        { name: "Rice Pilaf", price: "$4.00" },
      ],
    },
    {
      title: "Desserts",
      data: [
        { name: "Baklava", price: "$3.00" },
        { name: "Tartufo", price: "$3.00" },
        { name: "Tiramisu", price: "$5.00" },
        { name: "Panna Cotta", price: "$5.00" },
      ],
    },
  ];

  const menuItems = ["Home", "Login", "Register", "Forgot Password"];

  const [showMenu, setShowMenu] = useState(showMenus);
  const renderItem = ({ item }: { item: MenuItems }) => (
    <Item name={item.name} price={item.price} />
  );
  const renderSectionHeader = ({
    section: { title },
  }: {
    section: SectionProps;
  }) => <Text style={menuStyles.menuItemsListTitleText}>{title}</Text>;

  return (
    <ScrollView style={menuStyles.container}>
      <Pressable
        style={menuStyles.pressStyle}
        onPress={() => setShowMenu(!showMenu)}
      >
        <Text style={menuStyles.menuItemsText}>
          {showMenu ? "Close" : "View Menu Items"}
        </Text>
      </Pressable>
      {/* //is option for the scroll view */}
      {showMenu && (
        // <SectionList
        //   keyExtractor={(item, index) => item.name + index}
        //   sections={menuItemsToDisplay}
        //   renderItem={renderItem}
        //   renderSectionHeader={renderSectionHeader}
        //   ItemSeparatorComponent={Separator}
        //   ListFooterComponent={Footer}
        // />
        <View>
          {menuItems.map((item, index) => (
            <View key={index}>
              <Text style={menuStyles.menuItemsText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default MyHomeAppMenuItems;

//for styling the menu
const menuStyles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    zIndex: 50,
    marginTop: 260,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItemsText: {
    fontWeight: "light",
    fontSize: 25,
    textAlign: "right",
    color: "black",
    // backgroundColor: "#32a4b4",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    textDecorationLine: "none",
    zIndex:50
  },
  pressStyle: {
    margin: 80,
    backgroundColor: "#32a4b4",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  menuItemsListText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
    fontSize: 18,
    color: "black",
  },
  menuItemsListPriceText: {
    color: "black",
    fontSize: 18,
    paddingHorizontal: 20,
    alignContent: "center",
  },
  borderInMenuItems: {
    borderBottomWidth: 1,
    padding: 2,
    borderBottomColor: "lightgray",
  },
  containerFooter: { backgroundColor: "#1d8348" },
  innerFooterText: {
    fontWeight: "semibold",
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  // this for title  of menu items
  menuItemsListTitleText: {
    backgroundColor: "#28b463",
    color: "white",
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
