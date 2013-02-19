/** 
 * @projectDescription  sm.js Social Markup is a small JavaSciprt Library for Single-page Apps
 *
 * @author  Christopher D. Langton chris@codewiz.biz
 * @version     0.5.2
 */
function sm() {
    // Private Properties
    this.about = {
        Library: "sm.js",
        Version: "0.5.2",
        Author: "Christopher D. Langton",
        Website: "http:\/\/chrisdlangton.com",
        Created: "2013-02-13",
        Updated: "2013-02-19"
    };
    // return a new page object if we're in the window scope
    if (window === this) {
        return new sm();
    }
    return this;
};
sm.prototype = {
    init: function (imgs) {
        var found_ogtitle = found_slug = found_description = found_src = found_href = found_og = found_ogAppId = found_ogAdmins = found_tw = found_twSite = found_twCreator = found_ms = found_ogSite = found_ogUrl = found_ogImg = found_ogDesc = found_twDesc = found_twTitle = found_twUrl = found_twImg = found_msTt = found_msUrl = found_msWin = found_msImg = found_msTile = found_author = found_summary = found_url = found_appName = found_tweetMeme = false;
        var elem_ogtitle, elem_slug, elem_description, elem_src, elem_href, elem_og, elem_ogAppId, elem_ogAdmins, elem_tw, elem_twSite, elem_twCreator, elem_ms, elem_ogSite, elem_ogUrl, elem_ogImg, elem_ogDesc, elem_twDesc, elem_twTitle, elem_twUrl, elem_twImg, elem_msTt, elem_msUrl, elem_msWin, elem_msImg, elem_msTile, elem_summary, elem_url, elem_appName, elem_tweetMeme;
        //Get all the <meta>
        var elem_arr = document.getElementsByTagName("meta");
        //Iterate through
        for (var i = 0; i < elem_arr.length; i++) {
            if (elem_arr[i].getAttribute('name') === 'application-name') {
                elem_appName = elem_arr[i];
                found_appName = true;
            }
            if (elem_arr[i].getAttribute('name') === 'description') {
                elem_description = elem_arr[i];
                found_description = true;
            }
            if (elem_arr[i].getAttribute('name') === 'abstract') {
                elem_slug = elem_arr[i];
                found_slug = true;
            }
            if (elem_arr[i].getAttribute('name') === 'summary') {
                elem_summary = elem_arr[i];
                found_summary = true;
            }
            if (elem_arr[i].getAttribute('name') === 'image_src') {
                elem_src = elem_arr[i];
                found_src = true;
            }
            if (elem_arr[i].getAttribute('name') === 'url') {
                elem_url = elem_arr[i];
                found_url = true;
            }
            if (elem_arr[i].getAttribute('name') === 'tweetmeme-title') {
                elem_tweetMeme = elem_arr[i];
                found_tweetMeme = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-navbutton-color') {
                elem_ms = elem_arr[i];
                found_ms = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-tooltip') {
                elem_msTt = elem_arr[i];
                found_msTt = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-starturl') {
                elem_msUrl = elem_arr[i];
                found_msUrl = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-window') {
                elem_msWin = elem_arr[i];
                found_msWin = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-TileImage') {
                elem_msImg = elem_arr[i];
                found_msImg = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-TileColor') {
                elem_msTile = elem_arr[i];
                found_msTile = true;
            }
        }
        var elem_arr = document.getElementsByTagName("link");
        for (var i = 0; i < elem_arr.length; i++) {
            if (elem_arr[i].getAttribute('rel') === 'canonical') {
                elem_href = elem_arr[i];
                found_href = true;
            }
            if (elem_arr[i].getAttribute('rel') === 'author') {
                found_author = true;
            }
        }
        //Warn for recommended data
        if (!found_author) console.log('sm.js warning: Consider adding an author link with your Google+ id');
        if (!found_href) console.log('sm.js warning: Consider adding a canonical link');
        if (!found_src) console.log('sm.js warning: Consider adding an image_src meta tag');
        if (!found_description) console.log('sm.js warning: Consider adding a description meta tag');
        //Build new meta if possible
        if (!found_appName) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'application-name');
            elem.content = document.title;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_tweetMeme) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'tweetmeme-title');
            elem.content = document.title;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_slug && found_summary) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'abstract');
            elem.content = elem_summary.content;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_summary && found_slug) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'summary');
            elem.content = elem_slug.content;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_url && found_href) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'url');
            elem.content = elem_href.href;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_href && found_url) {
            elem = document.createElement('link');
            elem.setAttribute('rel', 'canonical');
            elem.href = elem_url.content;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_msTt && (found_slug || found_summary)) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-tooltip');
            elem.content = elem_slug.content || elem_summary.content;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_msUrl && found_href) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-starturl');
            elem.content = elem_href.href;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_msWin) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-window');
            elem.content = 'width=1024;height=768';
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_ms) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-navbutton-color');
            elem.content = '#B10000';
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_msImg && found_src) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-TileImage');
            elem.content = elem_src.content;
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        if (!found_msTile) {
            elem = document.createElement('meta');
            elem.setAttribute('name', 'msapplication-TileColor');
            elem.content = '#B10000';
            document.getElementsByTagName('head')[0].appendChild(elem);
        }
        //Globals for method defaults
        window.meta = {
            title: document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ')
        };
        if (found_description) {
            window.meta.description = elem_description.content;
        }
        if (found_slug || found_summary) {
            window.meta.slug = elem_slug.content || elem_summary.content;
        }
        if (found_src) {
            window.meta.src = elem_src.content;
        }
        if (found_href) {
            window.meta.href = elem_href.href;
        }
        if (typeof imgs !== 'undefined' && typeof imgs === 'object') {
        /*
            var obj = {
            side: 'right',
            imgLI: 'http://icons.mysitemyway.com/wp-content/gallery/matte-grey-square-icons-social-media-logos/119953-matte-grey-square-icon-social-media-logos-linkedin-logo.png',
            imgTW: 'http://icons.mysitemyway.com/wp-content/gallery/matte-grey-square-icons-social-media-logos/120003-matte-grey-square-icon-social-media-logos-twitter.png',
            imgFB: 'http://icons.mysitemyway.com/wp-content/gallery/matte-grey-square-icons-social-media-logos/119931-matte-grey-square-icon-social-media-logos-facebook-logo.png',
            imgGP: 'http://icons.mysitemyway.com/wp-content/gallery/matte-grey-square-icons-social-media-logos/119945-matte-grey-square-icon-social-media-logos-google-logo-square.png'
            };
         */
            if (typeof imgs.side !=='undefined') {
                window.meta.side = imgs.side;
            } else {
                window.meta.side = 'left';
            }
            if (typeof imgs.imgLI !=='undefined') {
                window.meta.imgLI = imgs.imgLI;
            } else { console.log('sm.js warning: LinkedIn image undefined'); }
            if (typeof imgs.imgTW !=='undefined') {
                window.meta.imgTW = imgs.imgTW;
            } else { console.log('sm.js warning: Twitter image undefined'); }
            if (typeof imgs.imgFB !=='undefined') {
                window.meta.imgFB = imgs.imgFB;
            } else { console.log('sm.js warning: Facebook image undefined'); }
            if (typeof imgs.imgGP !=='undefined') {
                window.meta.imgGP = imgs.imgGP;
            } else { console.log('sm.js warning: Google Plus image undefined'); }
        }
        return this;
    },
    defaults: function () {
        if (typeof window.meta === 'object') {
            if (typeof window.meta.title !== 'undefined') {
                document.title = window.meta.title;
            }
            var elem_arr = document.getElementsByTagName("meta");
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('name') === 'description') {
                    if (typeof window.meta.description !== 'undefined') {
                        elem_arr[i].content = window.meta.description;
                    }
                }
                if (elem_arr[i].getAttribute('name') === 'abstract') {
                    if (typeof window.meta.slug !== 'undefined') {
                        elem_arr[i].content = window.meta.slug;
                    }
                }
                if (elem_arr[i].getAttribute('name') === 'image_src') {
                    if (typeof window.meta.src !== 'undefined') {
                        elem_arr[i].content = window.meta.src;
                    }
                }
                if (elem_arr[i].getAttribute('name') === 'canonical') {
                    if (typeof window.meta.href !== 'undefined') {
                        elem_arr[i].content = window.meta.href;
                    }
                }
            }
            var elem_arr = document.getElementsByTagName("link");
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('rel') === 'canonical') {
                    if (typeof window.meta.href !== 'undefined') {
                        elem_arr[i].href = window.meta.href;
                    }
                }
            }
        } else {
            console.log('sm.js: not initilized properly');
        }
        return this;
    },
    set: function (obj, bar, css) {
        /* var obj = {
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
            var obj = {
            og: 'website',
            ogAppId: 'chrisdlangton',
            ogAdmins: 'chrisdlangton',
            tw: 'summary',
            twSite: 'chrisdlangton',
            hashtags: 'Pagesjs',
            twCreator: 'chrisdlangton',
            ms: 'width=1024;height=768',
            msHex: '#B10000'
            };
        */
        //if any important obj missing use original values
        if (typeof window.meta === 'object' && typeof obj === 'object') {
            if (typeof window.meta.title !== 'undefined' && typeof obj.title === 'undefined') {
                obj.title = window.meta.title;
            }
            if (typeof window.meta.slug !== 'undefined' && typeof obj.slug === 'undefined') {
                obj.slug = window.meta.slug;
            }
            if (typeof window.meta.description !== 'undefined' && typeof obj.description === 'undefined') {
                obj.description = window.meta.description;
            }
            if (typeof window.meta.src !== 'undefined' && typeof obj.src === 'undefined') {
                obj.src = window.meta.src;
            }
            if (typeof window.meta.href !== 'undefined' && typeof obj.href === 'undefined') {
                obj.href = window.meta.href;
            }
        }
        if (typeof obj === 'object') {
            //update page title
            if (typeof obj.title !== 'undefined') {
                document.title = obj.title;
            }
            var found_ogtitle = found_slug = found_description = found_src = found_href = found_og = found_ogAppId = found_ogAdmins = found_tw = found_twSite = found_twCreator = found_ms = found_ogSite = found_ogUrl = found_ogImg = found_ogDesc = found_twDesc = found_twTitle = found_twUrl = found_twImg = found_msTt = found_msUrl = found_msWin = found_msImg = found_msTile = found_author = found_summary = false;
            var elem_ogtitle, elem_slug, elem_description, elem_src, elem_href, elem_og, elem_ogAppId, elem_ogAdmins, elem_tw, elem_twSite, elem_twCreator, elem_ms, elem_ogSite, elem_ogUrl, elem_ogImg, elem_ogDesc, elem_twDesc, elem_twTitle, elem_twUrl, elem_twImg, elem_msTt, elem_msUrl, elem_msWin, elem_msImg, elem_msTile, elem_author, elem_summary;
            //Get all the <meta>
            var elem_arr = document.getElementsByTagName("meta");
            //Iterate through
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('name') === 'description') {
                    elem_description = elem_arr[i];
                    found_description = true;
                }
                if (elem_arr[i].getAttribute('name') === 'abstract') {
                    elem_slug = elem_arr[i];
                    found_slug = true;
                }
                if (elem_arr[i].getAttribute('name') === 'summary') {
                    elem_summary = elem_arr[i];
                    found_summary = true;
                }
                if (elem_arr[i].getAttribute('name') === 'image_src') {
                    elem_src = elem_arr[i];
                    found_src = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:type') {
                    elem_og = elem_arr[i];
                    found_og = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:title') {
                    elem_ogtitle = elem_arr[i];
                    found_ogtitle = true;
                }
                if (elem_arr[i].getAttribute('property') === 'fb:app_id') {
                    elem_ogAppId = elem_arr[i];
                    found_ogAppId = true;
                }
                if (elem_arr[i].getAttribute('property') === 'fb:admins') {
                    elem_ogAdmins = elem_arr[i];
                    found_ogAdmins = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:card') {
                    elem_tw = elem_arr[i];
                    found_tw = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:site') {
                    elem_twSite = elem_arr[i];
                    found_twSite = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:creator') {
                    elem_twCreator = elem_arr[i];
                    found_twCreator = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-navbutton-color') {
                    elem_ms = elem_arr[i];
                    found_ms = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:site_name') {
                    elem_ogSite = elem_arr[i];
                    found_ogSite = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:url') {
                    elem_ogUrl = elem_arr[i];
                    found_ogUrl = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:image') {
                    elem_ogImg = elem_arr[i];
                    found_ogImg = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:description') {
                    elem_ogDesc = elem_arr[i];
                    found_ogDesc = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:description') {
                    elem_twDesc = elem_arr[i];
                    found_twDesc = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:title') {
                    elem_twTitle = elem_arr[i];
                    found_twTitle = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:url') {
                    elem_twUrl = elem_arr[i];
                    found_twUrl = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:image') {
                    elem_twImg = elem_arr[i];
                    found_twImg = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-tooltip') {
                    elem_msTt = elem_arr[i];
                    found_msTt = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-starturl') {
                    elem_msUrl = elem_arr[i];
                    found_msUrl = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-window') {
                    elem_msWin = elem_arr[i];
                    found_msWin = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-TileImage') {
                    elem_msImg = elem_arr[i];
                    found_msImg = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-TileColor') {
                    elem_msTile = elem_arr[i];
                    found_msTile = true;
                }
            }
            var elem_arr = document.getElementsByTagName("link");
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('rel') === 'canonical') {
                    elem_href = elem_arr[i];
                    found_href = true;
                }
                if (elem_arr[i].getAttribute('rel') === 'author') {
                    elem_author = elem_arr[i];
                    found_author = true;
                }
            }
            //update <meta>
            if (found_description && typeof obj.description !== 'undefined') {
                elem_description.content = obj.description;
            }
            if (found_slug && typeof obj.slug !== 'undefined') {
                elem_slug.content = obj.slug;
            }
            if (found_src && typeof obj.src !== 'undefined') {
                elem_src.content = obj.src;
            }
            //Build new OpenGraph meta if possible
            if (typeof obj.ogAdmins !== 'undefined') {
                if (!found_og && typeof obj.og !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:type');
                    elem.content = obj.og;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_og && typeof obj.og !== 'undefined') {
                        elem_og.content = obj.og;
                    }
                }
                if (!found_ogSite && typeof obj.title !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:site_name');
                    elem.content = obj.title;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_og && typeof obj.title !== 'undefined') {
                        elem_ogSite.content = obj.title;
                    }
                }
                if (!found_ogAppId && typeof obj.ogAppId !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'fb:app_id');
                    elem.content = obj.ogAppId;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogAppId && typeof obj.ogAppId !== 'undefined') {
                        elem_ogAppId.content = obj.ogAppId;
                    }
                }
                if (!found_ogAdmins && typeof obj.ogAdmins !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'fb:admins');
                    elem.content = obj.ogAdmins;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogAdmins && typeof obj.ogAdmins !== 'undefined') {
                        elem_ogAdmins.content = obj.ogAdmins;
                    }
                }
                if (!found_ogUrl && typeof obj.href !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:url');
                    elem.content = obj.href;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogUrl && typeof obj.href !== 'undefined') {
                        elem_ogUrl.content = obj.href;
                    }
                }
                if (!found_ogImg && typeof obj.src !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:image');
                    elem.content = obj.src;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogImg && typeof obj.src !== 'undefined') {
                        elem_ogImg.content = obj.src;
                    }
                }
                if (!found_ogtitle && typeof obj.slug !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:title');
                    elem.content = obj.slug;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogtitle && typeof obj.slug !== 'undefined') {
                        elem_ogtitle.content = obj.slug;
                    }
                }
                if (!found_ogDesc && typeof obj.description !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('property', 'og:description');
                    elem.content = obj.description;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_ogDesc && typeof obj.description !== 'undefined') {
                        elem_ogDesc.content = obj.description;
                    }
                }
            }
            //Build new Tweet Cards meta if possible
            if (typeof obj.twSite !== 'undefined') {
                if (!found_tw && typeof obj.tw !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:card');
                    elem.content = obj.tw;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_tw && typeof obj.tw !== 'undefined') {
                        elem_tw.content = obj.tw;
                    }
                }
                if (!found_twUrl && typeof obj.href !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:url');
                    elem.content = obj.href;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twUrl && typeof obj.href !== 'undefined') {
                        elem_twUrl.content = obj.href;
                    }
                }
                if (!found_twCreator && typeof obj.twCreator !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:creator');
                    obj.twCreator.charAt(0) === '@' ? elem.content = obj.twCreator : elem.content = '@' + obj.twCreator;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twCreator && typeof obj.twCreator !== 'undefined') {
                        obj.twCreator.charAt(0) === '@' ? elem_twCreator.content = obj.twCreator : elem_twCreator.content = '@' + obj.twCreator;
                    }
                }
                if (!found_twSite && typeof obj.twSite !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:site');
                    obj.twSite.charAt(0) === '@' ? elem.content = obj.twSite : elem.content = '@' + obj.twSite;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twSite && typeof obj.twSite !== 'undefined') {
                        obj.twSite.charAt(0) === '@' ? elem_twSite.content = obj.twSite : elem_twSite.content = '@' + obj.twSite;
                    }
                }
                if (!found_twTitle && typeof obj.title !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:title');
                    elem.content = obj.title;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twTitle && typeof obj.title !== 'undefined') {
                        elem_twTitle.content = obj.title;
                    }
                }
                if (!found_twDesc && typeof obj.slug !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:description');
                    elem.content = obj.slug;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twDesc && typeof obj.slug !== 'undefined') {
                        elem_twDesc.content = obj.slug;
                    }
                }
                if (!found_twImg && typeof obj.src !== 'undefined') {
                    elem = document.createElement('meta');
                    elem.setAttribute('name', 'twitter:image');
                    elem.content = obj.src;
                    document.getElementsByTagName('head')[0].appendChild(elem);
                } else {
                    if (found_twImg && typeof obj.src !== 'undefined') {
                        elem_twImg.content = obj.src;
                    }
                }
            }
            //update ms meta
            if (!found_msTt && typeof obj.slug !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-tooltip');
                elem.content = obj.slug;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_msTt && typeof obj.slug !== 'undefined') {
                    elem_msTt.content = obj.slug;
                }
            }
            if (!found_msUrl && typeof obj.href !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-starturl');
                elem.content = obj.href;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_msUrl && typeof obj.href !== 'undefined') {
                    elem_msUrl.content = obj.href;
                }
            }
            if (!found_msWin && typeof obj.ms !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-window');
                elem.content = obj.ms;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_msWin && typeof obj.ms !== 'undefined') {
                    elem_msWin.content = obj.ms;
                }
            }
            if (!found_ms && typeof obj.msHex !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-navbutton-color');
                obj.msHex.charAt(0) === '#' ? elem.content = obj.msHex : elem.content = '#' + obj.msHex;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_ms && typeof obj.msHex !== 'undefined') {
                    obj.msHex.charAt(0) === '#' ? elem_ms.content = obj.msHex : elem_ms.content = '#' + obj.msHex;
                }
            }
            if (!found_msImg && typeof obj.src !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-TileImage');
                elem.content = obj.src;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_msImg && typeof obj.src !== 'undefined') {
                    elem_msImg.content = obj.src;
                }
            }
            if (!found_msTile && typeof obj.msHex !== 'undefined') {
                elem = document.createElement('meta');
                elem.setAttribute('name', 'msapplication-TileColor');
                obj.msHex.charAt(0) === '#' ? elem.content = obj.msHex : elem.content = '#' + obj.msHex;
                document.getElementsByTagName('head')[0].appendChild(elem);
            } else {
                if (found_msTile && typeof obj.msHex !== 'undefined') {
                    obj.msHex.charAt(0) === '#' ? elem_msTile.content = obj.msHex : elem_msTile.content = '#' + obj.msHex;
                }
            }
            if (typeof bar !== 'undefined' && bar === true) {
                if (document.getElementById("social_links") === null) {
                    //holds icons
                    elem = document.createElement('span');
                    elem.id = 'boxshow';
                    elem.innerHTML = 'Share';
                    elem.setAttribute('onClick', "document.getElementById('social_links').style.display = 'inherit';this.style.display = 'none';");
                    document.getElementsByTagName('body')[0].appendChild(elem);
                    elem = document.createElement('ul');
                    elem.id = 'social_links';
                    close = document.createElement('span');
                    close.id = 'boxclose';
                    close.innerHTML = 'X';
                    close.setAttribute('onClick', "this.parentNode.style.display = 'none';document.getElementById('boxshow').style.display = 'inherit';");
                    elem.appendChild(close);
                    document.getElementsByTagName('body')[0].appendChild(elem);
                    //Facebook share url only http://www.facebook.com/share.php?u={href}
                    elem = document.createElement('li');
                    anchor = document.createElement('a');
                    anchor.id = 'fb';
                    anchor.setAttribute('class', 'social_link');
                    anchor.setAttribute('style', "background: url('" + window.meta.imgFB + "') center center no-repeat;background-size: 80px 80px;");
                    anchor.href = 'http://www.facebook.com/share.php?u=' + obj.href;
                    elem.appendChild(anchor);
                    document.getElementById('social_links').appendChild(elem);
                    //tweet https://twitter.com/intent/tweet?screen_name=chrisdlangton&text=Title&via=codewiz_biz&hashtags=pagesjs
                    elem = document.createElement('li');
                    anchor = document.createElement('a');
                    anchor.id = 'tw';
                    anchor.setAttribute('class', 'social_link');
                    anchor.setAttribute('style', "background: url('" + window.meta.imgTW + "') center center no-repeat;  background-size: 80px 80px;");
                    if (typeof obj.twSite !== 'undefined' && typeof obj.twCreator !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                        anchor.href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title) + '&via=' + obj.twSite + '&hashtags=' + obj.hashtags;
                    } else {
                        if (typeof obj.twSite !== 'undefined' && typeof obj.twCreator !== 'undefined') {
                            anchor.href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title) + '&via=' + obj.twSite;
                        } else {
                            if (typeof obj.twSite !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                                anchor.href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title) + '&via=' + obj.twSite + '&hashtags=' + obj.hashtags;
                            } else {
                                if (typeof obj.twCreator !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                                    anchor.href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title) + '&hashtags=' + obj.hashtags;
                                } else {
                                    if (typeof obj.twSite !== 'undefined') {
                                        anchor.href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title) + '&via=' + obj.twSite;
                                    } else {
                                        if (typeof obj.twCreator !== 'undefined') {
                                            anchor.href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title);
                                        } else {
                                            anchor.href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    elem.appendChild(anchor);
                    document.getElementById('social_links').appendChild(elem);
                    //Linkedin share https://developer.linkedin.com/documents/share-linkedin
                    elem = document.createElement('li');
                    anchor = document.createElement('a');
                    anchor.id = 'li';
                    anchor.setAttribute('class', 'social_link');
                    anchor.setAttribute('style', "background: url('" + window.meta.imgLI + "') center center no-repeat;  background-size: 80px 80px;");
                    anchor.href = 'http://www.linkedin.com/shareArticle?mini=true&url=' + obj.href + '&title=' + escape(obj.title) + '&summary=' + obj.slug + '&source=' + window.location.hostname;
                    elem.appendChild(anchor);
                    document.getElementById('social_links').appendChild(elem);
                    //Google +1 https://developers.google.com/+/plugins/share/#sharelink
                    elem = document.createElement('li');
                    anchor = document.createElement('a');
                    anchor.id = 'gp';
                    anchor.setAttribute('class', 'social_link');
                    anchor.setAttribute('style', "background: url('" + window.meta.imgGP + "') center center no-repeat;  background-size: 80px 80px;");
                    anchor.href = 'https://plus.google.com/share?url=' + obj.href;
                    elem.appendChild(anchor);
                    document.getElementById('social_links').appendChild(elem);
                } else {
                    document.getElementById('fb').href = 'http://www.facebook.com/share.php?u=' + obj.href;
                    if (typeof obj.twSite !== 'undefined' && typeof obj.twCreator !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                        document.getElementById('tw').href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title) + '&via=' + obj.twSite + '&hashtags=' + obj.hashtags;
                    } else {
                        if (typeof obj.twSite !== 'undefined' && typeof obj.twCreator !== 'undefined') {
                            document.getElementById('tw').href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title + ' ' + obj.href) + '&via=' + obj.twSite;
                        } else {
                            if (typeof obj.twSite !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                                document.getElementById('tw').href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title) + '&via=' + obj.twSite + '&hashtags=' + obj.hashtags;
                            } else {
                                if (typeof obj.twCreator !== 'undefined' && typeof obj.hashtags !== 'undefined') {
                                    document.getElementById('tw').href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title) + '&hashtags=' + obj.hashtags;
                                } else {
                                    if (typeof obj.twSite !== 'undefined') {
                                        document.getElementById('tw').href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title) + '&via=' + obj.twSite;
                                    } else {
                                        if (typeof obj.twCreator !== 'undefined') {
                                            document.getElementById('tw').href = 'https://twitter.com/intent/tweet?screen_name=' + obj.twCreator + '&text=' + escape(obj.title);
                                        } else {
                                            document.getElementById('tw').href = 'https://twitter.com/intent/tweet?text=' + escape(obj.title);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    document.getElementById('li').href = 'http://www.linkedin.com/shareArticle?mini=true&url=' + obj.href + '&title=' + escape(obj.title) + '&summary=' + obj.slug + '&source=' + window.location.hostname;
                    document.getElementById('gp').href = 'https://plus.google.com/share?url=' + obj.href;
                }
            }
            if (typeof css !== 'undefined') {
                if (css === true) {
                    css = 'ul#social_links { display: none; float: ' + window.meta.side + '; position: fixed; top: 15%; ' + window.meta.side + ': 0; padding-left: 0; padding-right: 0; margin-' + window.meta.side + ': 35px; padding-top: 5px; padding-bottom: 5px; list-style: none; -webkit-border-radius: 15px; border-radius: 15px; -moz-border-radius: 15px; background-color: transparent; background-color: rgba(200, 200, 200, 0.8); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd)"; } a.social_link { float: ' + window.meta.side + '; width: 80px; height: 80px; } a.social_link:hover { margin-top: -10px; margin-bottom: 10px; } #boxclose{ float:' + window.meta.side + '; width:26px; height:26px; position: absolute; bottom: -8px; ' + window.meta.side + ': -8px; width:20px; height 10px; cursor:pointer; padding-left: 10px; padding-top: 4px; border-radius: 40px; color: white; color: white; background-color: transparent; background-color: rgba(200, 200, 200, 0.8); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd)"; } #boxshow{ float: ' + window.meta.side + '; position: fixed; ' + window.meta.side + ': 0; top: 25%; padding: 5px 10px 5px 10px; -webkit-border-radius: 15px; border-radius: 15px; -moz-border-radius: 15px; background-color: transparent; background-color: rgba(200, 200, 200, 0.8); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99dddddd,endColorstr=#99dddddd)"; color: white; -moz-transform:rotate(90deg); transform:rotate(90deg); -webkit-transform:rotate(90deg); -ms-transform:rotate(90deg); -o-transform: rotate(90deg); filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); z-index:inherit; zoom:1; cursor: pointer; }';
                }
                elem = document.createElement('style');
                elem.setAttribute('type', 'text/css');
                elem.innerHTML = css;
                document.getElementsByTagName('head')[0].appendChild(elem);
            }
        }
        return this;
    }
}