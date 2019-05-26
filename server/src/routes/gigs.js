var express = require('express');
var router = express.Router();

// const db = require('../db');
const Sequelize = require('sequelize');
const Gig = require('../db/models/Gig');
const Op = Sequelize.Op;

router.get('/', async (req, res) => {
  try {
    let result = await Gig.findAll();
    res.json({success: true, data: result})
  }
  catch(err) {
    console.error("err", err);
    res.json({success: false, message: "Internal error"});
  }
});

router.get('/add', async (req, res) => {
  try {
    const mockData = {
      title: 'test2 title',
      technologies: 'react, js, html',
      budget: '$3000',
      description: 'some description',
      email: 'test@test.com',
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    }

    const {title, technologies, budget, description, email} = mockData;

    const result = await Gig.create({
      title,
      technologies,
      budget,
      description,
      email
    });

    res.json({success: true, data: result})
  }
  catch(err) {
    console.error("err", err);
    res.json({success: false, message: "Internal error"});
  }
});

router.get('/search', async (req, res) => {
  try {

    const result = await Gig.findAll({
      where: {
        technologies: {
          [Op.like]: '%js%'
        }
      }
    });

    res.json({success: true, data: result})
  }
  catch(err) {
    console.error("err", err);
    res.json({success: false, message: "Internal error"});
  }
});

module.exports = router;
