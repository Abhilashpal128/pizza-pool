"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/menu-items/route";
exports.ids = ["app/api/menu-items/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=D%3A%5Cfood-ordering-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cfood-ordering-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=D%3A%5Cfood-ordering-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cfood-ordering-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_food_ordering_app_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/menu-items/route.js */ \"(rsc)/./src/app/api/menu-items/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/menu-items/route\",\n        pathname: \"/api/menu-items\",\n        filename: \"route\",\n        bundlePath: \"app/api/menu-items/route\"\n    },\n    resolvedPagePath: \"D:\\\\food-ordering-app\\\\src\\\\app\\\\api\\\\menu-items\\\\route.js\",\n    nextConfigOutput,\n    userland: D_food_ordering_app_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/menu-items/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVudS1pdGVtcyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDZm9vZC1vcmRlcmluZy1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNmb29kLW9yZGVyaW5nLWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNVO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvP2QxZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcZm9vZC1vcmRlcmluZy1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcbWVudS1pdGVtc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVudS1pdGVtcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21lbnUtaXRlbXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lbnUtaXRlbXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxmb29kLW9yZGVyaW5nLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxtZW51LWl0ZW1zXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21lbnUtaXRlbXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=D%3A%5Cfood-ordering-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cfood-ordering-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var _app_modals_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/modals/User */ \"(rsc)/./src/app/modals/User.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _app_modals_UserInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/modals/UserInfo */ \"(rsc)/./src/app/modals/UserInfo.js\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                console.log(credentials);\n                const { email, password } = credentials;\n                mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n                const user = await _app_modals_User__WEBPACK_IMPORTED_MODULE_0__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _app_modals_UserInfo__WEBPACK_IMPORTED_MODULE_8__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNUO0FBQ3VCO0FBQ1c7QUFDdEM7QUFDNEI7QUFDRDtBQUNQO0FBQ0M7QUFFMUMsTUFBTVUsY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxTQUFTUixxRUFBY0EsQ0FBQ0MsMERBQWFBO0lBQ3JDUSxXQUFXO1FBQ1RWLHNFQUFjQSxDQUFDO1lBQ2JXLFVBQVVMLFFBQVFDLEdBQUcsQ0FBQ0ssZ0JBQWdCO1lBQ3RDQyxjQUFjUCxRQUFRQyxHQUFHLENBQUNPLG9CQUFvQjtRQUNoRDtRQUVBaEIsMkVBQW1CQSxDQUFDO1lBQ2xCaUIsTUFBTTtZQUNOQyxJQUFJO1lBRUpDLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQ1JDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFFQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUc7Z0JBQzlCQyxRQUFRQyxHQUFHLENBQUNUO2dCQUNaLE1BQU0sRUFBRVUsS0FBSyxFQUFFTCxRQUFRLEVBQUUsR0FBR0w7Z0JBQzVCdEIsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ3NCLFNBQVM7Z0JBQ3RDLE1BQU1DLE9BQU8sTUFBTXBDLGtEQUFJQSxDQUFDcUMsT0FBTyxDQUFDO29CQUFFSjtnQkFBTTtnQkFDeEMsTUFBTUssYUFBYUYsUUFBUS9CLHlEQUFrQixDQUFDdUIsVUFBVVEsS0FBS1IsUUFBUTtnQkFDckUsSUFBSVUsWUFBWTtvQkFDZCxPQUFPRjtnQkFDVDtnQkFFQSxPQUFPO1lBQ1Q7UUFDRjtLQUNEO0FBQ0gsRUFBRTtBQUVLLGVBQWVJO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTXRDLDJEQUFnQkEsQ0FBQ087SUFDdkMsTUFBTWdDLFlBQVlELFNBQVNMLE1BQU1IO0lBQ2pDLElBQUksQ0FBQ1MsV0FBVztRQUNkLE9BQU87SUFDVDtJQUNBLE1BQU1DLFdBQVcsTUFBTWxDLDBEQUFRQSxDQUFDNEIsT0FBTyxDQUFDO1FBQUVKLE9BQU9TO0lBQVU7SUFDM0QsSUFBSSxDQUFDQyxVQUFVO1FBQ2IsT0FBTztJQUNUO0lBQ0EsT0FBT0EsU0FBU0MsS0FBSztBQUN2QjtBQUVBLE1BQU1DLFVBQVUzQyxnREFBUUEsQ0FBQ1E7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiQC9hcHAvbW9kYWxzL1VzZXJcIjtcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgTmV4dEF1dGgsIHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCJAL2xpYnMvbW9uZ29Db25uZWN0XCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIkAvYXBwL21vZGFscy9Vc2VySW5mb1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG5cclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXHJcblxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwidGVzdEBleGFtcGxlLmNvbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzKTtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGlmIChwYXNzd29yZE9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluKCkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBjb25zdCB1c2VyRW1haWwgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcclxuICBpZiAoIXVzZXJFbWFpbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IFVzZXJJbmZvLmZpbmRPbmUoeyBlbWFpbDogdXNlckVtYWlsIH0pO1xyXG4gIGlmICghdXNlckluZm8pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHVzZXJJbmZvLmFkbWluO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG4iXSwibmFtZXMiOlsiVXNlciIsIm1vbmdvb3NlIiwiTmV4dEF1dGgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnRQcm9taXNlIiwiVXNlckluZm8iLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsImNvbm5lY3QiLCJNT05HT19VUkwiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkT2siLCJjb21wYXJlU3luYyIsImlzQWRtaW4iLCJzZXNzaW9uIiwidXNlckVtYWlsIiwidXNlckluZm8iLCJhZG1pbiIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/menu-items/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/menu-items/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_modals_MenuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/modals/MenuItems */ \"(rsc)/./src/app/modals/MenuItems.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    if (await (0,_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.isAdmin)()) {\n        const MenuItemDoc = await _app_modals_MenuItems__WEBPACK_IMPORTED_MODULE_0__.MenuItem.create(data);\n        return Response.json(MenuItemDoc);\n    } else {\n        return Response.json({});\n    }\n}\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    if (await (0,_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.isAdmin)()) {\n        const { _id, ...data } = await req.json();\n        await _app_modals_MenuItems__WEBPACK_IMPORTED_MODULE_0__.MenuItem.findByIdAndUpdate(_id, data);\n    }\n    return Response.json(true);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const data = await _app_modals_MenuItems__WEBPACK_IMPORTED_MODULE_0__.MenuItem.find();\n    return Response.json(data);\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    if (await (0,_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.isAdmin)()) {\n        await _app_modals_MenuItems__WEBPACK_IMPORTED_MODULE_0__.MenuItem.deleteOne({\n            _id\n        });\n    }\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2xCO0FBQ3NCO0FBRS9DLGVBQWVHLEtBQUtDLEdBQUc7SUFDNUJILHVEQUFnQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFDdEMsTUFBTUMsT0FBTyxNQUFNTCxJQUFJTSxJQUFJO0lBQzNCLElBQUksTUFBTVIsNkRBQU9BLElBQUk7UUFDbkIsTUFBTVMsY0FBYyxNQUFNWCwyREFBUUEsQ0FBQ1ksTUFBTSxDQUFDSDtRQUMxQyxPQUFPSSxTQUFTSCxJQUFJLENBQUNDO0lBQ3ZCLE9BQU87UUFDTCxPQUFPRSxTQUFTSCxJQUFJLENBQUMsQ0FBQztJQUN4QjtBQUNGO0FBRU8sZUFBZUksSUFBSVYsR0FBRztJQUMzQkgsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUN0QyxJQUFJLE1BQU1OLDZEQUFPQSxJQUFJO1FBQ25CLE1BQU0sRUFBRWEsR0FBRyxFQUFFLEdBQUdOLE1BQU0sR0FBRyxNQUFNTCxJQUFJTSxJQUFJO1FBQ3ZDLE1BQU1WLDJEQUFRQSxDQUFDZ0IsaUJBQWlCLENBQUNELEtBQUtOO0lBQ3hDO0lBQ0EsT0FBT0ksU0FBU0gsSUFBSSxDQUFDO0FBQ3ZCO0FBRU8sZUFBZU87SUFDcEJoQix1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBRXRDLE1BQU1DLE9BQU8sTUFBTVQsMkRBQVFBLENBQUNrQixJQUFJO0lBQ2hDLE9BQU9MLFNBQVNILElBQUksQ0FBQ0Q7QUFDdkI7QUFFTyxlQUFlVSxPQUFPZixHQUFHO0lBQzlCSCx1REFBZ0IsQ0FBQ0ssUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE1BQU1ZLE1BQU0sSUFBSUMsSUFBSWpCLElBQUlnQixHQUFHO0lBQzNCLE1BQU1MLE1BQU1LLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2pDLElBQUksTUFBTXJCLDZEQUFPQSxJQUFJO1FBQ25CLE1BQU1GLDJEQUFRQSxDQUFDd0IsU0FBUyxDQUFDO1lBQUVUO1FBQUk7SUFDakM7SUFDQSxPQUFPRixTQUFTSCxJQUFJLENBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUuanM/ZTcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCJAL2FwcC9tb2RhbHMvTWVudUl0ZW1zXCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgaXNBZG1pbiB9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBpZiAoYXdhaXQgaXNBZG1pbigpKSB7XHJcbiAgICBjb25zdCBNZW51SXRlbURvYyA9IGF3YWl0IE1lbnVJdGVtLmNyZWF0ZShkYXRhKTtcclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKE1lbnVJdGVtRG9jKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe30pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XHJcbiAgaWYgKGF3YWl0IGlzQWRtaW4oKSkge1xyXG4gICAgY29uc3QgeyBfaWQsIC4uLmRhdGEgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBhd2FpdCBNZW51SXRlbS5maW5kQnlJZEFuZFVwZGF0ZShfaWQsIGRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBNZW51SXRlbS5maW5kKCk7XHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxKSB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgX2lkID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJfaWRcIik7XHJcbiAgaWYgKGF3YWl0IGlzQWRtaW4oKSkge1xyXG4gICAgYXdhaXQgTWVudUl0ZW0uZGVsZXRlT25lKHsgX2lkIH0pO1xyXG4gIH1cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWVudUl0ZW0iLCJtb25nb29zZSIsImlzQWRtaW4iLCJQT1NUIiwicmVxIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJkYXRhIiwianNvbiIsIk1lbnVJdGVtRG9jIiwiY3JlYXRlIiwiUmVzcG9uc2UiLCJQVVQiLCJfaWQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIkdFVCIsImZpbmQiLCJERUxFVEUiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/menu-items/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/modals/MenuItems.js":
/*!*************************************!*\
  !*** ./src/app/modals/MenuItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem)\n/* harmony export */ });\nconst { Schema, models, model, default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ExtrPrice = new Schema({\n    name: String,\n    price: Number\n});\nconst MenuItemsSchema = new Schema({\n    image: {\n        type: \"string\"\n    },\n    name: {\n        type: \"string\"\n    },\n    description: {\n        type: \"string\"\n    },\n    category: {\n        type: mongoose.Types.ObjectId\n    },\n    basePrice: {\n        type: \"string\"\n    },\n    sizes: {\n        type: [\n            ExtrPrice\n        ]\n    },\n    extrsIngredientPrices: {\n        type: [\n            ExtrPrice\n        ]\n    }\n});\nconst MenuItem = models?.MenuItem || model(\"MenuItem\", MenuItemsSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGFscy9NZW51SXRlbXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sRUFBRUEsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBU0MsUUFBUSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRXZFLE1BQU1DLFlBQVksSUFBSU4sT0FBTztJQUMzQk8sTUFBTUM7SUFDTkMsT0FBT0M7QUFDVDtBQUVBLE1BQU1DLGtCQUFrQixJQUFJWCxPQUFPO0lBQ2pDWSxPQUFPO1FBQ0xDLE1BQU07SUFDUjtJQUNBTixNQUFNO1FBQ0pNLE1BQU07SUFDUjtJQUNBQyxhQUFhO1FBQ1hELE1BQU07SUFDUjtJQUNBRSxVQUFVO1FBQ1JGLE1BQU1ULFNBQVNZLEtBQUssQ0FBQ0MsUUFBUTtJQUMvQjtJQUNBQyxXQUFXO1FBQ1RMLE1BQU07SUFDUjtJQUNBTSxPQUFPO1FBQUVOLE1BQU07WUFBQ1A7U0FBVTtJQUFDO0lBQzNCYyx1QkFBdUI7UUFBRVAsTUFBTTtZQUFDUDtTQUFVO0lBQUM7QUFDN0M7QUFFTyxNQUFNZSxXQUFXcEIsUUFBUW9CLFlBQVluQixNQUFNLFlBQVlTLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9tb2RhbHMvTWVudUl0ZW1zLmpzPzZiZjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwsIGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcblxyXG5jb25zdCBFeHRyUHJpY2UgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgcHJpY2U6IE51bWJlcixcclxufSk7XHJcblxyXG5jb25zdCBNZW51SXRlbXNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBpbWFnZToge1xyXG4gICAgdHlwZTogXCJzdHJpbmdcIixcclxuICB9LFxyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgdHlwZTogXCJzdHJpbmdcIixcclxuICB9LFxyXG4gIGNhdGVnb3J5OiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcclxuICB9LFxyXG4gIGJhc2VQcmljZToge1xyXG4gICAgdHlwZTogXCJzdHJpbmdcIixcclxuICB9LFxyXG4gIHNpemVzOiB7IHR5cGU6IFtFeHRyUHJpY2VdIH0sXHJcbiAgZXh0cnNJbmdyZWRpZW50UHJpY2VzOiB7IHR5cGU6IFtFeHRyUHJpY2VdIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gbW9kZWxzPy5NZW51SXRlbSB8fCBtb2RlbChcIk1lbnVJdGVtXCIsIE1lbnVJdGVtc1NjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbHMiLCJtb2RlbCIsImRlZmF1bHQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJFeHRyUHJpY2UiLCJuYW1lIiwiU3RyaW5nIiwicHJpY2UiLCJOdW1iZXIiLCJNZW51SXRlbXNTY2hlbWEiLCJpbWFnZSIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiVHlwZXMiLCJPYmplY3RJZCIsImJhc2VQcmljZSIsInNpemVzIiwiZXh0cnNJbmdyZWRpZW50UHJpY2VzIiwiTWVudUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/modals/MenuItems.js\n");

/***/ }),

/***/ "(rsc)/./src/app/modals/User.js":
/*!********************************!*\
  !*** ./src/app/modals/User.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGFscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBQ3JCO0FBRTVCLE1BQU1JLGFBQWEsSUFBSUosNENBQU1BLENBQzNCO0lBQ0VLLE1BQU07UUFBRUMsTUFBTUM7SUFBTztJQUNyQkMsT0FBTztRQUFFRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUNSTCxNQUFNQztJQUNSO0lBQ0FLLE9BQU87UUFDTE4sTUFBTUM7SUFDUjtBQUVGLEdBQ0E7SUFBRU0sWUFBWTtBQUFLO0FBR2QsTUFBTUMsT0FBT1osNENBQU1BLEVBQUVZLFFBQVFiLCtDQUFLQSxDQUFDLFFBQVFHLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvbW9kYWxzL1VzZXIuanM/OTk1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2U6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJiY3J5cHQiLCJ1c2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/modals/User.js\n");

/***/ }),

