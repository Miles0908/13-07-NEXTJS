// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message:"The method was correct" });
  } else {
    res.status(405).json({ message: "method not allowed" });
  } /* Se proviamo a fare questo console.log praticamente verrà visualizzato solo nel terminale, non nel pannelo ispeziona di google */

  /*  console.log("Sono il server")  */
}
