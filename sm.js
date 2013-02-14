if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (item) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === item) {
                return i;
            }
        }
        return -1;
    };
}
function smo() {
    // Private Properties
    this.about = {
        Library: "smo.js",
        Version: "0.1",
        Author: "Christopher D. Langton",
        Website: "http:\/\/chrisdlangton.com",
        Created: "2013-02-13",
        Updated: "2013-02-13"
    };
    // return a new page object if we're in the window scope
    if (window === this) {
        return new smo();
    }
    return this;
};
smo.prototype = {
    init: function () {
        var found_ogtitle = found_slug = found_description = found_src = found_href = found_og = found_ogAppId = found_ogAdmins = found_tw = found_twSite = found_twCreator = found_ms = found_ogSite = found_ogUrl = found_ogImg = found_ogDesc = found_twDesc = found_twTitle = found_twUrl = found_twImg = found_msTt = found_msUrl = found_msWin = found_msImg = found_msTile = false;
        var elem_ogtitle, elem_slug, elem_description, elem_src, elem_href, elem_og, elem_ogAppId, elem_ogAdmins, elem_tw, elem_twSite, elem_twCreator, elem_ms, elem_ogSite, elem_ogUrl, elem_ogImg, elem_ogDesc, elem_twDesc, elem_twTitle, elem_twUrl, elem_twImg, elem_msTt, elem_msUrl, elem_msWin, elem_msImg, elem_msTile;
        //Get all the <meta>
        var elem_arr = document.getElementsByTagName("meta");
        //Iterate through
        for (var i = 0; i < elem_arr.length; i++) {
            if (elem_arr[i].getAttribute('name') === 'description') {
                elem_description = elem_arr[i]; found_description = true;
            }
            if (elem_arr[i].getAttribute('name') === 'abstract') {
                elem_slug = elem_arr[i]; found_slug = true;
            }
            if (elem_arr[i].getAttribute('name') === 'image_src') {
                elem_src = elem_arr[i]; found_src = true;
            }
            if (elem_arr[i].getAttribute('name') === 'canonical') {
                elem_href = elem_arr[i]; found_href = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-navbutton-color') {
                elem_ms = elem_arr[i]; found_ms = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-tooltip') {
                elem_msTt = elem_arr[i]; found_msTt = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-starturl') {
                elem_msUrl = elem_arr[i]; found_msUrl = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-window') {
                elem_msWin = elem_arr[i]; found_msWin = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-TileImage') {
                elem_msImg = elem_arr[i]; found_msImg = true;
            }
            if (elem_arr[i].getAttribute('name') === 'msapplication-TileColor') {
                elem_msTile = elem_arr[i]; found_msTile = true;
            }
        }
        var elem_arr = document.getElementsByTagName("link");
        for (var i = 0; i < elem_arr.length; i++) {
            if (elem_arr[i].getAttribute('rel') === 'canonical') {
                elem_href = elem_arr[i]; found_href = true;
            }
        }
        //Build new meta if possible
        if (!found_msTt && found_slug) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-tooltip');
            elem.content=elem_slug.content;
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        if (!found_msUrl && found_href) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-starturl');
            elem.content=elem_href.href;
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        if (!found_msWin) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-window');
            elem.content='width=1024;height=768';
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        if (!found_ms) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-navbutton-color');
            elem.content='#B10000';
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        if (!found_msImg && found_src) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-TileImage');
            elem.content=elem_src.content;
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        if (!found_msTile) {
            elem=document.createElement('meta');
            elem.setAttribute('name','msapplication-TileColor');
            elem.content='#B10000';
            document.getElementsByTagName('head')[0].appendChild( elem );                
        }
        //Globals for method defaults
        window.meta = { title: document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ') };
        if (found_description) { window.meta.description = elem_description.content; }
        if (found_slug) { window.meta.slug = elem_slug.content; }
        if (found_src) { window.meta.src = elem_src.content; }
        if (found_href) { window.meta.href = elem_href.href; }
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
            console.log('smo.js: not initilized properly');
        }
        return this;
    },
    set: function (obj) {
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
            twCreator: '',
            ms: '',
            msHex: ''
        }; */
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
        if ( typeof obj === 'object' ) {
            //update page title
            if ( typeof obj.title !== 'undefined' ) {
                document.title = obj.title;
            }
            var found_ogtitle = found_slug = found_description = found_src = found_href = found_og = found_ogAppId = found_ogAdmins = found_tw = found_twSite = found_twCreator = found_ms = found_ogSite = found_ogUrl = found_ogImg = found_ogDesc = found_twDesc = found_twTitle = found_twUrl = found_twImg = found_msTt = found_msUrl = found_msWin = found_msImg = found_msTile = false;
            var elem_ogtitle, elem_slug, elem_description, elem_src, elem_href, elem_og, elem_ogAppId, elem_ogAdmins, elem_tw, elem_twSite, elem_twCreator, elem_ms, elem_ogSite, elem_ogUrl, elem_ogImg, elem_ogDesc, elem_twDesc, elem_twTitle, elem_twUrl, elem_twImg, elem_msTt, elem_msUrl, elem_msWin, elem_msImg, elem_msTile;
            //Get all the <meta>
            var elem_arr = document.getElementsByTagName("meta");
            //Iterate through
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('name') === 'description') {
                    elem_description = elem_arr[i]; found_description = true;
                }
                if (elem_arr[i].getAttribute('name') === 'abstract') {
                    elem_slug = elem_arr[i]; found_slug = true;
                }
                if (elem_arr[i].getAttribute('name') === 'image_src') {
                    elem_src = elem_arr[i]; found_src = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:type') {
                    elem_og = elem_arr[i]; found_og = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:title') {
                    elem_ogtitle = elem_arr[i]; found_ogtitle = true;
                }
                if (elem_arr[i].getAttribute('property') === 'fb:app_id') {
                    elem_ogAppId = elem_arr[i]; found_ogAppId = true;
                }
                if (elem_arr[i].getAttribute('property') === 'fb:admins') {
                    elem_ogAdmins = elem_arr[i]; found_ogAdmins = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:card') {
                    elem_tw = elem_arr[i]; found_tw = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:site') {
                    elem_twSite = elem_arr[i]; found_twSite = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:creator') {
                    elem_twCreator = elem_arr[i]; found_twCreator = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-navbutton-color') {
                    elem_ms = elem_arr[i]; found_ms = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:site_name') {
                    elem_ogSite = elem_arr[i]; found_ogSite = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:url') {
                    elem_ogUrl = elem_arr[i]; found_ogUrl = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:image') {
                    elem_ogImg = elem_arr[i]; found_ogImg = true;
                }
                if (elem_arr[i].getAttribute('property') === 'og:description') {
                    elem_ogDesc = elem_arr[i]; found_ogDesc = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:description') {
                    elem_twDesc = elem_arr[i]; found_twDesc = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:title') {
                    elem_twTitle = elem_arr[i]; found_twTitle = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:url') {
                    elem_twUrl = elem_arr[i]; found_twUrl = true;
                }
                if (elem_arr[i].getAttribute('name') === 'twitter:image') {
                    elem_twImg = elem_arr[i]; found_twImg = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-tooltip') {
                    elem_msTt = elem_arr[i]; found_msTt = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-starturl') {
                    elem_msUrl = elem_arr[i]; found_msUrl = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-window') {
                    elem_msWin = elem_arr[i]; found_msWin = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-TileImage') {
                    elem_msImg = elem_arr[i]; found_msImg = true;
                }
                if (elem_arr[i].getAttribute('name') === 'msapplication-TileColor') {
                    elem_msTile = elem_arr[i]; found_msTile = true;
                }
            }
            var elem_arr = document.getElementsByTagName("link");
            for (var i = 0; i < elem_arr.length; i++) {
                if (elem_arr[i].getAttribute('rel') === 'canonical') {
                    elem_href = elem_arr[i]; found_href = true;
                }
            }
            //update <meta>
            if (found_description && typeof obj.description !== 'undefined') {
                elem_description.content=obj.description;
            }            
            if (found_slug && typeof obj.slug !== 'undefined') {
                elem_slug.content=obj.slug;
            }            
            if (found_src && typeof obj.src !== 'undefined') {
                elem_src.content=obj.src;
            }            
            //Build new OpenGraph meta if possible
            if ( typeof obj.ogAdmins !== 'undefined' ) {
                if (!found_og && typeof obj.og !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:type');
                    elem.content=obj.og;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_og && typeof obj.og !== 'undefined') {
                        elem_og.content=obj.og;
                    }
                }
                if (!found_ogSite && typeof obj.title !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:site_name');
                    elem.content=obj.title;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_og && typeof obj.title !== 'undefined') {
                        elem_ogSite.content=obj.title;
                    }
                }
                if (!found_ogAppId && typeof obj.ogAppId !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','fb:app_id');
                    elem.content=obj.ogAppId;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogAppId && typeof obj.ogAppId !== 'undefined') {
                        elem_ogAppId.content=obj.ogAppId;
                    }
                }
                if (!found_ogAdmins && typeof obj.ogAdmins !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','fb:admins');
                    elem.content=obj.ogAdmins;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogAdmins && typeof obj.ogAdmins !== 'undefined') {
                        elem_ogAdmins.content=obj.ogAdmins;
                    }
                }
                if (!found_ogUrl && typeof obj.href !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:url');
                    elem.content=obj.href;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogUrl && typeof obj.href !== 'undefined') {
                        elem_ogUrl.content=obj.href;
                    }
                }
                if (!found_ogImg && typeof obj.src !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:image');
                    elem.content=obj.src;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogImg && typeof obj.src !== 'undefined') {
                        elem_ogImg.content=obj.src;
                    }
                }
                if (!found_ogtitle && typeof obj.slug !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:title');
                    elem.content=obj.slug;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogtitle && typeof obj.slug !== 'undefined') {
                        elem_ogtitle.content=obj.slug;
                    }
                }
                if (!found_ogDesc && typeof obj.description !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('property','og:description');
                    elem.content=obj.description;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_ogDesc && typeof obj.description !== 'undefined') {
                        elem_ogDesc.content=obj.description;
                    }
                }
            }
            //Build new Tweet Cards meta if possible
            if ( typeof obj.twSite !== 'undefined' ) {
                if (!found_tw && typeof obj.tw !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:card');
                    elem.content=obj.tw;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_tw && typeof obj.tw !== 'undefined') {
                        elem_tw.content=obj.tw;
                    }
                }
                if (!found_twUrl && typeof obj.href !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:url');
                    elem.content=obj.href;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twUrl && typeof obj.href !== 'undefined') {
                        elem_twUrl.content=obj.href;
                    }
                }
                if (!found_twCreator && typeof obj.twCreator !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:creator');
                    obj.twCreator.charAt(0) === '@' ? elem.content=obj.twCreator : elem.content='@' + obj.twCreator;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twCreator && typeof obj.twCreator !== 'undefined') {
                        obj.twCreator.charAt(0) === '@' ? elem_twCreator.content=obj.twCreator : elem_twCreator.content='@' + obj.twCreator;
                    }
                }
                if (!found_twSite && typeof obj.twSite !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:site');
                    obj.twSite.charAt(0) === '@' ? elem.content=obj.twSite : elem.content='@' + obj.twSite;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twSite && typeof obj.twSite !== 'undefined') {
                        obj.twSite.charAt(0) === '@' ? elem_twSite.content=obj.twSite : elem_twSite.content='@' + obj.twSite;
                    }
                }
                if (!found_twTitle && typeof obj.title !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:title');
                    elem.content=obj.title;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twTitle && typeof obj.title !== 'undefined') {
                        elem_twTitle.content=obj.title;
                    }
                }
                if (!found_twDesc && typeof obj.slug !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:description');
                    elem.content=obj.slug;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twDesc && typeof obj.slug !== 'undefined') {
                        elem_twDesc.content=obj.slug;
                    }
                }
                if (!found_twImg && typeof obj.src !== 'undefined') {
                    elem=document.createElement('meta');
                    elem.setAttribute('name','twitter:image');
                    elem.content=obj.src;
                    document.getElementsByTagName('head')[0].appendChild( elem );                
                } else {
                    if (found_twImg && typeof obj.src !== 'undefined') {
                        elem_twImg.content=obj.src;
                    }
                }
            }
            //update ms meta
            if (!found_msTt && typeof obj.slug !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-tooltip');
                elem.content=obj.slug;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_msTt && typeof obj.slug !== 'undefined') {
                    elem_msTt.content=obj.slug;
                }
            }
            if (!found_msUrl && typeof obj.href !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-starturl');
                elem.content=obj.href;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_msUrl && typeof obj.href !== 'undefined') {
                    elem_msUrl.content=obj.href;
                }
            }
            if (!found_msWin && typeof obj.ms !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-window');
                elem.content=obj.ms;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_msWin && typeof obj.ms !== 'undefined') {
                    elem_msWin.content=obj.ms;
                }
            }
            if (!found_ms && typeof obj.msHex !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-navbutton-color');
                obj.msHex.charAt(0) === '#' ? elem.content=obj.msHex : elem.content='#' + obj.msHex ;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_ms && typeof obj.msHex !== 'undefined') {
                    obj.msHex.charAt(0) === '#' ? elem_ms.content=obj.msHex : elem_ms.content='#' + obj.msHex ;
                }
            }
            if (!found_msImg && typeof obj.src !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-TileImage');
                elem.content=obj.src;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_msImg && typeof obj.src !== 'undefined') {
                    elem_msImg.content=obj.src;
                }
            }
            if (!found_msTile && typeof obj.msHex !== 'undefined') {
                elem=document.createElement('meta');
                elem.setAttribute('name','msapplication-TileColor');
                obj.msHex.charAt(0) === '#' ? elem.content=obj.msHex : elem.content='#' + obj.msHex ;
                document.getElementsByTagName('head')[0].appendChild( elem );                
            } else {
                if (found_msTile && typeof obj.msHex !== 'undefined') {
                    obj.msHex.charAt(0) === '#' ? elem_msTile.content=obj.msHex : elem_msTile.content='#' + obj.msHex ;
                }
            }
        }
        return this;        
    }
}