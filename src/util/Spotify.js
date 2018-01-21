let accessToken
let expiresIn
const client_id = '6e9783045ade4df4b93883842a2c006e'
const redirect_uri = 'http://localhost:3000'

const Spotify = {
  getAccessToken: () => {
    let uri = window.location.href
    let accessTokenMatch = uri.match(/access_token=([^&]*)/)
    let expirationMatch = uri.match(/expires_in=([^&]*)/)
    //console.log(window.location.href)
    //console.log(accessTokenMatch)
    //console.log(expirationMatch)
    if (accessTokenMatch) {
      accessToken = accessTokenMatch[1]
      expiresIn = parseInt(expirationMatch[1])
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken
    } else {
      //make an API call to generate new token
      //url (required, options(optional))
      var url = 'https://accounts.spotify.com/authorize?' +
        'client_id=' + client_id +
        '&response_type=token' +
        '&redirect_uri=' + redirect_uri

      /*var url = 'https://accounts.spotify.com/authorize?' +
        'client_id=6e9783045ade4df4b93883842a2c006e' +
        '&response_type=token' +
        '&redirect_uri=http://localhost:3000'*/
      window.location.href = url
    }
  },

  search: (searchTerm) => {
    fetch('https://api.spotify.com/v1/search?type=TRACK&q=' + searchTerm, {
      headers: {Authorization: `Bearer ${accessToken}`}
    }).then(response => {
      let batman = response.json();
      let trackList = batman.tracks.items.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.abum.name,
          uri: track.uri
        }
      })
      return trackList
    }).catch(err => {
      return err
    });
  }
}
export default Spotify;
