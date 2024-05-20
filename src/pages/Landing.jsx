import { useState, useEffect } from "react";
import { CartList, CartsLanding, Hero, PreFooter } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
const url = "?id";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data;
  return { products };
};
const Landing = () => {
  const { products } = useLoaderData();

  return (
    <div>
      <Hero />
      <div>
        <main className="align-element my-48">
          <CartList />
          <CartsLanding />
          <PreFooter />
        </main>
      </div>
    </div>
  );
};

export default Landing;
