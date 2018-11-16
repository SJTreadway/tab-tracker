<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          required
          :rules="[required]"
        />
      </Panel>
    </v-flex>

    <v-flex xs8>
      <Panel title="Song Structure" class="ml-3">
        <v-text-field
          multi-line
          label="Lyrics"
          v-model="song.lyrics"
          required
          :rules="[required]"
        />
        <br>
        <v-text-field
          multi-line
          label="Tab"
          v-model="song.tab"
          required
          :rules="[required]"
        />
      </Panel>
      <br>
      <div class="custom-error" v-html="error"></div>
      <v-btn
        class="cyan"
        dark
        type="submit"
        @click="createSong">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  methods: {
    async createSong () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all of the required fields.'
        return
      }
      try {
        await SongsService.createSong(this.song)
        this.$router.push({ name: 'songs' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.custom-error {
  color: red;
}
</style>
