/* eslint-disable */

import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "64e596edd10e722c0cdd8159";
  await mongooseConnect();
  // const product = await Product.findById(featuredProductId);
  const featuredProduct = await Product.findById(featuredProductId);
  const NewProducts = await Product.find({}, null, {
    // prettier-ignore
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(NewProducts)),
    },
  };
}
