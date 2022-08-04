import dynamic from "next/dynamic";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const ProductFeedComponent = dynamic(
  () => import("../components/ProductFeed"),
  { ssr: false }
);
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeedComponent products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products?limit=12");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
// GET https://fakestoreapi.com/products
