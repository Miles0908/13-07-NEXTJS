// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {


 /*  console.log("Sono il server")  */   /* Se proviamo a fare questo console.log praticamente verrà visualizzato solo nel terminale, non nel pannelo ispeziona di google */
  res.status(200).json({ name: 'John Doe' })
}


