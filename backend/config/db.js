import mysql from 'mysql2/promise'; // ✅ Use mysql2/promise
import dotenv from 'dotenv';

dotenv.config();

// Create an async function to connect to MySQL
const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('✅ Connected to MySQL database');
        return connection; // Return the connection object
    } catch (err) {
        console.error('❌ Database connection failed:', err);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB; // ✅ Export an async function
