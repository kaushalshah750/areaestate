import leadBusiness from '../../Business/lead.business';
import responsedata from '../../Utils/response';

const leadController = {
    getAllLeads: async(req, res) => {
        try {
            const data = await leadBusiness.getAllLeads(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    createLead: async(req, res) => {
        try {
            const data = await leadBusiness.createLead(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    numberOfLead: async(req, res) => {
        try {
            const data = await leadBusiness.numberOfLead(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    updateLead: async(req, res) => {
        try {
            const data = await leadBusiness.updateLead(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    updateCallDetails: async(req, res) => {
        try {
            const data = await leadBusiness.updateCallDetails(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },
}

export default leadController;