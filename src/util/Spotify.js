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
        var url = 'https://accounts.spotify.com/authorize?' +
          'client_id=' + client_id +
          '&response_type=token' +
          '&redirect_uri=' + redirect_uri
        window.location.href = url
      }
    }
    // let uri = window.location.href
    // let accessTokenMatch = uri.match(/access_token=([^&]*)/)
    // let expirationMatch = uri.match(/expires_in=([^&]*)/)
    // //console.log(window.location.href)
    // //console.log(accessTokenMatch)
    // //console.log(expirationMatch)
    // if (accessTokenMatch) {
    //   accessToken = accessTokenMatch[1]
    //   expiresIn = parseInt(expirationMatch[1])
    //   window.setTimeout(() => accessToken = '', expiresIn * 1000);
    //   window.history.pushState('Access Token', null, '/');
    //   return accessToken
    // } else {
    //   //make an API call to generate new token
    //   //url (required, options(optional))
    //   var url = 'https://accounts.spotify.com/authorize?' +
    //     'client_id=' + client_id +
    //     '&response_type=token' +
    //     '&redirect_uri=' + redirect_uri
    //
    //   /*var url = 'https://accounts.spotify.com/authorize?' +
    //     'client_id=6e9783045ade4df4b93883842a2c006e' +
    //     '&response_type=token



    //     '&redirect_uri=http://localhost:3000'*/
    //   window.location.href = url
    // }
  },

  /*search: (searchTerm) => {
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
  },
*/
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

 //the following is a new method creation attempt fr saving the playlist to a user's account
  savePlaylist: (playlistName, playlistTrackUris) => {
    if (!playlistName || !playlistTrackUris) {
      return
    }
    let accessTokenVariable = accessToken
    let headers = {Authorization: `Bearer ${accessToken}`}
    let userId;
    let playlistID;
    fetch('https://api.spotify.com/v1/me', {
      headers: headers
    }).then(response => {
      // JSONifies to retrieve userId
      return response.json()
    }).then(data => {
      userId = data.id
      console.log(accessToken)
      console.log(playlistName)
      return fetch('https://api.spotify.com/v1/users/' + userId + '/playlists', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: {
          name: playlistName
        }
      })
    }).then(response => {
      // JSONifies to retrieve playlistId
      console.log(response)
    //   return response.json()
    // }).then(data => {
    //   console.log(data)
    })
    // }).then(response => {
    //
    //   }).then(response => {
    //     let bluebird = response.json()
    //     playlistID = bluebird.id
    //   }).then(response => {
    //     fetch('/v1/users/' + userId + '/playlists/' + playlistID + '/tracks', {
    //       headers: headers,
    //       method: 'post',
    //       body: {
    //         uris: playlistTrackUris
    //       }
    //     }).then(response => {
    //       let bird = response.json()
    //       playlistID = bird.id
    //     })
    //   })
  }
}
export default Spotify;


/* CODECADEMY SOLUTION
const clientId = '6e9783045ade4df4b93883842a2c006e'; // Insert client ID here.
const redirectUri = 'http://localhost:3000'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },
  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;
    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }
};
export default Spotify;
*/
