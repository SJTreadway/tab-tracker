<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({ name: 'songs-create' })"
          fab
          class="cyan accent-2"
          light
          small
          absolute
          right
          middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-album">
                {{ song.album }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>

              <v-btn
                class="cyan"
                dark
                type="submit"
                @click="navigateTo({ name: 'song', params: { songId: song.id } })">
                View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img :src="song.albumImageUrl" class="song-image" />
            </v-flex>
          </v-layout>
        </div>
      </Panel>
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
      songs: []
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.song-album {
  font-size: 18px;
}
.song-image {
  width: 70%;
  margin: 0 auto;
}
.song-album {
  font-size: 18px;
}
.song-album {
  font-size: 18px;
}
.song-album {
  font-size: 18px;
}
</style>
