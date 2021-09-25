lightGallery(document.getElementById("img-thumbnails"), {
    selector: ".lightimg",
    plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
    alignThumbnails: "left",
    loop: true,
    allowMediaOverlap: true,
    toggleThumb: true,
    showZoomInOutIcons: true,
    actualSize: false,
    exThumbImage: "data-exthumbimage"
  });