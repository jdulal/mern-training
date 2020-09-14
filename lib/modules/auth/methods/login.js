(()=> {
    module.exports = async(req, res, next) => {
        const {} = req.body;
        const {} = req.params;
        const {} = req.filter;

        return res
        .status(status)
        .set('Content-Type', 'application/json')
        .send({ status, data: "Saved SuccessFully" });


    }
})();