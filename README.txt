AYSHA CRAFTS - website template
================================
A story-style showcase site for soft, smooth, baby-safe handmade crafts.
It is NOT an online shop: no prices, cart or checkout.

HOW TO OPEN
  Unzip the folder and double-click index.html. No setup needed.
  (Fonts load from Google Fonts when online; the site falls back to
  Georgia / system fonts when offline.)

FILES
  index.html      all the page content (edit text here)
  css/style.css   colours and fonts are at the top (:root section)
  js/main.js      menu, photo pop-up and contact form
  images/         the artwork (SVG illustrations)

THINGS TO CHANGE FIRST
  1. Contact details: search index.html for "hello@ayshacrafts.example"
     (appears twice) and the Instagram link href="#".
  2. The three family notes in the "Kind words" section are samples.
     Replace them with real messages.
  3. The story chapters and the safety promises are sample wording.
     Update them so they match Aysha's real story and materials.

USING YOUR OWN PHOTOS
  Put your photos in the images/ folder (JPG or PNG, square works best,
  about 1200 x 1200 px). Then in index.html change each src="images/..."
  to your file name. In the "works" section the file name appears in two
  places per piece: data-src and the img src. Change both.

ADDING A NEW WORK
  Copy one <li> block inside <ul class="work-grid">, then change the image,
  the name and the data-title / data-text lines.

SAFETY NOTE
  Keep the line about supervised play and keeping soft items out of the cot
  during sleep. Only claim safety features that are true for your products.
