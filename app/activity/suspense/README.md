# Activity 和 Suspense 組合使用指南

## 概述

`Activity` 和 `Suspense` 是 React 19 中用於控制元件可見性和處理異步載入的兩個重要元件。它們可以組合使用，但不同的組合方式會產生不同的效果。

## 兩種組合方式

### 方式 1：Suspense 包裹 Activity（React 官方推薦）

```jsx
<Suspense fallback={<Loading />}>
  <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
    <Posts />
  </Activity>
  <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
    <Products />
  </Activity>
</Suspense>
```

**特點：**

- ✅ 統一的載入狀態：所有 Activity 共享同一個 Suspense 邊界
- ✅ 更好的資料緩存：React 可以在後台預載入其他 tab 的資料
- ✅ 一致的用戶體驗：切換 tab 時顯示統一的 loading 狀態
- ✅ 狀態保持：Activity 的 `mode="hidden"` 保持元件狀態但不渲染

**適用場景：**

- Tab 切換場景（React 官方範例）
- 需要統一載入體驗的多個內容區塊
- 需要資料預載入和緩存的場景

### 方式 2：Activity 包裹 Suspense

```jsx
<Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
  <Suspense fallback={<PostsLoading />}>
    <Posts />
  </Suspense>
</Activity>
<Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
  <Suspense fallback={<ProductsLoading />}>
    <Products />
  </Suspense>
</Activity>
```

**特點：**

- ✅ 獨立的載入狀態：每個 Activity 有自己獨立的 Suspense 邊界
- ✅ 差異化的載入樣式：可以為每個 tab 顯示不同的載入效果
- ✅ 獨立的狀態管理：每個 tab 的載入狀態互不影響

**適用場景：**

- 需要為不同內容顯示不同載入樣式的場景
- 需要獨立管理每個內容區塊載入狀態的場景

## 核心差異對比

| 特性               | Suspense 包裹 Activity   | Activity 包裹 Suspense   |
| ------------------ | ------------------------ | ------------------------ |
| **載入狀態位置**   | 在 Activity 外部（統一） | 在 Activity 內部（獨立） |
| **載入體驗**       | 統一的 loading 狀態      | 差異化的 loading 狀態    |
| **資料預載入**     | ✅ 支援（共享邊界）      | ❌ 不支援（獨立邊界）    |
| **狀態隔離**       | 共享 Suspense 邊界       | 每個 Activity 獨立       |
| **適用場景**       | Tab 切換、統一體驗       | 差異化載入、獨立管理     |
| **React 官方推薦** | ✅ 是                    | ❌ 否                    |

## React 官方範例

React 官方文件中的 Tab 範例使用了 **Suspense 包裹 Activity** 的方式：

```jsx
'use client'

import { useState, Activity, Suspense } from 'react'

export default function TabContainer() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <>
      <TabButton onClick={() => setActiveTab('home')}>Home</TabButton>
      <TabButton onClick={() => setActiveTab('posts')}>Posts</TabButton>
      <TabButton onClick={() => setActiveTab('products')}>Products</TabButton>

      {/* 所有 Activity 共享同一個 Suspense 邊界 */}
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        <Activity mode={activeTab === 'home' ? 'visible' : 'hidden'}>
          <Home />
        </Activity>
        <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
          <Posts />
        </Activity>
        <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
          <Products />
        </Activity>
      </Suspense>
    </>
  )
}
```

### 為什麼 React 官方推薦這種方式？

1. **統一的載入體驗**
   - 所有 tab 共享同一個 Suspense 邊界
   - 切換 tab 時顯示統一的 loading 狀態
   - 用戶體驗更一致

2. **資料預載入和緩存**
   - 雖然只有一個 tab visible，但所有 Activity 都在同一個 Suspense 邊界內
   - React 可以在後台預載入其他 tab 的資料
   - 使用 `use()` hook 時，資料會被緩存，切換時更快

#### 資料預載入的優點

##### 1. 提升用戶體驗（User Experience）

- ✅ **即時切換**：用戶切換 tab 時，資料已經載入完成，無需等待
- ✅ **流暢互動**：減少載入時間，提供更流暢的互動體驗
- ✅ **減少等待感**：用戶不會看到載入狀態，感覺應用更快

**範例：**

```jsx
// 用戶在 "Posts" tab，React 在後台預載入 "Products" 的資料
// 當用戶點擊 "Products" tab 時，資料已經準備好，立即顯示
<Suspense fallback={<Loading />}>
  <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
    <Posts />
  </Activity>
  <Activity mode={activeTab === 'products' ? 'visible' : 'hidden'}>
    <Products /> {/* 資料已在後台預載入 */}
  </Activity>
</Suspense>
```

