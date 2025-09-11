const app = require("./app");
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Smart Home Web corriendo en http://localhost:${PORT}`);
});
