const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const accessToken = 'US4jhAmRKJxqbSz78zPqyxOEZ2wF85yWLv'

const fetchClasses = async (id) => {
  const rawIconData = await fetch(`https://us.api.blizzard.com/data/wow/media/playable-class/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`)
  const iconData = rawIconData.json()
  return iconData;
};

router.get('/:id', async (req, res) => {
  const icon = await fetchClasses(req.params.id)
  console.log(icon)
  res.send(icon);
});

module.exports = router;