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

export const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/plus" element={<FlipkartPlus />} />
        </Routes>
        <Routes>
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Routes>
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
        <Routes>
          <Route path="/giftcard" element={<GiftCard />} />
        </Routes>
        <Routes>
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </Router>
    </div>
  );
};
