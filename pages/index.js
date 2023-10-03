/* eslint-disable */

import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

export default function HomePage({ featuredProduct, newProducts, wishedNewProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} wishedProducs = {wishedNewProducts}/>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const featuredProductId = "64e596edd10e722c0cdd8159";
  await mongooseConnect();
  // const product = await Product.findById(featuredProductId);
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    // prettier-ignore
    sort: { _id: -1 },
    limit: 10,
  });

  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedNewProducts = session?.user
    ? await WishedProduct.find({
        userEmail:session.user.email,
        product: newProducts.map(p => p._id.toString()),
      })
    : [];

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
    },
  };
}