##### 2. 提升載入速度（Loading Speed）

- ✅ **並行載入**：多個 tab 的資料可以同時載入，而不是順序載入
- ✅ **利用空閒時間**：在用戶查看當前 tab 時，利用網路和 CPU 的空閒時間載入其他資料
- ✅ **減少總載入時間**：用戶切換時不需要重新發起請求

**對比：**

| 方式         | 切換 tab 時的載入時間  | 總載入時間            |
| ------------ | ---------------------- | --------------------- |
| **有預載入** | 0ms（資料已準備好）    | 所有 tab 資料並行載入 |
| **無預載入** | 500-2000ms（需要等待） | 每個 tab 順序載入     |

##### 3. 資料緩存（Data Caching）

- ✅ **避免重複請求**：使用 `use()` hook 時，資料會被緩存
- ✅ **減少伺服器負載**：相同的資料不會重複請求
- ✅ **節省頻寬**：已載入的資料可以重複使用

**範例：**

```jsx
// 第一次切換到 "Products" tab：發起請求
// 切換到其他 tab 再回來：使用緩存的資料，無需重新請求
const products = use(fetchData('/products')) // 資料被緩存
```

##### 4. SEO 考量（Search Engine Optimization）

- ⚠️ **注意**：預載入主要針對客戶端渲染（CSR）和互動式應用
- ✅ **服務端渲染（SSR）**：在 SSR 場景中，所有內容在首次載入時就已經渲染，SEO 不受影響
- ✅ **靜態生成（SSG）**：在 SSG 場景中，內容在構建時生成，SEO 不受影響
- ⚠️ **客戶端渲染**：純 CSR 應用中，預載入不會直接影響 SEO（因為搜尋引擎可能無法執行 JavaScript）

**重要提醒：**

- 預載入主要提升**用戶體驗**和**載入速度**
- 對於 SEO，更重要的是使用 **SSR** 或 **SSG**，而不是依賴客戶端預載入

##### 5. 效能優化（Performance Optimization）

- ✅ **減少網路請求次數**：預載入可以減少用戶切換時的網路請求
- ✅ **更好的資源利用**：充分利用網路和 CPU 的空閒時間
- ✅ **降低延遲感知**：用戶感知的延遲更低

**實際效果：**

```jsx
// 場景：用戶瀏覽一個有 5 個 tab 的應用

// 無預載入：
// 用戶點擊 tab 1 → 等待 1s → 顯示
// 用戶點擊 tab 2 → 等待 1.5s → 顯示
// 用戶點擊 tab 3 → 等待 2s → 顯示
// 總等待時間：4.5s

// 有預載入：
// 用戶點擊 tab 1 → 立即顯示（已預載入）
// 用戶點擊 tab 2 → 立即顯示（已預載入）
// 用戶點擊 tab 3 → 立即顯示（已預載入）
// 總等待時間：0s（在後台並行載入）
```

**權衡考量：**

雖然預載入有很多優點，但也需要注意：

- ⚠️ **頻寬消耗**：預載入會消耗更多頻寬
- ⚠️ **伺服器負載**：可能增加伺服器負載
- ⚠️ **記憶體使用**：緩存的資料會佔用記憶體

**建議：**

- ✅ 對於用戶**很可能會查看**的內容，使用預載入
- ✅ 對於**不確定是否會查看**的內容，考慮延遲載入
- ✅ 監控頻寬和伺服器負載，根據實際情況調整策略

**3. 狀態保持**

- Activity 的 `mode="hidden"` 保持元件狀態但不渲染
- 切換回來時無需重新載入資料（如果已緩存）

## 實際應用場景

### 場景 A：Tab 切換（推薦：Suspense 包裹 Activity）

```jsx
function TabContainer() {
  const [activeTab, setActiveTab] = useState('posts')

  return (
    <>
      <button onClick={() => setActiveTab('posts')}>Posts</button>
      <button onClick={() => setActiveTab('comments')}>Comments</button>

      {/* ✅ 推薦：統一的載入體驗 */}
      <Suspense fallback={<Loading />}>
        <Activity mode={activeTab === 'posts' ? 'visible' : 'hidden'}>
          <PostsTab />
        </Activity>
        <Activity mode={activeTab === 'comments' ? 'visible' : 'hidden'}>
          <CommentsTab />
        </Activity>
      </Suspense>
    </>
  )
}
```

### 場景 B：條件顯示異步內容（兩種方式都可以）

**使用 Suspense 包裹 Activity：**

