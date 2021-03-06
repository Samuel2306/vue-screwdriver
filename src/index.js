import libPlugin from './lib'
import utilPlugin from './vue-util-plugin'
import filtersPlugin from './vue-filters-plugin'
import directivesPlugin from './vue-directives-plugin'
import uiComponents from './views'

const install = function(Vue, options){
  if(install.installed) return;
  if (options.useRem) {
    require('./rem');
  }

  libPlugin.install(Vue, options);
  utilPlugin.install(Vue, options);
  filtersPlugin.install(Vue, options);
  directivesPlugin.install(Vue, options);
  uiComponents.install(Vue, options);
  install.installed = true
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.14',
  install: install,
  libPlugin: libPlugin,
  utilPlugin: utilPlugin,
  filtersPlugin: filtersPlugin,
  directivesPlugin: directivesPlugin,
  uiComponents: uiComponents,
}
