import "@/styles/globals.css";
import DefaultLayout from "@/components/DefaultLayout";

export default function App({ Component, pageProps }) {
  
  return (
       <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>
    
  );
}
