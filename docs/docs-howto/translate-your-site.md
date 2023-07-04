---
sidebar_position: 6
---

# 사이트 번역하기

`docs/intro.md`를 프랑스어로 번역해봅시다.

## i18n 설정하기

`docusaurus.config.js`를 수정하여 `fr` 로케일을 지원하도록 합니다.

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 문서 번역하기

`docs/intro.md` 파일을 `i18n/fr` 폴더로 복사합니다.

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 파일을 프랑스어로 번역합니다.

## 번역된 사이트 시작하기

프랑스어로 사이트를 시작합니다.

```bash

```bash
npm run start -- --locale fr
```

번역된 페이지를 [http://localhost:3000/fr/](http://localhost:3000/fr/) 에서 확인할 수 있습니다.


:::caution

개발 환경에서는 한 번에 하나의 로케일만 사용할 수 있습니다.

:::

## 로케일 드롭다운 추가하기

언어 간에 원활하게 이동하려면 로케일 드롭다운을 추가합니다.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

이제 로케일 드롭다운이 네비게이션 바에 나타납니다.

![Locale Dropdown](./img/localeDropdown.png)