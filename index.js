
 "use strict";

 const port      = 3020;
 const express                     = require('express');
 const router                      = express.Router();
 const app                         = express();
 
 global.app                        = app;
 global.router                     = router;
 require('./connect/connect');
 const routers =require('./routers/route');
 app.use('/', router);

 app.listen(port);