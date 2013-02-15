[1]: http://pagesjs.chrisdlangton.com/
[2]: http://chrisdlangton.com/

sm.js
======

Social Markup is a JavaScript Library for Single-page Apps

### Authors and Contributors
Christopher D. Langton @chrisdlangton

# What is sm.js
sm.js, or Social Markup js: is a small JavaScript Library originally built to extend [Pages.js][1] and works great for all Single-page applications.

Its functionality allows your Single-page Apps to dynamically update Social Networking orientated &lt;meta&gt; tags so that when your 'pages' are shared the appropriate url, image, title, and description are captured for that specific 'page' in your Single-page App rather than what was served from the server with the landing page data which may not be relevant for the current page being shared.

# How does it work?

Social Markup is a collection of &lt;meta&gt; tags in your webpage's &lt;head&gt;. The data stored in here is not viewed in the browser but it does effect how your page is seen by other sites such as Social Networking shares.

What sm.js does is provide you a clean and simple JavaScript API to seamlessly updated these &lt;meta&gt; data specific for each 'page' your user navigates too in your AJAX Page or Single-page APP.

In addition you can enable an optional Social sidebar.

This Library will store some data from its initilisation scan in a global variable named 'meta' for use if you wish to restore defaults. This data is also referenced if some optional configurations are undefined.

# How to use Pages.js

## Installation:

Download the latest sm.js file from [chrisdlangton.com][2] and upload it to  your public javascripts directory. 

Include the script in your html body after all the content (at the bottom of the body element) like so;

```html
<script src="javascripts/sm.js/sm.min.js" type="text/javascript" charset="utf-8"></script>
```

Finally; in your &lt;body&gt; add the attribute 'onLoad' with the value 'sm().init();' which is a piece of JavaScript to initilise the sm.js Library when the &lt;body&gt; has finished rendering and your script is ready to be used.

## Basic Usage:

As long as basic setup is implemented correctly sm.js will automatically scan your &lt;head&gt; for existing &lt;meta&gt; sent from the server for usable data and if possible will create some Social Markup from it.

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
A mandatory configuration object must be sent.
There are two optional properties;
* (bool) Use Social Sidebar.
* (bool/string) Use default or defined CSS for the Social Sidebar.

#### Configuration object

```javascript
var config = {
        title: '',
        slug: '',
        description: '',
        src: '',
        href: '',
        og: '',
        ogAppId: '',
        ogAdmins: '',
        tw: '',
        twSite: '',
        hashtags: '',
        twCreator: '',
        ms: '',
        msHex: ''
    };
sm().set( config );
```

In the above example we are showing all available object properties, the below explains each;

* title(#) = Page Title
* slug(#) = abstract or summary describing the page content, use 100 characters or less.
* description(#) = more detailed description of the page content, use 500 characters or less.
* src(#) = a url link to an image for this page.
* href(#) = the canonical url to this page.
* og(*) = Open Graph types, website, person, blog, article, ect. See Facebook Open Graph for available options.
* ogAppId = Open Graph app_id
* ogAdmins = Facebook profile for the pages admin
* tw(*) = Twitter Card types, Summary, Audio, Player. See Twitter Developer for more details.
* twSite = Profile name for the website (via @profilename)
* hashtags = Comma seperated list of hash tags for this content.
* twCreator = Profile name for the page content creator (@profilename)
* ms(*) = widow size for Windows 8 or IE9+ WebApps, e.g. "width=1024;height=768".
* msHex(*) = The HEX value for a color used by IE9+ and Windows 8  Tiles in WebApps.

(*) = Required
(#) = Defaults to data from the global variable.

#### Social Sidbar

Choosing to use the Social sidebar is easy, but if you do not wish to use it just do not include the second or third property in the sm().set() method.

Enabling the Social Sidebar by using the boolean 'true' as the second property.

```javascript
var config = {
        title: '',
        slug: '',
        description: '',
        src: '',
        href: '',
        og: '',
        ogAppId: '',
        ogAdmins: '',
        tw: '',
        twSite: '',
        hashtags: '',
        twCreator: '',
        ms: '',
        msHex: ''
    };
sm().set( config, true, third!!! );
```

Note: the third property is conditional, so if the second property is defined as 'true' you must define the third property also.

#### Social Bar CSS Styles

If you have chosen to use the Social Sidebar you can either apply the default CSS or define your own.

To use the default CSS simple parse 'true' boolean in the third property;

```javascript
var config = {
        title: '',
        slug: '',
        description: '',
        src: '',
        href: '',
        og: '',
        ogAppId: '',
        ogAdmins: '',
        tw: '',
        twSite: '',
        hashtags: '',
        twCreator: '',
        ms: '',
        msHex: ''
    };
sm().set( config, true, true );
```

If you wish to define your own CSS, store your CSS as a string into a variable and replace the boolean 'true' with your variable;

```javascript
var config = {
        title: '',
        slug: '',
        description: '',
        src: '',
        href: '',
        og: '',
        ogAppId: '',
        ogAdmins: '',
        tw: '',
        twSite: '',
        hashtags: '',
        twCreator: '',
        ms: '',
        msHex: ''
    };
var css = '#id { some: styles; } .class { more: styles; }';
sm().set( config, true, css );
```

Available Styles are as follows;

```css
ul#social_links {
}
ul#social_links li {
}
a.social_link {
}
span#boxclose {
}
span#boxshow {
}
```

The final HTML typically looks like this;

```html
<span id="boxshow" onclick="document.getElementById('social_links').style.display = 'inherit';this.style.display = 'none';">
  Share
</span>
<ul id="social_links">
  <span id="boxclose" onclick="this.parentNode.style.display = 'none';document.getElementById('boxshow').style.display = 'inherit';">
    X
  </span>
  <li>
    <a id="fb" class="social_link" href="http://www.facebook.com/share.php?u={canonical}">
    </a>
  </li>
  <li>
    <a id="tw" class="social_link" href="https://twitter.com/intent/tweet?screen_name={creator}&amp;text={title}&amp;via={site}&amp;hashtags={hashtags}">
    </a>
  </li>
  <li>
    <a id="li" class="social_link" href="http://www.linkedin.com/shareArticle?mini=true&amp;url={canonical}&amp;title={title}&amp;summary={summary}&amp;source={href}">
    </a>
  </li>
  <li>
    <a id="gp" class="social_link" href="https://plus.google.com/share?url={canonical}">
    </a>
  </li>
</ul>
```

So you may style as you wish and use your own CSS.

## Change Log

#### Version: 0.5 Latest (Feb 15 2013)

* First public release
