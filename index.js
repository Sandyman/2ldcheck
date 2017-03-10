'use strict';
const lodash = require('underscore');

/**
 * This list is not at all exhaustive (yet).
 * @type {[[string,string]]}
 */
const secondLevelDomains = [
    ['ar', 'com'],
    ['at', 'co'],
    ['at', 'or'],
    ['au', 'asn'],
    ['au', 'com'],
    ['au', 'edu'],
    ['au', 'gov'],
    ['au', 'act'],
    ['au', 'nsw'],
    ['au', 'nt'],
    ['au', 'oz'],
    ['au', 'qld'],
    ['au', 'sa'],
    ['au', 'tas'],
    ['au', 'vic'],
    ['au', 'wa'],
    ['au', 'id'],
    ['au', 'net'],
    ['au', 'org'],
    ['br', 'com'],
    // France (.fr)
    // Hungary (.hu)
    // Israel (.il)
    // South Korea (.kr)
    ['mx', 'com'],
    ['sg', 'com'],
    ['nz', 'co'],
    ['nz', 'net'],
    ['nz', 'org'],
    // Russia (.ru)
    // Spain (.es)
    // Turkey (.tr)
    ['uk', 'co'],
    ['uk', 'ltd'],
    ['uk', 'me'],
    ['uk', 'net'],
    ['uk', 'org'],
    ['uk', 'plc'],
    // US (.us)
    ['za', 'co']
];

/**
 * Check whether a given domain name is a top level domain.
 * @param domain_name {string}
 * @returns {boolean}
 */
module.exports = (domain_name) => {
    // Convert a.b.c.d => ['d', 'c'] (only interested in last two elements in reverse order)
    const niamod = domain_name.split('.').reverse().splice(0, 2);

    // Probably not the most efficient, but it's only a few elements to iterate over
    let is2Ld = false;
    secondLevelDomains.forEach(sdl => is2Ld |= lodash.difference(sdl, niamod).length === 0);
    return !!is2Ld;
};
