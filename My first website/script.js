const images = [
    
    "https://c4.wallpaperflare.com/wallpaper/411/115/636/1920x1200-space-wallpaper-preview.jpg",
    " https://wallpaperaccess.com/full/8110241.jpg",
  "https://gallery.yopriceville.com/downloadfullsize/send/8797"
];
let i = 0;
setInterval(function ()  {
if (i === images.length) {
    i = 0;
}
    document.getElementById("slide").src = images[i];
} ,3000);