'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "174c29c548bbf945ab1257ac3c686836",
"assets/AssetManifest.bin.json": "9c53b9fd5f91c97d9fbe6c6a1f774e34",
"assets/AssetManifest.json": "a27425c272d4746de4ba4bced1700dd6",
"assets/assets/audio/backsound.mp3": "60335ec0e53657c712ad042af9289cfa",
"assets/assets/audio/coin.mp3": "00de3c5e507164ccfcf854ca6480ac30",
"assets/assets/audio/game_over.mp3": "2b25b90aabcbacec0b4cfd2172f4dae1",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/assets/audio/sound.wav": "f6b03e1f08c979b5ea451635495ab4c3",
"assets/assets/fonts/Audiowide/Audiowide-Regular.ttf": "e9ee108cd098321ac27b95ebcebfcdf6",
"assets/assets/images/AngryPig/Walk%2520(36x30).png": "ce06f2c96e2ac0c6cd14e854a870e3e8",
"assets/assets/images/background%25203.png": "aa99ee4c78c06d614a9db6b64daacf39",
"assets/assets/images/background-taman.png": "47916be9722fdc04e9626add637590f2",
"assets/assets/images/background.png": "c7fb5895390cd6930ad39e69e4722590",
"assets/assets/images/bag1.jpg": "d081a1f450b2c1a1516be2e5a11520c1",
"assets/assets/images/Bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/black-heart.png": "2946230d288bcefa0f46cd58e2b1a234",
"assets/assets/images/border-heart.png": "7e21c4a68de71a26f7ddaad930d931ea",
"assets/assets/images/cactus.png": "a9c175cd8ea74162a4959c65ebc5f870",
"assets/assets/images/coin.png": "faa195bc8e60fc7e84821b5ae6ac4e5f",
"assets/assets/images/dino.png": "950f9ee0d8baf62d6f80dd16a480fcc6",
"assets/assets/images/dinoCoin.png": "7861715c734d60c8274582b80dc93762",
"assets/assets/images/dinoCoin1.png": "8756db916a79543e4039ebe030594dd7",
"assets/assets/images/dinocoin2.png": "21febc989271729679cdfaf819a1c09f",
"assets/assets/images/dinocoinwhite.png": "0e75d4da3f303a4f0bf33ac34be93ec5",
"assets/assets/images/DinoSprites%2520-%2520tard.png": "b35f4dbe1513c61146da143674613790",
"assets/assets/images/DinoSprites_tard.gif": "96870b29fbf82f779dc63292242011b4",
"assets/assets/images/heart.png": "061dac09506f1b3863d1d247d4fd5471",
"assets/assets/images/middle_lane_rock1_1.png": "64d9429dfb1e947368b79dd080db7f22",
"assets/assets/images/middle_lane_rock1_2.png": "57cee2374d9590134d7b4b1a91f88638",
"assets/assets/images/middle_lane_rock1_3.png": "50dfb0eff25ee79a6b357f45f32cf02b",
"assets/assets/images/middle_lane_rock1_4.png": "0ba9e8982fb901d96c9b53cf50dc2056",
"assets/assets/images/middle_lane_rock1_5.png": "a2a47662c6f12f729b4bf044dc993b13",
"assets/assets/images/pause.png": "de59bac58f0b672b7c39ef8f84cb369e",
"assets/assets/images/Plan%25201.png": "6912129ef19f4d7a9c14714a4475bc72",
"assets/assets/images/Plan%25202.png": "4b41cbf9a893827cbbeda07aff1cc8ee",
"assets/assets/images/Plan%25203.png": "4272368f28693e0110779a7cef771709",
"assets/assets/images/Plan%25204.png": "4b990d009645af4c8fc215114bbb9075",
"assets/assets/images/Plan%25205.png": "af0ba8d32ec6556992cde56cacb6a85f",
"assets/assets/images/play.png": "bd9423022db3b6c8c29206afddc36bcc",
"assets/assets/images/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/plx-6.png": "07b9aeda90128cb6e63954f56d0af5d7",
"assets/assets/images/Preview-taman.png": "855d49eafe619de6011a6a4d8acca67d",
"assets/assets/images/Preview.png": "3b94d531ea902a0934e09fdc43374be7",
"assets/assets/images/Rino/Run%2520(52x34).png": "ec606d010f9bc60557b58c4ec855524e",
"assets/assets/images/rumput-tanah.png": "0bed0e614247baff9491a56fed5a77f0",
"assets/assets/images/snowy_rock1.png": "3603bc82a7ac48fe6c1263ebbfd8580b",
"assets/assets/images/snowy_rock2.png": "c16a9bb061e26bbc25f8480c65a863dd",
"assets/assets/images/snowy_rock3.png": "7bfd7a18dd3223c7469ff8c5da1bedda",
"assets/assets/images/snowy_rock4.png": "10dbd888aeca9a3206d837ca342e1cba",
"assets/assets/images/snowy_rock5.png": "9d63e6506c950bf100f441be8a7ae2ed",
"assets/assets/images/Taman1.png": "19a2d2c6d05135f01044f3260ca883dd",
"assets/assets/images/Taman2.png": "4ac4b536a3edda301f259ab0b96ade45",
"assets/assets/images/Taman3.png": "c58d3c9db8a6b66699086ca5e58a8d50",
"assets/assets/images/Taman4.png": "2f7634e0e35fc3936072284834ae89a2",
"assets/FontManifest.json": "85a907975f2575481c3906947198e2d7",
"assets/fonts/MaterialIcons-Regular.otf": "f2282163faad026c83bd72346f40e6d2",
"assets/NOTICES": "0e527d6e22923ea351a013d792824914",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Cact-Coinn.png": "91ef3a17d6dd902c0f9815b1f41c3cda",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"dinoCoin.png": "7861715c734d60c8274582b80dc93762",
"dinoCoin1.png": "8756db916a79543e4039ebe030594dd7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ec16f3e1dd3fbe43f7812054972143c0",
"icons/Cact-Coinn.png": "91ef3a17d6dd902c0f9815b1f41c3cda",
"icons/dinoCoin.png": "7861715c734d60c8274582b80dc93762",
"icons/dinoCoin1.png": "8756db916a79543e4039ebe030594dd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3af4fb8b9b0d72488efe46d2026d4c2b",
"/": "3af4fb8b9b0d72488efe46d2026d4c2b",
"main.dart.js": "33b91e2e5b4a75e1a6bc3579e209dfa5",
"manifest.json": "2a2bd00bec168266ab2d3fc2b07aaa27",
"version.json": "5d19391cde13bc73177364eb669bb7af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
