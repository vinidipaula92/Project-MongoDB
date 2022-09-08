db.produtos.updateMany({
  nome: {
    $not: {
      $regex: /Mcchicken/i,
    },
  },
},
{
  $addToSet: {
    ingredientes: "ketchup",
  },
});
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });