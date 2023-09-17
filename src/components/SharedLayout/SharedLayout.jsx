import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
