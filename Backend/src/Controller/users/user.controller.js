import userBusiness from '../../Business/user.business';
import responsedata from '../../Utils/response';

const userController = {
    getAllUser: async (req, res) => {
        try {
            const data = await userBusiness.getAllUser();
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    loginUser: async (req, res) => {
        try {
            console.log(req.body)
            const data = await userBusiness.loginUser(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    getAllRole: async (req, res) => {
        try {
            const data = await userBusiness.getAllRole();
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    getAllWorkingLocation: async (req, res) => {
        try {
            const data = await userBusiness.getAllWorkingLocation();
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },

    createUser: async (req, res) => {
        try {
            const data = await userBusiness.createUser(req.body);
            return responsedata(res, false, "", data);
        } catch (err) {
            return responsedata(res, true, err, null);
        }
    },
}
export default userController;
