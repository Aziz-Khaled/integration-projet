const Employe = require("../Models/Employe");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

exports.getEmployee = async (req, res) => {
  try {
    const employees = await Employe.find();
    return res.status(200).send(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employe.findById(id);
    if (!employee) {
      return res.status(404).send({ msg: "Employee not found." });
    }
    return res.status(200).send(employee);
  } catch (error) {
    console.error("Error fetching employee:", error);
    return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};

exports.contEmployee = async (req, res) => {
  try {
    const count = await Employe.countDocuments(); 
    return res.status(200).send({ count });
  } catch (error) {
    console.error("Error counting employees:", error);
    return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};



exports.addEmployee = async (req, res) => {
  const { email, role } = req.body;

  try {
 
    if (!email || !role) {
      return res.status(400).send({ msg: "Email and role are required." });
    }

    
    const existingEmployee = await Employe.findOne({ email });
    if (existingEmployee) {
      return res.status(400).send({ msg: "Employee with this email already exists." });
    }

   
    const generatedPassword = Math.random().toString(36).slice(-8);

    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(generatedPassword, saltRounds);

    
    const newEmployee = new Employe({
      email,
      password: hashedPassword,
      role,
    });

    
    await newEmployee.save();

    
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Your Employee Account Password",
      text: `Your account has been created. Your password is: ${generatedPassword}`,
    };

    await transporter.sendMail(mailOptions);

    // Respond with success
    return res.status(201).send({
      msg: `Employee added successfully. Password sent to ${email}.`,
    });
  } catch (error) {
    console.error("Error adding employee:", error);
    return res.status(500).send({ msg: "Internal server error", error: error.message });
  }
};
