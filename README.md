# Demo for fulfillOrderLegacyWyvern

it works when `yarn:start`

```cli
yarn start
```

but it failed when build with webpack minimized

```cli
yarn run build
yarn start:prod
```

the error message is

```log
provider_utils.ts:89 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'then')
    at i.includes.t.sendAsync (provider_utils.ts:89:39)
    at bound  (rng-browser.js:647:16)
    at e.<anonymous> (web3_wrapper.ts:782:32)
    at l (superPropBase.js:86:17)
    at Generator._invoke (superPropBase.js:66:24)
    at Generator.next (superPropBase.js:117:21)
    at utils.ts:51:114
    at new Promise (<anonymous>)
    at c (utils.ts:51:114)
    at e.value (web3_wrapper.ts:769:41)
i.includes.t.sendAsync @ provider_utils.ts:89
bound  @ rng-browser.js:647
(anonymous) @ web3_wrapper.ts:782
l @ superPropBase.js:86
(anonymous) @ superPropBase.js:66
(anonymous) @ superPropBase.js:117
(anonymous) @ utils.ts:51
c @ utils.ts:51
value @ web3_wrapper.ts:769
(anonymous) @ web3_wrapper.ts:638
l @ superPropBase.js:86
(anonymous) @ superPropBase.js:66
(anonymous) @ superPropBase.js:117
(anonymous) @ utils.ts:51
c @ utils.ts:51
value @ web3_wrapper.ts:630
(anonymous) @ index.ts:309
l @ superPropBase.js:86
(anonymous) @ superPropBase.js:66
(anonymous) @ superPropBase.js:117
o @ index.ts:129
Promise.then (async)
n @ createSuper.js:13
c @ createSuper.js:25
Promise.then (async)
n @ createSuper.js:13
c @ createSuper.js:25
Promise.then (async)
n @ createSuper.js:13
c @ createSuper.js:25
(anonymous) @ createSuper.js:32
(anonymous) @ createSuper.js:21
Le @ react-jsx-runtime.production.min.js:54
We @ react-jsx-runtime.production.min.js:54
(anonymous) @ react-jsx-runtime.production.min.js:55
Un @ react-jsx-runtime.production.min.js:105
jn @ react-jsx-runtime.production.min.js:106
(anonymous) @ react-jsx-runtime.production.min.js:117
lf @ react-jsx-runtime.production.min.js:274
Ce @ react-jsx-runtime.production.min.js:52
Zn @ react-jsx-runtime.production.min.js:109
Jt @ react-jsx-runtime.production.min.js:74
Gt @ react-jsx-runtime.production.min.js:73
index.js:98 Uncaught TypeError: t is not a function
    at a.onreadystatechange (index.js:98:13)
    at t.<computed> [as dispatchEvent] (inject.js:1:4952)
    at r (inject.js:1:7395)
    at n (inject.js:1:7699)
    at n (inject.js:1:7659)
    at m (inject.js:1:7705)
    at _.onreadystatechange (inject.js:1:7834)
```
