import { ScrollView, StyleSheet, Text, View } from "react-native";

const MyHomeAppMenuItems = () => {
  const menuItems = [
    " Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks         \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
  ];

  return (
    <View style={menuStyles.container}>
      <ScrollView indicatorStyle="white" horizontal={false}>
        <Text style={menuStyles.menuItemsText}>View Menu Items</Text>

        <Text style={menuStyles.menuItemsListText}>{menuItems[0]}</Text>
      </ScrollView>
    </View>
  );
};

export default MyHomeAppMenuItems;

const menuStyles = StyleSheet.create({
  container: { flex: 0.75, backgroundColor: "#f9f3f1", padding: 10 },
  menuItemsText: {
    textDecorationLine: "underline",
    fontWeight: "light",
    fontSize: 30,
    flexWrap: "wrap",
  },
  menuItemsListText: { color: "black", fontSize: 18 },
});
