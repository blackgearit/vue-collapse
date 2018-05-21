// Default configuration
const prefix = 'v-collapse';
const basename = 'collapse';

const defaults = {
    'prefix' : prefix,
    'basename' : basename,
    'togglerClassDefault': prefix + '-toggler',
    'contentClassDefault': prefix + '-content',
    'contentClassEnd': prefix + '-content-end',
    'contentClassFinish': prefix + '-content-finish'
};

// Global toggle methods

const toggleElement = function (target, config) {
    if (target.classList.contains(config.contentClassEnd)) {
        closeElement(target,config)
    } else {
        openElement(target,config)
    }
};

const closeElement = function (target, config) {
    target.classList.remove(config.contentClassFinish);
      setTimeout(function() {
        target.classList.remove(config.contentClassEnd);
      }, 100)
};

const openElement = function (target, config) {
    target.classList.add(config.contentClassEnd);
    setTimeout(function(){
      target.classList.add(config.contentClassFinish);
    }, 300)

};

module.exports={
    defaults,
    toggleElement,
    closeElement,
    openElement,
};
