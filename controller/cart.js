const cartService  = require('../services/cart');

exports.addCart = async(req, res) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const quantity = req.body.quantity;

  if(userId && productId && quantity) {
    const data = await cartService.handleAddCart(userId, productId, quantity);
    if(data) {
      res.status(data.statusCode).json({ message: data.message, user: data.user });
    }
  }else {
    res.status(404).json({ message: 'Invalid value' })
  }
};

exports.deleteCart = async(req, res) => {
  const productId = req.params.productId;
  const userId = req.query.userId;
  if(productId && userId) {
    const data = await cartService.handleDeleteCart(productId, userId);
    if(data) {
      res.status(data.statusCode).json({ message: data.message });
    }
  }else {
    res.status(404).json({ message: 'Invalid value' });
  }
};

exports.getCart = async(req, res) => {
  const userId = req.params.userId;
  if(userId && userId !== 'undefined') {
    const data = await cartService.handleGetCart(userId);
    if(data) {
      res.status(data.statusCode).json({ message: data.message, cart: data.cart });
    }
  }else {
    res.status(404).json({ message: 'Invalid value' })
  }
}