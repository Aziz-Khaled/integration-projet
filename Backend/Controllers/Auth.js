const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employe = require("../Config/Models/Employe");


exports.SignUpEmploye  = async (req, res) => {
    const {email,password} = req.body
        try {
            const findEmploye = await Employe.findOne ({Email : email})
            if (findEmploye) {
                return res.status(400).send({ msg: `L'employé ${findEmploye.email} already exists.` });
            }
            
            const newEmploye = new Employe(req.body);
            const saltRounds = 10;
            const passwordHashed = bcrypt.hashSync(password, saltRounds);

            const EmployeId = { id: Employe._id};
            const token = jwt.sign(EmployeId, process.env.SECRET_OR_KEY);

            newEmploye.password = passwordHashed;

            await newEmploye.save();

            return res.status(200).send({ msg: `member with email ${email} added successfully`, token });

        } catch (error) {
            return res.status(400).send({ msg: "error", error });

        }
    }




   
exports.SignIpEmploye = async (req, res) => {
    const {email,password} = req.body;
    
    try {
      const find = await Employe.findOne({ email: email });
      if (!find) {
        res.status(400).send({ msg: "employe not exist " });
      }
  
      const comparePass = await bcrypt.compare(password, find.password);
      if (!comparePass) {
        res.status(400).send({ msg: "bad credentials" });
      }
      const EmployeId = { id: find._id };
      const token = jwt.sign(EmployeId, process.env.SECRET_OR_KEY);
      res.status(200).send({ msg: `sign in with success : email ${email}`, token , role: Employe.role});

    } catch (error) {
      res.status(400).send({ msg: "bad credentials ..." });
    }
  };

