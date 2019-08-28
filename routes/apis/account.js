const express = require('express');
const router = express.Router();
const Account = require('../../models/Account');


//Get all the accounts
router.get('/', (req, res, next) => {
    Account.find()
    .then((accounts) => {
        res.json(accounts);
    })
    .catch(err => console.log(err))
});


// Create  an account
router.post('/add', (req, res, next) => {
    const name = req.body.name;
    const accountnumber = req.body.accountnumber;
    const email = req.body.email;
    newAccount = new Account({
        name: name,
        accountnumber: accountnumber,
        email: email
    });
    newAccount.save()
    .then(account => {
        res.json(account);
    })
    .catch(err => console.log(err));
});

/*router.post('/login', (req, res, next) => {
    const name = req.body.name;
    const accountnumber = req.body.accountnumber;  
    const password  = req.body.password;
    const email = req.body.email
    newAccount = new Account({
        name: name,
        accountnumber: accountnumber,
        password: password,
        email:email
    });
    newAccount.save()
    .then(account => {
        res.json(account);
    })
    .catch(err => console.log(err));
});*/

// to update an account
router.put('/update/:id', (req, res, next) => {
//Grab the id of the post
let id = req.params.id;
// find the account by id from the databasse
    Account.findById(id)
    .then(account => {
        account.name = req.body.name;
        account.accountnumber = req.body.accountnumber;
        account.save()
        .then(account =>{
            res.send({message: 'Account updated succesfully',
            status: 'sucess',
            account: account})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
    
});
// make delete request
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Account.findById(id)
    .then(account => {
        account.delete()
        .then(account =>{
            res.send({message: 'Account deleted succesfully',
            status: 'sucess',
            account: account})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


// Get all one bank account
router.get('/single/:id', (req, res, next) => {
//Grab the id of the bank account
    let id = req.params.id;
    Account.findById(id)
    .then((account) => {
        res.json(account);
    })
    .catch(err => console.log(err))
});

module.exports = router;