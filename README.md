# pdf-server-example

This is an example Node.js server that can download a PDF file to the front-end web app.

Before running make sure you have Node.js and npm installed.

Before running make sure you have bower installed as follows:

    npm install -g bower

After cloning please install modules:

    git clone https://github.com/ashleydavis/pdf-server-example
    cd pdf-server-example
    npm install
    cd public
    power install

You you can run it like so:

    cd pdf-server-example
    node index.js

Open your browser to http://localhost:3000 and you will get a web page that does a HTTP POST, retrieves the content of the PDF file and then downloads that content to a PDF file on your hard drive.

To support my work please share a link to my book [Data Wrangling with JavaScript](http://bit.ly/2t2cJu2) with your colleagues and networks.