function configStatic(app, express) {
    app.use(express.static('public'));
}
var staticFiles  = {
    configStatic: configStatic
};
module.exports = staticFiles;
