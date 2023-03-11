const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());


app.get("/add", function (req, res) {
    try{
        var sum=parseInt(req.query.num1)+parseInt(req.query.num2)
        res.json({
            success:true,
            sum:sum
        });
    }catch(err){
        res.json({
            success:false
        });
    }
});

const port = process.env.PORT || 4000;
const server=app.listen(port);

console.log(`Server listening at port: ${port}`);

module.exports={
    app,
    server
}
