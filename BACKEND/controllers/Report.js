import fs from "fs";
import carbone from "carbone";
import Nota from "../models/Nota.js";


export const getReport = async (req, res) => {
  // Data to inject



//   let data = {
//   firstname : 'John',
//   lastname : 'Wick'
// };

// options object is used to pass more parameters to carbone render function 
let options = {
  convertTo: 'pdf' //can be docx, txt, ...
}


try {
  const data = await Nota.findOne({
    where: {
      id: req.params.id,
    },
  });

  carbone.render("./template.odt", data, options, (err, res) => {
    if (err) {
      return console.log(err);
    }
    // fs is used to create the PDF file from the render result
    fs.writeFileSync('../FRONTEND/public/result.pdf', res);

});
res.status(200).send(data);
} catch (err) {
  console.log(err);
  res.status(400);
}
  
};
