
# Kakao Link Guide

카카오링크 기능 중 Custom을 제외한 나머지를 사용할 수 있습니다.

사용방법은 기존의 카카오링크와 유사하게 작성되었습니다.

## Guide Index
- [`피드 템플릿 보내기`](Link.md#피드 템플릿 보내기)
- 리스트 템플릿 보내기
- 위치 템플릿 보내기
- 커머스 템플릿 보내기
- 텍스트 템플릿 보내기
- 스크랩 템플릿 보내기


## 사용방법

### `피드 템플릿 보내기`

```
1. 이미지 영역: 최대 1장, 최소 200px * 200px이상, 2MB이하
2. 제목/설명 영역: 최대 4줄 표시 (제목, 설명 각각 2줄 표시)
3. 소셜 영역: 최대 3개 표시 (순서: 좋아요 > 댓글 > 공유 > 조회 > 구독)
4. 버튼 영역: 최대 2개 표시, 버튼명 8자 이하 권장
```

<img alt="screenshot of FeedTemplate" src="https://developers.kakao.com/assets/images/dashboard/default_feed_spec.png" />

```js
import KakaoSDK from 'actbase-native-kakaosdk';

...

KakaoSDK.link.sendFeed({
  content: {
    title: '디저트 사진',
    desc: '아메리카노, 빵, 케익',
    imageURL: 'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
    link: {
      webURL: 'https://developers.kakao.com',
      mobileWebURL: 'https://developers.kakao.com',
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
      viewCount: 40,
    },
    buttons: [{
      title: '앱에서 보기',
      webURL: 'https://developers.kakao.com',
      mobileWebURL: 'https://developers.kakao.com',
      androidExecutionParams: 'key1=value1',
      iosExecutionParams: 'key1=value1',
    }],
  },
});
```

--------------------
|이름|설명|타입|필수|
--------------------
|이름|설명|타입|필수|
|이름|설명|타입|필수|
--------------------
