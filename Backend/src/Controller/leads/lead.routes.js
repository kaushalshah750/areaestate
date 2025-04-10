import express from 'express';
import leads from './lead.controller'

const router = express.Router();

router.post("/", leads.getAllLeads);
router.post("/add", leads.createLead);
router.post("/update", leads.updateLead);
router.post("/update-call", leads.updateCallDetails);
router.post("/count", leads.numberOfLead);

export default router;