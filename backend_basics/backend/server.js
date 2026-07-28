//import express from 'express';
const express = require("express");

const app = express();

// app.get('/',(req,res) => {
//     res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
   const jokes = [
    {
        id: 1,
        title: "Programmer Joke",
        content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
        id: 2,
        title: "Coffee Break",
        content: "How many programmers does it take to change a light bulb? None. That's a hardware problem."
    },
    {
        id: 3,
        title: "Debugging",
        content: "Debugging: Being the detective in a crime movie where you're also the murderer."
    },
    {
        id: 4,
        title: "Wi-Fi Trouble",
        content: "My Wi-Fi went down for five minutes, so I had to talk to my family. They seem like nice people."
    },
    {
        id: 5,
        title: "Math Joke",
        content: "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else."
    },
    {
        id: 6,
        title: "Chicken Joke",
        content: "Why did the chicken join a band? Because it had the drumsticks."
    },
    {
        id: 7,
        title: "Keyboard",
        content: "Why did the keyboard break up with the mouse? It felt like it was being clicked with someone else."
    },
    {
        id: 8,
        title: "Student Life",
        content: "I studied for my exam for two weeks. The exam studied me for five minutes."
    },
    {
        id: 9,
        title: "JavaScript",
        content: "Why did the JavaScript developer wear glasses? Because they couldn't C#."
    },
    {
        id: 10,
        title: "Sleep Mode",
        content: "I love deadlines. I especially love the whooshing sound they make as they fly by."
    }
];
res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);