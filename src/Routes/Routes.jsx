import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />

          <Route path="/plus" element={<FlipkartPlus />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/rewards" element={<Rewards />} />

          <Route path="/giftcard" element={<GiftCard />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/register" element={<Register />} />

          <Route exact path="/" element={<App />} />

          <Route exact path="/allAddresses" element={<Addresses />} />

          <Route exact path="/address" element={<AddAddress />} />
        </Routes>
      </Router>
    </div>
  );
};
