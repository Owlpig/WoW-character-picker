const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const accessToken = 'USnfk6O3P9Ir1JbSvMLIQsWulLJhfmrfn0';

const fetchClasses = async id => {
  const rawIconData = await fetch(`https://us.api.blizzard.com/data/wow/media/playable-class/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const iconData = rawIconData.json();
  return iconData;
};

router.get('/:id', async (req, res) => {
  const icon = await fetchClasses(req.params.id);
  res.send(icon);
});

module.exports = router;
