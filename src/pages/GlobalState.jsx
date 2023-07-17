import Head from "next/head";
import { GlobalState } from "@/components/DefaultLayout/DefaultLayout";
import { useContext } from "react";
import { useReducer } from "react";

function change(state , action ){
 
       switch(action.taste){
      case "cambia_gusto":{
        return{
          taste:"React",
          format:"Cup,"
        };
      }
      case"cambia_nuovamente":{
        return{
          taste:"Sass",
          format:"Cone",
        };
      }
      case "torna_gusto_originale":{
        return{
          taste:"VanillaJS",
          format:"Brioche",
        };
      }
    }
    throw Error("Unknown action");
  }
  

const Global = () => {
  const context = useContext(GlobalState);
  console.log(context);

 //Come initial state
  const [state, dispatch] = useReducer(change, { taste: "Vanillajs", format:"Brioche" });

/*   function handleState() {
    dispatch({ taste: "cambia_gusto" });
  }
 */
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="About-us">
        Questa è la pagina di GlobalState
        <hr />

          <button onClick={()=> {
            dispatch({taste:"cambia_gusto"})
          }}>Cambia Gusto</button>
          <p>Il gusto di {state.taste}</p>
          <p>Il formato con cui lo mangi è {state.format}</p>
          <p>Il nuovo gelato sarà {state.taste} + {state.format} </p>
          <p><button onClick={()=>{
            dispatch({taste:"cambia_nuovamente"})
          }}> Cambia nuovamente</button> </p>
          <p><button onClick={()=>{
            dispatch({taste:"torna_gusto_originale"})
          }}> Gusto originale</button></p>
      </div>
    </>
  );
};

export default Global;