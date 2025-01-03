const http = require('http'); // Fixed typo
const app = require('./app'); // Import your app module
const port = process.env.PORT || 3000; // Use the correct environment variable

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Use backticks for template literals
});
