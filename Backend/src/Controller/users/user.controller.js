import userBusiness from '../../Business/user.business';
import responsedata from '../../Utils/response';

exports.getAllUser = (req, res) => {
    userBusiness.getAllUser(req.body, req.user)
        .then(data => responsedata(res, false, "", data))
        .catch(err => responsedata(res, true, err, null));
}

exports.loginUser = (req, res) => {
    userBusiness.loginUser(req.body, req.user)
        .then(data => responsedata(res, false, "", data))
        .catch(err => responsedata(res, true, err, null));
}

exports.getAllRole = (req, res) => {
    userBusiness.getAllRole()
        .then(data => responsedata(res, false, "", data))
        .catch(err => responsedata(res, true, err, null));
}

exports.createUser = (req, res) => {
    userBusiness.createUser(req)
        .then(data => responsedata(res, false, "", data))
        .catch(err => responsedata(res, true, err, null));
}
