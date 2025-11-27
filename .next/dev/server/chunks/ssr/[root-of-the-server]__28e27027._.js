module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/activity/sidebar/_data/products.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"iPhone 15 Pro\",\"description\":\"蘋果最新旗艦手機，搭載 A17 Pro 晶片\",\"price\":7999,\"category\":\"手機\",\"stock\":50,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":2,\"name\":\"MacBook Pro 14\",\"description\":\"專業級筆記型電腦，適合開發者和設計師\",\"price\":14999,\"category\":\"電腦\",\"stock\":30,\"image_url\":\"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":3,\"name\":\"AirPods Pro\",\"description\":\"主動降噪無線耳機，空間音訊技術\",\"price\":1899,\"category\":\"耳機\",\"stock\":100,\"image_url\":\"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":4,\"name\":\"iPad Air\",\"description\":\"輕薄平板電腦，支援 Apple Pencil\",\"price\":4399,\"category\":\"平板\",\"stock\":25,\"image_url\":\"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":5,\"name\":\"Apple Watch Series 9\",\"description\":\"智慧手錶，健康監測功能\",\"price\":2999,\"category\":\"手錶\",\"stock\":40,\"image_url\":\"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":6,\"name\":\"Mac mini\",\"description\":\"小巧的桌面電腦，效能強勁\",\"price\":4999,\"category\":\"電腦\",\"stock\":20,\"image_url\":\"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":7,\"name\":\"HomePod mini\",\"description\":\"智慧音箱，支援 Siri 語音助手\",\"price\":749,\"category\":\"音箱\",\"stock\":60,\"image_url\":\"https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":8,\"name\":\"Magic Keyboard\",\"description\":\"無線鍵盤，支援 Touch ID\",\"price\":999,\"category\":\"配件\",\"stock\":80,\"image_url\":\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":9,\"name\":\"Studio Display\",\"description\":\"27吋顯示器，5K解析度\",\"price\":11499,\"category\":\"顯示器\",\"stock\":15,\"image_url\":\"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":10,\"name\":\"AirTag\",\"description\":\"防丟追蹤器，精確定位\",\"price\":229,\"category\":\"配件\",\"stock\":200,\"image_url\":\"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":11,\"name\":\"Samsung Galaxy S24\",\"description\":\"三星旗艦手機，AI功能豐富\",\"price\":6999,\"category\":\"手機\",\"stock\":35,\"image_url\":\"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":12,\"name\":\"Dell XPS 13\",\"description\":\"輕薄筆記型電腦，適合商務辦公\",\"price\":8999,\"category\":\"電腦\",\"stock\":28,\"image_url\":\"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":13,\"name\":\"Sony WH-1000XM5\",\"description\":\"頂級降噪耳機，音質出色\",\"price\":2899,\"category\":\"耳機\",\"stock\":45,\"image_url\":\"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":14,\"name\":\"Microsoft Surface Pro\",\"description\":\"二合一平板電腦，Windows系統\",\"price\":6999,\"category\":\"平板\",\"stock\":22,\"image_url\":\"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":15,\"name\":\"Garmin Fenix 7\",\"description\":\"專業運動手錶，GPS定位\",\"price\":3999,\"category\":\"手錶\",\"stock\":18,\"image_url\":\"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":16,\"name\":\"Logitech MX Master\",\"description\":\"無線滑鼠，人體工學設計\",\"price\":599,\"category\":\"配件\",\"stock\":120,\"image_url\":\"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":17,\"name\":\"LG OLED C3\",\"description\":\"OLED電視，4K解析度\",\"price\":8999,\"category\":\"電視\",\"stock\":12,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":18,\"name\":\"Bose QuietComfort\",\"description\":\"降噪耳機，舒適佩戴\",\"price\":2499,\"category\":\"耳機\",\"stock\":55,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":19,\"name\":\"ASUS ROG Strix\",\"description\":\"遊戲筆記型電腦，RTX顯示卡\",\"price\":12999,\"category\":\"電腦\",\"stock\":16,\"image_url\":\"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":20,\"name\":\"GoPro Hero 11\",\"description\":\"運動相機，5.3K影片\",\"price\":3499,\"category\":\"相機\",\"stock\":30,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":21,\"name\":\"Google Pixel 8\",\"description\":\"Google旗艦手機，AI攝影功能\",\"price\":6499,\"category\":\"手機\",\"stock\":42,\"image_url\":\"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":22,\"name\":\"Lenovo ThinkPad X1\",\"description\":\"商務筆記型電腦，輕薄耐用\",\"price\":10999,\"category\":\"電腦\",\"stock\":24,\"image_url\":\"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":23,\"name\":\"JBL Flip 6\",\"description\":\"便攜式藍牙音箱，防水設計\",\"price\":899,\"category\":\"音箱\",\"stock\":75,\"image_url\":\"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":24,\"name\":\"Canon EOS R6\",\"description\":\"全片幅無反相機，專業攝影\",\"price\":15999,\"category\":\"相機\",\"stock\":18,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":25,\"name\":\"Fitbit Versa 4\",\"description\":\"健康追蹤手錶，心率監測\",\"price\":1899,\"category\":\"手錶\",\"stock\":65,\"image_url\":\"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":26,\"name\":\"Razer DeathAdder\",\"description\":\"遊戲滑鼠，高精度感應器\",\"price\":799,\"category\":\"配件\",\"stock\":90,\"image_url\":\"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":27,\"name\":\"Samsung QLED Q80C\",\"description\":\"QLED電視，量子點技術\",\"price\":12999,\"category\":\"電視\",\"stock\":14,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":28,\"name\":\"Sennheiser HD 660S\",\"description\":\"開放式耳機，Hi-Fi音質\",\"price\":3299,\"category\":\"耳機\",\"stock\":32,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":29,\"name\":\"HP Spectre x360\",\"description\":\"可翻轉筆記型電腦，觸控螢幕\",\"price\":11999,\"category\":\"電腦\",\"stock\":26,\"image_url\":\"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":30,\"name\":\"OnePlus 12\",\"description\":\"一加旗艦手機，快速充電\",\"price\":5999,\"category\":\"手機\",\"stock\":38,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":31,\"name\":\"DJI Mini 3 Pro\",\"description\":\"輕量級無人機，4K攝影\",\"price\":4499,\"category\":\"相機\",\"stock\":25,\"image_url\":\"https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":32,\"name\":\"Garmin Venu 3\",\"description\":\"智慧手錶，音樂播放\",\"price\":2299,\"category\":\"手錶\",\"stock\":48,\"image_url\":\"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":33,\"name\":\"SteelSeries Apex Pro\",\"description\":\"機械鍵盤，可調觸發點\",\"price\":1299,\"category\":\"配件\",\"stock\":55,\"image_url\":\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":34,\"name\":\"Sony Bravia A95K\",\"description\":\"QD-OLED電視，極致色彩\",\"price\":18999,\"category\":\"電視\",\"stock\":8,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":35,\"name\":\"Audio-Technica ATH-M50x\",\"description\":\"監聽耳機，專業音質\",\"price\":1799,\"category\":\"耳機\",\"stock\":70,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":36,\"name\":\"MSI GS66 Stealth\",\"description\":\"超薄遊戲筆記型電腦\",\"price\":15999,\"category\":\"電腦\",\"stock\":20,\"image_url\":\"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":37,\"name\":\"Xiaomi 14 Ultra\",\"description\":\"小米旗艦手機，徠卡鏡頭\",\"price\":7499,\"category\":\"手機\",\"stock\":45,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":38,\"name\":\"Nikon Z6 II\",\"description\":\"全片幅無反相機，雙卡槽\",\"price\":18999,\"category\":\"相機\",\"stock\":22,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":39,\"name\":\"Amazfit GTR 4\",\"description\":\"長續航智慧手錶\",\"price\":1299,\"category\":\"手錶\",\"stock\":58,\"image_url\":\"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":40,\"name\":\"Corsair K100\",\"description\":\"RGB機械鍵盤，光軸技術\",\"price\":1599,\"category\":\"配件\",\"stock\":40,\"image_url\":\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":41,\"name\":\"TCL 6-Series\",\"description\":\"Mini LED電視，遊戲模式\",\"price\":6999,\"category\":\"電視\",\"stock\":16,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":42,\"name\":\"Beyerdynamic DT 990 Pro\",\"description\":\"開放式耳機，錄音室級\",\"price\":2199,\"category\":\"耳機\",\"stock\":35,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":43,\"name\":\"Acer Swift 3\",\"description\":\"輕薄筆記型電腦，長續航\",\"price\":7999,\"category\":\"電腦\",\"stock\":30,\"image_url\":\"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":44,\"name\":\"Nothing Phone 2\",\"description\":\"透明設計手機，Glyph介面\",\"price\":5499,\"category\":\"手機\",\"stock\":52,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":45,\"name\":\"Fujifilm X-T5\",\"description\":\"APS-C無反相機，復古設計\",\"price\":12999,\"category\":\"相機\",\"stock\":28,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":46,\"name\":\"Huawei Watch GT 4\",\"description\":\"華為智慧手錶，運動追蹤\",\"price\":2699,\"category\":\"手錶\",\"stock\":36,\"image_url\":\"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":47,\"name\":\"HyperX Cloud Alpha\",\"description\":\"遊戲耳機，雙音腔設計\",\"price\":899,\"category\":\"配件\",\"stock\":85,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":48,\"name\":\"Philips OLED 807\",\"description\":\"OLED電視，Ambilight技術\",\"price\":15999,\"category\":\"電視\",\"stock\":10,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":49,\"name\":\"Shure SE846\",\"description\":\"入耳式耳機，四單體設計\",\"price\":8999,\"category\":\"耳機\",\"stock\":25,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":50,\"name\":\"Gigabyte Aero 16\",\"description\":\"創作者筆記型電腦，OLED螢幕\",\"price\":17999,\"category\":\"電腦\",\"stock\":18,\"image_url\":\"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":51,\"name\":\"OPPO Find X7\",\"description\":\"OPPO旗艦手機，哈蘇相機\",\"price\":6799,\"category\":\"手機\",\"stock\":40,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":52,\"name\":\"Sony A7 IV\",\"description\":\"全片幅無反相機，33MP感測器\",\"price\":22999,\"category\":\"相機\",\"stock\":15,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":53,\"name\":\"Suunto 9 Peak\",\"description\":\"戶外運動手錶，GPS導航\",\"price\":3499,\"category\":\"手錶\",\"stock\":30,\"image_url\":\"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":54,\"name\":\"Logitech G Pro X\",\"description\":\"遊戲耳機，Blue麥克風\",\"price\":1199,\"category\":\"配件\",\"stock\":60,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":55,\"name\":\"Panasonic LZ2000\",\"description\":\"OLED電視，專業調色\",\"price\":24999,\"category\":\"電視\",\"stock\":6,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":56,\"name\":\"AKG K712 Pro\",\"description\":\"開放式耳機，奧地利製造\",\"price\":2799,\"category\":\"耳機\",\"stock\":28,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":57,\"name\":\"Razer Blade 15\",\"description\":\"遊戲筆記型電腦，鋁合金機身\",\"price\":19999,\"category\":\"電腦\",\"stock\":12,\"image_url\":\"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":58,\"name\":\"Vivo X100 Pro\",\"description\":\"Vivo旗艦手機，蔡司鏡頭\",\"price\":7299,\"category\":\"手機\",\"stock\":35,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":59,\"name\":\"Leica Q3\",\"description\":\"全片幅固定鏡頭相機\",\"price\":39999,\"category\":\"相機\",\"stock\":8,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":60,\"name\":\"Polar Vantage V3\",\"description\":\"專業運動手錶，心率變異\",\"price\":4299,\"category\":\"手錶\",\"stock\":22,\"image_url\":\"https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":61,\"name\":\"Finalmouse Starlight\",\"description\":\"超輕量遊戲滑鼠，鎂合金\",\"price\":1899,\"category\":\"配件\",\"stock\":45,\"image_url\":\"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":62,\"name\":\"Samsung The Frame\",\"description\":\"藝術電視，可變身畫框\",\"price\":18999,\"category\":\"電視\",\"stock\":9,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":63,\"name\":\"Focal Utopia\",\"description\":\"開放式耳機，旗艦音質\",\"price\":29999,\"category\":\"耳機\",\"stock\":12,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":64,\"name\":\"Alienware x17\",\"description\":\"頂級遊戲筆記型電腦\",\"price\":29999,\"category\":\"電腦\",\"stock\":10,\"image_url\":\"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":65,\"name\":\"Honor Magic6 Pro\",\"description\":\"榮耀旗艦手機，星環設計\",\"price\":6599,\"category\":\"手機\",\"stock\":38,\"image_url\":\"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":66,\"name\":\"Hasselblad X2D\",\"description\":\"中片幅無反相機，1億像素\",\"price\":89999,\"category\":\"相機\",\"stock\":5,\"image_url\":\"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":67,\"name\":\"Garmin Epix Pro\",\"description\":\"高階智慧手錶，AMOLED螢幕\",\"price\":5299,\"category\":\"手錶\",\"stock\":20,\"image_url\":\"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":68,\"name\":\"Wooting 60HE\",\"description\":\"類比機械鍵盤，磁軸技術\",\"price\":2199,\"category\":\"配件\",\"stock\":35,\"image_url\":\"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":69,\"name\":\"LG G3 OLED\",\"description\":\"超薄OLED電視，Gallery設計\",\"price\":29999,\"category\":\"電視\",\"stock\":7,\"image_url\":\"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"},{\"id\":70,\"name\":\"Audeze LCD-5\",\"description\":\"平面磁單體耳機，旗艦級\",\"price\":39999,\"category\":\"耳機\",\"stock\":8,\"image_url\":\"https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop\",\"created_at\":\"2025-08-29T07:14:44.000Z\",\"updated_at\":\"2025-08-29T07:14:44.000Z\"}]"));}),
"[project]/app/activity/sidebar/_components/product-search.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_data/products.json (json)");
'use client';
;
;
;
// debounce function to set the search value
function useDebounce(cb, delay) {
    const timeoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    return function(...args) {
        if (timeoutId.current) {
            // This check is not strictly necessary
            clearTimeout(timeoutId.current);
        }
        timeoutId.current = setTimeout(()=>cb(...args), delay);
    };
}
function ProductSearch() {
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const firstRenderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // get products by search
    async function getProductsBySearch(search) {
        console.log('getProductsBySearch: ', search);
        // Add a fake delay to make waiting noticeable.
        await new Promise((resolve)=>{
            setTimeout(resolve, 3000);
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_data$2f$products$2e$json__$28$json$29$__["default"].filter((product)=>product.name.includes(search) || product.description.includes(search) || product.category.includes(search));
    }
    // debounce function to set the search value
    const debouncedChange = useDebounce((inputValue)=>{
        console.log('Debounced:', inputValue);
        setSearch(inputValue);
    }, 1000);
    // handle change event
    const handleChange = (e)=>{
        // set the input value
        setInputValue(e.target.value);
        // call the debounced function to set the search value
        debouncedChange(e.target.value);
    };
    // 追踪元件掛載狀態
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (search === '') {
            firstRenderRef.current = true;
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('firstRenderRef.current: ', firstRenderRef.current);
        console.log('Effect: search value is changed: ', search);
        const handleSearch = async (term = '')=>{
            setIsLoading(true);
            const products = await getProductsBySearch(term);
            setProducts(products);
            setIsLoading(false);
        };
        // do the first search only once
        if (firstRenderRef.current && products.length === 0) {
            handleSearch();
            firstRenderRef.current = false;
            return;
        }
        // do search if the search is different from the last search
        if (lastSearchRef.current !== search) {
            console.log('message: do search');
            lastSearchRef.current = search;
            handleSearch(search);
        } else {
            console.log('message: do not search');
        }
    }, [
        search,
        products
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search products",
                value: inputValue,
                // disable the input if the search is loading
                // because search is slow for demo purpose, if repeat input the search word will trigger multiple searches
                disabled: isLoading,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "🌀 載入中..."
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                lineNumber: 105,
                columnNumber: 9
            }, this) : products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Category: ",
                                    product.category
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Price: ",
                                    product.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "Stock: ",
                                    product.stock
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                lineNumber: 107,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "沒有找到匹配的產品"
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/product-search.jsx",
                lineNumber: 119,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/activity/sidebar/_components/sidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$product$2d$search$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_components/product-search.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Sidebar() {
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsExpanded(!isExpanded),
                    children: [
                        "Overview",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `indicator ${isExpanded ? 'down' : 'right'}`,
                            children: "▲"
                        }, void 0, false, {
                            fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Section 1"
                        }, void 0, false, {
                            fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Section 2"
                        }, void 0, false, {
                            fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Section 3"
                        }, void 0, false, {
                            fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$product$2d$search$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/activity/sidebar/_components/sidebar.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/app/activity/sidebar/_components/activity-demo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_components/sidebar.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ActivityDemo() {
    const [isShowingSidebar, setIsShowingSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Activity"], {
                mode: isShowingSidebar ? 'visible' : 'hidden',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    marginLeft: isShowingSidebar ? '280px' : '0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsShowingSidebar(!isShowingSidebar),
                        children: "Toggle sidebar"
                    }, void 0, false, {
                        fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Activity: Main content"
                    }, void 0, false, {
                        fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/activity/sidebar/_components/activity-demo.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/activity/sidebar/_components/css-demo.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CssDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_components/sidebar.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function CssDemo() {
    const [isShowingSidebar, setIsShowingSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: isShowingSidebar ? 'block' : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    marginLeft: isShowingSidebar ? '280px' : '0'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsShowingSidebar(!isShowingSidebar),
                        children: "Toggle sidebar"
                    }, void 0, false, {
                        fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "CSS:Main content"
                    }, void 0, false, {
                        fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/activity/sidebar/_components/css-demo.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/activity/sidebar/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$activity$2d$demo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_components/activity-demo.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$css$2d$demo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/activity/sidebar/_components/css-demo.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SidebarPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$activity$2d$demo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/activity/sidebar/page.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$activity$2f$sidebar$2f$_components$2f$css$2d$demo$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/activity/sidebar/page.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__28e27027._.js.map