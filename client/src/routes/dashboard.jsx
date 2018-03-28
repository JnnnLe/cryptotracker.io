import Dashboard from 'views/Dashboard/Dashboard.jsx';
import CoinSearch from 'views/CoinSearch/CoinSearch.jsx';
import Portfolio from 'views/Portfolio/Portfolio.jsx';

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { path: "/lookup", name: "Coin Lookup", icon: "location_map-big", component: CoinSearch },
    { path: "/portfolio", name: "Portfolio", icon: "design_app", component: Portfolio },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" },
];
export default dashRoutes;
