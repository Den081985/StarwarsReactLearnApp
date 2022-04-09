import HomePage from "../containers/HomePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PeoplePage from "../containers/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavouritePage from "../containers/FavouritePage/FavouritePage";
import SearchPage from "../containers/SearchPage/SearchPage";
import ErrorMessage from "../components/ErrorMessage";
//массив с данными роутов
const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/favourite",
    element: <FavouritePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/fail",
    element: <ErrorMessage />,
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
];

export default routesConfig;
