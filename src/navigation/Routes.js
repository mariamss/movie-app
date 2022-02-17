import Home from "../screens/Home/Home";
import Movie from "../screens/Movie/Movie";
import Search from "../screens/Search/Search";
import HeaderButton from "../components/HeaderButton/HeaderButton"

export const routes = [
  {
    name: "Home",
    component: Home,
    options: {
      headerRight: () => {
        return  <HeaderButton/>
      },
    },
  },
  {
    name: "Search",
    component: Search,
  },
  {
    name: "Movie",
    component: Movie,
  },
];
