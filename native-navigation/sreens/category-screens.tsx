import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/category-grid-tile";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CategoryType = {
  id: string;
  color: string;
  title: string;
};

type RootStackParamList = {
  Categories: undefined;
  // MealsOverview: undefined;
  MealsOverview: { overviewId: string };
  // MealDetail: { mealId: string };
};

type CategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Categories"
>;

type Props = {
  navigation: CategoryScreenNavigationProp;
};

const CategoryScreens = ({ navigation }: Props) => {
  function renderCategoryItem({ item }: { item: CategoryType }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { overviewId: item.id });
    }

    return (
      <CategoryGridTile
        color={item.color}
        title={item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreens;
