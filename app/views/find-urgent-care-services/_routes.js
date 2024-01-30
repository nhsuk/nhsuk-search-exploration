const e = require('express')
const express = require('express')
const router = express.Router()



// What is your postcode?
router.post('/version1/find-a-pharmacy2', function (req, res) {

  let postcode = req.session.data['postcode']

  if (postcode == ""){
    res.render('version1/find-a-pharmacy2', {error: 1, noPostcode: 1})
  } else {
    if (postcode.toLowerCase().startsWith('im')){
      res.redirect('/version1/cookie-confirmation')
  } else {
    if (postcode.toLowerCase().startsWith('v')){
      res.redirect('/version1/we-cant-find-v-pharmacy')
    } 
      res.redirect('/version1/results-pharmacies')
    }
  }

})





module.exports = router
