const express = require('express');
const morgan = require('morgan');
const port = 8080;

const cars = {
  abcd: {
    color: 'red',
    numWheels: 4
  },
  efgh: {
    color: 'purple',
    numWheels: 3
  }
};

const generateId = () => {
  return Math.floor(Math.random() * 2000) + 1
};

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Browse: GET /cars
app.get('/cars', (req, res) => {
  const templateVars = {
    cars: cars
  }
  res.render('cars', templateVars);
});


// Read: GET /cars/some-id

app.get('/cars/:car_id', (req, res) => {
  const carId = req.params.car_id;
  const singleCar = cars[carId];

  if(!singleCar) {
    return res.redirect('/cars')
  }
  const templateVars = {
    singleCar: singleCar,
    carId: carId
  };

  res.render('car', templateVars)

});

// Edit POST /cars/:car_id
app.post('/cars/:car_id', (req, res) => {
  const carId = req.params.car_id;
  const newColor = req.body.color;
  cars[carId].color = newColor;
  res.redirect('/cars');
});

// Add POST /cars
app.post('/cars', (req, res) => {
  const id = generateId();
  cars[id] = req.body;

  res.redirect('/cars')
});

// Delete POST /cars/:car-id/delete
app.post('/cars/:car_id/delete', (req, res) => {
  const carId = req.params.car_id;
  delete cars[carId];
  res.redirect("/cars");
})

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});