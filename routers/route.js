
const dataController           = require('../controllers/controllers')


router.post('/create', dataController.create  );
router.get('/list', dataController.list);
router.put('/update/:id', dataController.update);
router.post('/checklocation', dataController.checklocation);

router.route('/chat').get((req, res) => { res.send('OK') })