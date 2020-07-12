import axios from 'axios'

export default function sendSentryEvent () {
  axios.post('http://localhost:9000/api/2/store/?sentry_key=a7b5e3e989fd4000afb54ccee606d5a8&sentry_version=7',
    {
      event_id: 'fc6d8c0c43fc4630ad850ee518f1b9d0',
      culprit: 'my.module.function_name',
      timestamp: '2011-05-02T17:41:36',
      message: 'SyntaxError: Wattttt!',
      exception: {
        values: [
          {
            type: 'SyntaxError',
            value: 'Wattttt!',
            module: '__builtins__'
          }
        ]
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

  // return fetch('http://localhost:9000/api/2/store/?sentry_key=a7b5e3e989fd4000afb54ccee606d5a8&sentry_version=7', {
  //   body: JSON.stringify({
  //     exception: {
  //       values: [
  //         {
  //           type: 'TypeError',
  //           value: "Cannot read property 'e' of undefined",
  //           stacktrace: {
  //             frames: [
  //               {
  //                 colno: 12156,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'ue',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 12761,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'Array.<anonymous>',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 29624,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'Jn',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 31417,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'nr.run',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 30684,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'nr.get',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 27814,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'a.r',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 26991,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'a.In.t._update',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 48358,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'a.__patch__',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 47218,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'A',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 46431,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'k',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 43830,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'd',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 44201,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'h',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 21872,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'n',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 20536,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'init',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 21670,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'on',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 35770,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'new a',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 34510,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'a.t._init',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 29145,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'Un',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 11677,
  //                 filename: 'http://127.0.0.1:5500/dist/js/chunk-vendors.6a1b6745.js',
  //                 function: 'ne',
  //                 in_app: true,
  //                 lineno: 7
  //               },
  //               {
  //                 colno: 383,
  //                 filename: 'http://127.0.0.1:5500/dist/js/about.93c258fa.js',
  //                 function: 'a.created',
  //                 in_app: true,
  //                 lineno: 1
  //               }
  //             ]
  //           },
  //           mechanism: {
  //             handled: true,
  //             type: 'generic'
  //           }
  //         }
  //       ]
  //     },
  //     level: 'error',
  //     event_id: '63d62aa5a8cc4c0caf209c9b04f6b427',
  //     platform: 'javascript',
  //     sdk: {
  //       name: 'sentry.javascript.browser',
  //       packages: [
  //         {
  //           name: 'npm:@sentry/browser',
  //           version: '5.19.0'
  //         }
  //       ],
  //       version: '5.19.0',
  //       integrations: [
  //         'InboundFilters',
  //         'FunctionToString',
  //         'TryCatch',
  //         'Breadcrumbs',
  //         'LinkedErrors',
  //         'UserAgent',
  //         'Vue',
  //         'GlobalHandlers'
  //       ]
  //     },
  //     timestamp: 1594521811.5954158,
  //     environment: 'production',
  //     release: '1.0.0',
  //     tags: {
  //       page_locale: 'de-at'
  //     },
  //     user: {
  //       username: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  //     },
  //     contexts: {
  //       vue: {
  //         componentName: 'About',
  //         propsData: '[undefined]',
  //         lifecycleHook: 'created hook'
  //       }
  //     },
  //     breadcrumbs: [
  //       {
  //         timestamp: 1594521753.603241,
  //         category: 'console',
  //         data: {
  //           arguments: [
  //             'Live reload enabled.'
  //           ],
  //           logger: 'console'
  //         },
  //         level: 'log',
  //         message: 'Live reload enabled.'
  //       },
  //       {
  //         timestamp: 1594521753.630411,
  //         category: 'ui.click',
  //         message: 'body > div#app > div.home > button'
  //       },
  //       {
  //         timestamp: 1594521811.5652308,
  //         category: 'ui.click',
  //         message: 'body > div#app > div#nav > a'
  //       },
  //       {
  //         timestamp: 1594521811.5885708,
  //         category: 'navigation',
  //         data: {
  //           from: '/dist/#/',
  //           to: '/dist/#/about'
  //         }
  //       }
  //     ],
  //     request: {
  //       url: 'http://127.0.0.1:5500/dist/#/about',
  //       headers: {
  //         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
  //       }
  //     }
  //   }), // must match 'Content-Type' header
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   // credentials: 'same-origin', // include, same-origin, *omit
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors' // no-cors, cors, *same-origin
  //   // redirect: 'follow', // manual, *follow, error
  //   // referrer: 'no-referrer', // *client, no-referrer
  // })
}
