(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/library.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Library
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Library() {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Library.useEffect": ()=>{
            // Central wall
            const wallGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](8, 6, 0.5);
            const wallMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#8b6f47",
                roughness: 0.8
            });
            const wall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](wallGeometry, wallMaterial);
            wall.position.z = -2.4;
            wall.castShadow = true;
            wall.receiveShadow = true;
            scene.add(wall);
            // Left bookshelf
            const leftShelfGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1.5, 5, 1);
            const shelfMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#5c4a3d",
                roughness: 0.9
            });
            const leftShelf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](leftShelfGeometry, shelfMaterial);
            leftShelf.position.set(-3.5, 1, -1.7);
            leftShelf.castShadow = true;
            leftShelf.receiveShadow = true;
            scene.add(leftShelf);
            // Right bookshelf
            const rightShelf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](leftShelfGeometry, shelfMaterial);
            rightShelf.position.set(3.5, 1, -1.7);
            rightShelf.castShadow = true;
            rightShelf.receiveShadow = true;
            scene.add(rightShelf);
            const bookColors = [
                "#e8a6d0",
                "#d4534f",
                "#c41e3a",
                "#4b7bec",
                "#a29bfe",
                "#00b894",
                "#fdcb6e",
                "#fab1a0",
                "#ff7675",
                "#74b9ff",
                "#55efc4",
                "#ffeaa7",
                "#dfe6e9",
                "#2d3436"
            ];
            const meshesToRemove = [
                wall,
                leftShelf,
                rightShelf
            ];
            // Books on left shelf - multiple horizontal stacks
            for(let stack = 0; stack < 3; stack++){
                for(let col = 0; col < 5; col++){
                    const bookGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.3, 0.6, 0.15);
                    const bookMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: bookColors[(stack * 5 + col) % bookColors.length],
                        roughness: 0.7
                    });
                    const book = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bookGeometry, bookMaterial);
                    book.position.set(-3.5 + (col - 2) * 0.35, 0.4 + stack * 1.3, -1);
                    book.rotation.z = (Math.random() - 0.5) * 0.1;
                    book.castShadow = true;
                    book.receiveShadow = true;
                    scene.add(book);
                    meshesToRemove.push(book);
                }
            }
            // Books on right shelf - multiple horizontal stacks
            for(let stack = 0; stack < 3; stack++){
                for(let col = 0; col < 5; col++){
                    const bookGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.3, 0.6, 0.15);
                    const bookMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        color: bookColors[(stack * 5 + col + 7) % bookColors.length],
                        roughness: 0.7
                    });
                    const book = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bookGeometry, bookMaterial);
                    book.position.set(3.5 + (col - 2) * 0.35, 0.4 + stack * 1.3, -1);
                    book.rotation.z = (Math.random() - 0.5) * 0.1;
                    book.castShadow = true;
                    book.receiveShadow = true;
                    scene.add(book);
                    meshesToRemove.push(book);
                }
            }
            // Birthday text - "Happy Birthday Riddhi" in golden cursive
            const canvas = document.createElement("canvas");
            canvas.width = 1024;
            canvas.height = 256;
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#ffffff";
            ctx.font = 'italic 100px "Brush Script MT", cursive';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Happy Birthday Riddhi", 512, 128);
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
            const textGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](6, 1.5);
            const textMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                map: texture,
                emissive: "#d4af37",
                emissiveIntensity: 0.5,
                metalness: 0.3,
                roughness: 0.4
            });
            const textMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](textGeometry, textMaterial);
            textMesh.position.set(0, 2.5, -1.75);
            scene.add(textMesh);
            meshesToRemove.push(textMesh);
            return ({
                "Library.useEffect": ()=>{
                    meshesToRemove.forEach({
                        "Library.useEffect": (mesh)=>scene.remove(mesh)
                    }["Library.useEffect"]);
                    wallGeometry.dispose();
                    leftShelfGeometry.dispose();
                    textGeometry.dispose();
                    wallMaterial.dispose();
                    shelfMaterial.dispose();
                    textMaterial.dispose();
                    texture.dispose();
                }
            })["Library.useEffect"];
        }
    }["Library.useEffect"], [
        scene
    ]);
    return null;
}
_s(Library, "UhCC8wDD2cMyItT8qLKLhYRbhzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Library;
var _c;
__turbopack_context__.k.register(_c, "Library");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Table() {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Table.useEffect": ()=>{
            // Ground plane
            const groundGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](12, 8);
            const groundMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#8b7355",
                roughness: 0.95
            });
            const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2;
            ground.position.y = 0;
            ground.receiveShadow = true;
            scene.add(ground);
            // Table top
            const topGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](4, 0.15, 2.5);
            const tableMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#6b4423",
                roughness: 0.7
            });
            const top = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](topGeometry, tableMaterial);
            top.position.y = 0.75;
            top.castShadow = true;
            top.receiveShadow = true;
            scene.add(top);
            // Table legs
            const legGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.1, 0.75, 0.1);
            const legs = [];
            const positions = [
                [
                    -1.8,
                    0.375,
                    -1.0
                ],
                [
                    1.8,
                    0.375,
                    -1.0
                ],
                [
                    -1.8,
                    0.375,
                    1.0
                ],
                [
                    1.8,
                    0.375,
                    1.0
                ]
            ];
            positions.forEach({
                "Table.useEffect": (pos)=>{
                    const leg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](legGeometry, tableMaterial);
                    leg.position.set(pos[0], pos[1], pos[2]);
                    leg.castShadow = true;
                    leg.receiveShadow = true;
                    scene.add(leg);
                    legs.push(leg);
                }
            }["Table.useEffect"]);
            return ({
                "Table.useEffect": ()=>{
                    scene.remove(ground, top, ...legs);
                    groundGeometry.dispose();
                    topGeometry.dispose();
                    legGeometry.dispose();
                    groundMaterial.dispose();
                    tableMaterial.dispose();
                }
            })["Table.useEffect"];
        }
    }["Table.useEffect"], [
        scene
    ]);
    return null;
}
_s(Table, "UhCC8wDD2cMyItT8qLKLhYRbhzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Table;
var _c;
__turbopack_context__.k.register(_c, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cake.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cake
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Cake() {
    _s();
    const { scene, raycaster, mouse } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const candlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        {
            position: [
                -0.3,
                1.65,
                -0.15
            ],
            isLit: true
        },
        {
            position: [
                0.3,
                1.65,
                -0.15
            ],
            isLit: true
        },
        {
            position: [
                -0.3,
                1.65,
                0.15
            ],
            isLit: true
        },
        {
            position: [
                0.3,
                1.65,
                0.15
            ],
            isLit: true
        }
    ]);
    const [, setUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const meshesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const flamesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cake.useEffect": ()=>{
            // Layer materials: white and pink frosting
            const whiteFrosting = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#ffffff",
                roughness: 0.6,
                metalness: 0.1
            });
            const pinkFrosting = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#ff69b4",
                roughness: 0.6,
                metalness: 0.1
            });
            // Layer 1 (bottom) - white
            const layer1Geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1.2, 1.2, 0.3, 32);
            const layer1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](layer1Geometry, whiteFrosting);
            layer1.position.y = 0.85;
            layer1.castShadow = true;
            layer1.receiveShadow = true;
            scene.add(layer1);
            meshesRef.current.set(0, layer1);
            // Layer 2 (middle) - pink
            const layer2Geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.85, 0.85, 0.3, 32);
            const layer2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](layer2Geometry, pinkFrosting);
            layer2.position.y = 1.15;
            layer2.castShadow = true;
            layer2.receiveShadow = true;
            scene.add(layer2);
            meshesRef.current.set(1, layer2);
            // Layer 3 (top) - white
            const layer3Geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.5, 0.5, 0.3, 32);
            const layer3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](layer3Geometry, whiteFrosting);
            layer3.position.y = 1.45;
            layer3.castShadow = true;
            layer3.receiveShadow = true;
            scene.add(layer3);
            meshesRef.current.set(2, layer3);
            // Candles and flames
            const candleMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#fff8dc",
                roughness: 0.3
            });
            candlesRef.current.forEach({
                "Cake.useEffect": (candle, idx)=>{
                    // Candle body
                    const candleGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.04, 0.04, 0.25, 16);
                    const candleMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](candleGeometry, candleMaterial);
                    candleMesh.position.set(...candle.position);
                    candleMesh.castShadow = true;
                    candleMesh.receiveShadow = true;
                    scene.add(candleMesh);
                    meshesRef.current.set(100 + idx, candleMesh);
                    if (candle.isLit) {
                        // Flame as cone geometry (visible)
                        const flameGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConeGeometry"](0.03, 0.15, 8);
                        const flameMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                            color: "#ffaa00",
                            emissive: "#ff6600",
                            emissiveIntensity: 2,
                            roughness: 0.8
                        });
                        const flameMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](flameGeometry, flameMaterial);
                        flameMesh.position.set(candle.position[0], candle.position[1] + 0.15, candle.position[2]);
                        flameMesh.castShadow = true;
                        scene.add(flameMesh);
                        flamesRef.current.set(idx, flameMesh);
                        // Light for the flame - reduced intensity
                        const flameLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"]("#ffa500", 0.8, 2, 2);
                        flameLight.position.set(candle.position[0], candle.position[1] + 0.15, candle.position[2]);
                        scene.add(flameLight);
                        flamesRef.current.set(1000 + idx, flameLight);
                    }
                }
            }["Cake.useEffect"]);
            return ({
                "Cake.useEffect": ()=>{
                    meshesRef.current.forEach({
                        "Cake.useEffect": (mesh)=>scene.remove(mesh)
                    }["Cake.useEffect"]);
                    flamesRef.current.forEach({
                        "Cake.useEffect": (flame)=>scene.remove(flame)
                    }["Cake.useEffect"]);
                    layer1Geometry.dispose();
                    layer2Geometry.dispose();
                    layer3Geometry.dispose();
                    whiteFrosting.dispose();
                    pinkFrosting.dispose();
                    candleMaterial.dispose();
                }
            })["Cake.useEffect"];
        }
    }["Cake.useEffect"], [
        scene
    ]);
    // small helper to animate extinguish and dispose properly
    const animateExtinguish = (flameMesh, flameLight)=>{
        if (!flameMesh) return;
        const duration = 220;
        const start = performance.now();
        const initialScale = flameMesh.scale ? flameMesh.scale.clone() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        const initialLightIntensity = flameLight && "intensity" in flameLight ? flameLight.intensity : 0.8;
        const step = (now)=>{
            const t = Math.min(1, (now - start) / duration);
            const s = 1 - t;
            if (flameMesh.scale) flameMesh.scale.set(initialScale.x * s, initialScale.y * s, initialScale.z * s);
            if (flameLight && "intensity" in flameLight) {
                ;
                flameLight.intensity = initialLightIntensity * (1 - t);
            }
            if (t < 1) requestAnimationFrame(step);
            else {
                // final remove and dispose
                if (flameMesh.parent) scene.remove(flameMesh);
                if (flameLight && flameLight.parent) scene.remove(flameLight);
                // dispose geometry/material of flame mesh if mesh
                if (flameMesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"]) {
                    try {
                        flameMesh.geometry.dispose();
                    } catch  {}
                    try {
                        ;
                        flameMesh.material?.dispose();
                    } catch  {}
                }
            }
        };
        requestAnimationFrame(step);
    };
    // Handle candle/flame clicks (click flame to blow it out)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cake.useEffect": ()=>{
            const handleClick = {
                "Cake.useEffect.handleClick": (event)=>{
                    mouse.x = event.clientX / window.innerWidth * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                    const camera = scene.children.find({
                        "Cake.useEffect.handleClick.camera": (c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"]
                    }["Cake.useEffect.handleClick.camera"]);
                    if (!camera) return;
                    raycaster.setFromCamera(mouse, camera);
                    // collect candle bodies (keys 100..199) and flame meshes (keys 0..n in flamesRef)
                    const candleEntries = Array.from(meshesRef.current.entries()).filter({
                        "Cake.useEffect.handleClick.candleEntries": ([key])=>key >= 100
                    }["Cake.useEffect.handleClick.candleEntries"]);
                    const flameEntries = Array.from(flamesRef.current.entries()).filter({
                        "Cake.useEffect.handleClick.flameEntries": ([key])=>key >= 0 && key < 1000
                    }["Cake.useEffect.handleClick.flameEntries"]);
                    const objectsToTest = [
                        ...candleEntries.map({
                            "Cake.useEffect.handleClick": ([, mesh])=>mesh
                        }["Cake.useEffect.handleClick"]),
                        ...flameEntries.map({
                            "Cake.useEffect.handleClick": ([, mesh])=>mesh
                        }["Cake.useEffect.handleClick"])
                    ];
                    const intersects = raycaster.intersectObjects(objectsToTest, true);
                    if (intersects.length > 0) {
                        const clickedMesh = intersects[0].object;
                        // Check if clicked a flame mesh first
                        const flameEntry = Array.from(flamesRef.current.entries()).find({
                            "Cake.useEffect.handleClick.flameEntry": ([key, mesh])=>mesh === clickedMesh
                        }["Cake.useEffect.handleClick.flameEntry"]);
                        if (flameEntry) {
                            const flameKey = flameEntry[0] // this is the flame mesh key (0..n)
                            ;
                            const idx = flameKey;
                            // mark candle as unlit
                            if (candlesRef.current[idx]) candlesRef.current[idx].isLit = false;
                            // get flame mesh and light
                            const flameMesh = flamesRef.current.get(idx);
                            const flameLight = flamesRef.current.get(1000 + idx);
                            // animate and remove
                            animateExtinguish(flameMesh, flameLight);
                            flamesRef.current.delete(idx);
                            if (flameLight) flamesRef.current.delete(1000 + idx);
                            setUpdate({});
                            return;
                        }
                        // otherwise check if clicked the candle body
                        const candleEntry = Array.from(meshesRef.current.entries()).find({
                            "Cake.useEffect.handleClick.candleEntry": ([key, mesh])=>mesh === clickedMesh && key >= 100
                        }["Cake.useEffect.handleClick.candleEntry"]);
                        if (candleEntry) {
                            const candleKey = candleEntry[0];
                            const idx = candleKey - 100;
                            if (candlesRef.current[idx]) candlesRef.current[idx].isLit = false;
                            // remove associated flame and light if present
                            const flameMesh = flamesRef.current.get(idx);
                            const flameLight = flamesRef.current.get(1000 + idx);
                            animateExtinguish(flameMesh, flameLight);
                            flamesRef.current.delete(idx);
                            if (flameLight) flamesRef.current.delete(1000 + idx);
                            setUpdate({});
                        }
                    }
                }
            }["Cake.useEffect.handleClick"];
            window.addEventListener("click", handleClick);
            return ({
                "Cake.useEffect": ()=>window.removeEventListener("click", handleClick)
            })["Cake.useEffect"];
        }
    }["Cake.useEffect"], [
        scene,
        raycaster,
        mouse
    ]);
    return null;
}
_s(Cake, "w2xCZFXjqfokn2XLy92HlySaIJg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Cake;
var _c;
__turbopack_context__.k.register(_c, "Cake");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/polaroids.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Polaroids
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Polaroids({ polaroids, onPolaroidClick }) {
    _s();
    const { scene, raycaster, mouse, camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const meshesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Polaroids.useEffect": ()=>{
            const polaroidMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#fffdf7",
                roughness: 0.9
            });
            // Right front corner - two polaroids
            const rightPositions = [
                {
                    x: 1.2,
                    z: 0.4
                },
                {
                    x: 1.8,
                    z: 0.3
                }
            ];
            // Left front corner - one polaroid (third one)
            const leftPosition = {
                x: -1.5,
                z: 0.5
            };
            polaroids.forEach({
                "Polaroids.useEffect": (polaroid, idx)=>{
                    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.4, 0.78);
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, polaroidMaterial);
                    let xPos, zPos;
                    if (idx < 2) {
                        // Two polaroids on right front
                        xPos = rightPositions[idx].x;
                        zPos = rightPositions[idx].z;
                    } else {
                        // Third polaroid on left front
                        xPos = leftPosition.x;
                        zPos = leftPosition.z;
                    }
                    mesh.position.set(xPos, 0.92, zPos);
                    mesh.rotation.z = (Math.random() - 0.5) * 0.2;
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    scene.add(mesh);
                    meshesRef.current.set(polaroid.id, mesh);
                }
            }["Polaroids.useEffect"]);
            return ({
                "Polaroids.useEffect": ()=>{
                    meshesRef.current.forEach({
                        "Polaroids.useEffect": (mesh)=>scene.remove(mesh)
                    }["Polaroids.useEffect"]);
                    polaroidMaterial.dispose();
                }
            })["Polaroids.useEffect"];
        }
    }["Polaroids.useEffect"], [
        scene,
        polaroids
    ]);
    // Handle polaroid clicks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Polaroids.useEffect": ()=>{
            const handleClick = {
                "Polaroids.useEffect.handleClick": (event)=>{
                    mouse.x = event.clientX / window.innerWidth * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);
                    const meshes = Array.from(meshesRef.current.values());
                    const intersects = raycaster.intersectObjects(meshes);
                    if (intersects.length > 0) {
                        const clickedMesh = intersects[0].object;
                        const polaroidId = Array.from(meshesRef.current.entries()).find({
                            "Polaroids.useEffect.handleClick": ([, mesh])=>mesh === clickedMesh
                        }["Polaroids.useEffect.handleClick"])?.[0];
                        if (polaroidId) {
                            const polaroid = polaroids.find({
                                "Polaroids.useEffect.handleClick.polaroid": (p)=>p.id === polaroidId
                            }["Polaroids.useEffect.handleClick.polaroid"]);
                            if (polaroid) {
                                onPolaroidClick(polaroid);
                            }
                        }
                    }
                }
            }["Polaroids.useEffect.handleClick"];
            window.addEventListener("click", handleClick);
            return ({
                "Polaroids.useEffect": ()=>window.removeEventListener("click", handleClick)
            })["Polaroids.useEffect"];
        }
    }["Polaroids.useEffect"], [
        camera,
        raycaster,
        mouse,
        polaroids,
        onPolaroidClick
    ]);
    return null;
}
_s(Polaroids, "fNulqedzST3a+S/j8sNkbWbNdSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Polaroids;
var _c;
__turbopack_context__.k.register(_c, "Polaroids");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/envelope.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Envelope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Envelope({ onEnvelopeClick }) {
    _s();
    const { scene, raycaster, mouse, camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Envelope.useEffect": ()=>{
            const envelopeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.3, 0.2, 0.01);
            const envelopeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#f5f5dc",
                roughness: 0.8
            });
            const envelopeMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](envelopeGeometry, envelopeMaterial);
            envelopeMesh.position.set(-1.2, 0.92, 0.7);
            envelopeMesh.rotation.z = 0.3;
            envelopeMesh.castShadow = true;
            envelopeMesh.receiveShadow = true;
            scene.add(envelopeMesh);
            meshRef.current = envelopeMesh;
            return ({
                "Envelope.useEffect": ()=>{
                    scene.remove(envelopeMesh);
                    envelopeGeometry.dispose();
                    envelopeMaterial.dispose();
                }
            })["Envelope.useEffect"];
        }
    }["Envelope.useEffect"], [
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Envelope.useEffect": ()=>{
            const handleClick = {
                "Envelope.useEffect.handleClick": (event)=>{
                    if (!meshRef.current) return;
                    mouse.x = event.clientX / window.innerWidth * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObject(meshRef.current);
                    if (intersects.length > 0) {
                        onEnvelopeClick();
                    }
                }
            }["Envelope.useEffect.handleClick"];
            window.addEventListener("click", handleClick);
            return ({
                "Envelope.useEffect": ()=>window.removeEventListener("click", handleClick)
            })["Envelope.useEffect"];
        }
    }["Envelope.useEffect"], [
        camera,
        raycaster,
        mouse,
        onEnvelopeClick
    ]);
    return null;
}
_s(Envelope, "TGyqIYB6kTh4+rl9JpIgWbNNrKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Envelope;
var _c;
__turbopack_context__.k.register(_c, "Envelope");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/camera.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Camera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Camera({ onCameraClick }) {
    _s();
    const { scene, raycaster, mouse, camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Camera.useEffect": ()=>{
            // Camera body
            const bodyGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](0.2, 0.15, 0.08);
            const cameraMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#333333",
                roughness: 0.5
            });
            const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](bodyGeometry, cameraMaterial);
            body.position.set(-1.2, 0.92, -0.4);
            body.rotation.z = -0.3;
            body.castShadow = true;
            body.receiveShadow = true;
            scene.add(body);
            meshRef.current = body;
            // Camera lens
            const lensGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.04, 0.04, 0.03, 32);
            const lensMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                color: "#1a1a1a",
                metalness: 0.8,
                roughness: 0.2
            });
            const lens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](lensGeometry, lensMaterial);
            lens.position.set(-1.2, 0.92, -0.32);
            lens.rotation.x = Math.PI / 2;
            lens.castShadow = true;
            scene.add(lens);
            return ({
                "Camera.useEffect": ()=>{
                    scene.remove(body, lens);
                    bodyGeometry.dispose();
                    lensGeometry.dispose();
                    cameraMaterial.dispose();
                    lensMaterial.dispose();
                }
            })["Camera.useEffect"];
        }
    }["Camera.useEffect"], [
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Camera.useEffect": ()=>{
            const handleClick = {
                "Camera.useEffect.handleClick": (event)=>{
                    if (!meshRef.current) return;
                    mouse.x = event.clientX / window.innerWidth * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObject(meshRef.current);
                    if (intersects.length > 0) {
                        onCameraClick();
                    }
                }
            }["Camera.useEffect.handleClick"];
            window.addEventListener("click", handleClick);
            return ({
                "Camera.useEffect": ()=>window.removeEventListener("click", handleClick)
            })["Camera.useEffect"];
        }
    }["Camera.useEffect"], [
        camera,
        raycaster,
        mouse,
        onCameraClick
    ]);
    return null;
}
_s(Camera, "TGyqIYB6kTh4+rl9JpIgWbNNrKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c = Camera;
var _c;
__turbopack_context__.k.register(_c, "Camera");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$library$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/library.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cake$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cake.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$polaroids$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/polaroids.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$envelope$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/envelope.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$camera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/camera.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function Scene({ onPolaroidClick, onEnvelopeClick, onCameraClick, polaroids }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        shadows: true,
        gl: {
            antialias: true
        },
        dpr: ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio : "TURBOPACK unreachable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
                makeDefault: true,
                position: [
                    0,
                    2,
                    5
                ],
                fov: 50
            }, void 0, false, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                target: [
                    0,
                    1,
                    0
                ],
                minDistance: 3,
                maxDistance: 15,
                minPolarAngle: Math.PI / 4,
                maxPolarAngle: 3 * Math.PI / 4
            }, void 0, false, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.5,
                color: "#fff5e6"
            }, void 0, false, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    5,
                    8,
                    5
                ],
                intensity: 0.4,
                castShadow: true,
                "shadow-mapSize-width": 2048,
                "shadow-mapSize-height": 2048,
                "shadow-camera-far": 20,
                "shadow-camera-left": -10,
                "shadow-camera-right": 10,
                "shadow-camera-top": 10,
                "shadow-camera-bottom": -10
            }, void 0, false, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    -5,
                    5,
                    3
                ],
                intensity: 0.2,
                color: "#ffcc99"
            }, void 0, false, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$library$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cake$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$polaroids$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        polaroids: polaroids,
                        onPolaroidClick: onPolaroidClick
                    }, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$envelope$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onEnvelopeClick: onEnvelopeClick
                    }, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$camera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onCameraClick: onCameraClick
                    }, void 0, false, {
                        fileName: "[project]/components/scene.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/scene.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/scene.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = Scene;
var _c;
__turbopack_context__.k.register(_c, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/scene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/scene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_b823beca._.js.map