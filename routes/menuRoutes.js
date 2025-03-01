const express = require('express');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// Update Menu Item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: 'Menu item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error updating menu item' });
  }
});

// Delete Menu Item
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Menu item not found' });
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting menu item' });
  }
});

module.exports = router;
