# 2ldcheck

This module does a simple check to see whether a domain name, like some.site.com.au, is a second level domain. Second
level domains are of the form '\*.co.uk', or '\*.com.au'.

# Usage

## Install

`npm i 2ldcheck -S`

## Use

```javascript
const isSecondLevelDomain = require('2ldcheck');

console.log(isSecondLevelDomain('domain.co.nz'));   // prints true
console.log(isSecondLevelDomain('domain.com'));     // prints false
```

## Warning

This module is far from complete. Some 2LDs are still missing. Feel free to add them if you wan to. I'm happy to 
incorporate any changes. 

Use this module at your own risk. 
