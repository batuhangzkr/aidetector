<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AI DETECTOR 2024</title>
    <style>
        @import url(https://fonts.googleapis.com/css?family=Bree+Serif);
        @import url(https://fonts.googleapis.com/css?family=Open+Sans);

        * {
            box-sizing: border-box;
        }

        body {
            background: url("17737075bdad5cfa9423bb2c3c2beee695c72bb8.jpg") no-repeat center center fixed;
            background-size: cover;
            color: #B1B1B1;
            margin: 0;
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        .header {
            background-color: #003366; /* Mavi tonlarında bir renk */
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .footer {
            background-color: #001a33; /* Daha koyu bir mavi tonu */
            color: #ffffff;
            padding: 10px;
            text-align: center;
        }

        #contact {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #form {
            width: 80%;
            max-width: 800px;
            margin: 0 auto;
            background: rgba(0, 0, 50, 0.8);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #form h1 {
            font: 36px 'Bree Serif', serif;
            color: #fff;
            margin-bottom: 20px;
            text-align: center;
        }

        #form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: none;
            font: 14px 'Open Sans', sans-serif;
            min-height: 150px;
            background: #333;
            color: #fff;
            resize: vertical;
        }

        #form button {
            display: block;
            width: 100px;
            padding: 10px;
            margin: 10px auto 0;
            background: #0055a5;
            color: #fff;
            border: none;
            border-radius: 5px;
            font: bold 14px 'Bree Serif', serif;
        }

        #form button:hover {
            background: #0077cc;
        }

    </style>
</head>
<body>
<div class="header">
    <h1>AI DETECTOR 2024</h1>
</div>

<section id="contact">
    <div id="form">
        <h1>Enter Your Code Below</h1>
        <form action="http://localhost:3000/kodGonder" method="POST">
            <textarea name="kod" placeholder="Enter your code here..."></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</section>

<div class="footer">
    <p>© 2024 AI Detector. All rights reserved.</p>
    <p><a href="https://github.com/batuhangzkr">github:batuhangzkr</a></p>
</div>

</body>
</html>
