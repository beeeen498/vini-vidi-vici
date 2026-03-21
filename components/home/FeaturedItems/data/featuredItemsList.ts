export type Drink = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export const cocktailLists: Drink[] = [
    {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Bottle",
    price: "$10",
    },
    {
    name: "Caten Malbee",
    country: "AU",
    detail: "Bottle",
    price: "$49",
    },
    {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
    },
    {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
    },
];

export const mockTailLists: Drink[] = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Bottle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Bottle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

export default { cocktailLists, mockTailLists };