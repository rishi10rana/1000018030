// Controller
import express from 'express';

export const getURL = async (req, res) => {
    // console.log(req.body);
    // res.json(req.body);

    const data = req.body;
    const longURL = data.url;
    const shortcode = data.shortcode;
    const validity = data.validity;
    
    let now = new Date();
    let futureTime 
    = new Date(now.getTime() + 30 * 60 * 1000);

    const expiry = futureTime;
    const shortURL = `http://localhost:3000/${shortcode}`;

    res.json({
        "shortlink" : shortURL,
        "expiry": expiry
    })
    
}