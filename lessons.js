// === 전체 학습 콘텐츠 ===
// 각 레슨의 HTML 콘텐츠를 담고 있습니다.
// lesson-1-1, lesson-1-2는 index.html에 직접 작성되어 있으므로 여기서 제외.

const LESSON_CONTENT = {

'1-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 1-1에서 Ghostty를, 1-2에서 tmux 레이아웃을 잡았음 &mdash; 이제 그 안에서 Claude Code를 효율적으로 쓰는 패턴을 익힐 차례</li>
    <li>Claude Code는 터미널 기반 도구이므로, tmux와 결합하면 작업 효율이 크게 올라감</li>
    <li>이 패턴들이 Phase 3(멀티 에이전트)의 기반이 됨</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">핵심 패턴 4가지</div>

  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>패턴 1: 분할 작업 (Split Work)</code></div>
      <div class="option-desc">
        tmux pane을 세로 분할하여, 한쪽에서 Claude Code 실행, 다른 쪽에서 결과 확인 또는 수동 작업.
        <br><kbd>Ctrl+Space</kbd> &rarr; <kbd>%</kbd>로 분할 후, 한쪽에서 <code>claude</code> 실행.
        <br>Claude Code가 파일을 수정하면, 반대 pane에서 <code>git diff</code>나 에디터로 바로 확인 가능.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>패턴 2: Zoom 집중 (Prefix + z)</code></div>
      <div class="option-desc">
        Claude Code 출력이 길 때, <kbd>Prefix + z</kbd>로 해당 pane을 전체 화면으로 확대.
        <br>다시 <kbd>Prefix + z</kbd>를 누르면 원래 레이아웃으로 복원.
        <br>코드 리뷰나 긴 출력을 읽을 때 유용.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>패턴 3: 멀티 윈도우 전환</code></div>
      <div class="option-desc">
        Window 0에서 Claude Code 실행, Window 1에서 문서 편집, Window 2에서 git 관리.
        <br><kbd>Prefix + 0</kbd>, <kbd>Prefix + 1</kbd>로 빠르게 전환.
        <br>Claude Code가 작업 중일 때 다른 윈도우에서 다른 일을 할 수 있음.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>패턴 4: 복사 모드 활용</code></div>
      <div class="option-desc">
        Claude Code 출력에서 특정 부분만 복사하고 싶을 때:
        <br><kbd>Prefix + [</kbd>로 복사 모드 진입 &rarr; <kbd>v</kbd>로 선택 시작 &rarr; 이동 &rarr; <kbd>y</kbd>로 복사.
        <br>복사된 내용은 시스템 클립보드에 들어감 (Jack님의 tmux.conf에 <code>pbcopy</code> 설정이 이미 있음).
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">Claude Code + tmux 실전 워크플로우</div>
  <div class="code-block">
    <div class="code-header"><span>일반적인 작업 흐름</span></div>
    <pre><code># 1. study 세션에 진입
tmux attach -t study

# 2. claude 윈도우에서 작업 시작 (Window 0)
#    좌측 pane: Claude Code
#    우측 pane: 셸

# 3. Claude Code에게 작업 지시
#    "이 프로젝트의 구조를 분석해줘"
#    "index.html에 새 섹션을 추가해줘"

# 4. Claude Code가 작업 중일 때
#    Prefix + 1 → 다른 윈도우에서 다른 작업
#    또는 우측 pane에서 git status 확인

# 5. 작업 완료 후 결과 확인
#    우측 pane에서: git diff
#    또는 브라우저에서 결과 확인</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">Claude Code 세션 관리 명령어</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>claude --continue</code></div>
      <div class="option-desc">가장 최근 대화를 이어서 진행. 실수로 Claude Code를 닫았을 때 유용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>claude --resume</code></div>
      <div class="option-desc">이전 세션 목록에서 선택하여 재개. 여러 세션 중 특정 것을 이어받을 때.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>/compact</code></div>
      <div class="option-desc">긴 대화를 압축하여 컨텍스트 윈도우 절약. 대화가 길어졌을 때 실행.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>/cost</code></div>
      <div class="option-desc">현재 세션의 토큰 사용량과 비용 확인. 비용 감각을 키우는 데 유용.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>분할 작업 패턴 연습</strong>
        <p>tmux에서 세로 분할 후, 좌측에서 <code>claude</code> 실행. 우측에서 <code>watch -n1 ls -la</code>를 실행하여 Claude Code가 파일을 수정하는 것을 실시간으로 관찰하세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Zoom 모드 전환</strong>
        <p>Claude Code pane에서 <kbd>Prefix + z</kbd>로 전체 화면 확대 &rarr; 출력 확인 &rarr; 다시 <kbd>Prefix + z</kbd>로 복원하는 연습을 하세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>세션 이어받기</strong>
        <p>Claude Code 세션에서 간단한 작업을 하고, <kbd>Ctrl+C</kbd>로 종료한 뒤, <code>claude --continue</code>로 이어서 진행해보세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Claude Code가 긴 작업을 수행 중일 때, 다른 작업을 하려면 어떻게 하는가?</summary>
      <div class="quiz-answer">
        두 가지 방법이 있습니다:<br>
        1. <strong>다른 tmux 윈도우로 전환</strong>: <kbd>Prefix + c</kbd>로 새 윈도우를 만들거나 <kbd>Prefix + 1</kbd>로 기존 윈도우로 이동<br>
        2. <strong>다른 tmux pane에서 작업</strong>: 분할된 반대쪽 pane으로 이동 (<kbd>Prefix + 방향키</kbd>)<br>
        Claude Code는 백그라운드에서 계속 실행되며, 완료되면 알림음이 울립니다 (Stop hook 설정).
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. <code>claude --continue</code>와 <code>claude --resume</code>의 차이는?</summary>
      <div class="quiz-answer">
        <strong><code>--continue</code></strong>: 가장 최근 대화를 자동으로 이어감. 별도 선택 없이 바로 진입.<br>
        <strong><code>--resume</code></strong>: 이전 세션 목록을 보여주고, 원하는 세션을 선택하여 이어감. 여러 프로젝트를 오가며 작업할 때 유용.
      </div>
    </details>
  </div>
</div>
`,

'1-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>지금까지 만든 tmux 레이아웃이 재부팅하면 사라짐 &mdash; 영속성이 없으면 매번 환경을 재구성해야 함</li>
    <li>Jack님의 tmux.conf에 이미 resurrect/continuum 플러그인이 설정되어 있음 &mdash; 제대로 활용법을 익힐 차례</li>
    <li>Phase 5(모바일)에서 세션을 이어받으려면 안정적인 세션 유지가 전제</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">tmux-resurrect와 tmux-continuum</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>tmux-resurrect</code></div>
      <div class="option-desc">
        tmux 환경(세션, 윈도우, pane 레이아웃, 작업 디렉토리)을 수동으로 저장/복원하는 플러그인.
        <ul>
          <li><kbd>Prefix + Ctrl+s</kbd> &mdash; 환경 저장</li>
          <li><kbd>Prefix + Ctrl+r</kbd> &mdash; 환경 복원</li>
        </ul>
        저장 위치: <code>~/.tmux/resurrect/</code> 디렉토리에 텍스트 파일로 저장됨.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>tmux-continuum</code></div>
      <div class="option-desc">
        resurrect를 자동화하는 플러그인. 15분마다 자동 저장하며, tmux 서버 시작 시 자동 복원 가능.
        <ul>
          <li>자동 저장: 기본 15분 간격</li>
          <li>자동 복원: <code>set -g @continuum-restore 'on'</code> 설정 시</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="callout callout-warn">
    <strong>주의:</strong> resurrect가 복원하는 것은 레이아웃과 디렉토리입니다. 실행 중이던 프로세스(Claude Code 등)는 복원되지 않습니다. Claude Code는 <code>claude --continue</code>로 이어받아야 합니다.
  </div>
</div>

<div class="card">
  <div class="card-title">추천 설정</div>
  <div class="code-block">
    <div class="code-header">
      <span>~/.tmux.conf에 추가</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># === Resurrect/Continuum 설정 ===
# 자동 복원 활성화
set -g @continuum-restore 'on'

# 저장 간격 (분)
set -g @continuum-save-interval '10'

# pane 내용도 저장
set -g @resurrect-capture-pane-contents 'on'

# 저장 시 알림 표시 안 함 (깔끔하게)
set -g @continuum-save-no-notify 'on'</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>수동 저장/복원 테스트</strong>
        <p>tmux에서 여러 윈도우와 pane을 만든 뒤, <kbd>Prefix + Ctrl+s</kbd>로 저장. tmux 서버를 완전히 종료(<code>tmux kill-server</code>) 후, 다시 <code>tmux</code> 실행 &rarr; <kbd>Prefix + Ctrl+r</kbd>로 복원되는지 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>자동 복원 테스트</strong>
        <p><code>@continuum-restore 'on'</code> 설정 후, tmux 서버를 종료하고 다시 시작하면 자동으로 이전 레이아웃이 복원되는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Mac을 재부팅한 후 Ghostty를 열면 어떤 일이 순서대로 일어나는가?</summary>
      <div class="quiz-answer">
        1. Ghostty가 열리면서 <code>command = tmux new-session -A -s main</code> 실행<br>
        2. tmux 서버가 새로 시작됨 (재부팅이므로 이전 서버 없음)<br>
        3. tmux-continuum이 자동 복원을 시도 (<code>@continuum-restore 'on'</code>인 경우)<br>
        4. 이전에 저장된 레이아웃(세션, 윈도우, pane, 디렉토리)이 복원됨<br>
        5. 하지만 Claude Code 등 실행 중이던 프로세스는 복원되지 않으므로, 필요한 프로그램은 수동으로 다시 시작해야 함
      </div>
    </details>
  </div>
</div>
`,

'1-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Ghostty와 tmux 모두 단축키를 사용함 &mdash; 충돌하면 의도와 다른 동작이 발생</li>
    <li>정리해두면 손에 익어서 작업 속도가 크게 향상됨</li>
    <li>이후 모든 학습에서 단축키를 자연스럽게 사용하기 위한 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">키바인딩 계층 구조</div>
  <p class="card-desc">키 입력은 아래 순서로 처리됩니다. 위에서 먼저 잡히면 아래로 전달되지 않습니다.</p>
  <div class="architecture">
    <div class="arch-layer arch-ghostty">
      <div class="arch-label">1. Ghostty</div>
      <div class="arch-desc">Cmd 조합 (Cmd+T, Cmd+W 등) &mdash; macOS 네이티브</div>
    </div>
    <div class="arch-arrow">&#9660;</div>
    <div class="arch-layer arch-tmux">
      <div class="arch-label">2. tmux</div>
      <div class="arch-desc">Prefix(Ctrl+Space) 후 키 &mdash; tmux가 처리</div>
    </div>
    <div class="arch-arrow">&#9660;</div>
    <div class="arch-layer arch-claude">
      <div class="arch-label">3. Claude Code / 셸</div>
      <div class="arch-desc">나머지 키 입력 &mdash; 실행 중인 프로그램이 처리</div>
    </div>
  </div>
  <div class="callout callout-tip">
    <strong>핵심:</strong> Ghostty는 <kbd>Cmd</kbd> 조합, tmux는 <kbd>Ctrl+Space</kbd> 후 키를 사용하므로 기본적으로 충돌하지 않습니다. 문제는 <kbd>Ctrl</kbd> 조합에서 발생할 수 있습니다.
  </div>
</div>

<div class="card">
  <div class="card-title">주요 키바인딩 정리</div>
  <div class="compare-table">
    <div class="compare-header">
      <div>동작</div>
      <div>Ghostty</div>
      <div>tmux</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">세로 분할</div>
      <div>Cmd+D</div>
      <div>Prefix + %</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">가로 분할</div>
      <div>Cmd+Shift+D</div>
      <div>Prefix + "</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">새 탭/윈도우</div>
      <div>Cmd+T</div>
      <div>Prefix + c</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">pane 최대화</div>
      <div>Cmd+Shift+Enter</div>
      <div>Prefix + z</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">닫기</div>
      <div>Cmd+W</div>
      <div>Prefix + x</div>
    </div>
  </div>
  <div class="callout callout-info">
    <strong>전략:</strong> tmux 분할을 주력으로 사용하세요. Ghostty 분할(Cmd+D)은 tmux 바깥의 완전히 독립된 터미널이 필요할 때만 사용합니다.
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. tmux Prefix가 Ctrl+Space인데, Spotlight(Ctrl+Space)와 충돌하지 않는가?</summary>
      <div class="quiz-answer">
        macOS Spotlight 기본 단축키는 <kbd>Cmd+Space</kbd>이지, <kbd>Ctrl+Space</kbd>가 아닙니다. 다만, 입력 소스 전환이 <kbd>Ctrl+Space</kbd>로 설정되어 있을 수 있으므로, 시스템 설정 &gt; 키보드 &gt; 단축키에서 확인하고 비활성화하는 것이 좋습니다.
      </div>
    </details>
  </div>
</div>
`,

'1-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 1의 마지막 단계 &mdash; 지금까지 배운 Ghostty, tmux, Claude Code 통합을 실전으로 조합</li>
    <li>이 워크스페이스가 Phase 2~5 학습의 실제 작업 환경이 됨</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">최종 워크스페이스 구조</div>
  <div class="code-block">
    <div class="code-header"><span>권장 세션 구조</span></div>
    <pre><code>Ghostty 실행 → tmux 자동 진입 (main 세션)

Session: main
  └── Window 0: misc — 일회성 작업, 시스템 관리

Session: study
  ├── Window 0: claude — Claude Code 학습
  │     ├── Pane 0: claude (Claude Code)
  │     └── Pane 1: shell (테스트, git)
  └── Window 1: browser — open index.html 등

Session: runuts
  ├── Window 0: claude — Claude Code (PM 작업)
  │     ├── Pane 0: claude
  │     └── Pane 1: shell
  └── Window 1: manage — 프로젝트 관리</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습: 전체 환경 구축</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Claude Code에게 워크스페이스 스크립트 작성 요청</strong>
        <p>Claude Code 세션에서: "위 구조대로 tmux 워크스페이스를 자동 생성하는 스크립트를 만들어줘"</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Ghostty 설정 최종 확인</strong>
        <p>Ghostty를 재시작하여 tmux 자동 진입, 테마 통일, 클립보드 연동이 모두 정상 동작하는지 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>resurrect로 저장</strong>
        <p>모든 세션/윈도우/pane을 구성한 뒤, <kbd>Prefix + Ctrl+s</kbd>로 저장. Mac을 재부팅해도 복원되는지 테스트.</p>
      </div>
    </div>
  </div>
</div>
`,

'2-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>CLAUDE.md는 Claude Code의 행동을 결정하는 가장 중요한 파일</li>
    <li>Jack님은 이미 RUNuts 프로젝트에서 CLAUDE.md를 작성해 사용 중이지만, 체계적 설계 원칙을 학습하면 더 효과적으로 활용 가능</li>
    <li>Phase 3(에이전트 팀)에서 각 에이전트별 CLAUDE.md를 설계하는 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">CLAUDE.md 계층 구조</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/CLAUDE.md</code> (전역)</div>
      <div class="option-desc">모든 프로젝트에 적용. 언어 설정, 작업 스타일, 사용자 정보 등 개인 선호도를 작성.<br>Jack님의 현재 설정: 한국어 답변, 코드 주석 한국어, git commit 한국어 등.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>프로젝트/CLAUDE.md</code> (프로젝트)</div>
      <div class="option-desc">특정 프로젝트에만 적용. 프로젝트 구조, 규칙, 데이터 소스 등을 작성.<br>전역 CLAUDE.md보다 <strong>우선 적용</strong>됨.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>프로젝트/하위폴더/CLAUDE.md</code> (하위)</div>
      <div class="option-desc">하위 디렉토리에도 배치 가능. 해당 디렉토리 작업 시 추가로 로드됨.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">효과적인 CLAUDE.md 작성 패턴</div>
  <div class="code-block">
    <div class="code-header">
      <span>프로젝트 CLAUDE.md 템플릿</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 프로젝트명

## 프로젝트 개요
- 한 줄 설명
- 기술 스택: ...
- 주요 디렉토리 구조

## 역할 정의
이 프로젝트에서 Claude Code는 [역할]로 동작한다.

## 핵심 규칙
- 파일 수정 전 반드시 계획을 먼저 설명
- 테스트 없이 코드를 배포하지 않음
- [프로젝트 특화 규칙]

## 금지 사항
- [절대 하면 안 되는 것]
- [주의해야 할 것]

## 자주 쓰는 명령어
- 빌드: \`npm run build\`
- 테스트: \`npm test\`</code></pre>
  </div>

  <div class="callout callout-tip">
    <strong>팁:</strong> CLAUDE.md는 짧을수록 좋습니다. Claude Code가 매 대화에서 읽으므로, 핵심만 담으세요. 200줄 이하를 권장합니다.
  </div>
</div>

<div class="card">
  <div class="card-title">흔한 실수</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>너무 긴 CLAUDE.md</code></div>
      <div class="option-desc">500줄 이상의 CLAUDE.md는 컨텍스트를 낭비하고, 핵심 규칙이 묻힐 수 있음. 필수적인 것만 남기고 나머지는 별도 문서로 분리.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>모호한 지시</code></div>
      <div class="option-desc">"좋은 코드를 작성해" → 구체적이지 않아 효과 없음.<br>"함수는 20줄 이하, 매개변수는 3개 이하로 작성" → 명확하고 검증 가능.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>전역과 프로젝트의 혼동</code></div>
      <div class="option-desc">모든 규칙을 전역 CLAUDE.md에 넣으면 프로젝트 간 규칙이 충돌할 수 있음. 전역에는 개인 선호도만, 프로젝트별 규칙은 프로젝트 CLAUDE.md에 작성.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 전역 CLAUDE.md 검토</strong>
        <p>Claude Code에게 "현재 전역 CLAUDE.md를 읽어서 개선점을 제안해줘"라고 요청하세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>학습 프로젝트용 CLAUDE.md 개선</strong>
        <p>이 학습 프로젝트의 CLAUDE.md를 위 템플릿을 참고하여 개선하세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 전역 CLAUDE.md에 "항상 영어로 답변해"라고 쓰고, 프로젝트 CLAUDE.md에 "한국어로 답변해"라고 쓰면 어떻게 되는가?</summary>
      <div class="quiz-answer">
        프로젝트 CLAUDE.md가 우선 적용되므로, 해당 프로젝트에서는 한국어로 답변합니다. 하지만 두 지시가 직접 충돌하므로, 전역에서는 "기본 한국어"만 쓰고, 특정 프로젝트에서 영어가 필요하면 해당 프로젝트 CLAUDE.md에서 오버라이드하는 것이 깔끔합니다.
      </div>
    </details>
  </div>
</div>
`,

'2-2': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>settings.json은 Claude Code의 동작을 시스템 수준에서 제어하는 핵심 파일</li>
    <li>Jack님은 이미 hooks, permissions를 설정 중이지만, 전체 옵션을 체계적으로 파악하면 활용 범위가 넓어짐</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">settings.json 계층</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/settings.json</code></div>
      <div class="option-desc">전역 설정. 모든 프로젝트에 적용. git에 커밋하지 않는 개인 설정.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>~/.claude/settings.local.json</code></div>
      <div class="option-desc">전역 로컬 설정. settings.json과 동일하나, 머신별로 다른 설정을 넣을 때 사용. 두 파일이 합쳐져서(merge) 적용됨.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>.claude/settings.json</code> (프로젝트)</div>
      <div class="option-desc">프로젝트별 설정. git에 커밋하여 팀 공유 가능. 전역과 합쳐서 적용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>.claude/settings.local.json</code> (프로젝트 로컬)</div>
      <div class="option-desc">프로젝트별 로컬 설정. git에 커밋하지 않는 개인 오버라이드.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">주요 설정 키</div>
  <div class="code-block">
    <div class="code-header"><span>settings.json 구조</span></div>
    <pre><code>{
  "permissions": {
    "allow": [...],      // 자동 허용할 도구/명령어
    "deny": [...]        // 차단할 도구/명령어
  },
  "hooks": {
    "PreToolUse": [...], // 도구 실행 전 훅
    "PostToolUse": [...],// 도구 실행 후 훅
    "Notification": [...],// 알림 훅
    "Stop": [...]        // 세션 종료 시 훅
  },
  "env": {               // 환경 변수
    "KEY": "value"
  }
}</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 설정 분석</strong>
        <p>Claude Code에게 "현재 ~/.claude/settings.json을 분석해서 각 설정이 무엇을 하는지 설명해줘"라고 요청하세요.</p>
      </div>
    </div>
  </div>
</div>
`,

'2-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Hooks는 Claude Code의 동작을 자동화하는 핵심 메커니즘</li>
    <li>Jack님은 이미 Stop hook(알림음)을 사용 중 &mdash; 이제 전체 hook 유형을 마스터할 차례</li>
    <li>Phase 4(자동화 파이프라인)의 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Hook 유형 전체 맵</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>PreToolUse</code></div>
      <div class="option-desc">
        Claude Code가 도구(Bash, Read, Write, Edit 등)를 실행하기 <strong>직전</strong>에 실행.
        <br>용도: 특정 명령어 차단, 실행 전 검증, 로깅.
        <br>exit code 2를 반환하면 도구 실행을 차단할 수 있음.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>PostToolUse</code></div>
      <div class="option-desc">
        도구 실행이 완료된 <strong>직후</strong>에 실행.
        <br>용도: 파일 변경 후 자동 포맷팅, 린팅, 테스트 실행.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Notification</code></div>
      <div class="option-desc">
        Claude Code가 사용자에게 알림을 보낼 때 실행.
        <br>용도: 슬랙 알림, 데스크톱 알림, 모바일 푸시.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Stop</code></div>
      <div class="option-desc">
        Claude Code가 응답을 완료했을 때 실행. Jack님이 이미 사용 중 (알림음).
        <br>용도: 완료 알림, 로그 기록.
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">Hook 설정 구조</div>
  <div class="code-block">
    <div class="code-header">
      <span>settings.json hooks 예시</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo \\"실행될 명령어: $CLAUDE_TOOL_INPUT\\" >> ~/claude-log.txt"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo \\"파일 수정됨\\" >> ~/claude-log.txt"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff &"
          }
        ]
      }
    ]
  }
}</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">Hook에서 사용 가능한 환경변수</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>$CLAUDE_TOOL_NAME</code></div>
      <div class="option-desc">실행되는 도구 이름 (Bash, Write, Edit, Read 등)</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>$CLAUDE_TOOL_INPUT</code></div>
      <div class="option-desc">도구에 전달되는 입력 (JSON 형식)</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>$CLAUDE_SESSION_ID</code></div>
      <div class="option-desc">현재 세션 ID</div>
    </div>
  </div>
  <div class="callout callout-warn">
    <strong>최신성 주의:</strong> Hook 환경변수는 Claude Code 버전에 따라 변경될 수 있습니다. 공식 문서를 참고하세요.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>PostToolUse hook 추가</strong>
        <p>Claude Code에게 "Write나 Edit 도구가 실행될 때마다 macOS 알림을 보내는 PostToolUse hook을 설정해줘"라고 요청하세요.</p>
      </div>
    </div>
  </div>
</div>
`,

'2-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Permissions는 Claude Code가 어떤 도구를 자동으로 실행할 수 있는지 결정</li>
    <li>잘 설계하면 매번 "허용하시겠습니까?" 팝업 없이 빠르게 작업 가능</li>
    <li>보안과 편의 사이의 균형을 잡는 전략을 학습</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Permission 패턴</div>
  <div class="code-block">
    <div class="code-header"><span>패턴 문법</span></div>
    <pre><code># 기본 형태
"Bash(명령어 패턴)"     # Bash 도구의 특정 명령어
"Read"                  # Read 도구 전체
"Edit"                  # Edit 도구 전체
"Write"                 # Write 도구 전체

# 와일드카드
"Bash(git *)"           # git으로 시작하는 모든 명령어
"Bash(npm run *)"       # npm run 하위 명령어 전체

# WebFetch 도메인 제한
"WebFetch(domain:docs.google.com)"</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">추천 Permission 전략</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>안전한 읽기 작업: 전부 allow</code></div>
      <div class="option-desc"><code>Read</code>, <code>Glob</code>, <code>Grep</code>, <code>Bash(ls *)</code>, <code>Bash(cat *)</code>, <code>Bash(git status)</code>, <code>Bash(git log *)</code> 등 읽기 전용 명령어는 안전하게 허용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>파일 수정: 프로젝트에 따라 판단</code></div>
      <div class="option-desc"><code>Edit</code>, <code>Write</code>는 허용하면 Claude Code가 자유롭게 파일을 수정. 개인 프로젝트에서는 보통 허용, 공유 프로젝트에서는 주의.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>위험한 작업: deny로 차단</code></div>
      <div class="option-desc"><code>Bash(rm -rf /)</code>, <code>Bash(sudo *)</code> 등 시스템을 손상시킬 수 있는 명령어는 deny 목록에 추가.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 permissions 분석</strong>
        <p>Claude Code에게 "현재 settings.json의 permissions를 분석하고, 빠져있는 유용한 allow 패턴을 제안해줘"라고 요청하세요.</p>
      </div>
    </div>
  </div>
</div>
`,

'2-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>MCP(Model Context Protocol)는 Claude Code를 외부 서비스(Notion, GitHub, DB 등)와 연결하는 표준</li>
    <li>Jack님은 이미 Notion MCP를 사용 중 &mdash; 더 많은 서비스를 연결하고 커스텀 MCP를 이해할 차례</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">MCP 서버 설정</div>
  <div class="code-block">
    <div class="code-header"><span>.mcp.json (프로젝트 루트)</span></div>
    <pre><code>{
  "mcpServers": {
    "서버이름": {
      "command": "실행_명령어",
      "args": ["인자1", "인자2"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}</code></pre>
  </div>
  <div class="callout callout-info">
    <strong>관리 명령어:</strong> <code>claude mcp add 이름 -- 명령어</code>로 추가, <code>claude mcp list</code>로 확인, <code>claude mcp remove 이름</code>로 삭제.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 MCP 서버 확인</strong>
        <p><code>claude mcp list</code>를 실행하여 현재 연결된 MCP 서버를 확인하세요.</p>
      </div>
    </div>
  </div>
</div>
`,

'2-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 2에서 배운 CLAUDE.md, settings.json, hooks, permissions, MCP를 실전 프로젝트에 조합하는 연습</li>
    <li>새 프로젝트를 시작할 때 하네스를 빠르게 구성할 수 있는 능력 확보</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">하네스 체크리스트</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>CLAUDE.md 작성</strong>
        <p>프로젝트 개요, 역할 정의, 핵심 규칙, 금지 사항을 200줄 이내로 작성</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>.claude/settings.json 구성</strong>
        <p>프로젝트별 permissions과 hooks 설정</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>MCP 서버 연동</strong>
        <p>프로젝트에 필요한 외부 서비스가 있다면 .mcp.json 설정</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>테스트</strong>
        <p>Claude Code를 실행하여 CLAUDE.md가 올바르게 로드되는지 확인 (<code>/status</code>)</p>
      </div>
    </div>
  </div>
</div>
`,

'2-7': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Claude Code의 memory 시스템은 세션 간 정보를 유지하는 메커니즘</li>
    <li>Jack님은 이미 MEMORY.md / SESSION_LOG.md 패턴을 사용 중 &mdash; Claude Code 내장 memory를 체계적으로 활용</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Claude Code Memory 시스템</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/projects/.../memory/</code></div>
      <div class="option-desc">프로젝트별 메모리 디렉토리. Claude Code가 자동으로 관리하며, 사용자/피드백/프로젝트/참조 4가지 유형의 메모리를 저장.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>MEMORY.md</code> (인덱스)</div>
      <div class="option-desc">메모리 파일들의 목록(인덱스). 매 대화 시 자동으로 로드되므로 200줄 이하로 유지.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>/memory</code> 명령어</div>
      <div class="option-desc">세션 내에서 <code>/memory</code>를 입력하면 현재 메모리 상태를 확인하고 편집 가능.</div>
    </div>
  </div>
  <div class="callout callout-tip">
    <strong>팁:</strong> "이것을 기억해"라고 말하면 Claude Code가 자동으로 적절한 메모리 유형으로 저장합니다.
  </div>
</div>
`,

'2-8': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Custom commands는 반복적인 작업을 슬래시 명령어로 자동화하는 강력한 기능</li>
    <li>자주 쓰는 프롬프트를 명령어로 만들면 매번 타이핑할 필요 없음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Custom Command 만들기</div>
  <div class="code-block">
    <div class="code-header">
      <span>~/.claude/commands/review.md</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>현재 git diff를 분석하고, 아래 기준으로 코드 리뷰를 해줘:
1. 버그 가능성
2. 보안 이슈
3. 성능 문제
4. 가독성

각 항목에 대해 문제가 없으면 "OK", 있으면 구체적 위치와 개선안을 제시해.</code></pre>
  </div>
  <p class="card-desc">위 파일을 만들면 <code>/review</code> 명령어로 사용 가능. 프로젝트별 명령어는 <code>.claude/commands/</code>에 작성.</p>

  <div class="callout callout-info">
    <strong>인자 전달:</strong> 명령어 파일에 <code>$ARGUMENTS</code>를 넣으면, <code>/review 파일경로</code>처럼 인자를 전달할 수 있습니다.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>나만의 Custom Command 만들기</strong>
        <p>Claude Code에게 "~/.claude/commands/ 디렉토리에 review.md 명령어를 만들어줘"라고 요청하세요. 그 후 <code>/review</code>를 실행하여 동작을 확인.</p>
      </div>
    </div>
  </div>
</div>
`,

'3-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 2에서 하네스를 마스터했으므로, 이제 여러 Claude Code 인스턴스를 활용하는 방법을 학습</li>
    <li>복잡한 작업을 분할하여 병렬 처리하면 생산성이 크게 향상</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Subagent란?</div>
  <p class="card-desc">Claude Code 내부에서 독립적인 컨텍스트로 실행되는 하위 에이전트입니다. 메인 대화의 컨텍스트를 소비하지 않고 별도의 작업을 수행합니다.</p>

  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>내부 Subagent (Agent Tool)</code></div>
      <div class="option-desc">
        Claude Code가 자체적으로 생성하는 하위 에이전트. 복잡한 탐색이나 분석을 위임할 때 사용.
        <br>사용자가 직접 제어하지 않고, Claude Code가 필요에 따라 자동 생성.
        <br>유형: Explore(코드 탐색), Plan(설계), general-purpose(범용).
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>외부 다중 인스턴스</code></div>
      <div class="option-desc">
        별도의 tmux pane/윈도우에서 독립적인 Claude Code를 실행.
        <br>각 인스턴스가 서로 다른 프로젝트나 작업을 동시에 수행.
        <br>Phase 3-2에서 자세히 다룸.
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">Subagent의 동작 원리</div>
  <div class="architecture">
    <div class="arch-layer arch-claude">
      <div class="arch-label">메인 Claude Code 세션</div>
      <div class="arch-desc">사용자와 대화, 전체 작업 관리</div>
    </div>
    <div class="arch-arrow">&#9660; 작업 위임</div>
    <div class="arch-layer arch-tmux" style="display:flex; gap:.5rem; background:none; border:none; padding:0;">
      <div style="flex:1; background: rgba(166,227,161,.1); border: 1px solid rgba(166,227,161,.2); border-radius: 6px; padding: .6rem; text-align:center;">
        <div style="font-weight:700; color:var(--green); font-size:.8rem;">Explore Agent</div>
        <div style="font-size:.72rem; color:var(--subtext0);">코드 탐색</div>
      </div>
      <div style="flex:1; background: rgba(166,227,161,.1); border: 1px solid rgba(166,227,161,.2); border-radius: 6px; padding: .6rem; text-align:center;">
        <div style="font-weight:700; color:var(--green); font-size:.8rem;">Plan Agent</div>
        <div style="font-size:.72rem; color:var(--subtext0);">설계/분석</div>
      </div>
      <div style="flex:1; background: rgba(166,227,161,.1); border: 1px solid rgba(166,227,161,.2); border-radius: 6px; padding: .6rem; text-align:center;">
        <div style="font-weight:700; color:var(--green); font-size:.8rem;">General Agent</div>
        <div style="font-size:.72rem; color:var(--subtext0);">범용 작업</div>
      </div>
    </div>
  </div>
  <div class="callout callout-info">
    <strong>핵심:</strong> 각 subagent는 독립 컨텍스트를 가지므로, 메인 세션의 컨텍스트 윈도우를 소비하지 않습니다. 결과만 메인으로 돌아옵니다.
  </div>
</div>
`,

'3-2': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>tmux를 활용하면 여러 Claude Code 인스턴스를 물리적으로 동시 운영할 수 있음</li>
    <li>서로 다른 프로젝트를 동시에 작업하거나, 같은 프로젝트의 다른 영역을 병렬 처리</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">다중 인스턴스 운영 패턴</div>
  <div class="code-block">
    <div class="code-header"><span>tmux 레이아웃</span></div>
    <pre><code># 세션 1: study 프로젝트
tmux new -s study -c ~/Documents/Projects/Claude\\ Code\\ Study
# → 여기서 claude 실행

# 세션 2: runuts 프로젝트 (별도 세션)
tmux new -s runuts -c ~/Documents/Projects/RUNuts
# → 여기서 또 다른 claude 실행

# 세션 간 전환
# Prefix + s → 세션 목록에서 선택</code></pre>
  </div>
  <div class="callout callout-warn">
    <strong>주의:</strong> 같은 프로젝트 디렉토리에서 여러 Claude Code를 동시에 실행하면 파일 충돌이 발생할 수 있습니다. 서로 다른 파일을 작업하도록 지시하세요.
  </div>
</div>
`,

'3-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Headless 모드(<code>claude -p</code>)는 비대화형으로 Claude Code를 실행 &mdash; 스크립트와 자동화의 기반</li>
    <li>Phase 4(자동화 파이프라인)에서 핵심적으로 사용</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Headless 모드 사용법</div>
  <div class="code-block">
    <div class="code-header">
      <span>기본 사용법</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 단일 프롬프트 실행
claude -p "현재 디렉토리의 파일 구조를 설명해줘"

# 파이프와 조합
cat error.log | claude -p "이 에러 로그를 분석해줘"

# 결과를 파일로 저장
claude -p "README.md 초안을 작성해줘" > README.md

# JSON 출력
claude -p "패키지 의존성을 분석해줘" --output-format json</code></pre>
  </div>
  <div class="callout callout-tip">
    <strong>활용 예시:</strong> git hook에서 커밋 메시지 자동 생성, CI/CD에서 코드 리뷰, 주기적 보고서 생성 등에 사용할 수 있습니다.
  </div>
</div>
`,

'3-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>어떤 작업을 subagent에 위임하고 어떤 것은 직접 할지 판단하는 기준이 필요</li>
    <li>효율적인 분할 전략은 전체 작업 시간을 크게 단축</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">분할 판단 기준</div>
  <div class="compare-table">
    <div class="compare-header">
      <div>기준</div>
      <div>메인에서 직접</div>
      <div>Subagent에 위임</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">복잡도</div>
      <div>간단한 수정, 한 파일</div>
      <div>여러 파일 탐색, 분석</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">의존성</div>
      <div>이전 결과에 의존</div>
      <div>독립적으로 수행 가능</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">컨텍스트</div>
      <div>대화 맥락이 필요</div>
      <div>맥락 없이 가능</div>
    </div>
  </div>
</div>
`,

'3-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>여러 Claude Code 인스턴스가 협업하려면 통신 방법이 필요</li>
    <li>파일 시스템을 매개체로 사용하는 패턴이 가장 실용적</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">에이전트 간 통신 패턴</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>공유 파일 패턴</code></div>
      <div class="option-desc">에이전트 A가 결과를 파일에 쓰고, 에이전트 B가 그 파일을 읽음. 가장 단순하고 안정적.<br>예: A가 <code>analysis.md</code>에 분석 결과를 쓰면, B가 이를 읽어서 구현.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>공유 CLAUDE.md 패턴</code></div>
      <div class="option-desc">모든 에이전트가 동일한 CLAUDE.md를 공유하여 규칙과 맥락을 일치시킴.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>SESSION_LOG 패턴</code></div>
      <div class="option-desc">각 에이전트가 작업 로그를 SESSION_LOG.md에 추가. 다음 에이전트가 이전 작업을 이해할 수 있음.</div>
    </div>
  </div>
</div>
`,

'3-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 3의 마무리 &mdash; 지금까지 배운 멀티 에이전트 기술을 실전으로 조합</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">실전 시나리오: 프로젝트 분석 + 구현</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Agent A (분석)</strong>
        <p>tmux 윈도우 0: Claude Code를 실행하여 프로젝트 구조를 분석하고 <code>analysis.md</code>에 결과 저장</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Agent B (구현)</strong>
        <p>tmux 윈도우 1: 분석 결과를 읽고 실제 코드를 작성</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>결과 통합</strong>
        <p>두 에이전트의 작업을 검토하고 병합</p>
      </div>
    </div>
  </div>
</div>
`,

'4-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 1~3의 기술을 일상 업무에 자연스럽게 녹이는 루틴을 설계</li>
    <li>PM으로서 매일 반복하는 작업을 Claude Code로 자동화</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">추천 일일 워크플로우</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">AM</div>
      <div class="step-content">
        <strong>오전 루틴</strong>
        <p>Ghostty 열기 → tmux 자동 진입 → <code>claude --continue</code>로 어제 세션 이어받기 → 오늘 할 일 정리</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">PM</div>
      <div class="step-content">
        <strong>오후 루틴</strong>
        <p>작업 결과 정리 → 진행 상황 기록 → <code>/compact</code>로 컨텍스트 정리 → tmux detach</p>
      </div>
    </div>
  </div>
</div>
`,

'4-2': `
<div class="card">
  <div class="card-title">세션 연속성 고도화</div>
  <p class="card-desc">Claude Code의 내장 memory 시스템과 tmux-resurrect를 조합하면, 프로젝트 맥락이 세션을 넘어 유지됩니다.</p>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>세션 시작 시</code></div>
      <div class="option-desc"><code>claude --continue</code> 또는 <code>claude --resume</code>로 이전 대화 맥락을 로드. Memory 시스템이 자동으로 프로젝트 기억을 주입.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>세션 종료 시</code></div>
      <div class="option-desc">"오늘 작업 내용을 기억해"라고 말하면 Claude Code가 자동으로 memory에 저장. 다음 세션에서 이어받을 수 있음.</div>
    </div>
  </div>
</div>
`,

'4-3': `
<div class="card">
  <div class="card-title">MCP 생태계 활용</div>
  <p class="card-desc">Claude Code에 연결할 수 있는 주요 MCP 서비스들:</p>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Notion</code></div>
      <div class="option-desc">프로젝트 관리, 문서 작성. Jack님이 이미 사용 중.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>GitHub</code></div>
      <div class="option-desc">이슈 관리, PR 리뷰, 코드 검색.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Google Drive</code></div>
      <div class="option-desc">문서 검색, 파일 관리.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Figma</code></div>
      <div class="option-desc">디자인 컨텍스트 가져오기, 코드 생성.</div>
    </div>
  </div>
  <div class="callout callout-tip">
    <strong>설치:</strong> <code>claude mcp add</code> 명령어로 추가하거나, <code>.mcp.json</code> 파일에 직접 작성.</div>
</div>
`,

'4-4': `
<div class="card">
  <div class="card-title">자동화 파이프라인 구축</div>
  <p class="card-desc">Hooks + Headless 모드 + 스크립트를 조합하여 자동화 파이프라인을 만듭니다.</p>
  <div class="code-block">
    <div class="code-header"><span>자동화 예시: 매일 아침 프로젝트 상태 보고</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# daily-report.sh
cd ~/Documents/Projects/RUNuts

# Claude Code headless로 상태 보고서 생성
claude -p "
이 프로젝트의 현재 상태를 분석해줘:
1. 최근 변경된 파일
2. 열린 이슈
3. 다음에 해야 할 일
간결하게 요약해줘.
" > ~/daily-report-$(date +%Y%m%d).md

echo "보고서 생성 완료"</code></pre>
  </div>
</div>
`,

'4-5': `
<div class="card">
  <div class="card-title">프로젝트 템플릿 시스템</div>
  <p class="card-desc">새 프로젝트를 시작할 때 필요한 하네스 파일을 자동으로 생성하는 템플릿을 만듭니다.</p>
  <div class="code-block">
    <div class="code-header"><span>프로젝트 초기화 스크립트</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# init-project.sh [프로젝트명]
PROJECT=$1
mkdir -p "$PROJECT/.claude/commands"

# CLAUDE.md 생성
cat > "$PROJECT/CLAUDE.md" << 'TEMPLATE'
# $PROJECT

## 프로젝트 개요
- [설명 작성]

## 핵심 규칙
- 변경사항 적용 전에 계획을 먼저 설명
- 추측하지 않고, 확인되지 않은 내용은 명시
TEMPLATE

# settings.json 생성
cat > "$PROJECT/.claude/settings.json" << 'TEMPLATE'
{
  "permissions": {
    "allow": ["Read", "Edit", "Write", "Glob", "Grep"]
  }
}
TEMPLATE

echo "$PROJECT 프로젝트 초기화 완료"</code></pre>
  </div>
</div>
`,

'4-6': `
<div class="card">
  <div class="card-title">트러블슈팅 패턴</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>컨텍스트 윈도우 초과</code></div>
      <div class="option-desc">증상: 이전 대화를 기억하지 못함, 반복적인 질문.<br>해결: <code>/compact</code>로 압축하거나, <code>/clear</code> 후 핵심 맥락만 다시 전달.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>CLAUDE.md가 적용되지 않음</code></div>
      <div class="option-desc">증상: 설정한 규칙을 따르지 않음.<br>확인: <code>/status</code>로 로드된 파일 확인. 프로젝트 루트에서 실행하고 있는지 확인.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>MCP 서버 연결 실패</code></div>
      <div class="option-desc">증상: MCP 도구 호출 시 에러.<br>확인: <code>/mcp</code>로 서버 상태 확인. <code>claude mcp list</code>로 설정 확인.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Hook이 실행되지 않음</code></div>
      <div class="option-desc">증상: 설정한 hook이 동작하지 않음.<br>확인: settings.json 문법 오류 확인. 명령어 경로가 올바른지 확인. <code>type 명령어</code>로 실행 가능 여부 테스트.</div>
    </div>
  </div>
</div>
`,

'4-7': `
<div class="card">
  <div class="card-title">종합 실습: Sprint 계획 시뮬레이션</div>
  <p class="card-desc">Phase 1~4에서 배운 모든 기술을 통합하여 실제 Sprint 계획을 수행합니다.</p>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>환경 준비</strong>
        <p>tmux 워크스페이스 구성, CLAUDE.md 확인, MCP 서버 상태 점검</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>현황 분석</strong>
        <p>Claude Code에게 프로젝트 상태 분석 요청. Notion에서 백로그 가져오기 (MCP)</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>작업 분할 & 실행</strong>
        <p>분석 결과를 바탕으로 이번 스프린트 작업을 정의. 가능한 것은 Claude Code로 직접 실행</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>정리 & 기록</strong>
        <p>결과를 Notion에 기록, memory에 핵심 사항 저장, 다음 세션을 위한 컨텍스트 정리</p>
      </div>
    </div>
  </div>
</div>
`,

'5-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Mac에 SSH로 접속하면 모바일에서도 Claude Code 세션에 접근 가능</li>
    <li>tmux 세션이 살아있으므로, 어디서든 attach하여 이어서 작업할 수 있음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">macOS SSH 서버 활성화</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>원격 로그인 활성화</strong>
        <p>시스템 설정 → 일반 → 공유 → <strong>원격 로그인</strong> 활성화</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>SSH 키 인증 설정 (비밀번호 대신)</strong>
        <div class="code-block inline">
          <pre><code># 모바일 기기에서 키 생성 후, Mac에 공개키 등록
# Mac에서:
mkdir -p ~/.ssh
# 모바일 기기의 공개키를 authorized_keys에 추가
echo "공개키내용" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys</code></pre>
        </div>
      </div>
    </div>
  </div>
  <div class="callout callout-warn">
    <strong>보안:</strong> 외부 네트워크에서 접속하려면 VPN이나 Tailscale 같은 메시 VPN을 사용하는 것을 권장합니다. 포트포워딩으로 SSH를 직접 노출하는 것은 위험합니다.
  </div>
</div>
`,

'5-2': `
<div class="card">
  <div class="card-title">모바일에서 tmux 세션 이어받기</div>
  <div class="code-block">
    <div class="code-header"><span>SSH 접속 후 tmux attach</span></div>
    <pre><code># SSH 접속
ssh user@mac-ip-address

# tmux 세션 목록 확인
tmux ls

# 기존 세션에 연결
tmux attach -t study

# Claude Code가 실행 중이었다면 그대로 화면에 보임!
# 작업 중이던 대화를 이어서 진행 가능</code></pre>
  </div>
  <div class="callout callout-tip">
    <strong>핵심:</strong> 이것이 tmux의 진짜 힘입니다. PC에서 Claude Code로 작업을 시작하고, 이동 중에 모바일에서 결과를 확인하고, 다시 PC로 돌아와서 이어서 작업할 수 있습니다.
  </div>
</div>
`,

'5-3': `
<div class="card">
  <div class="card-title">추천 iOS/Android SSH 클라이언트</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Blink Shell (iOS)</code></div>
      <div class="option-desc">가장 강력한 iOS SSH 클라이언트. Mosh 지원 (불안정한 모바일 네트워크에서도 연결 유지), 키보드 커스터마이징, tmux 통합 우수. 유료($16) 또는 오픈소스 빌드.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Termius (iOS/Android)</code></div>
      <div class="option-desc">크로스 플랫폼. 깔끔한 UI, SFTP 지원, 연결 관리 편리. 기본 무료, 프리미엄 기능은 유료.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>JuiceSSH (Android)</code></div>
      <div class="option-desc">Android 전용. 가볍고 빠름, 스니펫 기능으로 자주 쓰는 명령어 저장 가능.</div>
    </div>
  </div>
</div>
`,

'5-4': `
<div class="card">
  <div class="card-title">모바일 친화적 tmux 설정</div>
  <p class="card-desc">작은 화면에서도 tmux를 편하게 사용하기 위한 조정:</p>
  <div class="code-block">
    <div class="code-header"><span>~/.tmux.conf 추가</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># === 모바일 접속 시 유용한 설정 ===
# 상태바 간소화 (모바일에서 공간 절약)
# 필요 시 별도 tmux 설정 파일로 분리 가능

# 마우스 지원 (터치 스크롤)
set -g mouse on

# pane 전환을 Alt+방향키로 (Prefix 없이)
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D</code></pre>
  </div>
  <div class="callout callout-tip">
    <strong>팁:</strong> 모바일에서는 pane 분할보다 윈도우 전환을 주로 사용하는 것이 편합니다. 화면이 작으므로 한 번에 하나의 pane만 보는 것이 가독성이 좋습니다. <kbd>Prefix + z</kbd>로 pane을 전체 화면으로 확대하세요.
  </div>
</div>
`,

'5-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Claude Code가 긴 작업을 수행할 때, 완료 여부를 모바일로 알 수 있으면 편리</li>
    <li>이미 Stop hook(알림음)을 사용 중이므로, 이를 확장하여 원격 알림까지 구현</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">알림 시스템 구축 방법</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>방법 1: ntfy.sh (무료, 간편)</code></div>
      <div class="option-desc">
        오픈소스 푸시 알림 서비스. 별도 설치 없이 <code>curl</code>만으로 모바일 푸시 알림 전송 가능.
        <div class="code-block inline">
          <pre><code># Stop hook에 추가
curl -d "Claude Code 작업 완료!" ntfy.sh/jack-claude-alerts</code></pre>
        </div>
        모바일에서 ntfy 앱 설치 후 <code>jack-claude-alerts</code> 토픽을 구독하면 알림을 받을 수 있음.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>방법 2: Slack Webhook</code></div>
      <div class="option-desc">Slack 채널로 완료 알림을 전송. 이미 Slack을 사용 중이라면 별도 앱 설치 없이 가능.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>방법 3: macOS 알림 + iPhone 연동</code></div>
      <div class="option-desc"><code>osascript -e 'display notification "완료" with title "Claude Code"'</code>로 macOS 알림을 생성. iPhone과 같은 Apple ID라면 알림이 연동될 수 있음.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">settings.json에 알림 Hook 설정</div>
  <div class="code-block">
    <div class="code-header"><span>Stop hook 확장 예시</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff & curl -s -d 'Claude Code 작업 완료!' ntfy.sh/jack-claude-alerts > /dev/null 2>&1 &"
          }
        ]
      }
    ]
  }
}</code></pre>
  </div>
  <div class="callout callout-info">
    <strong>이것으로 전체 학습 코스가 완성됩니다!</strong> Phase 1에서 시작한 터미널 환경이 Phase 5에서 모바일까지 확장되어, 어디서든 Claude Code를 활용할 수 있는 환경이 갖춰졌습니다.
  </div>
</div>
`

};
