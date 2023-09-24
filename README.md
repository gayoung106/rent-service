# rent-service

## Stack

React
TypeScript
Next JS

## Demo

https://gazero-rent-car.vercel.app/

## Settings

```
npx create-next-app@latest ./
```

![iShot_2023-09-20_22 22 02](https://github.com/gayoung106/rent-service/assets/98731537/52c8d3fb-9932-4c34-ac16-b9b6a6cb1881)

## Getting Started

run the development server:

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000) with your browser to see the result.

start editing the page: `app/page.tsx`.

## Library

https://headlessui.com/

```
npm install @headlessui/react
```

## API

### 1. Cars by API-Ninjas

https://rapidapi.com/apininjas/api/cars-by-api-ninjas
![iShot_2023-09-24_11 08 45](https://github.com/gayoung106/rent-service/assets/98731537/09f38e0e-c62e-426e-99c2-ec8f95b84626)

### 2. Imagin studio

https://www.imagin.studio/

## 화면구성

### 1. 네비바

![iShot_2023-09-24_11 37 41](https://github.com/gayoung106/rent-service/assets/98731537/1cf39c23-4d2f-455e-89ff-b5667e263c34)

### 2. 메인

![iShot_2023-09-24_11 37 52](https://github.com/gayoung106/rent-service/assets/98731537/50fd1094-d400-4bc7-a485-176e8293c9f9)

### 3. 검색창

![iShot_2023-09-24_11 38 03](https://github.com/gayoung106/rent-service/assets/98731537/659b3146-3e00-4303-96ae-464b2498a270)

### 4. 검색컨텐츠

![iShot_2023-09-24_11 38 13](https://github.com/gayoung106/rent-service/assets/98731537/624f9310-8c9a-4b2d-a64a-a51e9454c0e3)

#### 4-1. 카드섹션

![iShot_2023-09-24_11 38 59](https://github.com/gayoung106/rent-service/assets/98731537/b2333d23-3bde-42cc-bc1f-ee5ddb5a3328)
![iShot_2023-09-24_11 39 09](https://github.com/gayoung106/rent-service/assets/98731537/6b9c9165-b0e2-4408-9d65-876b99937dbd)

#### 4-2. 상세정보 모달

![iShot_2023-09-24_11 39 33](https://github.com/gayoung106/rent-service/assets/98731537/aefa5331-f4aa-423f-b5d5-d539d2524617)

### 5. 푸터

![iShot_2023-09-24_11 38 27](https://github.com/gayoung106/rent-service/assets/98731537/b71f4e87-393f-46ff-93f3-92b95b4ba77b)

## 주요기능

### 1. 버튼 스크롤 이벤트

![iShot_2023-09-24_11 14 38](https://github.com/gayoung106/rent-service/assets/98731537/65201a8a-db0a-448b-93ab-e915c7c1a8d9)

### 2. 목업 데이터 + api 자동차 정보 데이터 + api 자동차 이미지 데이터 검색 기능

![iShot_2023-09-24_11 30 24](https://github.com/gayoung106/rent-service/assets/98731537/456525c2-3e0d-440a-86fb-b46af66ec072)

#### 목업 데이터 정보 및 자동차 이미지 데이터(api)

- manufacturers(자동차 브랜드)
- yearsOfProduction(출시연도)
- fuels(연료)

#### 자동차 정보 데이터(api)

- manufacturer
- year
- fuel
- limit
- model

#### 자동차 이미지 데이터(api)

- make
- year
- model

### 3. 자동차 상세정보 보기

#### 자동차 정보 데이터(api)

![iShot_2023-09-24_11 20 09](https://github.com/gayoung106/rent-service/assets/98731537/7c01b912-c684-40f1-abcb-67c2dc32653a)

- api로 받아온 정보들이 상세페이지에 노출
  ![iShot_2023-09-24_11 33 34](https://github.com/gayoung106/rent-service/assets/98731537/4505fa04-23f8-4bbd-ad3d-d9e6bf49a1b4)

### 4. 무한스크롤(더보기)

![iShot_2023-09-24_11 35 20](https://github.com/gayoung106/rent-service/assets/98731537/faebd76d-59f6-4858-8cc8-48e3c4f2f8ea)
