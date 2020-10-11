const router = require('express').Router();
const billingCycleService = require('./billingCycle/billingCycleService');
const billingSummaryService = require('./billingSummary/billingSummaryService');

billingCycleService.register(router, '/billingCycle');
router.get('/billingSummary', billingSummaryService.getSummary);

module.exports = router;