import styles from "@/styles/Products.module.scss";
import { useRouter } from "next/router";

export default function (props) {
  const router = useRouter();
  console.log(props)

  const onHandleBack = () => router.back();

  return (
    <>
        <h1 className={styles.Product__title}>Prodotto:</h1>
      <div className={styles.Product}>
        <img className={styles.Product__img}src={props.data.thumbnail} alt="ProductImg" />
        <p className={styles.Product__para}>{props.data.title} </p>
        <b className={styles.Product__price}>Prezzo: ${props.data.price}</b>
        <p className={styles.Product__para}>Rimanenti:{props.data.stock}</p>
        <p className={styles.Product__rating}>Rating:{props.data.rating}</p>
        <h2 className={styles.Product__discount}> Sconto attuale:{props.data.discountPercentage}%  Affrettati</h2>
        
        <button className={styles.Product__btn} onClick={onHandleBack}>Torna indietro</button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const queryId = context.query.id;
  const res = await fetch(`https://dummyjson.com/products/${queryId}`);
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
