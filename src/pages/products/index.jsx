import styles from "@/styles/Products.module.scss"

import { useRouter } from "next/router";

export default function (props) {

  const router=useRouter();

  const onHandlePage=(id)=> router.push(`/products/${id}`)

  return (
    <div className={styles.Products}>
      <h1>Prodotti</h1>
      <hr />
      {props.data.products.map((product) => (
        <>
          <p className={styles.ProductsPara}  onClick={()=>onHandlePage(product.id)}>
          <img src={product.thumbnail} alt="ProductImg" className={styles.ProductsImg} />
            {product.title} - <b className={styles.ProductsPrice}>${product.price}</b> - n°:{product.stock}
          </p>
        </>
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}