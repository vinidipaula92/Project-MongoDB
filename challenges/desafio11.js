db.produtos.find({
  $and: [
    { nome: { $not: { $regex: /mcchicken/i } } },
    { nome: { $not: { $regex: /big/i } } },
  ],
}, { nome: 1, _id: 0, curtidas: 1, vendidos: 1 });