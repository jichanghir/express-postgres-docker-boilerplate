const express = require('express');
const path = require('path');
const formidable = require('formidable');
const cors = require('cors');
const carbone = require('carbone');

const app = express();

app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  res.json({ data: true });
});

app.post('/asd', async (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    console.log('fields', fields);
    console.log('files', files);
    if (err) {
      next(err); // TODO send error
      return;
    }

    // Data to inject
    // var data = {
    //   firstname: 'kakaka',
    //   // lastname: fields.lastname
    // };

    let data = {};

    if (fields.tags) {
      try {
        data = JSON.parse(fields.tags);
      }
      catch(err) {
        console.log('err', err);
        // TODO send error
      }
    }


    console.log('data', data);

    // Generate a report using the sample template provided by carbone module
    // This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
    // Of course, you can create your own templates!
    carbone.render(files.file.path, data, function(err, result) {
      if (err) {
        return console.log(err);
      }

      res.attachment(files.file.name || 'render');
      res.status(200).send(Buffer.from(result));

      // console.log('result', result);
    });

    // res.json({ fields, files });
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
