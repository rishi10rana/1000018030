// Controller
import express from 'express';

export const getURL = async (req, res) => {
    // console.log(req.body);
    // res.json(req.body);

    const data = req.body;
    const longURL = data.url;
    const shortcode = data.shortcode;
    const validity = data.validity;
    
    let now = new Date(); // Get current date and time

    // add validity 30 min here
    now.setMinutes(now.getMinutes() + validity); 
    let year = now.getFullYear().toString().slice(-2);
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let formattedDateTime = `${year}-${month}-${day} ${hours}-${minutes}-${seconds}`;

    const expiry = formattedDateTime;
    const shortURL = `http://localhost:3000/${shortcode}`;

    res.json({
        "shortlink" : shortURL,
        "expiry": expiry
    })
    
}