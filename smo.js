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
function smo(action) {
    // Private Properties
    var about = {
        Library: "smo.js",
        Version: "0.1",
        Author: "Christopher D. Langton",
        Website: "http:\/\/chrisdlangton.com",
        Created: "2013-02-13",
        Updated: "2013-02-13"
    };
    // View About
    if ( action === 'about' ) {
        return about;
    }
    // return a new page object if we're in the window scope
    if (window === this) {
        return new smo();
    }
    return this;
};
smo.prototype = {
    init: function () {
        window.meta = {
                title: document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ')
            }
        return this;        
    },
    set: function (obj) {
        if ( typeof obj === 'object' ) {
            this.title = obj.title;
            document.title = this.title;
            return this;
        }
        return this;        
    },
    defaults: function () {
        if (typeof window.meta === 'object' && typeof window.meta.title !== 'undefined') {
            document.title = window.meta.title;
        } else { 
            console.log('SMO not initilized properly');
        }
        return this;
    }
}
