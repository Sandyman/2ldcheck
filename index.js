'use strict';
let slds = {
    ar: require('./countries/ar.js'),
    at: require('./countries/at.js'),
    au: require('./countries/au.js'),
    br: require('./countries/br.js'),
    mx: require('./countries/mx.js'),
    nz: require('./countries/nz.js'),
    sg: require('./countries/sg.js'),
    uk: require('./countries/uk.js'),
    za: require('./countries/za.js')
};

/**
 * Check whether a given domain name is a top level domain.
 * @param domain_name {string}
 * @returns {boolean}
 */
module.exports = (domain_name) => {
    // Convert a.b.c.d => ['d', 'c'] (only interested in last two elements in reverse order)
    const niamod = domain_name.split('.').reverse().splice(0, 2);
    let found = false;
    const sld = slds[niamod[0]];
    if (sld !== undefined) {
        const N = sld.length;
        let i = 0;
        do {
            found = niamod[1] === sld[i++];
        } while (!found && i < N);
    }
    return !!found;
};
