const express = require('express')
const router = express.Router();

let users = [
    {
        id: 22,
        name: "Lucky",
    }
]

router.get('/', (req, res) => {
    res.send(users)
})

router.get('/:user_id', (req, res) => {
    const {user_id} = req.params
    const user = users.find(user => user.id === parseInt(user_id))
    if (!user) {
        return res.status(404).send(`No user found with id ${user_id}`)
    }
    res.send(user)
})

router.post('/', (req, res) => {
    const user = req.body
    users.push(user)
    res.status(201).send('User added')
})

router.delete("/:id", (req, res) => {
    const { user_id } = req.params
    users = users.filter(user => user.id === parseInt(user_id))
    res.send('User deleted successfully')
})

module.exports = router;
