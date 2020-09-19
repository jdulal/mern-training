(()=> {
    module.exports = async(req, res, next) => {
        //const {} = req.body;
        //const {} = req.params;
        // const {} = req.filter;
        //console.log(req.body);
        //console.log(req.params,"========================");
        console.log(req,"========================================")
        return res
        .status(200)
        .set('Content-Type', 'application/json')
        .send({ status: 200, data: "Saved SuccessFully" });


    }
})();