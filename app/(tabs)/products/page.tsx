import ProductList from "@/components/product-list";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
    orderBy: {
      created_at: "asc"
    }
  })
  return products;
}

export type InitialProducts = Prisma.PromiseReturnType<typeof getInitialProducts>;

async function Products() {
  const initailProducts = await getInitialProducts();
  return (
    <div>
      <ProductList initialProducts={initailProducts} />
    </div>
  )
}

export default Products