```jsx
function ConditionalContent({ showContent }) {
  return (
    <Suspense fallback={<Loading />}>
      <Activity mode={showContent ? 'visible' : 'hidden'}>
        <DataFetchingComponent />
      </Activity>
    </Suspense>
  )
}
```

**使用 Activity 包裹 Suspense：**

```jsx
function ConditionalContent({ showContent }) {
  return (
    <Activity mode={showContent ? 'visible' : 'hidden'}>
      <Suspense fallback={<Loading />}>
        <DataFetchingComponent />
      </Suspense>
    </Activity>
  )
}
```

### 場景 C：差異化載入樣式（使用 Activity 包裹 Suspense）

```jsx
function DifferentLoadingStyles() {
  return (
    <>
      <Activity mode={showPosts ? 'visible' : 'hidden'}>
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
      </Activity>
      <Activity mode={showVideos ? 'visible' : 'hidden'}>
        <Suspense fallback={<VideoSkeleton />}>
          <Videos />
        </Suspense>
      </Activity>
    </>
  )
}
```

## 關鍵要點

### Activity mode="hidden" 時的行為

當 Activity 的 `mode="hidden"` 時，無論是 Suspense 包裹 Activity 還是 Activity 包裹 Suspense，Activity 內部的元件行為都相同：

- ✅ 元件狀態保持（不卸載）
- ✅ DOM 不渲染
- ✅ 資料可能繼續獲取（取決於實現）

### Activity mode="visible" 時的載入狀態

當 Activity 的 `mode="visible"` 時，兩種方式的載入狀態處理不同：

**Suspense 包裹 Activity：**

- 當 Activity 變為 visible 時，如果內部元件資料未就緒，會顯示 Suspense 的 fallback
- 載入狀態在 Activity 外部（統一）

**Activity 包裹 Suspense：**

- 當 Activity 變為 visible 時，如果內部元件資料未就緒，會顯示 Suspense 的 fallback
- 載入狀態在 Activity 內部（獨立）

### 效能考量

- **Suspense 包裹 Activity**：支援資料預載入，切換更快
- **Activity 包裹 Suspense**：每個邊界獨立，無法預載入

#### 為什麼 Activity 包裹 Suspense 無法預載入？

**Suspense 包裹 Activity（可以預載入）：**

```jsx
<Suspense fallback={<Loading />}>
  <Activity mode="visible">
    <Posts /> {/* 正在顯示 */}
  </Activity>
  <Activity mode="hidden">
    <Products /> {/* 隱藏中，但仍在 Suspense 邊界內 */}
  </Activity>
</Suspense>
```

- 所有 Activity 都在同一個 Suspense 邊界內
- Suspense 邊界在渲染樹中，可以"看到"所有 Activity（包括 hidden 的）
- React 可以檢測到 hidden Activity 內的異步操作（如 `use()` hook）
- 即使 Activity 是 hidden，React 仍可以在後台預載入其資料

**Activity 包裹 Suspense（無法預載入）：**

```jsx
<Activity mode="visible">
  <Suspense fallback={<PostsLoading />}>
    <Posts /> {/* 正在顯示 */}
  </Suspense>
</Activity>
<Activity mode="hidden">
  <Suspense fallback={<ProductsLoading />}>
    <Products /> {/* 隱藏中，整個 Activity 不在渲染樹中 */}
  </Suspense>
</Activity>
```

- 每個 Activity 都有自己的 Suspense 邊界
- 當 Activity `mode="hidden"` 時，整個 Activity（包括內部的 Suspense）**不在渲染樹中**
- Suspense 只能處理它在渲染樹中"看到"的異步操作
- 由於 hidden Activity 不在渲染樹中，其內部的 Suspense 也無法被 React 檢測到
- **因此無法預載入 hidden Activity 內的資料**

**關鍵點：**

- ✅ 當 Activity `mode="hidden"` 時，**在 Activity 內部的 Suspense 無法預載入**
- ✅ 只有當 Activity `mode="visible"` 時，內部的 Suspense 才會被 React 檢測到並開始載入資料
- ✅ 這就是為什麼 Activity 包裹 Suspense 無法預載入的根本原因

**關鍵差異：**

| 方式                   | Suspense 邊界位置 | Hidden Activity 是否在渲染樹中      | 能否預載入 |
| ---------------------- | ----------------- | ----------------------------------- | ---------- |
| Suspense 包裹 Activity | Activity 外部     | ✅ 是（在 Suspense 邊界內）         | ✅ 可以    |
| Activity 包裹 Suspense | Activity 內部     | ❌ 否（整個 Activity 不在渲染樹中） | ❌ 不可以  |

#### CSS `display: none` vs Activity `mode="hidden"`

