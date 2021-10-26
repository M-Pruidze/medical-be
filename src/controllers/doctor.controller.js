const {
    allDoctors,
    newDoctor,
    } = require('../data/doctor.data');

// get all doctors
module.exports.allDoctors = async (req,res) => {
    try {
        const result = await allDoctors();
        res.send(
            result,
        );
    } catch (error) {
        res.status(500)
            .send({
                message: "Internal server error",
                error: "Internal server",
                status: 500,
            });
    }
};

// create a new doctor
module.exports.newDoctor = async (req,res) => {
    try {
        if (typeof req.body.doctorName == 'string' && typeof req.body.specialty == 'string' ) {
            console.log('here');
            console.log(`req.body`, req.body)
            const result = await newDoctor(req, res);
            res.send(result);
        } else {
            throw {
                message: "Invalid fields type",
                error: "Bad Request",
                status: 400,
            }
        }
    } catch (error) {
        if (error.status == 400) {
            console.log(`req.body.doctorName`, req.body.doctorName);
            console.log(`req.body.specialty`, req.body.specialty)
            console.log(`req.body`, req.body)
          res.status(error.status)
             .send(error);
        } else {
          res.status(500)
             .send({
                message: error.message,
                error: "Internal server",
                status: 500,
             });
        }

    }
};