/***/ "(rsc)/./src/app/modals/UserInfo.js":
/*!************************************!*\
  !*** ./src/app/modals/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\nconst { Schema, models, model } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserInfoSchema = new Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String\n    },\n    streetAddress: {\n        type: String\n    },\n    pinCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = models?.UserInfo || model(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGFscy9Vc2VySW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBRXBELE1BQU1DLGlCQUFpQixJQUFJSixPQUN6QjtJQUNFSyxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsT0FBTztRQUFFSCxNQUFNQztJQUFPO0lBQ3RCRyxlQUFlO1FBQUVKLE1BQU1DO0lBQU87SUFDOUJJLFNBQVM7UUFBRUwsTUFBTUM7SUFBTztJQUN4QkssTUFBTTtRQUFFTixNQUFNQztJQUFPO0lBQ3JCTSxTQUFTO1FBQUVQLE1BQU1DO0lBQU87SUFDeEJPLE9BQU87UUFBRVIsTUFBTVM7UUFBU0MsU0FBUztJQUFNO0FBQ3pDLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsV0FBV2pCLFFBQVFpQixZQUFZaEIsTUFBTSxZQUFZRSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvbW9kYWxzL1VzZXJJbmZvLmpzP2YzNmYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwgfSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IFVzZXJJbmZvU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwaG9uZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIHN0cmVldEFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBwaW5Db2RlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgY2l0eTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGNvdW50cnk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBhZG1pbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IG1vZGVscz8uVXNlckluZm8gfHwgbW9kZWwoXCJVc2VySW5mb1wiLCBVc2VySW5mb1NjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbHMiLCJtb2RlbCIsInJlcXVpcmUiLCJVc2VySW5mb1NjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicGhvbmUiLCJzdHJlZXRBZGRyZXNzIiwicGluQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwiYWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJVc2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/modals/UserInfo.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPX1VSTCkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKTtcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=D%3A%5Cfood-ordering-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5Cfood-ordering-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();