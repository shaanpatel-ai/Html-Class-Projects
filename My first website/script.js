const images = [
    
    "https://c4.wallpaperflare.com/wallpaper/411/115/636/1920x1200-space-wallpaper-preview.jpg",
    "https://gallery.yopriceville.com/downloadfullsize/send/8797",
    "https://wallpapers.com/images/featured/space-sjryfre8k8f6i3ge.jpg"
];
let i = 0;
setInterval(function ()  {
if (i === images.length) {
    i = 0
}
    document.getElementById( "slide").src = images[i]
} ,3000
);