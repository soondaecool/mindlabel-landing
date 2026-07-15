export const privacyContent = {
  ko: {
    title: '개인정보 처리방침',
    effectiveDate: '시행일: 2026년 7월 11일 · 최종 수정일: 2026년 7월 11일',
    intro:
      'MindLabel(마인드라벨, 이하 "회사" 또는 "서비스")은 이용자의 개인정보를 소중히 다루며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 대한민국 관계 법령과, 서비스가 제공되는 국가·지역의 개인정보 보호 규정(EU 일반정보보호규정(GDPR), 미국 캘리포니아 소비자 프라이버시법(CCPA/CPRA) 등)을 준수하기 위해 노력합니다. 본 방침은 MindLabel iOS 앱(이하 "앱") 이용과 관련하여 회사가 어떤 개인정보를, 왜, 어떻게 처리하는지를 설명합니다.',
    noticeBox: {
      heading: '한눈에 보는 요약',
      list: [
        '앱은 회원가입 없이 게스트(익명)로 바로 이용을 시작할 수 있습니다. 게스트 상태에서는 이메일·전화번호·실명을 수집하지 않습니다.',
        '마음 날씨·신체반응·감정·트리거 기록은 앱 최초 실행 시 자동 생성되는 익명 계정을 통해 기기와 Supabase 클라우드(대한민국 서울 리전)에 함께 저장됩니다. 통신 구간은 암호화되며, 본인만 접근할 수 있습니다.',
        '이용자가 선택적으로 Apple·Google·Kakao 계정으로 로그인하면, 해당 서비스로부터 이메일·이름·프로필 사진을 제공받아 회원 계정 생성에 사용하며, 여러 기기에서 기록을 이어볼 수 있게 됩니다.',
        '음성 저널(녹음 파일)과 Apple 건강 앱(HealthKit)에서 읽어온 건강 데이터는 이용자의 기기에만 저장되며 서버로 전송되지 않습니다.',
        'AI 월간 마음 편지의 문장 생성에는 OpenAI(미국)의 API가 이용됩니다. 개인을 식별할 수 없는 집계 통계만 전송되며, 기록 원문 문장은 앱 내 별도 동의를 받은 경우에만 짧게 발췌해 전송됩니다. 전송된 데이터는 AI 학습에 사용되지 않습니다.',
        '광고·추적 SDK, 제3자 분석(애널리틱스) 도구를 사용하지 않습니다. 서비스 개선을 위한 자체 이용 기록만 수집하며, 계정 삭제 시 함께 삭제됩니다. 개인정보를 판매하거나 광고 목적으로 제공하지 않습니다.',
        '설정 화면에서 [데이터 영구 삭제]를 실행하면 기기와 서버에 저장된 모든 기록·계정 정보가 즉시, 복구 불가능하게 삭제됩니다.',
      ],
    },
    sections: [
      {
        heading: '제1조 (개인정보 처리자 정보)',
        paragraphs: ['회사는 다음과 같이 개인정보를 처리하고 있습니다.'],
        table: {
          headers: ['항목', '내용'],
          rows: [
            ['서비스명', 'MindLabel (마인드라벨)'],
            ['운영자', 'MindLabel (마인드라벨)'],
            ['사업자등록번호', '813-39-01481'],
            ['주소', '별도의 사업장 주소를 두지 않으며, 아래 문의 이메일을 통해 연락 가능합니다.'],
            ['개인정보 보호책임자', '마인드라벨 대표 · contact@mind-label.com'],
            ['문의 이메일', 'contact@mind-label.com'],
          ],
        },
      },
      {
        heading: '제2조 (수집하는 개인정보의 항목 및 수집 방법)',
        paragraphs: [
          'MindLabel은 별도의 회원가입 없이 게스트(익명) 상태로 서비스를 시작할 수 있습니다. 게스트 상태에서도 마음 기록은 앱 최초 실행 시 자동 생성되는 익명 계정을 통해 기기와 클라우드 서버(Supabase)에 함께 저장됩니다. 이용자가 소셜 로그인을 선택하면 여러 기기에서의 기록 접근·복구가 가능해지며, 아래와 같이 추가 정보가 수집됩니다.',
        ],
        subsections: [
          {
            heading: '2.1 게스트(비회원) 이용 시',
            table: {
              headers: ['항목', '내용', '저장 위치', '수집 방법'],
              rows: [
                ['익명 사용자 ID', 'Supabase 익명 인증으로 발급되는 무작위 식별자(UUID)', '기기 + Supabase', '앱 최초 실행 시 자동 생성'],
                ['마음 기록', '마음 날씨 선택(예: 맑음·흐림·비·바람 등), 신체 반응 선택 항목, 감정 선택 항목, 트리거(감정의 시작점) 메모, 제공된 맞춤 메시지 열람 기록, 기록 소요 시간', '기기 + Supabase', '이용자가 앱 내에서 직접 입력'],
                ['음성 저널', '이용자가 녹음한 음성 파일(m4a)', '기기에만 저장', '이용자가 마이크 권한 허용 후 직접 녹음'],
                ['앱 환경설정', '언어, 알림 시간, 앱 잠금 사용 여부, 온보딩 완료 여부', '기기에만 저장', '이용자 설정'],
                ['서비스 이용 기록', '앱 주요 기능 사용 이벤트(예: 기록 시작·완료, 편지 열람 등 화면·기능 단위 이벤트명), 발생 시각 및 관련 부가 정보 — 기록 본문과는 별개인 이용 통계용 데이터', 'Supabase', '앱 이용 시 자동 수집'],
              ],
            },
          },
          {
            heading: '2.2 Apple · Google · Kakao 계정으로 로그인(선택) 시',
            paragraphs: [
              '소셜 로그인은 선택 사항이며, 로그인하지 않아도 기록 기능은 계속 이용할 수 있습니다. 다만 여러 기기에서의 기록 접근, 기기 분실·변경 시 로그인을 통한 기록 복구 기능은 제한됩니다. 로그인을 선택하면 해당 제공자로부터 다음 정보를 제공받습니다.',
            ],
            table: {
              headers: ['제공자', '제공받는 항목', '비고'],
              rows: [
                ['Apple (Sign in with Apple)', '이메일, 이름(최초 로그인 시에만 제공될 수 있음), Apple이 발급한 고유 식별자', "이용자가 '이메일 비공개' 옵션을 선택하면 Apple이 생성한 중계 이메일만 전달됩니다."],
                ['Google 로그인', '이메일, 이름, 프로필 사진 URL, Google 계정 고유 식별자', '-'],
                ['Kakao 로그인', '카카오계정 이메일(제공 동의 시), 닉네임, 프로필 사진 URL, 카카오 고유 식별자', '카카오 로그인 시 카카오의 개인정보 처리방침이 함께 적용됩니다.'],
              ],
            },
            paragraphs2: [
              '위 정보는 Supabase 인증 시스템(auth.users)과 회사의 회원 프로필 테이블(user_profiles)에 저장되며, 표시 이름·프로필 사진·가입 경로(제공자)·자동 발급된 회원번호(예: #AB12CD34)로 관리됩니다. 게스트로 기록한 데이터는 로그인 시 자동으로 회원 계정에 이전(마이그레이션)됩니다.',
            ],
          },
          {
            heading: '2.3 기기 간 데이터 이전 기능',
            paragraphs: [
              '기기 변경 시 이용자가 직접 요청하는 경우, 일회용 이전 코드가 이용자의 기기에서 생성되고, 마음 기록을 담은 데이터 묶음은 이 코드를 이용해 기기 안에서 암호화(종단 간 암호화)된 뒤 회사 서버에 최대 10분간 임시로 저장됩니다. 서버에는 암호화된 묶음과 코드의 일방향 해시만 저장되며, 코드 자체는 서버로 전송되지 않으므로 회사는 묶음의 내용을 열람할 수 없습니다. 코드는 1회만 사용할 수 있고, 사용되거나 유효기간(10분)이 지나면 자동으로 만료·삭제됩니다.',
            ],
          },
          {
            heading: '2.4 Apple 건강 앱(HealthKit) 연동(선택)',
            paragraphs: [
              '이용자가 iOS 건강 앱 연동을 허용한 경우, 앱은 아래 항목을 읽기 전용으로 가져옵니다. 가져온 건강 데이터는 이용자의 기기에만 저장되며, 회사 서버를 포함한 어떠한 외부 서버로도 전송되지 않습니다. 최초 연동 시 최대 지난 180일 치를 가져오고, 이후에는 최근 35일 범위에서 주기적으로 동기화합니다.',
            ],
            list: [
              '걸음 수(Step Count)',
              '수면 분석(Sleep Analysis)',
              '운동 기록(Workouts)',
              '안정 시 심박수(Resting Heart Rate)',
              '마음챙김 세션(Mindful Session)',
              '활동 에너지(Active Energy Burned)',
            ],
            paragraphs2: [
              '연동은 언제든지 iOS [설정 > 개인정보 보호 및 보안 > 건강]에서 철회할 수 있으며, 철회 시 앱은 더 이상 건강 데이터를 읽지 않습니다. 앱을 삭제하면 기기에 저장된 건강 데이터 사본도 함께 삭제됩니다. 건강 데이터는 AI 편지 생성을 포함해 어떠한 경우에도 서버로 전송되지 않습니다.',
            ],
          },
        ],
      },
      {
        heading: '제3조 (민감정보의 처리 — 건강·마음 상태 관련 정보)',
        paragraphs: [
          '이용자가 기록하는 마음 날씨, 신체 반응, 감정, 트리거(원인) 메모와 건강 앱 연동 데이터는 「개인정보 보호법」 제23조가 정하는 "건강에 관한 정보"에 해당할 수 있는 민감정보입니다. 회사는 이용자가 기록 기능을 처음 이용하기 전에 앱 내에서 민감정보 처리에 대한 별도 동의를 받으며, 동의하지 않는 경우 기록 기능의 이용이 제한됩니다. 회사는 그 외의 방법으로 민감정보를 수집하지 않습니다.',
          '민감정보는 오직 이용자 본인에게 마음 기록·통계·맞춤 메시지를 제공하기 위한 목적으로만 처리되며, 회사 임직원을 포함한 제3자가 개별 기록의 내용을 열람하거나 이를 이용해 이용자를 특정하지 않습니다.',
          'AI 월간 마음 편지에 기록 원문 문장을 인용하는 경우에는 앱 내에서 별도의 동의를 추가로 받습니다(제9조 참조). 민감정보 처리 동의는 [설정 > 개인정보·데이터]에서 언제든지 철회할 수 있으며, 이미 저장된 기록은 [설정 > 데이터 영구 삭제]를 통해 언제든지 삭제할 수 있습니다.',
        ],
      },
      {
        heading: '제4조 (개인정보의 수집 및 이용 목적)',
        list: [
          '마음 날씨·신체반응·감정·트리거 기록의 저장, 조회 및 히스토리·캘린더 제공',
          '기록된 마음 상태에 따른 맞춤 메시지, 사운드테라피·호흡 가이드 등 콘텐츠 추천',
          '주간·월간 마음 날씨 리포트 및 감정 패턴·트리거 통계 생성',
          '인공지능(AI) 기반 월간 마음 편지의 문장 생성 및 제공 — 자세한 내용은 제9조를 참고하세요.',
          '이용자가 연동을 허용한 경우, 건강 데이터(수면·걸음 등)와 마음 날씨 기록의 상관 인사이트 제공(기기 내에서 처리)',
          '서비스 이용 현황에 대한 통계 분석 및 품질 개선(자체 수집한 이용 기록 활용, 제3자 분석 도구 미사용)',
          '회원 식별, 계정 관리, 기기 간 데이터 동기화 및 이전',
          '앱 잠금(Face ID/Touch ID), 알림 등 이용자가 선택한 설정 기능 제공',
          '서비스 부정 이용 방지, 오류 대응 및 안정적인 서비스 운영',
          '이용자 문의 및 불만 처리, 공지사항 전달',
        ],
      },
      {
        heading: '제5조 (개인정보의 보유 및 이용 기간)',
        paragraphs: [
          '회사는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만 다음의 정보는 아래 사유로 명시한 기간 동안 보존합니다.',
        ],
        table: {
          headers: ['보존 항목', '보존 기간', '보존 사유'],
          rows: [
            ['기기 내 마음 기록·설정', '앱 삭제 또는 이용자의 [데이터 영구 삭제] 실행 시까지', '서비스 제공(이용자가 직접 관리)'],
            ['Supabase에 저장된 회원 계정·마음 기록·프로필', '회원 탈퇴 또는 [데이터 영구 삭제] 실행 시까지', '서비스 제공 및 동기화'],
            ['기기 이전용 암호화 데이터 묶음(종단 간 암호화 — 회사 열람 불가)', '회사 서버에 임시 저장 — 발급 후 10분 또는 사용 완료 시까지', '기기 변경 지원 목적 달성'],
            ['서비스 이용 기록(이용 통계 이벤트)', '회원 탈퇴 또는 [데이터 영구 삭제] 실행 시까지(계정 삭제 시 함께 삭제)', '서비스 품질 개선·통계'],
            ['기기 내 건강(HealthKit) 데이터 사본', '앱 삭제 또는 연동 해제·데이터 삭제 시까지(기기에만 저장)', '건강-마음 상관 인사이트 제공'],
            ['AI 편지 생성 시 전송되는 집계 통계·발췌 문장', '회사 서버에는 저장하지 않음 · OpenAI는 오·남용 모니터링 목적으로 최대 30일 보관 후 파기', 'AI 편지 문장 생성'],
            ['전자상거래 등에서의 소비자보호에 관한 법률에 따른 기록(해당 시)', '관계 법령이 정한 기간(예: 계약 또는 청약철회 등에 관한 기록 5년, 소비자 불만 또는 분쟁처리에 관한 기록 3년)', '관계 법령의 의무 준수'],
          ],
        },
      },
      {
        heading: '제6조 (개인정보의 파기 절차 및 방법)',
        list: [
          '파기 절차: 이용 목적이 달성된 개인정보는 별도의 DB로 옮겨(종이의 경우 별도의 서류함) 내부 방침 및 관계 법령에 따라 일정 기간 저장된 후 파기되거나, 목적 달성 즉시 파기됩니다.',
          '파기 방법: 전자적 파일 형태로 저장된 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 서버 측 데이터는 데이터베이스에서 즉시 삭제됩니다.',
          '이용자는 앱 내 [설정 > 데이터 영구 삭제] 메뉴에서 언제든지 본인의 모든 기록과 계정을 직접, 즉시 파기할 수 있습니다. 삭제는 기기 인증(Face ID·Touch ID 또는 비밀번호)을 거쳐 진행되며, 삭제 후에는 복구할 수 없습니다.',
        ],
      },
      {
        heading: '제7조 (개인정보의 제3자 제공)',
        paragraphs: [
          '회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 다음의 경우는 예외로 합니다.',
        ],
        list: [
          '이용자가 사전에 별도의 동의를 한 경우',
          '법령의 규정에 의거하거나, 수사 목적으로 법령에서 정한 절차와 방법에 따라 수사기관의 요구가 있는 경우',
        ],
      },
      {
        heading: '제8조 (개인정보 처리의 위탁)',
        paragraphs: [
          '회사는 서비스 운영을 위해 아래와 같이 개인정보 처리 업무를 외부 업체에 위탁하고 있으며, 위탁 계약 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고 있습니다.',
        ],
        table: {
          headers: ['수탁업체', '위탁업무 내용', '처리하는 정보'],
          rows: [
            ['Supabase, Inc.', '클라우드 데이터베이스 호스팅, 사용자 인증(익명·소셜 로그인) 처리', '익명/회원 사용자 ID, 마음 기록, 회원 프로필, 서비스 이용 기록, 암호화된 기기 이전 묶음'],
            ['Apple Inc. / Google LLC / Kakao Corp.', '소셜 로그인(OAuth) 인증 중계', '이메일, 이름, 프로필 사진 등 이용자가 로그인 시 제공에 동의한 정보'],
            ['OpenAI, L.L.C. (미국)', 'AI 월간 마음 편지 문장 생성을 위한 언어모델 API 처리', '개인을 식별할 수 없는 월간 집계 통계, (앱 내 별도 동의 시) 기록 메모 발췌 문장(각 80자 이내) — 이름·이메일 등 식별정보와 건강 데이터는 포함되지 않음'],
          ],
        },
        paragraphs2: [
          'OpenAI는 API로 전송된 데이터를 인공지능 모델 학습에 사용하지 않으며, 오·남용 모니터링 목적으로 최대 30일간 보관한 후 파기합니다. 회사 서버는 편지 생성 요청에 포함된 데이터를 저장하지 않습니다.',
        ],
      },
      {
        heading: '제9조 (인공지능(AI)을 이용한 월간 마음 편지 처리)',
        paragraphs: [
          '회사는 월간 마음 편지의 문장 생성을 위해 미국 법인 OpenAI, L.L.C.의 언어모델 API를 이용합니다. 편지 생성 시 회사 서버는 이용자의 마음 기록을 개인을 식별할 수 없는 월간 집계 통계(예: 마음 날씨 분포, 감정·트리거 빈도, 회복 추세 지표)로 가공하여 전송하며, 이름·이메일·회원번호 등 식별정보와 건강(HealthKit) 데이터는 어떠한 경우에도 전송하지 않습니다.',
          '이용자가 앱 내 [월간 편지에 내 문장 인용]에 별도로 동의한 경우에 한하여, 해당 월 기록 메모에서 발췌한 짧은 문장(각 80자 이내)과 가장 힘들었던 날의 메모 1건이 편지 문장 생성을 위해 함께 전송됩니다. 동의하지 않아도 집계 통계만으로 편지가 제공되며, 그 외 서비스 이용에는 어떠한 제한도 없습니다. 동의는 앱 내 [설정 > 개인정보·데이터]에서 언제든지 철회할 수 있으며, 철회 이후 생성되는 편지부터 적용됩니다.',
          '전송된 데이터는 회사 서버에 저장되지 않습니다. OpenAI는 API로 전송된 데이터를 모델 학습에 사용하지 않으며, 오·남용 모니터링 목적으로 최대 30일간 보관한 후 파기합니다. 이와 관련한 국외 이전 사항은 제10조에서 고지합니다.',
        ],
      },
      {
        heading: '제10조 (개인정보의 국외 이전)',
        paragraphs: [
          '이용자의 마음 기록과 계정 정보는 Supabase 클라우드 데이터베이스의 대한민국(서울, AWS ap-northeast-2) 리전에 저장됩니다. 다만 Supabase, Inc.는 미국 법인으로서 클라우드 서비스 운영·기술 지원 과정에서 국외에서 개인정보에 접근할 가능성이 있으며, AI 월간 마음 편지 생성 시(제9조)에는 집계 통계와 (별도 동의 시) 기록 발췌 문장이 미국 소재 OpenAI, L.L.C. 서버로 전송·처리됩니다. 회사는 「개인정보 보호법」 제28조의8에 따라 관련 사항을 아래와 같이 고지합니다.',
        ],
        table: {
          headers: ['구분', 'Supabase, Inc.', 'OpenAI, L.L.C.'],
          rows: [
            ['이전(접근) 항목', '익명/회원 사용자 ID, 마음 기록, 회원 프로필, 서비스 이용 기록 등 서버 저장 데이터', '개인을 식별할 수 없는 월간 집계 통계, (별도 동의 시) 기록 메모 발췌 문장'],
            ['이전되는 국가', '데이터 저장: 대한민국(서울 리전) · 운영·지원 목적의 접근 주체 소재지: 미국', '미국'],
            ['이전 일시 및 방법', '서비스 이용 시 네트워크(HTTPS/TLS)를 통한 전송·접근', '월간 마음 편지 생성 시 네트워크(HTTPS/TLS)를 통한 전송'],
            ['이전받는 자의 이용 목적', '클라우드 데이터베이스 운영, 사용자 인증 처리(처리위탁)', 'AI 언어모델을 이용한 편지 문장 생성(처리위탁)'],
            ['보유·이용 기간', '위탁 계약 종료 시 또는 이용자의 삭제 요청 시까지', '모델 학습에 사용하지 않으며, 오·남용 모니터링 목적으로 최대 30일 보관 후 파기'],
            ['거부 방법 및 영향', '국외에서의 접근을 원하지 않는 경우 [데이터 영구 삭제] 실행 후 이용을 중단할 수 있습니다(문의: contact@mind-label.com). 이 경우 서비스 이용이 어렵습니다.', '기록 문장 전송은 별도 동의를 한 경우에만 이루어지며 [설정 > 개인정보·데이터]에서 언제든 철회할 수 있습니다. 집계 통계 처리도 원하지 않는 경우 문의 이메일로 요청할 수 있습니다.'],
          ],
        },
      },
      {
        heading: '제11조 (정보주체의 권리와 행사 방법)',
        paragraphs: ['이용자는 개인정보주체로서 다음의 권리를 행사할 수 있습니다.'],
        list: [
          '개인정보 열람·정정·삭제 요구권',
          '개인정보 처리 정지 요구권',
          '개인정보 전송 요구권(「개인정보 보호법」 제35조의2가 적용되는 범위 내)',
          '동의 철회권(소셜 로그인 연결 해제, AI 편지 문장 인용 동의 철회 등)',
          '앱 내 [설정 > 데이터 영구 삭제] 기능을 통한 즉시 삭제(계정 파기) 요청',
        ],
        paragraphs2: [
          '위 권리는 앱 내 설정 화면을 통해 직접 행사하거나, 아래 이메일로 요청하실 수 있습니다. 회사는 관계 법령이 정한 기간 내(대한민국 기준 원칙적으로 10일 이내)에 조치 결과를 안내합니다. 미성년자의 법정대리인은 미성년자 본인의 개인정보 열람 등을 요청할 수 있습니다.',
          '문의: contact@mind-label.com',
        ],
      },
      {
        heading: '제12조 (아동의 개인정보 보호)',
        paragraphs: [
          'MindLabel은 만 14세 미만 아동을 주 이용 대상으로 하지 않으며, 회원가입(소셜 로그인) 시 만 14세 미만임을 알게 된 경우 관련 법령에 따라 법정대리인의 동의를 확인하거나 해당 계정 정보의 수집을 거부·삭제할 수 있습니다. 회사는 아동으로부터 고의로 개인정보를 수집하지 않습니다.',
        ],
      },
      {
        heading: '제13조 (기기 접근 권한)',
        paragraphs: [
          '앱은 다음과 같은 기기 접근 권한을 요청할 수 있으며, 모든 권한은 선택 사항으로 거부하더라도 핵심 기록 기능은 계속 이용할 수 있습니다(해당 부가 기능만 제한됩니다).',
        ],
        table: {
          headers: ['권한', '이용 목적', '필수 여부'],
          rows: [
            ['사진 보관함', '프로필 사진(아바타) 설정', '선택'],
            ['마이크', '음성 저널(보이스 레코딩) 기능', '선택 (해당 기능 이용 시 필요)'],
            ['건강(Apple 건강 앱, HealthKit)', '수면·걸음 수·운동·안정 시 심박수·마음챙김·활동 에너지 읽기(읽기 전용, 기기 내 저장 — 제2조 2.4 참조)', '선택'],
            ['Face ID / Touch ID', '앱 잠금 및 데이터 영구 삭제 시 본인 인증', '선택'],
            ['알림', '마음챙김·리마인더 알림 발송', '선택'],
          ],
        },
      },
      {
        heading: '제14조 (개인정보의 자동 수집 및 추적, 광고)',
        paragraphs: [
          '앱은 웹 쿠키를 사용하지 않으며, 광고 식별자(IDFA 등)를 이용한 이용자 추적(Tracking)을 수행하지 않습니다. 현재 별도의 제3자 분석(애널리틱스) 도구나 광고 SDK를 사용하지 않고 있습니다. 다만 회사는 서비스 품질 개선을 위해 제3자 도구를 사용하지 않는 자체 방식으로 앱 이용 기록(기능 사용 이벤트)을 수집하며, 자세한 사항은 제2조 및 제4조를 따릅니다. 향후 제3자 분석·광고 도구를 도입하는 경우, 이 방침을 사전에 개정하고 iOS 앱 추적 투명성(ATT) 등 관련 법령·정책에 따른 동의 절차를 거칩니다.',
        ],
      },
      {
        heading: '제15조 (개인정보의 안전성 확보 조치)',
        list: [
          '전송 구간 암호화: 앱과 서버 간 통신은 HTTPS(TLS)로 암호화됩니다.',
          '접근 통제: 서버 데이터베이스는 행 단위 보안 정책(Row Level Security)을 적용하여 이용자 본인의 데이터에만 접근할 수 있도록 제한합니다.',
          '인증 강화: 데이터 영구 삭제 등 민감한 작업은 기기 생체/비밀번호 인증을 추가로 요구합니다.',
          '최소 수집 원칙: 서비스 제공에 필요한 최소한의 정보만 수집하며, 게스트 모드에서는 식별정보를 수집하지 않습니다.',
          '내부 관리: 개인정보를 처리하는 담당자를 최소한으로 지정·관리합니다.',
        ],
      },
      {
        heading: '제16조 (의료·건강 관련 고지)',
        paragraphs: [
          'MindLabel은 의료기기, 진단, 치료 또는 상담 서비스가 아닙니다. 앱이 제공하는 기록, 통계, 추천 콘텐츠는 웰니스 및 자기 이해를 위한 참고 자료로만 제공됩니다. 불안이나 정서적 어려움이 심하거나 지속되는 경우 반드시 전문 의료기관 또는 정신건강 전문가의 도움을 받으시기 바랍니다.',
          '위기 상황이라면 즉시 112(경찰) 또는 119(응급의료)에 연락하거나, 정신건강 위기상담전화(1577-0199) 또는 자살예방상담전화(109)를 이용해 주세요.',
        ],
      },
      {
        heading: '제17조 (개인정보 보호책임자 및 열람청구 접수)',
        table: {
          headers: ['구분', '내용'],
          rows: [
            ['개인정보 보호책임자', '대표 (MindLabel 운영자)'],
            ['연락처', 'contact@mind-label.com'],
            ['개인정보 열람청구 접수·처리 부서', '위와 동일 (contact@mind-label.com)'],
          ],
        },
      },
      {
        heading: '제18조 (권익침해 구제 방법)',
        paragraphs: [
          '이용자는 개인정보 침해로 인한 신고나 상담이 필요한 경우 아래 기관에 문의할 수 있습니다. 회사와의 협의가 원활하지 않은 경우에도 아래 기관을 통해 도움을 받으실 수 있습니다.',
        ],
        list: [
          '개인정보분쟁조정위원회 : 1833-6972 (privacy.go.kr)',
          '개인정보침해신고센터(한국인터넷진흥원) : (국번없이) 118 (privacy.kisa.or.kr)',
          '대검찰청 사이버범죄수사단 : 02-3480-3573 (spo.go.kr)',
          '경찰청 사이버안전국 : (국번없이) 182 (ecrm.cyber.go.kr)',
        ],
      },
      {
        heading: '제19조 (고지의 의무)',
        paragraphs: [
          '이 개인정보 처리방침의 내용이 추가·삭제 및 수정이 있을 시에는 앱 공지사항 또는 이 페이지를 통해 시행 최소 7일 전(수집하는 개인정보의 항목 추가, 이용 목적 변경 등 이용자 권리에 중대한 영향을 미치는 변경의 경우 최소 30일 전)부터 고지합니다.',
        ],
      },
    ],
    addendum:
      '부칙: 이 방침은 2026년 7월 1일 시행된 방침을 2026년 7월 11일 개정한 것이며, 개정된 방침은 2026년 7월 11일부터 시행합니다. 이전 버전은 문의 이메일(contact@mind-label.com)로 요청 시 제공됩니다.',
  },
  en: {
    title: 'Privacy Policy',
    effectiveDate: 'Effective date: July 11, 2026 · Last updated: July 11, 2026',
    intro:
      'MindLabel ("we," "our," "the Company," or "the Service") is committed to protecting your privacy. This Privacy Policy explains what personal data we process when you use the MindLabel iOS app (the "App"), why we process it, and the rights you have. We aim to comply with applicable data protection laws, including South Korea\'s Personal Information Protection Act ("PIPA"), the EU General Data Protection Regulation ("GDPR") where applicable, and the California Consumer Privacy Act / CPRA ("CCPA") where applicable.',
    noticeBox: {
      heading: 'At a glance',
      list: [
        'You can start using the App as an anonymous guest without creating an account. No email, phone number, or legal name is collected in guest mode.',
        'Mind-weather, body-reaction, emotion, and trigger records are stored both on your device and in our Supabase cloud database (Seoul, South Korea region) through an anonymous account created automatically on first launch. All traffic is encrypted, and only you can access your data.',
        'If you optionally sign in with Apple, Google, or Kakao, we receive your email, name, and profile picture from that provider to create your member account, which lets you continue your records across devices.',
        'Voice journal recordings and health data read from Apple Health (HealthKit) stay on your device only and are never sent to our servers.',
        "Monthly AI mind-letter sentences are generated using OpenAI's API (United States). Only non-identifying aggregate statistics are sent; short excerpts from your notes are sent only if you separately consent in the App. Transmitted data is never used for AI training.",
        'We do not use advertising or tracking SDKs or third-party analytics. We collect only first-party usage records to improve the Service, deleted together with your account. We never sell your personal data or share it for advertising.',
        'You can permanently and irreversibly delete all your data — on-device and in the cloud — at any time from Settings.',
      ],
    },
    sections: [
      {
        heading: '1. Who We Are',
        table: {
          headers: ['Item', 'Details'],
          rows: [
            ['Service', 'MindLabel'],
            ['Operator', 'MindLabel'],
            ['Business registration number', '813-39-01481'],
            ['Address', 'We do not maintain a separate business address; please contact us at the email below.'],
            ['Privacy contact', 'contact@mind-label.com'],
            ['Contact email', 'contact@mind-label.com'],
          ],
        },
      },
      {
        heading: '2. Information We Collect',
        paragraphs: [
          'You can start using MindLabel as an anonymous guest without any sign-up. Even in guest mode, your mood records are stored both on your device and on our cloud server (Supabase) through an anonymous account created automatically on first launch. Signing in adds cross-device access and record recovery, and we then collect the additional information described below.',
        ],
        subsections: [
          {
            heading: '2.1 As a guest (no account)',
            table: {
              headers: ['Data', 'Details', 'Stored', 'How collected'],
              rows: [
                ['Anonymous user ID', 'A random UUID issued by Supabase anonymous authentication', 'Device + Supabase', 'Generated automatically on first launch'],
                ['Mood record', 'Selected mind-weather state (e.g., sunny, cloudy, rainy, stormy), selected body-reaction items, selected emotion items, trigger notes (what started the feeling), a log of the personalized message shown to you, and session duration', 'Device + Supabase', 'Entered directly by you in the App'],
                ['Voice journal', 'Audio recordings you make (m4a files)', 'Device only', 'Recorded by you after granting microphone permission'],
                ['App preferences', 'Language, reminder time, app-lock setting, onboarding status', 'Device only', 'Set by you'],
                ['Service usage records', 'App feature-usage events (e.g., check-in started/completed, letter viewed — screen/feature-level event names), timestamps, and related metadata — usage statistics separate from your record content', 'Supabase', 'Collected automatically while you use the App'],
              ],
            },
          },
          {
            heading: '2.2 If you sign in with Apple, Google, or Kakao (optional)',
            paragraphs: [
              'Signing in is optional, and all journaling features remain available without it. However, accessing your records from multiple devices and recovering them after losing or changing a device require signing in. If you sign in, we receive the following from your chosen provider:',
            ],
            table: {
              headers: ['Provider', 'Data received', 'Notes'],
              rows: [
                ['Apple (Sign in with Apple)', 'Email, name (may only be provided on first sign-in), Apple-issued unique identifier', 'If you choose "Hide My Email," Apple provides a private relay email instead of your real address.'],
                ['Google Sign-In', 'Email, name, profile picture URL, Google account identifier', '-'],
                ['Kakao Login', 'Kakao account email (if you consent to share it), nickname, profile picture URL, Kakao identifier', "Kakao's own privacy policy also applies to the Kakao login flow."],
              ],
            },
            paragraphs2: [
              'This information is stored in our Supabase authentication records and in our member profile table, along with a display name, profile picture, sign-in provider, and an auto-generated member number (e.g., "#AB12CD34"). Any data recorded while you were a guest is automatically migrated to your member account when you sign in.',
            ],
          },
          {
            heading: '2.3 Device-to-device data transfer',
            paragraphs: [
              'If you request a device transfer, a one-time transfer code is generated on your device, and the bundle of your records is encrypted on-device with that code (end-to-end encryption) before being stored temporarily on our server for up to 10 minutes. The server stores only the encrypted bundle and a one-way hash of the code — the code itself is never sent to the server — so we cannot read the bundle\'s contents. The code is single-use, and the bundle expires and is deleted automatically once used or after the time limit.',
            ],
          },
          {
            heading: '2.4 Apple Health (HealthKit) integration (optional)',
            paragraphs: [
              'If you allow the iOS Health integration, the App reads the following items on a read-only basis. Health data we read is stored on your device only and is never sent to any external server, including ours. On first connection the App imports up to the past 180 days, and afterwards syncs periodically within a rolling 35-day window.',
            ],
            list: [
              'Step Count',
              'Sleep Analysis',
              'Workouts',
              'Resting Heart Rate',
              'Mindful Sessions',
              'Active Energy Burned',
            ],
            paragraphs2: [
              'You can withdraw access at any time in iOS Settings > Privacy & Security > Health, after which the App no longer reads health data. Deleting the App also deletes the on-device copy of this data. Health data is never transmitted to a server under any circumstances, including AI letter generation.',
            ],
          },
        ],
      },
      {
        heading: '3. Sensitive Data (Mental Health / Wellness Information)',
        paragraphs: [
          'The mind-weather state, body reactions, emotions, trigger notes, and connected health data you record may constitute health-related or special-category data under applicable law (e.g., "sensitive information" under PIPA Art. 23, or "special category data" under GDPR Art. 9). We obtain a separate, explicit in-app consent to sensitive-data processing before you first use the journaling features; if you decline, journaling features are unavailable. We do not collect sensitive data in any other way.',
          'This data is processed solely to provide you with your own records, statistics, and personalized messages. No MindLabel staff member reviews individual entries to identify or profile you, and this data is never used for advertising.',
          'Quoting your original note sentences in the monthly AI mind letter requires an additional, separate consent inside the App (see Section 9). You can withdraw your sensitive-data consent anytime in Settings > Privacy & Data, and you can delete stored records at any time via Settings > Permanently Delete Data.',
        ],
      },
      {
        heading: '4. Why We Process Your Information',
        list: [
          'To record, display, and provide history/calendar views of your mind-weather, body-reaction, emotion, and trigger entries',
          'To recommend personalized messages, sound therapy, and breathing guides based on your recorded mood state',
          'To generate weekly/monthly mood-weather reports and pattern/trigger statistics',
          'To generate and provide the sentences of the monthly AI mind letter — see Section 9',
          'If you allow the Health integration, to provide correlation insights between health data (sleep, steps, etc.) and your mood records (processed on-device)',
          'To analyze usage statistics and improve service quality (using first-party usage records; no third-party analytics tools)',
          'To identify your account, manage sign-in, and sync/transfer data across your devices',
          'To provide optional settings you choose, such as app lock (Face ID/Touch ID) and reminders',
          'To prevent abuse, resolve technical issues, and keep the Service running reliably',
          'To respond to your support requests and send service notices',
        ],
      },
      {
        heading: '5. How Long We Keep Your Information',
        paragraphs: [
          'We retain personal information only as long as necessary to fulfil the purposes above, and delete it promptly afterward, except as noted below.',
        ],
        table: {
          headers: ['Data', 'Retention period', 'Reason'],
          rows: [
            ['On-device records and settings', 'Until you delete the App or use Settings > Permanently Delete Data', 'Service provision (managed by you)'],
            ['Cloud (Supabase) account, records, and profile', 'Until account deletion or Permanently Delete Data', 'Service provision and cross-device sync'],
            ['Encrypted device-transfer bundles (end-to-end encrypted — unreadable by us)', 'Stored temporarily on our server — 10 minutes after issue, or until used', 'Fulfils the transfer purpose'],
            ['Service usage records (usage-statistics events)', 'Until account deletion or Permanently Delete Data (deleted together with your account)', 'Service quality improvement and statistics'],
            ['On-device copy of Health (HealthKit) data', 'Until you delete the App, disconnect the integration, or delete your data (device only)', 'Health–mood correlation insights'],
            ['Aggregate statistics and note excerpts sent for AI letters', 'Not stored on our server · OpenAI retains for up to 30 days for abuse monitoring, then deletes', 'AI letter sentence generation'],
            ['Records required under consumer-protection law (if applicable)', 'As required by law (e.g., contract/withdrawal records: 5 years; complaint/dispute records: 3 years, under Korean e-commerce law)', 'Legal compliance'],
          ],
        },
      },
      {
        heading: '6. Deletion Procedures',
        list: [
          'Once its purpose is fulfilled, personal information is either deleted immediately or, where retention is legally required, isolated and securely stored until the retention period expires and then destroyed.',
          'Electronic records are deleted using methods that prevent recovery; server-side records are deleted immediately from the database.',
          'You can permanently delete all your records and account at any time via Settings > Permanently Delete Data. This requires device authentication (Face ID/Touch ID or passcode) and cannot be undone.',
        ],
      },
      {
        heading: '7. Disclosure to Third Parties',
        paragraphs: ['We do not disclose your personal information to third parties, except when:'],
        list: [
          'You have given your prior, separate consent, or',
          'Disclosure is required by law or requested by an investigative authority following the procedures set out in applicable law.',
        ],
      },
      {
        heading: '8. Service Providers (Processors)',
        paragraphs: [
          'We use the following service providers to operate MindLabel. Each is bound by contractual terms requiring them to protect your data.',
        ],
        table: {
          headers: ['Provider', 'Role', 'Data processed'],
          rows: [
            ['Supabase, Inc.', 'Cloud database hosting; authentication (anonymous and social sign-in)', 'Anonymous/member user ID, mood records, member profile, service usage records, encrypted device-transfer bundles'],
            ['Apple Inc. / Google LLC / Kakao Corp.', 'OAuth sign-in relay', 'Email, name, profile picture, and other data you consent to share when signing in'],
            ['OpenAI, L.L.C. (United States)', 'Language-model API processing to generate monthly AI mind-letter sentences', 'Non-identifying monthly aggregate statistics and, only with your separate in-app consent, short excerpts from your notes (up to 80 characters each) — no identifying information (name, email, etc.) and no health data'],
          ],
        },
        paragraphs2: [
          'OpenAI does not use data sent via its API to train AI models and retains it for up to 30 days for abuse monitoring before deletion. Our server does not store the data included in letter-generation requests.',
        ],
      },
      {
        heading: '9. AI-Generated Monthly Mind Letters (OpenAI)',
        paragraphs: [
          'We use the language-model API of OpenAI, L.L.C., a U.S. company, to generate the sentences of your monthly mind letter. When a letter is generated, our server transforms your mood records into non-identifying monthly aggregate statistics (e.g., mind-weather distribution, emotion/trigger frequencies, recovery-trend indicators) before transmission. Identifying information such as your name, email, or member number, and Health (HealthKit) data, are never transmitted under any circumstances.',
          'Only if you separately consent to "Quote my sentences in the monthly letter" inside the App, short excerpts from that month\'s notes (up to 80 characters each) and one note from your hardest day are also sent to help generate the letter\'s sentences. If you decline, your letter is still generated from aggregate statistics alone, and nothing else about the Service is restricted. You can withdraw this consent at any time in Settings > Privacy & Data; withdrawal applies to letters generated afterwards.',
          'Transmitted data is not stored on our server. OpenAI does not use API data to train its models and retains it for up to 30 days for abuse monitoring before deletion. Related international transfer details are disclosed in Section 10.',
        ],
      },
      {
        heading: '10. International Data Transfers',
        paragraphs: [
          'Your mood records and account information are stored in the South Korea (Seoul, AWS ap-northeast-2) region of the Supabase cloud database. However, Supabase, Inc. is a U.S. company and may access personal data from outside South Korea in the course of operating and supporting the cloud service, and when a monthly AI mind letter is generated (Section 9), aggregate statistics and — with your separate consent — note excerpts are transmitted to and processed on servers of OpenAI, L.L.C. in the United States. Where required (e.g., under PIPA Art. 28-8 or GDPR Chapter V), we provide the following disclosures and rely on appropriate safeguards such as standard contractual clauses or the processor\'s certified compliance program.',
        ],
        table: {
          headers: ['Item', 'Supabase, Inc.', 'OpenAI, L.L.C.'],
          rows: [
            ['Data transferred (accessed)', 'Anonymous/member user ID, mood records, member profile, service usage records, and other server-stored data', 'Non-identifying monthly aggregate statistics and, with separate consent, note excerpts'],
            ['Destination country', 'Data storage: South Korea (Seoul region) · Location of operational/support access: United States', 'United States'],
            ['Timing and method', 'Transfer/access over encrypted connections (HTTPS/TLS) while you use the App', 'Transfer over encrypted connections (HTTPS/TLS) when a monthly letter is generated'],
            ['Purpose', 'Cloud database operation and user authentication (as our processor)', 'Letter sentence generation via AI language model (as our processor)'],
            ['Retention', 'Until the service agreement ends or you request deletion', 'Not used for model training; retained up to 30 days for abuse monitoring, then deleted'],
            ['Your options', 'If you do not want cross-border access, you may run Permanently Delete Data and stop using the Service (contact: contact@mind-label.com); the Service cannot meaningfully be used without it.', 'Note excerpts are sent only with your separate consent, which you can withdraw anytime in Settings > Privacy & Data. If you also object to aggregate-statistics processing, contact us by email.'],
          ],
        },
      },
      {
        heading: '11. Your Rights',
        paragraphs: ['Depending on your location, you may have the right to:'],
        list: [
          'Access, correct, or delete your personal information',
          'Restrict or object to our processing of your information',
          'Withdraw consent at any time (e.g., disconnect a social sign-in, withdraw consent to quoting your notes in AI letters)',
          'Data portability, where applicable',
          'Lodge a complaint with your local data protection authority',
          'Immediately delete your account and all data via Settings > Permanently Delete Data',
        ],
        paragraphs2: [
          'You can exercise these rights directly in the App, or by emailing us. We will respond within the timeframe required by applicable law (in principle, within 10 days under Korean law). A parent or legal guardian may exercise these rights on behalf of a minor.',
          'Contact: contact@mind-label.com',
        ],
      },
      {
        heading: '12. Children\'s Privacy',
        paragraphs: [
          'MindLabel is not directed at children under 13 (or under 14 in South Korea, or under 16 in jurisdictions applying the GDPR default). We do not knowingly collect personal information from children. If we learn that an account was created by a child without appropriate parental consent, we will take steps to delete the associated account and data.',
        ],
      },
      {
        heading: '13. Device Permissions',
        paragraphs: [
          'The App may request the following permissions. All are optional — declining a permission only limits the related feature; core journaling remains available.',
        ],
        table: {
          headers: ['Permission', 'Purpose', 'Required?'],
          rows: [
            ['Photo Library', 'Set a profile picture (avatar)', 'Optional'],
            ['Microphone', 'Record voice journal entries', 'Optional (needed only for this feature)'],
            ['Health (Apple Health, HealthKit)', 'Read sleep, steps, workouts, resting heart rate, mindful sessions, and active energy (read-only, stored on-device — see Section 2.4)', 'Optional'],
            ['Face ID / Touch ID', 'App lock and identity verification before permanent data deletion', 'Optional'],
            ['Notifications', 'Mindfulness reminders', 'Optional'],
          ],
        },
      },
      {
        heading: '14. Tracking, Analytics, and Advertising',
        paragraphs: [
          'The App does not use web cookies and does not track you using advertising identifiers (e.g., IDFA). We do not currently use any third-party analytics or advertising SDKs. We do, however, collect first-party app usage records (feature-usage events) to improve service quality, without any third-party tools — see Sections 2 and 4. If we introduce third-party analytics or advertising tools in the future, we will update this Policy in advance and request any consent required by law (including Apple\'s App Tracking Transparency framework, where applicable).',
        ],
      },
      {
        heading: '15. Security Measures',
        list: [
          'Encryption in transit: All communication between the App and our servers uses HTTPS (TLS).',
          'Access control: Our database enforces Row Level Security so each user can only access their own data.',
          'Step-up authentication: Sensitive actions, such as permanent data deletion, require additional device authentication.',
          'Data minimization: We collect only what is necessary to provide the Service; guest mode collects no identifying information.',
          'Internal access control: The number of personnel with access to personal information is kept to a minimum and is closely managed.',
        ],
      },
      {
        heading: '16. Medical & Health Disclaimer',
        paragraphs: [
          'MindLabel is not a medical device and does not provide diagnosis, treatment, or professional counseling. Records, statistics, and recommended content are provided for general wellness and self-reflection purposes only. If you are experiencing severe or persistent anxiety or emotional distress, please seek help from a qualified healthcare or mental health professional.',
          'If you are in crisis, please contact your local emergency number immediately (in South Korea: 112 or 119; a mental health crisis line: 1577-0199 or 109). If you are in the United States, you may call or text 988 (Suicide & Crisis Lifeline). Outside these regions, please contact your local emergency services or a crisis line in your country.',
        ],
      },
      {
        heading: '17. Privacy Contact',
        table: {
          headers: ['Item', 'Details'],
          rows: [
            ['Privacy contact', 'Representative (MindLabel operator)'],
            ['Email', 'contact@mind-label.com'],
            ['Handles access/deletion requests', 'Same as above (contact@mind-label.com)'],
          ],
        },
      },
      {
        heading: '18. Where to Complain',
        paragraphs: [
          'If you believe your privacy rights have been violated, you may contact us directly, or reach out to your local data protection authority. South Korean residents may also contact:',
        ],
        list: [
          'Personal Information Dispute Mediation Committee: 1833-6972 (privacy.go.kr)',
          'Privacy Infringement Report Center (KISA): 118 (privacy.kisa.or.kr)',
          'Supreme Prosecutors\' Office Cyber Investigation Division: 02-3480-3573 (spo.go.kr)',
          'National Police Agency Cyber Bureau: 182 (ecrm.cyber.go.kr)',
        ],
      },
      {
        heading: '19. Changes to This Policy',
        paragraphs: [
          'If we make material changes to this Policy — such as collecting new categories of data or changing our purposes of use — we will announce the changes in the App or on this page at least 7 days before they take effect (at least 30 days for changes that significantly affect your rights).',
        ],
      },
    ],
    addendum:
      'Addendum: This Policy amends the version that took effect on July 1, 2026, and the amended Policy takes effect on July 11, 2026. The prior version is available on request (contact@mind-label.com).',
  },
};
