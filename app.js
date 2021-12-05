import express from 'express';
import viewMdware from './middleware/view.mdware.js';
import routesMdware from './middleware/routes.mdware.js';
import localMdware from "./middleware/locals.mdware.js";

const app = express();
app.use('/public', express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

localMdware(app);
viewMdware(app);
routesMdware(app);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})