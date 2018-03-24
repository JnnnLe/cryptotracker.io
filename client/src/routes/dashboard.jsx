import Dashboard from 'views/Dashboard/Dashboard.jsx';
import CoinSearch from 'views/CoinSearch/CoinSearch.jsx';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/lookup", name: "Coin Lookup", icon: "location_map-big", component: CoinSearch },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