**使用 CSS `display: none`（可以預載入）：**

```jsx
<Suspense fallback={<Loading />}>
  <div style={{ display: showPosts ? 'block' : 'none' }}>
    <Suspense fallback={<PostsLoading />}>
      <Posts />
    </Suspense>
  </div>
  <div style={{ display: showProducts ? 'block' : 'none' }}>
    <Suspense fallback={<ProductsLoading />}>
      <Products />
    </Suspense>
  </div>
</Suspense>
```

- ✅ CSS `display: none` 只是視覺上隱藏元素，**元素仍在 DOM 和渲染樹中**
- ✅ Suspense 邊界仍在渲染樹中，可以"看到"所有元素（包括 `display: none` 的）
- ✅ React 可以檢測到 `display: none` 元素內的異步操作
- ✅ **因此可以預載入資料**，即使元素被 CSS 隱藏

**對比 Activity `mode="hidden"`：**

| 方式                     | 元素是否在渲染樹中    | 視覺效果 | 能否預載入           |
| ------------------------ | --------------------- | -------- | -------------------- |
| CSS `display: none`      | ✅ 是（在 DOM 中）    | 隱藏     | ✅ 可以              |
| Activity `mode="hidden"` | ❌ 否（不在渲染樹中） | 隱藏     | 取決於 Suspense 位置 |

**重要差異：**

- **CSS `display: none`**：元素在渲染樹中 → Suspense 可以預載入
- **Activity `mode="hidden"`**：元素不在渲染樹中 → 只有當 Suspense 在 Activity 外部時才能預載入

## 建議

### ✅ 推薦使用：Suspense 包裹 Activity

適用於：

- Tab 切換場景
- 需要統一載入體驗
- 需要資料預載入和緩存
- 符合 React 官方最佳實踐

### ⚠️ 特殊場景：Activity 包裹 Suspense

適用於：

- 需要為不同內容顯示不同載入樣式
- 需要獨立管理每個內容區塊的載入狀態
- 不需要資料預載入的場景

#### 實際使用場景範例

##### 場景 1：儀表板（Dashboard）中的不同卡片

```jsx
function Dashboard() {
  const [activeCard, setActiveCard] = useState('stats')

  return (
    <div className="dashboard">
      {/* 每個卡片需要不同的骨架屏樣式 */}
      <Activity mode={activeCard === 'stats' ? 'visible' : 'hidden'}>
        <Suspense fallback={<StatsSkeleton />}>
          <StatsCard /> {/* 顯示統計數據的骨架屏 */}
        </Suspense>
      </Activity>

      <Activity mode={activeCard === 'chart' ? 'visible' : 'hidden'}>
        <Suspense fallback={<ChartSkeleton />}>
          <ChartCard /> {/* 顯示圖表的骨架屏 */}
        </Suspense>
      </Activity>

      <Activity mode={activeCard === 'table' ? 'visible' : 'hidden'}>
        <Suspense fallback={<TableSkeleton />}>
          <TableCard /> {/* 顯示表格的骨架屏 */}
        </Suspense>
      </Activity>
    </div>
  )
}
```

**為什麼使用 Activity 包裹 Suspense？**

- 每個卡片類型需要不同的骨架屏樣式（統計卡片、圖表卡片、表格卡片）
- 不需要預載入所有卡片（用戶可能只看其中一個）
- 每個卡片的載入狀態獨立管理

##### 場景 2：模態框（Modal）中的多步驟表單

```jsx
function MultiStepModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)

  if (!isOpen) return null

  return (
    <Modal onClose={onClose}>
      {/* 每個步驟需要不同的載入樣式 */}
      <Activity mode={step === 1 ? 'visible' : 'hidden'}>
        <Suspense fallback={<FormStep1Skeleton />}>
          <FormStep1 onNext={() => setStep(2)} />
        </Suspense>
      </Activity>

      <Activity mode={step === 2 ? 'visible' : 'hidden'}>
        <Suspense fallback={<FormStep2Skeleton />}>
          <FormStep2 onNext={() => setStep(3)} />
        </Suspense>
      </Activity>

      <Activity mode={step === 3 ? 'visible' : 'hidden'}>
        <Suspense fallback={<FormStep3Skeleton />}>
          <FormStep3 onSubmit={handleSubmit} />
        </Suspense>
      </Activity>
    </Modal>
  )
}
```

**為什麼使用 Activity 包裹 Suspense？**

- 每個表單步驟有不同的欄位和載入樣式
- 用戶按順序填寫，不需要預載入後續步驟
- 保持表單狀態，用戶可以返回上一步

##### 場景 3：側邊欄中的不同面板

