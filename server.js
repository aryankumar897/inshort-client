Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@aryankumar897 
aryankumar897
/
feedbackonline
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
feedbackonline/server.js /
@aryankumar897
aryankumar897 make it better
Latest commit 68cadf9 2 days ago
 History
 1 contributor
17 lines (13 sloc)  440 Bytes
   
const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
 
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete