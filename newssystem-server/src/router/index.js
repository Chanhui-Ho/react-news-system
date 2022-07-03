const KoaRouter = require('koa-router');
const router = new KoaRouter({
    prefix: '/api'
});

const ctrl = require('../controller');

router.get('/home', ctrl.home);

module.exports = router;