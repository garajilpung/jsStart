## 데모 URL

[시연](https://funny-brigadeiros-589341.netlify.app) <br>

## 개발 순서

1. 폴더 생성
2. vscode에서 열기
3. github 생성
4. pagekage.json 생성 <br>
   터미널 npm init -y
5. index.html 생성
   필요한 메타 데이터 생성 (! 엔터)

```html
  <link rel="stylesheet" href="./src/main.css">
  <script type="module" defer src="./src/main.js"></script> 추가
```

body 안에
```html
  <div id="root">
  </div>
```

6. .gitignore 파일 생성
  .idea
  .vscode
  .DS_Store
  node_modules
  .parcel-cache

7. src 폴더 생성
   하위 api, components, core, routes, store 폴더 생성

8. scr 폴더 아래 파일 생성
   main.css
   main.js
   App.js

9. parcel 추가
   터미널 npm install parcel -D (개발에서만 사용하기 위해)
  
10. axios 추가
   터미널 npm install axios

11. github 연결
   터미널  git init
         git remote add origin "원격저장소 https"
         git add .
         git status
         git commit -m "커밋 내용"
         git push origin push

