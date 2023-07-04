---
sidebar_position: 2
---

# 페이지 만들기

`src/pages`에 **마크다운 또는 리액트** 파일을 추가하여 **독립형 페이지**를 만듭니다:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 첫 마크다운 페이지 만들기

`src/pages/my-markdown-page.md`에 파일을 생성합니다

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

[http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) 에서 확인 가능합니다


## 첫 리액트 페이지 만들기

`src/pages/my-react-page.js`에 파일을 생성합니다:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>나의 React 페이지</h1>
      <p>이것은 React 페이지입니다</p>
    </Layout>
  );
}
```
[http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) 에서 확인 가능합니다.
