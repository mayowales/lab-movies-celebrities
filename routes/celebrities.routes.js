// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');


// all your routes here
router.get('/create', (req,res) => {
    Celebrity.find()
      .then(dbCelebrities =>{
        res.render('celebrities/new-celebrity', {dbCelebrities});
         
     })
           
     .catch(error => console.log(error))
    
})

router.post('/create', (req, res) => {
    const {name, occupation, catchPhrase} =req.body;

    Celebrity.create({name, occupation, catchPhrase})
    .then(celebrity => {
        res.redirect('/celebrities')
    })
    .catch(error => console.log(error))
})

router.get('/', (req, res) => {
    Celebrity.find()
    .then(allCeleb =>{
        console.log('All celebs:', allCeleb)
        res.render('celebrities/celebrities.hbs', {allCeleb})
    })
    .catch(error => console.log(error))
});


module.exports = router;