export default function handler(req, res) {


  if (req.body.id === "nabil" && req.body.password === "nabil") {
    // reply login success
    res.statusCode = 200;

    res.json({ message: "login success" });
  } else {
    // reply login failed
    res.statusCode = 401;

    res.json({ message: "login failed" });
  }
}
