const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// return full list of flowers.
app.get('/flowers', (req, res) => {
    const dummyFlowerData = [
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Chartzit24-1-09.jpg',
            name: 'pyrethrum',
            color: 'white',
            id: '304',
            season: 'winter'
        }, {
            url: 'https://findingseaturtles.com/wp-content/uploads/2019/02/AZ-Homecomeing-Chrysanthemum.jpg',
            name: 'Chrysanthemum',
            color: 'red',
            id: '365',
            season: 'winter' 
        }, {
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Chrysanthemum_lavandulifolium.jpg',
            name: 'Northern dendranthema',
            color: 'yellow',
            id: '432',
            season: 'summer' 
        }
    ]
    
    res.json(dummyFlowerData)
})


// validate login details & create and send jwt.
app.get('/login', (req, res) => {

})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})