db.produtos.find();
db.produtos.countDocuments({
  ingredientes: {
    $size: 4,
  },
});