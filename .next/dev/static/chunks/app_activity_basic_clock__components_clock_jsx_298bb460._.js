(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/activity/basic/clock/_components/clock.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Clock() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    console.log(`Clock render(渲染), time: ${time}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Clock.useEffect": ()=>{
            const interval = setInterval({
                "Clock.useEffect.interval": ()=>{
                    setTime(new Date());
                }
            }["Clock.useEffect.interval"], 1000);
            console.log(`Clock mount(掛載), time: ${time}`);
            return ({
                "Clock.useEffect": ()=>{
                    clearInterval(interval);
                    console.log(`Clock unmount(卸載), time: ${time}`);
                }
            })["Clock.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Clock.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        title: "Timer",
        style: {
            textAlign: 'center',
            border: '2px solid red',
            padding: '10px',
            height: '100px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: time.toLocaleTimeString()
        }, void 0, false, {
            fileName: "[project]/app/activity/basic/clock/_components/clock.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/activity/basic/clock/_components/clock.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Clock, "I0+7QaEsXHXB0XO5JypI3yBHjPI=");
_c = Clock;
var _c;
__turbopack_context__.k.register(_c, "Clock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/activity/basic/clock/_components/clock.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/activity/basic/clock/_components/clock.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=app_activity_basic_clock__components_clock_jsx_298bb460._.js.map