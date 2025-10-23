const express =require('express');
const router =express.Router();
const db = require('../db');


router.post('/save', (req, res) => {

    const { name, email, password, phone, photo } = req.body;
    const activeStatus_value = true;
    const userRole = 'CONSUMER';

    const sql = 'insert into user(name,email, password, phone, role, photo, activeStatus) values(?,?,?,?,?,?,?)';

    db.query(sql, [name, email, password, phone, userRole, photo, activeStatus_value], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User added successfully!', id: result.insertId });
    });
});




















module.exports=router;