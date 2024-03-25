// Question 40 : Album
function make_album(artist, title, tracks) {
    var Album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks) {
        Album.tracks = tracks;
    }
    return Album;
}
console.log(make_album("Artist1", "Album1", "10"));
console.log(make_album("Artist2", "Album2", "15"));