```jsx
function Sidebar({ activePanel }) {
  return (
    <aside className="sidebar">
      {/* 每個面板需要不同的載入樣式 */}
      <Activity mode={activePanel === 'notifications' ? 'visible' : 'hidden'}>
        <Suspense fallback={<NotificationListSkeleton />}>
          <NotificationList /> {/* 通知列表的骨架屏 */}
        </Suspense>
      </Activity>

      <Activity mode={activePanel === 'settings' ? 'visible' : 'hidden'}>
        <Suspense fallback={<SettingsSkeleton />}>
          <SettingsPanel /> {/* 設定的骨架屏 */}
        </Suspense>
      </Activity>

      <Activity mode={activePanel === 'history' ? 'visible' : 'hidden'}>
        <Suspense fallback={<HistorySkeleton />}>
          <HistoryPanel /> {/* 歷史記錄的骨架屏 */}
        </Suspense>
      </Activity>
    </aside>
  )
}
```

**為什麼使用 Activity 包裹 Suspense？**

- 側邊欄空間有限，不需要同時載入所有面板
- 每個面板有不同的資料結構和載入樣式
- 用戶切換面板時保持之前的面板狀態

##### 場景 4：內容類型差異很大的場景

```jsx
function ContentViewer({ contentType }) {
  return (
    <>
      {/* 文章和影片需要完全不同的載入樣式 */}
      <Activity mode={contentType === 'article' ? 'visible' : 'hidden'}>
        <Suspense fallback={<ArticleSkeleton />}>
          <ArticleViewer /> {/* 文章：文字、圖片 */}
        </Suspense>
      </Activity>

      <Activity mode={contentType === 'video' ? 'visible' : 'hidden'}>
        <Suspense fallback={<VideoPlayerSkeleton />}>
          <VideoPlayer /> {/* 影片：播放器、字幕 */}
        </Suspense>
      </Activity>

      <Activity mode={contentType === 'gallery' ? 'visible' : 'hidden'}>
        <Suspense fallback={<GallerySkeleton />}>
          <GalleryViewer /> {/* 相冊：網格佈局 */}
        </Suspense>
      </Activity>
    </>
  )
}
```

**為什麼使用 Activity 包裹 Suspense？**

- 不同內容類型（文章、影片、相冊）需要完全不同的骨架屏
- 不需要預載入所有類型的內容（用戶只會看一種）
- 每種類型的載入體驗需要獨立優化

##### 場景 5：條件渲染的獨立模組

```jsx
function AdminPanel({ userRole }) {
  return (
    <>
      {/* 每個模組只在特定條件下顯示，且需要不同的載入樣式 */}
      {userRole === 'admin' && (
        <Activity mode="visible">
          <Suspense fallback={<AdminDashboardSkeleton />}>
            <AdminDashboard />
          </Suspense>
        </Activity>
      )}

      {userRole === 'moderator' && (
        <Activity mode="visible">
          <Suspense fallback={<ModeratorPanelSkeleton />}>
            <ModeratorPanel />
          </Suspense>
        </Activity>
      )}

      {userRole === 'user' && (
        <Activity mode="visible">
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile />
          </Suspense>
        </Activity>
      )}
    </>
  )
}
```

**為什麼使用 Activity 包裹 Suspense？**

- 不同角色看到不同的內容，不需要預載入其他角色的資料
- 每個模組有獨立的載入樣式和狀態管理
- 安全性考慮：不應該載入用戶無權訪問的資料

#### 總結：何時選擇 Activity 包裹 Suspense？

選擇 Activity 包裹 Suspense 的關鍵指標：

1. ✅ **需要差異化的載入樣式**：不同內容需要不同的骨架屏或載入動畫
2. ✅ **不需要預載入**：用戶通常只會查看其中一個內容區塊
3. ✅ **獨立狀態管理**：每個區塊的載入狀態需要獨立處理
4. ✅ **內容類型差異大**：不同區塊的資料結構和 UI 完全不同
5. ✅ **條件渲染**：某些內容只在特定條件下才需要載入

## 注意事項

1. **避免頻繁切換 Suspense 的 key**：可能導致狀態丟失
2. **資料獲取時機**：如果需要在隱藏時也保持資料獲取，考慮在 Activity 外層處理
3. **立即卸載場景**：對於需要立即卸載的場景，使用條件渲染而不是 Activity

## 參考資料

- [React Activity 官方文件](https://react.dev/reference/react/Activity)
- [React Suspense 官方文件](https://react.dev/reference/react/Suspense)
- 本專案的範例程式碼：`app/activity/suspense/a-in-s/`
