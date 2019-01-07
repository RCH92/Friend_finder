var path = requrie("path");

module.exports = function(app) {

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/style", function(req, res){
        res.sendFile(path.join(__dirname, "../public/style.css"));
    });
    
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}