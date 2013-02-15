[1]: http://pagesjs.chrisdlangton.com/
[2]: http://chrisdlangton.com/

sm.js
======

Social Markup is a JavaScript Library for Single-page Apps

### Authors and Contributors
Christopher D. Langton @chrisdlangton

# What is sm.js
sm.js, or Social Markup js: is a small JavaScript Library originally built to extend [Pages.js][1] and works great for all Single-page applications.

Its functionality allows your Single-page Apps to dynamically update Social Networking orientated <meta> tags so that when your 'pages' are shared the appropriate url, image, title, and description are captured for that specific 'page' in your Single-page App rather than what was served from the server with the landing page data which may not be relevant for the current page being shared.

# How does it work?

Social Markup is a collection of <meta> tags in your webpage's <head>. The data stored in here is not viewed in the browser but it does effect how your page is seen by other sites such as Social Networking shares.

What sm.js does is provide you a clean and simple JavaScript API to seamlessly updated these <meta> data specific for each 'page' your user navigates too in your AJAX Page or Single-page APP.

In addition you can enable an optional Social sidebar.

This Library will store some data from its initilisation scan in a global variable named 'meta' for use if you wish to restore defaults. This data is also referenced if some optional configurations are undefined.

# How to use Pages.js

## Installation:

Download the latest sm.js file from [chrisdlangton.com][2] and upload it to  your public javascripts directory. 

Include the script in your html body after all the content (at the bottom of the body element) like so;

```html
<script src="javascripts/sm.js/sm.min.js" type="text/javascript" charset="utf-8"></script>
```

Finally; in your <body> add the attribute 'onLoad' with the value 'sm().init();' which is a piece of JavaScript to initilise the sm.js Library when the <body> has finished rendering and your script is ready to be used.

## Basic Usage:

As long as basic setup is implemented correctly sm.js will automatically scan your <head> for existing <meta> sent from the server for usable data and if possible will create some Social Markup from it.

It is also possible to enable a Socail Sidebar for sharing your page to the Social Networking sites; Facebook, Twitter, LinkedIn, and Google+.
To do this you will need to create a configuration object to parse as a property when you initilize the sm.js Library.

#### The sm().init() Method:

```javascript
var config = {
    side: 'right',
    imgLI: 'http://URL_TO_LINKEDIN_ICON.png',
    imgTW: 'http://URL_TO_TWITTER_ICON.png',
    imgFB: 'http://URL_TO_FACEBOOK_ICON.png',
    imgGP: 'http://URL_TO_GOOGLEPLUS_ICON.png'
    };
sm().init( config );
```

In this example we are loading a configuration that specifies a url for icons that will be used in the Social Sidebar.
These icons should be 80 x 80px otherwise they will be resized. They can be any regular picture format used in browsers such as png, jpg, gif, bmp, ect.
All 4 images are required if you want to enable the Social Sidebar, however if one or more is not included the script will still run but the image/s wont render.

There is an optional setting for the position of the sidebar, being the left or right of the screen. If left undefined 'left' will be set as the default.

#### The sm().defaults() Method:

If you wish to restore default data anytime after you have used the sm().init() method just call the sm().defaults() method to access the global variable 'meta' that stores the data which the server sent.

```javascript
sm().defaults();
```

#### The sm().set() Method:

This will be the method called for each 'page'loaded by the user in your AJAX or Single-page App.

