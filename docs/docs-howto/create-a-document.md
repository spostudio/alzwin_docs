---
sidebar_position: 3
---

# 문서 만들기

문서는 다음을 통해 연결된 **페이지들의 그룹**입니다:

- **사이드바**
- **이전/다음 탐색**
- **버전 관리**

## 첫 번째 문서 만들기

`docs/hello.md`에 마크다운 파일을 생성하세요:

```md title="docs/hello.md"
# 안녕하세요
이것은 제 **첫 번째 Docusaurus 문서**입니다!
```

[http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 를 접속해서 확인하세요

## 사이드바 설정

자동으로 되지만 수동 설정 가능합니다

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

`sidebars.js`로도 설정 가능합니다.

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```

