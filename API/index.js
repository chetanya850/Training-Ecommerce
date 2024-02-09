const express = require('express')

const app = express()
app.use(express.json())

const port = 3033

let products = [
  {
    id: 1,
    status: 'delivered',
    item: 'Iphone'
  },
  {
    id: 2,
    status: 'in-process',
    item: 'LED TV'
  },
  {
    id: 3,
    status: 'not-delivered',
    item: 'Refrigerator'
  }
]

app.get('/', (req, res) => {
  console.log('/ Working')
  res.send('HELLO WORLD')
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req, res) => {
  const objectId = parseInt(req.params.id)
  let found = false
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === objectId) {
      res.send(products[i])
      found = true
      break
    }
    if (!found) {
      res.status(404).send('Not found')
    }
  }
})
// sadas
app.post('/products', (req, res) => {
  const newItem = req.body
  newItem.id = Math.random() + 1
  console.log(newItem)
  products.push(newItem)
  res.status(201).send('Created')
})

// splice(start, deleteCount)
//

app.delete('/products/:id', (req, res) => {
  let newarr = []
  const objectId = parseInt(req.params.id)
  for (let i = 0; i < products.length; i++) {
    if (objectId !== products[i].id) {
      newarr.push(products[i])
    }
  }

  if (newarr.length !== products.length) {
    res.status(200).send('deleted')
  } else {
    res.status(400).send('not deleted')
  }

  products = newarr
})

app.put('/products/:id', (req, res) => {
  const objectId = parseInt(req.params.id)
  const newData = req.body
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === objectId) {
      products[i] = {
        ...products[i],
        ...newData
      }
      res.send('Data Updated')
      return
    }
  }

  res.status(404).send('NOT FOUND')
})

app.patch('/products/:id', (req, res) => {
  const objectId = parseInt(req.params.id)
  const newData = req.body
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === objectId) {
      products[i] = {
        ...products[i],
        ...newData
      }
      res.send('Data Updated')
      return
    }
  }

  res.status(404).send('NOT FOUND')
})
// app.patch('/products/newpatch/:id', (req, res) => {
//   const objectId = parseInt(req.params.id)
//   const newdata = req.body
//   let location = null
//   console.log('WORKING')
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === objectId) {
//       location = i
//       break
//     }
//   }

//   if (location > -1) {
//     products[location] = [...products[location], ...newdata]
//     res.status(200).send('Updated')
//   } else {
//     res.status(400).send('Not updated')
//   }
// })

app.listen(port, (req, res) => {
  console.log(`Listening at Port number ${port}`)
})
