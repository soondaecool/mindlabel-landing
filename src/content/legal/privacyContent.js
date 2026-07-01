export const privacyContent = {
  ko: {
    title: '개인정보 처리방침',
    effectiveDate: '시행일: 2026년 7월 1일 · 최종 수정일: 2026년 7월 1일',
    intro:
      'MindLabel(마인드라벨, 이하 "회사" 또는 "서비스")은 이용자의 개인정보를 소중히 다루며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 대한민국 관계 법령과, 서비스가 제공되는 국가·지역의 개인정보 보호 규정(EU 일반정보보호규정(GDPR), 미국 캘리포니아 소비자 프라이버시법(CCPA/CPRA) 등)을 준수하기 위해 노력합니다. 본 방침은 MindLabel iOS 앱(이하 "앱") 이용과 관련하여 회사가 어떤 개인정보를, 왜, 어떻게 처리하는지를 설명합니다.',
    noticeBox: {
      heading: '한눈에 보는 요약',
      list: [
        '앱은 회원가입 없이 게스트(익명)로 이용을 시작할 수 있으나, 마음 기록의 클라우드 저장·동기화, 리포트 등 서비스의 상당 부분은 회원(로그인) 전환 후에만 이용할 수 있습니다. 게스트 상태에서는 이메일·전화번호·실명을 수집하지 않습니다.',
        '이용자가 선택적으로 Apple·Google·Kakao 계정으로 로그인하면, 해당 서비스로부터 이메일·이름·프로필 사진을 제공받아 계정 생성에 사용합니다.',
        '마음 날씨·신체반응·감정·트리거 기록은 기기와 Supabase 클라우드 서버에 함께 저장되어 여러 기기에서 기록을 이용할 수 있도록 합니다.',
        '음성 저널(보이스 레코딩)은 이용자의 기기에만 저장되며 서버로 전송되지 않습니다.',
        '광고·추적 SDK, 제3자 분석(애널리틱스) 도구를 사용하지 않으며, 개인정보를 판매하거나 광고 목적으로 제공하지 않습니다.',
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
          'MindLabel은 별도의 회원가입 없이 게스트(익명) 상태로 서비스를 시작할 수 있습니다. 다만 마음 기록의 클라우드 저장·동기화, 주간/월간 리포트, 기기 간 데이터 이전 등 서비스의 상당 부분은 회원(로그인) 전환 후에 이용할 수 있으며, 게스트 상태에서는 해당 기능이 제한됩니다. 이용자가 회원 전환을 위해 소셜 로그인을 선택하면, 아래와 같이 추가 정보가 수집됩니다.',
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
              ],
            },
          },
          {
            heading: '2.2 Apple · Google · Kakao 계정으로 로그인(선택) 시',
            paragraphs: [
              '소셜 로그인은 선택 사항입니다. 다만 로그인하지 않을 경우 마음 기록의 클라우드 동기화, 리포트, 기기 간 데이터 이전 등 다수의 기능 이용이 제한됩니다. 로그인을 선택하면 해당 제공자로부터 다음 정보를 제공받습니다.',
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
              '기기 변경 시 이용자가 직접 요청하는 경우, 회사는 이용자의 마음 기록을 담은 일회용 이전 코드(암호화된 데이터 묶음 포함)를 Supabase 서버에 최대 10분간 임시로 저장하며, 코드가 사용되거나 유효기간이 지나면 자동으로 만료·삭제됩니다.',
            ],
          },
        ],
      },
      {
        heading: '제3조 (민감정보의 처리 — 건강·마음 상태 관련 정보)',
        paragraphs: [
          '이용자가 기록하는 마음 날씨, 신체 반응, 감정, 트리거(원인) 메모는 「개인정보 보호법」 제23조가 정하는 "건강에 관한 정보"에 해당할 수 있는 민감정보입니다. 회사는 이용자가 앱 내에서 해당 기능을 최초로 이용하는 시점에 별도의 동의 절차를 거쳐 민감정보를 수집하며, 동의하지 않을 경우 관련 기능(마음 기록, 리포트 등)의 이용이 제한될 수 있습니다.',
          '민감정보는 오직 이용자 본인에게 마음 기록·통계·맞춤 메시지를 제공하기 위한 목적으로만 처리되며, 회사 임직원을 포함한 제3자가 개별 기록의 내용을 열람하거나 이를 이용해 이용자를 특정하지 않습니다.',
        ],
      },
      {
        heading: '제4조 (개인정보의 수집 및 이용 목적)',
        list: [
          '마음 날씨·신체반응·감정·트리거 기록의 저장, 조회 및 히스토리·캘린더 제공',
          '기록된 마음 상태에 따른 맞춤 메시지, 사운드테라피·호흡 가이드 등 콘텐츠 추천',
          '주간·월간 마음 날씨 리포트 및 감정 패턴·트리거 통계 생성',
          '(도입 예정) 이용자 동의에 기반한 인공지능(AI) 기반 감정 분석 리포트 생성 및 제공 — 자세한 내용은 제9조를 참고하세요.',
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
            ['기기 이전 코드', '발급 후 10분 또는 사용 완료 시까지', '기기 변경 지원 목적 달성'],
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
            ['Supabase, Inc.', '클라우드 데이터베이스 호스팅, 사용자 인증(익명·소셜 로그인) 처리', '익명/회원 사용자 ID, 마음 기록, 회원 프로필, 기기 이전 코드'],
            ['Apple Inc. / Google LLC / Kakao Corp.', '소셜 로그인(OAuth) 인증 중계', '이메일, 이름, 프로필 사진 등 이용자가 로그인 시 제공에 동의한 정보'],
          ],
        },
      },
      {
        heading: '제9조 (인공지능(AI) 기반 서비스 도입에 관한 사전 고지)',
        paragraphs: [
          '회사는 이용자에게 더 개인화된 감정 분석 리포트를 제공하기 위해 향후 인공지능(AI/LLM) 기반 분석 시스템을 도입할 수 있습니다. 이 기능이 도입되는 경우, 이용자의 마음 날씨·신체반응·감정·트리거 메모 등 마음 기록의 일부가 분석을 위해 AI 서비스 제공업체(국내 또는 국외 소재)의 서버로 전송·처리될 수 있습니다.',
          '회사는 관련 기능을 실제로 도입하기 전에 이 방침을 개정하여 AI 서비스 제공업체명, 처리위탁 또는 제3자 제공 여부, 처리 목적, 전송되는 정보의 항목, 보유·이용 기간, 국외 이전 여부 등을 구체적으로 고지하며, 관계 법령상 필요한 경우 이용자의 별도 동의를 받은 후에만 해당 기능을 제공합니다. 이용자는 동의하지 않을 권리가 있으며, 이 경우 AI 기반 리포트 기능만 제한되고 기존 서비스 이용에는 영향이 없습니다.',
        ],
      },
      {
        heading: '제10조 (개인정보의 국외 이전)',
        paragraphs: [
          '회사는 서비스 제공을 위해 미국 법인인 Supabase, Inc.의 클라우드 인프라를 이용하며, 이 과정에서 이용자의 개인정보가 국외 서버에 저장·처리될 수 있습니다. 회사는 「개인정보 보호법」 제28조의8에 따라 국외 이전과 관련한 사항을 아래와 같이 고지합니다.',
        ],
        table: {
          headers: ['구분', '내용'],
          rows: [
            ['이전받는 자', 'Supabase, Inc.'],
            ['이전되는 국가', '[Supabase 프로젝트의 실제 데이터 저장 리전을 확인 후 기재하세요 — 예: 미국, 싱가포르 등]'],
            ['이전 일시 및 방법', '앱 이용 시 네트워크(HTTPS/TLS)를 통해 실시간 전송'],
            ['이전받는 자의 이용 목적', '클라우드 데이터베이스 운영, 사용자 인증 처리'],
            ['보유·이용 기간', '위탁 계약 종료 시 또는 이용자의 삭제 요청 시까지'],
            ['거부 방법', '이용자는 국외 이전에 동의하지 않을 권리가 있으나, 이 경우 클라우드 동기화·계정 기반 기능 이용이 제한되며 기기 내 로컬 저장 기능만 이용할 수 있습니다.'],
          ],
        },
      },
      {
        heading: '제11조 (정보주체의 권리와 행사 방법)',
        paragraphs: ['이용자는 개인정보주체로서 다음의 권리를 행사할 수 있습니다.'],
        list: [
          '개인정보 열람·정정·삭제 요구권',
          '개인정보 처리 정지 요구권',
          '동의 철회권(소셜 로그인 연결 해제, 민감정보 처리 동의 철회 등)',
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
            ['Face ID / Touch ID', '앱 잠금 및 데이터 영구 삭제 시 본인 인증', '선택'],
            ['알림', '마음챙김·리마인더 알림 발송', '선택'],
          ],
        },
      },
      {
        heading: '제14조 (개인정보의 자동 수집 및 추적, 광고)',
        paragraphs: [
          '앱은 웹 쿠키를 사용하지 않으며, 광고 식별자(IDFA 등)를 이용한 이용자 추적(Tracking)을 수행하지 않습니다. 현재 별도의 제3자 분석(애널리틱스) 도구나 광고 SDK를 사용하지 않고 있습니다. 향후 서비스 개선을 위해 이러한 도구를 도입하는 경우, 이 방침을 사전에 개정하고 iOS 앱 추적 투명성(ATT) 등 관련 법령·정책에 따른 동의 절차를 거칩니다.',
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
            ['개인정보 보호책임자', '[성명 · 직책을 입력하세요]'],
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
  },
  en: {
    title: 'Privacy Policy',
    effectiveDate: 'Effective date: July 1, 2026 · Last updated: July 1, 2026',
    intro:
      'MindLabel ("we," "our," "the Company," or "the Service") is committed to protecting your privacy. This Privacy Policy explains what personal data we process when you use the MindLabel iOS app (the "App"), why we process it, and the rights you have. We aim to comply with applicable data protection laws, including South Korea\'s Personal Information Protection Act ("PIPA"), the EU General Data Protection Regulation ("GDPR") where applicable, and the California Consumer Privacy Act / CPRA ("CCPA") where applicable.',
    noticeBox: {
      heading: 'At a glance',
      list: [
        'You can start using the App as an anonymous guest without creating an account, but a significant part of the Service — cloud storage/sync of your mood records, reports, and more — is only available after you sign in. No email, phone number, or legal name is collected in guest mode.',
        'If you optionally sign in with Apple, Google, or Kakao, we receive your email, name, and profile picture from that provider to create your account.',
        'Mind-weather, body-reaction, emotion, and trigger records are stored both on your device and in our Supabase cloud database so you can access them across devices.',
        'Voice journal recordings stay on your device only and are never uploaded to our servers.',
        'We do not use advertising or tracking SDKs or third-party analytics, and we never sell your personal data or share it for advertising.',
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
          'You can start using MindLabel as an anonymous guest without any sign-up. However, a significant part of the Service — cloud storage/sync of your mood records, weekly/monthly reports, and device-to-device transfer — is only available once you sign in, and is limited or unavailable in guest mode. If you sign in to unlock these features, we collect the additional information described below.',
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
              ],
            },
          },
          {
            heading: '2.2 If you sign in with Apple, Google, or Kakao (optional)',
            paragraphs: [
              'Signing in is optional, but declining to sign in limits many features, including cloud sync of your records, reports, and device transfer. If you sign in, we receive the following from your chosen provider:',
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
              'If you request a device transfer, we temporarily store a one-time transfer code (containing an encrypted bundle of your records) on our servers for up to 10 minutes. The code and its associated data expire and are deleted automatically once used or after the time limit.',
            ],
          },
        ],
      },
      {
        heading: '3. Sensitive Data (Mental Health / Wellness Information)',
        paragraphs: [
          'The mind-weather state, body reactions, emotions, and trigger notes you record may constitute health-related or special-category data under applicable law (e.g., "sensitive information" under PIPA Art. 23, or "special category data" under GDPR Art. 9). We collect this information only with your affirmative consent, obtained the first time you use the relevant feature; declining this consent may limit your ability to use journaling and report features.',
          'This data is processed solely to provide you with your own records, statistics, and personalized messages. No MindLabel staff member reviews individual entries to identify or profile you, and this data is never used for advertising.',
        ],
      },
      {
        heading: '4. Why We Process Your Information',
        list: [
          'To record, display, and provide history/calendar views of your mind-weather, body-reaction, emotion, and trigger entries',
          'To recommend personalized messages, sound therapy, and breathing guides based on your recorded mood state',
          'To generate weekly/monthly mood-weather reports and pattern/trigger statistics',
          '(Planned) To generate and provide AI-based emotional-analysis reports, based on your consent — see Section 9',
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
            ['Device transfer codes', '10 minutes after issue, or until used', 'Fulfils the transfer purpose'],
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
            ['Supabase, Inc.', 'Cloud database hosting; authentication (anonymous and social sign-in)', 'Anonymous/member user ID, mood records, member profile, device transfer codes'],
            ['Apple Inc. / Google LLC / Kakao Corp.', 'OAuth sign-in relay', 'Email, name, profile picture, and other data you consent to share when signing in'],
          ],
        },
      },
      {
        heading: '9. Planned AI (LLM)-Based Features',
        paragraphs: [
          'To provide more personalized emotional-analysis reports, we may in the future introduce an AI (LLM)-based analysis system. If we do, some of your mood record data — such as your mind-weather state, body reactions, emotions, and trigger notes — may be transmitted to and processed by an AI service provider\'s servers, which may be located inside or outside your country.',
          'Before launching such a feature, we will update this Policy in advance to specify the AI provider, whether it is a processor or a separate recipient, the purpose of processing, the categories of data transmitted, the retention period, and whether the data leaves your country, and we will obtain your separate consent wherever required by law. You may decline; doing so will only limit the AI-based report feature and will not affect the rest of the Service.',
        ],
      },
      {
        heading: '10. International Data Transfers',
        paragraphs: [
          'We use Supabase, Inc., a U.S. company, for cloud infrastructure, which means your personal data may be stored and processed outside your home country. Where required (e.g., under PIPA Art. 28-8 or GDPR Chapter V), we provide the following disclosures and rely on appropriate safeguards such as standard contractual clauses or the processor\'s certified compliance program.',
        ],
        table: {
          headers: ['Item', 'Details'],
          rows: [
            ['Recipient', 'Supabase, Inc.'],
            ['Destination country', '[Confirm the actual data-storage region in your Supabase project settings and insert it here — e.g., United States, Singapore]'],
            ['Timing and method', 'Real-time transfer over encrypted connections (HTTPS/TLS) while you use the App'],
            ['Purpose', 'Cloud database operation and user authentication'],
            ['Retention', 'Until the service agreement ends or you request deletion'],
            ['Your options', 'You may decline cross-device/account features that rely on cloud sync and use the App in guest mode with local-only storage instead.'],
          ],
        },
      },
      {
        heading: '11. Your Rights',
        paragraphs: ['Depending on your location, you may have the right to:'],
        list: [
          'Access, correct, or delete your personal information',
          'Restrict or object to our processing of your information',
          'Withdraw consent at any time (e.g., disconnect a social sign-in, withdraw consent to sensitive-data processing)',
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
            ['Face ID / Touch ID', 'App lock and identity verification before permanent data deletion', 'Optional'],
            ['Notifications', 'Mindfulness reminders', 'Optional'],
          ],
        },
      },
      {
        heading: '14. Tracking, Analytics, and Advertising',
        paragraphs: [
          'The App does not use web cookies and does not track you using advertising identifiers (e.g., IDFA). We do not currently use any third-party analytics or advertising SDKs. If we introduce such tools in the future, we will update this Policy in advance and request any consent required by law (including Apple\'s App Tracking Transparency framework, where applicable).',
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
            ['Privacy contact', '[Insert name/title]'],
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
  },
};
