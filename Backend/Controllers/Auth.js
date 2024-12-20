const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employe = require("../Models/Employe");


exports.SignUpEmploye = async (req, res) => {
  const { email, password } = req.body;
  try {
      const findEmploye = await Employe.findOne({ email });
      if (findEmploye) {
          return res.status(400).send({ msg: `L'employé already exists.` });
      }

    
    const newEmploye = new Employe({ email, role });
    const saltRounds = 10;
    const passwordHashed = bcrypt.hashSync(password, saltRounds);
    newEmploye.password = passwordHashed;

      const payload = { id: newEmploye._id, role: newEmploye.role };
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY);

      await newEmploye.save();

      return res.status(201).send({ msg: `Employé with email ${email} added successfully`, token });
  } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};

exports.SignIpEmploye = async (req, res) => {
  const { email, password } = req.body;

  try {
      const find = await Employe.findOne({ email });
      if (!find) {
          return res.status(400).send({ msg: "Employé does not exist." });
      }

      const comparePass = await bcrypt.compare(password, find.password);
      if (!comparePass) {
          return res.status(400).send({ msg: "Bad credentials." });
      }

      const payload = { id: find._id, role: find.role };
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY);

      return res.status(200).send({ msg: `Sign in successful: email ${email}`, token, role: find.role });
  } catch (error) {
      console.error(error);
      return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};





