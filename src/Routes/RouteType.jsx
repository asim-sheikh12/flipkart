import { Profile } from "../Pages/Profile/Profile";
import { FlipkartPlus } from "../Pages/Plus/FlipkartPlus";
import { Orders } from "../Pages/Orders/Orders";
import { Wishlist } from "../Pages/Wishlist/Wishlist";
import { Rewards } from "../Pages/Rewards/Rewards";
import { GiftCard } from "../Pages/GiftCard/GiftCard";
import { Register } from "../Pages/Register/Register";
import App from "../App/App";
import { AddAddress } from "../Pages/Address/AddAddress";
import { Addresses } from "../Pages/Address/Addresses";
import { Product_Description } from "../Pages/Product_Description/Product_Description";
import { Checkout } from "../Pages/Checkout/Checkout";
import { Payment } from "../Pages/Payment Page/Payment";
export const routes = [
    { path: "/profile", element: <Profile /> },
    { path: "/plus", element: <FlipkartPlus /> },
    { path: "/wishlist", element: <Wishlist /> },
    { path: "/rewards", element: <Rewards /> },
    { path: "/giftcard", element: <GiftCard /> },
    { path: "/orders", element: <Orders /> },
    { path: "/register", element: <Register /> },
    { path: "/", element: <App /> },
    { path: "/allAddresses", element: <Addresses /> },
    { path: "/address", element: <AddAddress /> },
    { path: "/productDescription", element: <Product_Description /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/payment", element: <Payment /> },
  ];