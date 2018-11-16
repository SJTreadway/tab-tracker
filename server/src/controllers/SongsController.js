const { Song } = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred while trying to get all songs.' + err
      })
    }
  },
  async createSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred while trying to create a song.' + err
      })
    }
  }
}
