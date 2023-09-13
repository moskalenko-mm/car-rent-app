// import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Favorites } from "./pages/Favorites/Favorites";
import { Catalog } from "./pages/Catalog/Catalog";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        {/* <Route path="*" element={<Suspense fallback={<Loader />}><NotFoundPage /></Suspense>} /> */}
      </Routes>
    </>
  );
};
