import App from "../App/App";
import { SellerLogin } from "../Components/Forms/Seller/Login/SellerLogin";
import {
  Profile,
  Checkout,
  FlipkartPlus,
  Orders,
  Wishlist,
  Rewards,
  GiftCard,
  Register,
  Payment,
  AddAddress,
  Addresses,
  Product_Description,
} from "../Pages";
import {
  Admin,
  Seller_list,
  User_list,
  Product_List,
  Add_Product,
  Stats,
} from "../Admin_Dashboard/Pages";
export const publicRoutes = [
  { path: "/register", element: <Register />},
  { path: "/", element: <App />},
  { path: "/productDescription",element: <Product_Description />},
  { path: "/sellerLogin", element: <SellerLogin />},
];
export const privateRoutes = [
  { path: "/profile", element: <Profile /> },
  { path: "/plus", element: <FlipkartPlus /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/rewards", element: <Rewards /> },
  { path: "/giftcard", element: <GiftCard /> },
  { path: "/orders", element: <Orders /> },
  { path: "/allAddresses", element: <Addresses /> },
  { path: "/address", element: <AddAddress /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/payment", element: <Payment /> },
  { path: "/admin", element: <Admin /> },
  { path: "/sellerList", element: <Seller_list /> },
  { path: "/userList", element: <User_list /> },
  { path: "/productList", element: <Product_List /> },
  { path: "/addProduct", element: <Add_Product /> },
  { path: "/stats", element: <Stats /> },
];
