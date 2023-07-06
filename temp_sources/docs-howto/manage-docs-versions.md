---
sidebar_position: 8
---

# 문서 버전 관리

Docusaurus는 여러 버전의 문서를 관리할 수 있습니다.

## 문서 버전 생성하기

프로젝트의 1.0 버전을 릴리즈합니다.

```bash
npm run docusaurus docs:version 1.0
```

`docs` 폴더가 `versioned_docs/version-1.0`으로 복사되고 `versions.json`이 생성됩니다.

이제 문서는 2개의 버전을 가지고 있습니다.

- `1.0`은 버전 1.0의 문서로 `http://localhost:3000/docs/`에 있습니다.
- `current`는 **아직 릴리즈 되지 안은 버전 **으로 `http://localhost:3000/docs/next/`에 있습니다.

## 버전 드롭다운 추가하기

버전 간에 원활하게 이동하려면 버전 드롭다운을 추가하세요.

`docusaurus.config.js` 파일을 수정하세요:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

문서 버전 드롭다운이 네비게이션 바에 나타납니다.

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 기존 버전 업데이트하기

버전화된 문서를 해당 폴더에서 편집할 수 있습니다.

- `versioned_docs/version-1.0/hello.md`는 `http://localhost:3000/docs/hello`를 업데이트합니다.
- `docs/hello.md`는 `http://localhost:3000/docs/next/hello`를 업데이트합니다.
