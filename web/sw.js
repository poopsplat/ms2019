// Font files
var fontFiles = [
  'assets/dist/fonts/Degular_Text-Regular.woff',
  'assets/dist/fonts/Degular_Text-Regular.woff2',
  'assets/dist/fonts/Degular_Text-Italic.woff',
  'assets/dist/fonts/Degular_Text-Italic.woff2',
  'assets/dist/fonts/Degular_Text-Semibold.woff',
  'assets/dist/fonts/Degular_Text-Semibold.woff2',
  'assets/dist/fonts/Degular_Text-Semibold_Italic.woff',
  'assets/dist/fonts/Degular_Text-Semibold_Italic.woff2',
  'assets/dist/fonts/Degular_Display-Medium.woff',
  'assets/dist/fonts/Degular_Display-Medium.woff2',
  'assets/dist/fonts/Degular_Display-Semibold.woff',
  'assets/dist/fonts/Degular_Display-Semibold.woff2'
];

// On install, cache some stuff
addEventListener('install', function (event) {
  event.waitUntil(caches.open('core').then(function (cache) {
    cache.add(new Request('assets/dist/styles/fonts.css'));
    fontFiles.forEach(function (file) {
      cache.add(new Request(file));
    });
    return;
  }));
});

// listen for requests
addEventListener('fetch', function (event) {
  // Get the request
  var request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

  if (!request.url.includes('admin')) {
    // Images & Fonts
    // Offline-first
    if (request.headers.get('Accept').includes('image') || request.url.includes('Degular_') || request.url.includes('styles/fonts.css')) {
      event.respondWith(
        caches.match(request).then(function (response) {
          return response || fetch(request).then(function (response) {

            // If an image, stash a copy of this image in the images cache
            if (request.headers.get('Accept').includes('image') && !request.headers.get('Accept').includes('html')) {
              var copy = response.clone();
              event.waitUntil(caches.open('images').then(function (cache) {
                return cache.put(request, copy);
              }));
            }

            // Return the requested file
            return response;

          });
        })
      );
    }
  }
});