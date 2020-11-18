import test from '../components/ComGlobal.vue'

const components = {
    test
};

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
    });
};

export default install;