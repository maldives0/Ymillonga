# 프로젝트명 : ymillonga sns version  
  
  
## URL: https://ymillonga.xyz
  
  
## 작품 소개

 이 프로젝트는 탱고라는 소셜 댄스를 즐기는 사람들이 함께 탱고에 대해 이야기 나눌 수 있는 SNS입니다. React hooks기반으로 Next.js 프레임워크를 사용해 풀스텍으로 만들어본 프로젝트로 Redux, Node, Express, Mysql 등의 기술이 사용되었습니다.  프로젝트를 진행하며 서비스의 처음부터 배포까지 직접 경험해본 것이 프론트엔드 개발자의 직무와 역량에 대한 이해도를 높히는데 큰 도움이 되었습니다. 
  
  
## 작업기간  

2020.11.13 - 2020.12.22
  
  
## 작업 툴  

javascript, react, nodejs, nextjs, expressjs, mysql, webpack
  
  
## 구현기능  

Google/Facebook OAuth를 이용해 login하기, Infinite scrolling, 게시글 작성/수정/삭제, 게시글에 이미지 업로드하기, 좋아요/댓글/리트윗, 해시태그 검색하기, 사용자 프로필 불러오기, 팔로잉한 게시글만 불러오기, 탈퇴하기, SSR, lambda를 이용한 image resizing 등
  
  
## 프로젝트를 통해 배운 점  

* 서비스의 처음부터 배포까지 모두 경험해보고 싶은 욕심에서 시작한 프로젝트였습니다. 리엑트 기본 문법을 공부하는 것부터 시작해 트위터 기능을 가진 sns를 만드는 관련 인강을 보고 클론코딩을 해보며 두 달 정도 준비단계를 거친 뒤 이 프로젝트를 시작하게 되었습니다.  

* 프론트엔드 화면을 디자인할 때 다양한 UI components를 제공하는 antd와 별다른 설정 없이 SSR이 되는 emotion 라이브러리를 선택했습니다. 
 탱고를 상징하는 붉은색으로 antd의 custom theme을 적용하기위해 Next의 Webpack 설정을 바꾸는 작업이 필요했습니다. 이때 @zeit/next-less라는 plugin을 사용하면서 Webpack의 기본 구조를 공부했습니다. Next 서버를 빌드하는 과정에서 antd에서 제공하는 icon이 2MB를 차지하는 문제가 발생해 사용한 아이콘 파일만 가져오도록 tree-shaking 해보았습니다.
 (관련 블로그 글:https://maldives0.github.io/posts/antd_icon-tree_shaking/)  
 
* sns 기능을 위해 필요한 총 27가지의 case를 만들면서 redux와 redux-saga를 만들 때 코드량이 많아지는 문제가 있었습니다. 그래서 변수명을 최대한 기능에 맞게 만들도록 노력했습니다. 이런 문제를 경험한 뒤라서 redux toolkit를 사용하면 코드량을 많이 줄일 수 있다는 반가운 사실을 알게 되어 앞으로의 프로젝트에서는 이를 적용해보기위해 공부해보고 싶은 생각이 큽니다.
 한편 Header의 메뉴탭 변경하기, 닉네임 바꾸기 기능은 빠른 데이터 fetching이 필요한 부분이라고 판단되어 SWR 라이브러리를 사용해보았습니다.    

* express로 백엔드 서버를 만들면서 가장 중점을 둔 부분은 주소와 메서드만 보고 요청의 내용을 쉽게 알아볼 수 있도록 REST API를 지키는 것이었습니다. 그래야 프론트엔드 서버에서 보내는 다양한 요청을 적절히 구분해 필요한 데이터를 보내줄 수 있기 때문입니다. cors, cookie, session, proxy 등 프론트엔드 서버와의 통신을 위한 브라우저 정책과 관련된 에러를 해결하는 것이 풀스텍으로 개발하면서 가장 어려운 부분이었습니다. 특히 google과 facebook API를 이용해 로그인하기 위해 OAuth 2.0 기술을 사용하면서 프론트서버와 백엔드서버 간의 통신이 어떤 식으로 이루어지는지 확인할 수 있었습니다.
(관련 블로그 글: https://maldives0.github.io/posts/google_login, https://maldives0.github.io/posts/cors-error)  

* 마지막으로 AWS에 배포를 할 때 기능에 따라 서버를 나누어 스케일링 대비하는 연습을 위해 EC2 서비스에서 2개의 instance를 할당받아 각각 프론트서버와 백엔드서버로 나누어 배포를 진행했습니다. 백엔드서버에는 mysql 데이터 베이스도 함께 설치한 상태이며 S3 Bucket과 Lambda 서비스를 이용해 이미지 리사이징을 기능을 구현해보기도 했습니다. https 적용을 위해 nginx를 설치해 사용자가 여러 포트에서 요청을 보내도 하나의 포트로 redirect해주며 배포과정을 마무리하게 되었습니다.       
