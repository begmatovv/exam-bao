import axios from "axios"
const productUrl = "http://localhost:3000/products";

export const customFetch = axios.create({
    baseURL:productUrl,
})

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-Us", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed());
  return dollarAmount;
};