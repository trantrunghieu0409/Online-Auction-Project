export default function (app) {
    //use your route here




    
    // 404 and 500 pages
    app.use(function (req, res, next) {
        res.render('404', { layout: false });
    });

    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.render('500', { layout: false });
    });
}