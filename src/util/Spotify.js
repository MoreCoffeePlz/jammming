let accessToken
let expiresIn
const client_id = '6e9783045ade4df4b93883842a2c006e'
const redirect_uri = 'http://localhost:3000'

const Spotify = {

  getAccessToken: () => {
    if (accessToken) {
      return accessToken
    } else {
      let uri = window.location.href
      let accessTokenMatch = uri.match(/access_token=([^&]*)/)
      let expirationMatch = uri.match(/expires_in=([^&]*)/)
      if (accessTokenMatch) {
        accessToken = accessTokenMatch[1]
        expiresIn = parseInt(expirationMatch[1])
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken
      } else {
        let scopes='playlist-modify-private playlist-modify-public'
        var url = 'https://accounts.spotify.com/authorize?' +
          'client_id=' + client_id +
          '&response_type=token' +
          '&scope=' + encodeURIComponent(scopes) +
          '&redirect_uri=' + redirect_uri
        window.location.href = url
      }
    }
  },
  search: (searchTerm) => {
    if (!accessToken) { Spotify.getAccessToken(); }
     return fetch('https://api.spotify.com/v1/search?type=track&q=' + searchTerm, {
       headers: {Authorization: `Bearer ${accessToken}`}
     }).then(response => response.json()).then(jsonResponse => {
       if (!jsonResponse.tracks) { return []; }
       return jsonResponse.tracks.items.map(track => ({
         id: track.id,
         name: track.name,
         artist: track.artists[0].name,
         album: track.album.name,
         uri: track.uri
       }));
     });
  },


  savePlaylist: (playlistName, playlistTrackUris) => {
    if (!playlistName || !playlistTrackUris) {
      return
    }
    let accessTokenVariable = accessToken
    let headers = {Authorization: `Bearer ${accessToken}`}
    let userId;
    let playlistID;
    return fetch('https://api.spotify.com/v1/me', {
      headers: headers
    }).then(response => {
      // JSONifies to retrieve userId
      return response.json()
    }).then(data => {
      userId = data.id
      return fetch('https://api.spotify.com/v1/users/' + userId + '/playlists', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          name: playlistName
        })
      })
    }).then(response => {
      // JSONifies to retrieve playlistId
      return response.json()
    }).then(data => {
      playlistID = data.id
      return fetch('https://api.spotify.com/v1/users/' + userId + '/playlists/' + playlistID + '/tracks', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          uris: playlistTrackUris
        })
      })
    // }).then(response => {
    //   console.log(response)
    })
  }
}
export default Spotify;
