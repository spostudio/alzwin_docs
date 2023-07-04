---
sidebar_position: 7
---

# 배포하기

docusaurus는 html, css, js로 구성된 정적 사이트를 생성합니다

## 배포 버전을 빌드해서 확인하기

```bash
npm run build
```

`build` 폴더에 빌드 결과물이 생성됩니다.

로컬에서 빌드 결과물을 확인하려면 다음 명령을 실행하세요.
```bash
npm run serve
```

`build` 폴더의 내용물이 [http://localhost:3000/](http://localhost:3000/) 주소로 접근 가능합니다.


## 실제로 배포하기

```bash
GIT_USER=your_github_account npm run deploy 
```
을 실행하면 `gh-pages` 브랜치에 빌드 결과물이 업로드됩니다.
[https://docs.alzwin.com](https://docs.alzwin.com) 주소로 접근 가능합니다.

## 다른 빌드 방법 
[Deployment Guide](https://docusaurus.io/docs/deployment)
