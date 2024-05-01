const {app} = require("./app.js")
const mongoose = require("mongoose")

const port = process.env.PORT || 3000;

app.listen(port, async () => { 
    await mongoose.connect("mongodb+srv://omarshaaban742001:VQbHVphijJcN8ZvK@cluster0.vsgaa9x.mongodb.net/fitness_app");
    console.log(`listening on port ${port} ...`);
});
