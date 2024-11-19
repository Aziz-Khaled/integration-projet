
const express = require ('express') ;
const connectDb = require ("./Config/connectDb")
const cors = require('cors')
const bcrypt = require('bcrypt');
const authRoute = require ("./Routes/Route")
require ('dotenv').config()

// Import the Employe model
const Employe = require('./Config/Models/Employe');
const app = express() ;
connectDb()


app.use (cors())

app.use(express.json())
app.use('/' , authRoute)

// Function to create a default user
const createDefaultUser = async () => {
    try {
        // Check if any users exist
        const userExists = await Employe.findOne({ email: 'admin@example.com' });
        if (!userExists) {
            // Hash the password
            const hashedPassword = await bcrypt.hash('defaultPassword123', 10);

            // Create a new user
            const defaultUser = new Employe({
                email: 'admin@example.com',
                password: hashedPassword,
                role: 'admin',
            });

            await defaultUser.save();
            console.log('Default user created successfully!');
        } else {
            console.log('Default user already exists.');
        }
    } catch (error) {
        console.error('Error creating default user:', error);
    }
};

// Call the function to create the default user
createDefaultUser();
app.listen (process.env.port , ()=> {
    console.log (`server is running on port ${process.env.port}`)
})

