// === 전체 학습 콘텐츠 ===
// 각 레슨의 HTML 콘텐츠를 담고 있습니다.
// lesson-1-1, lesson-1-2는 index.html에 직접 작성되어 있으므로 여기서 제외.

const LESSON_CONTENT = {

// ============================================================
// PHASE 1: 터미널 환경
// ============================================================

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
        5. Claude Code 등 실행 중이던 프로세스는 복원되지 않으므로, <code>claude --continue</code>로 수동 재시작 필요
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. resurrect 저장 파일은 어디에 있고, 수동으로 확인할 수 있는가?</summary>
      <div class="quiz-answer">
        <code>~/.tmux/resurrect/</code> 디렉토리에 <code>last</code> 심볼릭 링크와 타임스탬프된 파일이 있습니다. <code>cat ~/.tmux/resurrect/last</code>로 내용을 확인할 수 있으며, 각 줄이 세션/윈도우/pane의 상태를 나타냅니다.
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
  <div class="card-title">잠재적 충돌과 해결</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Ctrl+Space (입력 소스 전환 vs tmux Prefix)</code></div>
      <div class="option-desc">macOS에서 입력 소스 전환이 <kbd>Ctrl+Space</kbd>로 설정되어 있을 수 있음.<br>해결: 시스템 설정 &gt; 키보드 &gt; 단축키 &gt; 입력 소스에서 비활성화하거나 다른 키로 변경.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Ctrl+A/Ctrl+E (셸 이동 vs 다른 프로그램)</code></div>
      <div class="option-desc">Claude Code 내부에서도 줄 시작/끝 이동에 사용됨. tmux Prefix를 Ctrl+A로 쓰면 충돌하므로, Ctrl+Space가 좋은 선택.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>충돌 확인</strong>
        <p>시스템 설정 &gt; 키보드 &gt; 단축키에서 <kbd>Ctrl+Space</kbd>가 입력 소스 전환에 사용되는지 확인하고, 충돌 시 비활성화.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>손가락 훈련</strong>
        <p>아래 시퀀스를 10번 반복하세요: <kbd>Prefix + %</kbd>(분할) &rarr; <kbd>Prefix + 방향키</kbd>(이동) &rarr; <kbd>Prefix + z</kbd>(줌) &rarr; <kbd>Prefix + z</kbd>(복원) &rarr; <kbd>Prefix + x</kbd>(닫기).</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. tmux Prefix가 Ctrl+Space인데, Spotlight(Ctrl+Space)와 충돌하지 않는가?</summary>
      <div class="quiz-answer">
        macOS Spotlight 기본 단축키는 <kbd>Cmd+Space</kbd>이지, <kbd>Ctrl+Space</kbd>가 아닙니다. 다만, 입력 소스 전환이 <kbd>Ctrl+Space</kbd>로 설정되어 있을 수 있으므로, 시스템 설정에서 확인하고 비활성화하는 것이 좋습니다.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. Ghostty에서 Cmd+D로 분할한 것과 tmux에서 Prefix+%로 분할한 것의 근본적 차이는?</summary>
      <div class="quiz-answer">
        <strong>Ghostty 분할:</strong> 완전히 독립된 셸 프로세스가 생성됨. tmux 밖에 있으므로 detach/attach 불가, resurrect에 포함되지 않음.<br>
        <strong>tmux 분할:</strong> tmux 세션 안에서 분할. detach해도 유지, 원격에서 attach 가능, resurrect로 복원됨. 거의 모든 경우 tmux 분할을 사용해야 합니다.
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
  <div class="card-title">워크스페이스 자동 생성 스크립트</div>
  <div class="code-block">
    <div class="code-header"><span>~/bin/tmux-workspace.sh</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# tmux 워크스페이스 자동 생성

STUDY_DIR=~/Documents/Projects/Claude\\ Code\\ Study
RUNUTS_DIR=~/Documents/Projects/RUNuts\\ Project\\ Managing

# Study 세션
if ! tmux has-session -t study 2>/dev/null; then
  tmux new-session -d -s study -c "$STUDY_DIR"
  tmux rename-window -t study:0 claude
  tmux split-window -h -t study:0 -c "$STUDY_DIR"
  tmux new-window -t study -n docs -c "$STUDY_DIR"
  tmux select-window -t study:0
  tmux select-pane -t study:0.0
fi

# RUNuts 세션
if ! tmux has-session -t runuts 2>/dev/null; then
  tmux new-session -d -s runuts -c "$RUNUTS_DIR"
  tmux rename-window -t runuts:0 claude
  tmux split-window -h -t runuts:0 -c "$RUNUTS_DIR"
  tmux new-window -t runuts -n manage -c "$RUNUTS_DIR"
  tmux select-window -t runuts:0
fi

echo "워크스페이스 준비 완료!"
tmux ls</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>스크립트 생성 및 실행</strong>
        <p>Claude Code에게 "위 워크스페이스 스크립트를 ~/bin/tmux-workspace.sh에 만들고 실행 권한을 줘"라고 요청하세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>전체 환경 검증</strong>
        <p>스크립트 실행 후 <code>tmux ls</code>로 세션 목록 확인. <kbd>Prefix + s</kbd>로 세션 간 전환 테스트.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>resurrect 저장</strong>
        <p>전체 환경을 <kbd>Prefix + Ctrl+s</kbd>로 저장. 재부팅 후 자동 복원되는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Phase 1에서 배운 내용을 한 문장으로 요약한다면?</summary>
      <div class="quiz-answer">
        "Ghostty(터미널 앱)가 자동으로 tmux(세션 관리)에 진입하고, tmux 안에서 Claude Code(AI 에이전트)를 프로젝트별로 체계적으로 운영하며, 이 환경이 재부팅 후에도 자동 복원되는 워크스페이스를 구축했다."
      </div>
    </details>
  </div>
</div>
`,

// ============================================================
// PHASE 2: 하네스 엔지니어링
// ============================================================

'2-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>CLAUDE.md는 Claude Code의 행동을 결정하는 가장 중요한 파일</li>
    <li>Jack님은 이미 CLAUDE.md를 사용 중이지만, 설계 원칙을 체계적으로 학습하면 효과가 크게 달라짐</li>
    <li>Phase 3(에이전트 팀)에서 각 에이전트별 CLAUDE.md를 설계하는 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">CLAUDE.md 계층 구조</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/CLAUDE.md</code> (전역)</div>
      <div class="option-desc">모든 프로젝트에 적용. 언어 설정, 작업 스타일, 사용자 정보 등 개인 선호도.<br>Jack님의 현재 설정: 한국어 답변, 코드 주석 한국어, git commit 한국어.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>프로젝트/CLAUDE.md</code> (프로젝트)</div>
      <div class="option-desc">특정 프로젝트에만 적용. 프로젝트 구조, 규칙, 데이터 소스 등.<br><strong>전역보다 우선 적용됨.</strong></div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>하위폴더/CLAUDE.md</code> (하위)</div>
      <div class="option-desc">하위 디렉토리에도 배치 가능. 해당 디렉토리 작업 시 추가 로드.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">효과적인 CLAUDE.md 작성 원칙</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>원칙 1: 짧고 명확하게</code></div>
      <div class="option-desc">200줄 이하 권장. Claude Code가 매 대화에서 읽으므로 컨텍스트 낭비를 줄여야 함. 핵심 규칙만 남기고, 상세 문서는 별도 파일로 분리.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>원칙 2: 검증 가능한 규칙</code></div>
      <div class="option-desc">"좋은 코드를 작성해" &rarr; 모호하고 효과 없음.<br>"함수는 20줄 이하, 매개변수는 3개 이하" &rarr; 명확하고 검증 가능.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>원칙 3: 금지 사항 명시</code></div>
      <div class="option-desc">"~하지 마" 형태의 금지 규칙은 Claude Code가 잘 따르는 패턴. "프로덕션 DB에 직접 쿼리하지 마", "rm -rf를 사용하지 마" 등.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>원칙 4: 전역 vs 프로젝트 분리</code></div>
      <div class="option-desc">전역: 개인 선호도(언어, 스타일)만.<br>프로젝트: 해당 프로젝트만의 규칙, 구조, 명령어.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">프로젝트 CLAUDE.md 템플릿</div>
  <div class="code-block">
    <div class="code-header"><span>CLAUDE.md 템플릿</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 프로젝트명

## 프로젝트 개요
- 한 줄 설명
- 기술 스택: React, Node.js, PostgreSQL
- 주요 디렉토리: src/, tests/, docs/

## 역할 정의
이 프로젝트에서 Claude Code는 [역할]로 동작한다.

## 핵심 규칙
- 파일 수정 전 반드시 계획을 먼저 설명
- 테스트 없이 코드를 배포하지 않음
- [프로젝트 특화 규칙]

## 금지 사항
- rm -rf 사용 금지
- 프로덕션 환경 직접 접근 금지
- .env 파일 커밋 금지

## 자주 쓰는 명령어
- 빌드: \`npm run build\`
- 테스트: \`npm test\`
- 실행: \`npm run dev\`</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 전역 CLAUDE.md 검토</strong>
        <p>Claude Code에게 "현재 ~/.claude/CLAUDE.md를 읽어서 위 원칙 기준으로 개선점을 제안해줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>학습 프로젝트 CLAUDE.md 개선</strong>
        <p>이 Study 프로젝트의 CLAUDE.md를 위 템플릿을 참고하여 개선하세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 전역 CLAUDE.md에 "영어로 답변해"라고 쓰고, 프로젝트 CLAUDE.md에 "한국어로 답변해"라고 쓰면?</summary>
      <div class="quiz-answer">
        프로젝트 CLAUDE.md가 우선 적용되므로 한국어로 답변합니다. 하지만 직접 충돌하는 지시는 피하는 것이 좋습니다. 전역에는 "기본 한국어"만 쓰고, 영어가 필요한 프로젝트에서만 오버라이드하세요.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. CLAUDE.md가 300줄이 넘으면 어떤 문제가 생기는가?</summary>
      <div class="quiz-answer">
        Claude Code가 매 대화 시작 시 CLAUDE.md를 읽으므로, 길수록 컨텍스트 윈도우를 더 많이 차지합니다. 핵심 규칙이 다른 텍스트에 묻혀서 잘 따르지 않을 수도 있습니다. 200줄 이하로 유지하고, 상세 내용은 별도 문서로 분리하세요.
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
  <div class="card-title">settings.json 4계층</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/settings.json</code> (전역)</div>
      <div class="option-desc">모든 프로젝트에 적용. 개인 설정. git에 커밋하지 않음.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>~/.claude/settings.local.json</code> (전역 로컬)</div>
      <div class="option-desc">전역과 동일하나 머신별로 다른 설정용. settings.json과 merge되어 적용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>.claude/settings.json</code> (프로젝트)</div>
      <div class="option-desc">프로젝트별 설정. git에 커밋하여 팀 공유 가능.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>.claude/settings.local.json</code> (프로젝트 로컬)</div>
      <div class="option-desc">프로젝트별 개인 오버라이드. git에 커밋하지 않음.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">주요 설정 키 전체 맵</div>
  <div class="code-block">
    <div class="code-header"><span>settings.json 전체 구조</span></div>
    <pre><code>{
  "permissions": {
    "allow": [          // 자동 허용 도구/명령어 패턴
      "Read",           // Read 도구 전체 허용
      "Bash(git *)",    // git 명령어 허용
      "WebFetch(domain:docs.google.com)"  // 특정 도메인
    ],
    "deny": [           // 차단 패턴
      "Bash(rm -rf /)"
    ]
  },
  "hooks": {
    "PreToolUse": [],   // 도구 실행 전
    "PostToolUse": [],  // 도구 실행 후
    "Notification": [], // 알림 시
    "Stop": []          // 응답 완료 시
  },
  "env": {              // 환경 변수
    "NODE_ENV": "development"
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
        <p>Claude Code에게 "현재 ~/.claude/settings.json을 읽어서 각 설정이 무엇을 하는지 설명하고, 추가로 유용한 설정을 제안해줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>프로젝트별 설정 만들기</strong>
        <p>이 Study 프로젝트에 <code>.claude/settings.json</code>을 만들어서 프로젝트별 permissions를 설정해보세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 전역 settings.json에 allow된 패턴을 프로젝트 settings.json에서 deny하면?</summary>
      <div class="quiz-answer">
        전역과 프로젝트 설정은 <strong>merge</strong>됩니다. deny는 allow보다 우선하므로, 프로젝트에서 deny한 패턴은 전역에서 allow되었더라도 차단됩니다.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. settings.json과 settings.local.json의 사용 시나리오를 하나씩 들어보세요.</summary>
      <div class="quiz-answer">
        <strong>settings.json:</strong> 팀 전체가 공유해야 하는 프로젝트 규칙 (예: 위험한 명령어 deny 목록)<br>
        <strong>settings.local.json:</strong> 개인 머신에만 해당하는 설정 (예: 특정 로컬 경로의 MCP 서버, 개인 API 키 환경변수)
      </div>
    </details>
  </div>
</div>
`,

'2-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Hooks는 Claude Code의 동작을 자동화하는 핵심 메커니즘</li>
    <li>Jack님은 Stop hook(알림음)을 이미 사용 중 &mdash; 전체 hook 유형을 마스터할 차례</li>
    <li>Phase 4(자동화 파이프라인)의 핵심 빌딩 블록</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Hook 유형 전체 맵</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>PreToolUse</code></div>
      <div class="option-desc">
        도구 실행 <strong>직전</strong>에 실행. 용도: 특정 명령어 차단, 실행 전 검증, 로깅.<br>
        exit code 2를 반환하면 도구 실행을 <strong>차단</strong>할 수 있음.<br>
        <code>matcher</code>로 특정 도구만 필터링 가능 (예: <code>"Bash"</code>, <code>"Write"</code>).
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>PostToolUse</code></div>
      <div class="option-desc">
        도구 실행 완료 <strong>직후</strong>에 실행. 용도: 파일 변경 후 자동 포맷팅, 린팅, 테스트 실행.<br>
        <code>matcher</code>: <code>"Write|Edit"</code>처럼 파이프로 여러 도구를 지정 가능.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Notification</code></div>
      <div class="option-desc">
        Claude Code가 사용자에게 알림을 보낼 때 실행.<br>용도: Slack 알림, 데스크톱 알림, 모바일 푸시.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Stop</code></div>
      <div class="option-desc">
        Claude Code가 응답을 완료했을 때 실행. Jack님이 이미 사용 중 (알림음).<br>용도: 완료 알림, 작업 로그 기록.
      </div>
    </div>
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
</div>

<div class="card">
  <div class="card-title">실전 Hook 예시</div>
  <div class="code-block">
    <div class="code-header"><span>settings.json hooks 예시</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \\"파일이 수정되었습니다\\" with title \\"Claude Code\\"'"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo \\"[$(date)] Tool: $CLAUDE_TOOL_NAME\\" >> ~/.claude/hook-log.txt"
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
  <div class="callout callout-warn">
    <strong>최신성 주의:</strong> Hook 환경변수와 matcher 문법은 Claude Code 버전에 따라 변경될 수 있습니다. 공식 문서를 병행 참고하세요.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>PostToolUse hook 추가</strong>
        <p>Claude Code에게 "Write나 Edit 도구가 실행될 때마다 macOS 알림을 보내는 PostToolUse hook을 settings.json에 추가해줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>로깅 hook 추가</strong>
        <p>PreToolUse hook으로 모든 Bash 도구 실행을 <code>~/.claude/hook-log.txt</code>에 기록하는 설정을 추가해보세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>테스트</strong>
        <p>Claude Code에게 간단한 파일 수정을 요청하고, hook이 정상 동작하는지 확인. <code>cat ~/.claude/hook-log.txt</code>로 로그 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. PreToolUse hook에서 exit code 2를 반환하면 어떤 일이 발생하는가?</summary>
      <div class="quiz-answer">
        해당 도구의 실행이 <strong>차단</strong>됩니다. Claude Code는 "hook에 의해 차단되었습니다"라는 메시지를 받고, 대안을 찾거나 사용자에게 알립니다. 위험한 명령어를 자동 차단하는 안전장치로 활용할 수 있습니다.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. matcher에 "Write|Edit"처럼 파이프를 쓰면 어떤 의미인가?</summary>
      <div class="quiz-answer">
        OR 조건입니다. Write <strong>또는</strong> Edit 도구가 실행될 때 해당 hook이 트리거됩니다. 하나의 hook으로 여러 도구를 동시에 감시할 수 있습니다.
      </div>
    </details>
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
  <div class="card-title">Permission 패턴 문법</div>
  <div class="code-block">
    <div class="code-header"><span>패턴 예시</span></div>
    <pre><code># 도구 전체 허용
"Read"                          # Read 도구 전체
"Edit"                          # Edit 도구 전체

# Bash 명령어 패턴
"Bash(git *)"                   # git으로 시작하는 모든 명령어
"Bash(npm run *)"               # npm run 하위 전체
"Bash(ls *)"                    # ls 명령어

# 도메인 제한
"WebFetch(domain:docs.google.com)"

# 와일드카드
"Bash(python3 *)"               # python3 명령어 전체</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">추천 Permission 전략</div>
  <div class="compare-table">
    <div class="compare-header">
      <div>카테고리</div>
      <div>예시</div>
      <div>권장</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">읽기 전용</div>
      <div>Read, Glob, Grep, ls, cat</div>
      <div class="compare-good">항상 allow</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">파일 수정</div>
      <div>Edit, Write</div>
      <div class="compare-good">개인 프로젝트: allow</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">git</div>
      <div>git status/diff/log</div>
      <div class="compare-good">allow (읽기)</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">git push</div>
      <div>git push, git push --force</div>
      <div class="compare-bad">확인 필요 (allow 안 함)</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">시스템 파괴</div>
      <div>rm -rf, sudo</div>
      <div class="compare-bad">반드시 deny</div>
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
        <p>Claude Code에게 "현재 settings.json의 allow 목록을 카테고리별로 분류하고, 빠져있는 유용한 패턴을 제안해줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>deny 목록 강화</strong>
        <p>현재 deny 목록을 검토하고 부족한 항목을 추가. <code>Bash(sudo *)</code>, <code>Bash(rm -rf ~)</code> 등이 포함되어 있는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. <code>Bash(git *)</code>를 allow하면 <code>git push --force</code>도 자동 허용되는가?</summary>
      <div class="quiz-answer">
        네, <code>git *</code> 패턴은 git으로 시작하는 모든 명령어를 매칭합니다. force push를 차단하려면 별도로 <code>Bash(git push --force*)</code>를 deny에 추가해야 합니다. 또는 <code>Bash(git status)</code>, <code>Bash(git diff *)</code>, <code>Bash(git log *)</code>처럼 안전한 명령어만 개별 허용하는 방법도 있습니다.
      </div>
    </details>
  </div>
</div>
`,

'2-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>MCP(Model Context Protocol)는 Claude Code를 외부 서비스와 연결하는 표준 프로토콜</li>
    <li>Jack님은 Notion MCP를 이미 사용 중 &mdash; 더 많은 서비스를 연결하고 관리하는 법을 학습</li>
    <li>Phase 4에서 MCP 생태계를 실무에 활용하는 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">MCP 서버 설정 방법</div>
  <div class="code-block">
    <div class="code-header"><span>.mcp.json (프로젝트 루트)</span></div>
    <pre><code>{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_API_KEY": "secret_..."
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-filesystem", "/path/to/dir"]
    }
  }
}</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">MCP 관리 명령어</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>claude mcp add 이름 -- 명령어</code></div>
      <div class="option-desc">새 MCP 서버를 추가합니다. <code>-s project</code>로 프로젝트별, <code>-s user</code>로 전역 설정.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>claude mcp list</code></div>
      <div class="option-desc">현재 연결된 MCP 서버 목록을 확인합니다.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>claude mcp remove 이름</code></div>
      <div class="option-desc">MCP 서버를 제거합니다.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>/mcp</code> (세션 내)</div>
      <div class="option-desc">세션 내에서 MCP 서버 상태를 확인합니다.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">주요 MCP 서버 생태계</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Notion MCP</code></div>
      <div class="option-desc">Notion 페이지/DB 검색, 생성, 수정. Jack님이 이미 사용 중.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Filesystem MCP</code></div>
      <div class="option-desc">특정 디렉토리의 파일 시스템에 접근. 프로젝트 외부 파일 접근 시 유용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Google Drive MCP</code></div>
      <div class="option-desc">Google Drive 문서 검색 및 읽기.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>GitHub MCP</code></div>
      <div class="option-desc">이슈 관리, PR 리뷰, 코드 검색. <code>gh</code> CLI보다 더 자연스럽게 통합.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 MCP 서버 확인</strong>
        <p>터미널에서 <code>claude mcp list</code>를 실행하고, Claude Code 세션에서 <code>/mcp</code>를 입력하여 상태를 비교.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>새 MCP 서버 추가 실습</strong>
        <p>Filesystem MCP를 추가해보세요: <code>claude mcp add filesystem -- npx -y @anthropic/mcp-server-filesystem ~/Documents</code></p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. .mcp.json과 settings.json의 MCP 설정의 차이는?</summary>
      <div class="quiz-answer">
        <code>.mcp.json</code>은 프로젝트 루트에 두는 <strong>프로젝트별</strong> MCP 설정입니다. 해당 디렉토리에서 Claude Code를 실행할 때만 적용됩니다.<br>
        <code>settings.json</code>의 MCP 설정(<code>claude mcp add -s user</code>)은 <strong>전역</strong>으로, 모든 프로젝트에서 해당 MCP 서버를 사용할 수 있습니다.
      </div>
    </details>
  </div>
</div>
`,

'2-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 2에서 배운 모든 요소(CLAUDE.md, settings, hooks, permissions, MCP)를 하나의 프로젝트에 조합하는 실전 연습</li>
    <li>새 프로젝트를 시작할 때 "하네스를 빠르게 구성하는 능력"을 기르는 것이 목표</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">하네스 구성 체크리스트</div>
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
        <p>프로젝트별 permissions(allow/deny)과 필요한 hooks 설정</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>.mcp.json 설정</strong>
        <p>프로젝트에 필요한 외부 서비스(Notion, GitHub 등) 연동</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>Custom Commands 작성</strong>
        <p><code>.claude/commands/</code>에 프로젝트 전용 슬래시 명령어 추가</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">5</div>
      <div class="step-content">
        <strong>검증</strong>
        <p>Claude Code를 실행하여 <code>/status</code>로 CLAUDE.md 로드 확인, <code>/mcp</code>로 MCP 상태 확인</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Study 프로젝트 하네스 완성</strong>
        <p>Claude Code에게 "이 프로젝트(Claude Code Study)의 하네스를 위 체크리스트 기준으로 완성해줘. 현재 상태를 분석하고 부족한 것을 채워줘"라고 요청.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 새 프로젝트를 시작할 때 최소한으로 필요한 하네스 파일은 무엇인가?</summary>
      <div class="quiz-answer">
        최소한 <strong>CLAUDE.md</strong> 하나만 있으면 됩니다. 프로젝트 개요와 핵심 규칙을 담으면 Claude Code가 프로젝트 맥락을 이해하고 작업합니다. 나머지(settings.json, .mcp.json, commands)는 필요에 따라 점진적으로 추가하면 됩니다.
      </div>
    </details>
  </div>
</div>
`,

'2-7': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Claude Code의 memory 시스템은 세션 간 정보를 유지하는 내장 메커니즘</li>
    <li>Jack님은 MEMORY.md / SESSION_LOG.md 패턴을 사용 중 &mdash; 내장 memory를 체계적으로 활용하면 더 자동화됨</li>
    <li>Phase 4(세션 연속성 고도화)의 기반</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Memory 시스템 구조</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/projects/.../memory/</code></div>
      <div class="option-desc">프로젝트별 메모리 디렉토리. Claude Code가 자동으로 관리.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>MEMORY.md</code> (인덱스)</div>
      <div class="option-desc">메모리 파일들의 목록. 매 대화 시 자동 로드되므로 200줄 이하 유지.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">메모리 4가지 유형</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>user</code> (사용자)</div>
      <div class="option-desc">사용자의 역할, 선호도, 지식 수준에 대한 정보. Claude Code가 답변을 맞춤화하는 데 사용.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>feedback</code> (피드백)</div>
      <div class="option-desc">사용자가 교정하거나 확인한 작업 방식. "이렇게 해줘" / "이렇게 하지 마"에 해당.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>project</code> (프로젝트)</div>
      <div class="option-desc">진행 중인 작업, 목표, 이슈에 대한 정보. 코드에서 직접 알 수 없는 맥락.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>reference</code> (참조)</div>
      <div class="option-desc">외부 시스템의 위치 정보. "버그는 Linear에서 추적" 같은 포인터.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">메모리 사용법</div>
  <div class="code-block">
    <div class="code-header"><span>자연어로 메모리 관리</span></div>
    <pre><code># 저장
"이걸 기억해: 나는 PM이고, 코드보다 프로젝트 관리에 관심이 많아"
→ Claude Code가 자동으로 user 유형 메모리로 저장

# 확인
/memory
→ 현재 메모리 상태 확인

# 잊기
"XYZ에 대한 메모리를 삭제해줘"
→ 해당 메모리 파일 삭제</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 메모리 확인</strong>
        <p>Claude Code 세션에서 <code>/memory</code>를 입력하여 어떤 메모리가 저장되어 있는지 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>메모리 저장 테스트</strong>
        <p>"이걸 기억해: 나는 Catppuccin Mocha 테마를 선호한다"라고 말한 뒤, 새 세션을 시작하여 해당 정보가 유지되는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. memory와 CLAUDE.md의 차이는 무엇인가?</summary>
      <div class="quiz-answer">
        <strong>CLAUDE.md:</strong> 사용자가 직접 작성하고 관리하는 <strong>규칙과 지시</strong>. 모든 세션에 강제로 적용됨. 프로젝트 규칙, 작업 방식 정의에 적합.<br>
        <strong>memory:</strong> Claude Code가 대화 중에 <strong>자동으로 학습하고 저장</strong>하는 정보. 사용자 선호도, 피드백, 프로젝트 맥락 등. 점진적으로 축적됨.<br>
        비유하면 CLAUDE.md는 "업무 매뉴얼", memory는 "경험에서 배운 노하우"입니다.
      </div>
    </details>
  </div>
</div>
`,

'2-8': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Custom Commands는 반복 프롬프트를 슬래시 명령어로 자동화하는 강력한 기능</li>
    <li>자주 하는 작업을 명령어로 만들면 시간이 절약되고 일관성이 높아짐</li>
    <li>팀과 공유하여 워크플로우를 표준화할 수 있음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Custom Command 구조</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>~/.claude/commands/</code> (전역)</div>
      <div class="option-desc">모든 프로젝트에서 사용 가능한 개인 명령어.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>.claude/commands/</code> (프로젝트)</div>
      <div class="option-desc">해당 프로젝트에서만 사용 가능. git에 커밋하여 팀 공유 가능.</div>
    </div>
  </div>
  <p class="card-desc">각 명령어는 <code>.md</code> 파일로 작성. 파일명이 명령어 이름이 됩니다 (예: <code>review.md</code> → <code>/review</code>).</p>
</div>

<div class="card">
  <div class="card-title">실전 Custom Command 예시</div>
  <div class="code-block">
    <div class="code-header"><span>~/.claude/commands/review.md</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>현재 git diff(staged + unstaged)를 분석하고 코드 리뷰를 해줘:
1. 버그 가능성
2. 보안 이슈
3. 성능 문제
4. 가독성

각 항목에 대해 문제가 없으면 "OK", 있으면 구체적 위치와 개선안을 제시해.</code></pre>
  </div>

  <div class="code-block">
    <div class="code-header"><span>~/.claude/commands/daily.md</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>오늘의 작업 상황을 정리해줘:
1. 오늘 수정된 파일 목록 (git log --since="today")
2. 현재 변경사항 요약 (git diff --stat)
3. 다음에 해야 할 일 제안

간결하게 요약해줘.</code></pre>
  </div>

  <div class="code-block">
    <div class="code-header"><span>~/.claude/commands/explain.md (인자 활용)</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>$ARGUMENTS 파일을 읽고 아래 형식으로 설명해줘:

## 파일 목적
## 주요 함수/클래스
## 의존 관계
## 개선 가능한 점</code></pre>
  </div>
  <div class="callout callout-info">
    <strong>인자 전달:</strong> <code>$ARGUMENTS</code>를 사용하면 <code>/explain src/index.js</code>처럼 인자를 전달할 수 있습니다.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>review 명령어 만들기</strong>
        <p>Claude Code에게 "<code>~/.claude/commands/review.md</code> 파일을 위 내용으로 만들어줘"라고 요청. 그 후 <code>/review</code>를 실행하여 동작 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>나만의 명령어 만들기</strong>
        <p>자주 하는 작업을 하나 골라서 Custom Command로 만들어보세요. 예: 프로젝트 상태 보고, 코드 정리 등.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 전역 commands와 프로젝트 commands에 같은 이름의 명령어가 있으면?</summary>
      <div class="quiz-answer">
        프로젝트 commands가 우선합니다. 해당 프로젝트에서 실행하면 프로젝트의 명령어가, 다른 프로젝트에서 실행하면 전역 명령어가 사용됩니다.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. Custom Command와 CLAUDE.md의 차이는?</summary>
      <div class="quiz-answer">
        <strong>CLAUDE.md:</strong> 항상 자동으로 적용되는 규칙과 맥락. 매 대화에 컨텍스트로 포함됨.<br>
        <strong>Custom Command:</strong> 사용자가 <code>/명령어</code>로 <strong>명시적으로 호출</strong>할 때만 실행되는 프롬프트 템플릿. 컨텍스트를 상시 소비하지 않음.
      </div>
    </details>
  </div>
</div>
`,

// ============================================================
// PHASE 3: Agent Team
// ============================================================

'3-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 2에서 하네스를 마스터했으므로, 이제 여러 Claude Code 인스턴스를 활용하는 방법을 학습</li>
    <li>복잡한 작업을 분할하여 병렬 처리하면 생산성이 크게 향상</li>
    <li>PM으로서 여러 에이전트에게 작업을 분배하는 것은 팀 관리와 유사</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Subagent의 두 가지 형태</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>내부 Subagent (Agent Tool)</code></div>
      <div class="option-desc">
        Claude Code가 자체적으로 생성하는 하위 에이전트. 복잡한 탐색이나 분석을 위임할 때 자동으로 사용됨.
        <ul>
          <li><strong>Explore Agent:</strong> 코드베이스 탐색, 파일 검색, 패턴 분석</li>
          <li><strong>Plan Agent:</strong> 구현 계획 설계, 아키텍처 분석</li>
          <li><strong>General Agent:</strong> 범용 작업, 멀티스텝 태스크</li>
        </ul>
        각 subagent는 <strong>독립 컨텍스트</strong>를 가져 메인 세션의 컨텍스트를 소비하지 않음.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>외부 다중 인스턴스</code></div>
      <div class="option-desc">
        별도의 tmux pane/윈도우에서 독립적인 Claude Code를 실행.
        <br>각 인스턴스가 서로 다른 프로젝트나 작업을 동시에 수행.
        <br>사용자가 직접 관리하며, 파일을 통해 결과를 공유.
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">Subagent 동작 시각화</div>
  <div class="architecture">
    <div class="arch-layer arch-claude">
      <div class="arch-label">메인 Claude Code 세션</div>
      <div class="arch-desc">사용자와 대화, 전체 작업 관리, 결과 취합</div>
    </div>
    <div class="arch-arrow">&#9660; 작업 위임 (자동)</div>
    <div style="display:flex; gap:.5rem; width:100%; max-width:500px;">
      <div class="arch-layer arch-tmux" style="flex:1; text-align:center;">
        <div class="arch-label">Explore</div>
        <div class="arch-desc">코드 탐색</div>
      </div>
      <div class="arch-layer arch-tmux" style="flex:1; text-align:center;">
        <div class="arch-label">Plan</div>
        <div class="arch-desc">설계 분석</div>
      </div>
      <div class="arch-layer arch-tmux" style="flex:1; text-align:center;">
        <div class="arch-label">General</div>
        <div class="arch-desc">범용 작업</div>
      </div>
    </div>
    <div class="arch-arrow">&#9650; 결과 반환</div>
  </div>
  <div class="callout callout-info">
    <strong>핵심:</strong> 내부 subagent는 사용자가 명시적으로 호출하지 않습니다. Claude Code가 작업의 복잡도를 판단하여 자동으로 생성합니다. "코드베이스를 분석해줘"같은 복잡한 요청에서 자연스럽게 발생합니다.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Subagent 동작 관찰</strong>
        <p>Claude Code에게 "이 프로젝트의 전체 파일 구조를 분석하고, 각 파일의 역할을 설명해줘"라고 요청하세요. 출력에서 "Agent" 관련 메시지가 나타나는지 관찰.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Plan 모드 체험</strong>
        <p>"새로운 기능을 추가하려고 해. 계획을 세워줘"라고 요청하면, Claude Code가 Plan 모드로 진입하여 구현 계획을 설계합니다.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 내부 subagent와 외부 다중 인스턴스의 가장 큰 차이는?</summary>
      <div class="quiz-answer">
        <strong>내부 subagent:</strong> Claude Code가 자동 관리. 같은 세션 안에서 발생하며, 결과가 자동으로 메인 대화에 통합됨. 사용자가 직접 제어하지 않음.<br>
        <strong>외부 다중 인스턴스:</strong> 사용자가 직접 관리. 별도 tmux pane에서 독립 실행. 결과 공유는 파일을 통해 수동으로. 더 유연하지만 관리 부담이 있음.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. Subagent가 컨텍스트를 소비하지 않는다는 것은 무엇을 의미하는가?</summary>
      <div class="quiz-answer">
        메인 세션의 컨텍스트 윈도우에 subagent의 전체 대화가 포함되지 않습니다. Subagent가 1000줄의 코드를 읽어 분석해도, 메인 세션에는 최종 결과 요약만 전달됩니다. 이덕분에 긴 대화에서도 컨텍스트가 부족해지지 않습니다.
      </div>
    </details>
  </div>
</div>
`,

'3-2': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>tmux를 활용하면 여러 Claude Code 인스턴스를 물리적으로 동시 운영 가능</li>
    <li>서로 다른 프로젝트를 동시에 작업하거나, 같은 프로젝트의 다른 영역을 병렬 처리</li>
    <li>Phase 1에서 구축한 tmux 워크스페이스가 여기서 빛을 발함</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">다중 인스턴스 운영 패턴</div>
  <div class="code-block">
    <div class="code-header"><span>tmux 다중 Claude Code 세션</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 패턴 1: 프로젝트별 독립 세션
# 세션 1에서:
cd ~/Projects/Study && claude
# 세션 2에서:
cd ~/Projects/RUNuts && claude

# 패턴 2: 같은 프로젝트, 다른 작업
# Window 0, Pane 0: claude  (프론트엔드 작업)
# Window 0, Pane 1: claude  (백엔드 작업)
# ⚠️ 같은 파일을 동시에 수정하지 않도록 주의!

# 패턴 3: 분석 + 구현 분리
# Window 0: claude  (코드 분석, 결과를 analysis.md에 저장)
# Window 1: claude  (analysis.md를 읽고 구현)</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">주의사항</div>
  <div class="callout callout-warn">
    <strong>파일 충돌 방지:</strong> 같은 프로젝트에서 여러 Claude Code를 실행할 때, 두 인스턴스가 같은 파일을 동시에 수정하면 충돌이 발생합니다. 각 인스턴스가 작업할 파일 범위를 명확히 분리하세요.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>두 세션 동시 운영</strong>
        <p>tmux에서 study 세션과 runuts 세션을 열고, 각각에서 <code>claude</code>를 실행. <kbd>Prefix + s</kbd>로 세션을 전환하며 두 작업을 동시에 진행해보세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>결과 공유 실습</strong>
        <p>세션 A에서 "현재 프로젝트를 분석하고 analysis.md에 저장해"라고 요청. 세션 B에서 "analysis.md를 읽고 개선사항을 구현해"라고 요청.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 두 Claude Code가 같은 파일을 동시에 수정하면 어떻게 되는가?</summary>
      <div class="quiz-answer">
        나중에 저장하는 쪽이 먼저 수정한 내용을 덮어쓸 수 있습니다. git을 사용하면 merge conflict로 감지되지만, git 없이 작업하면 데이터 손실 가능성이 있습니다. 항상 작업 파일 범위를 명확히 분리하세요.
      </div>
    </details>
  </div>
</div>
`,

'3-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Headless 모드(<code>claude -p</code>)는 비대화형 실행 &mdash; 스크립트와 자동화의 핵심</li>
    <li>셸 스크립트, cron job, CI/CD 파이프라인에서 Claude Code를 활용하는 방법</li>
    <li>Phase 4(자동화 파이프라인)에서 필수적으로 사용</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">Headless 모드 사용법</div>
  <div class="code-block">
    <div class="code-header"><span>다양한 사용 패턴</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 기본: 단일 프롬프트 실행
claude -p "현재 디렉토리의 파일 구조를 설명해줘"

# 파이프 입력
cat error.log | claude -p "이 에러 로그를 분석하고 해결 방법을 제안해줘"
git diff | claude -p "이 변경사항을 리뷰해줘"

# 결과를 파일로 저장
claude -p "README.md 초안을 작성해줘" > README.md

# JSON 출력 (프로그래밍적 처리용)
claude -p "패키지 의존성을 분석해줘" --output-format json

# 최대 토큰 제한
claude -p "요약해줘" --max-turns 3

# 특정 모델 지정
claude -p "분석해줘" --model sonnet</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실전 활용 스크립트</div>
  <div class="code-block">
    <div class="code-header"><span>git commit 메시지 자동 생성</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# auto-commit.sh
MSG=$(git diff --cached | claude -p "이 staged 변경사항을 분석하고, 한국어로 간결한 커밋 메시지를 한 줄로 작성해줘. 메시지만 출력해.")
git commit -m "$MSG"</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>기본 Headless 실행</strong>
        <p>터미널에서 <code>claude -p "현재 디렉토리에 있는 파일들을 설명해줘"</code>를 실행하고 결과를 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>파이프 조합</strong>
        <p><code>git log --oneline -10 | claude -p "최근 10개 커밋의 패턴을 분석해줘"</code>를 실행해보세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>자동 스크립트 작성</strong>
        <p>위의 auto-commit.sh를 만들고, 실제로 변경사항을 커밋해보세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. <code>claude -p</code>와 대화형 <code>claude</code>의 차이를 3가지 들어보세요.</summary>
      <div class="quiz-answer">
        1. <strong>상호작용:</strong> <code>-p</code>는 한 번 실행하고 종료, 대화형은 계속 대화 가능<br>
        2. <strong>입력 방식:</strong> <code>-p</code>는 프롬프트를 인자로 전달, 대화형은 키보드로 입력<br>
        3. <strong>활용처:</strong> <code>-p</code>는 스크립트/자동화에 적합, 대화형은 탐색적 작업에 적합
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. 파이프로 입력을 전달할 때 주의할 점은?</summary>
      <div class="quiz-answer">
        입력이 너무 크면 컨텍스트 윈도우를 초과할 수 있습니다. 큰 로그 파일은 <code>tail -100 error.log | claude -p "..."</code>처럼 필요한 부분만 전달하세요. 또한 바이너리 파일은 파이프할 수 없습니다.
      </div>
    </details>
  </div>
</div>
`,

'3-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>모든 작업을 한 세션에서 처리할 필요는 없음 &mdash; 적절한 분할이 효율을 결정</li>
    <li>PM으로서 팀에 업무를 분배하듯, Claude Code에게도 전략적 분배가 필요</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">작업 분할 판단 매트릭스</div>
  <div class="compare-table">
    <div class="compare-header">
      <div>기준</div>
      <div>메인에서 직접</div>
      <div>분할/위임</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">복잡도</div>
      <div>간단한 수정, 한 파일</div>
      <div class="compare-good">여러 파일, 분석 필요</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">의존성</div>
      <div>이전 대화 맥락 필요</div>
      <div class="compare-good">독립적으로 수행 가능</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">시간</div>
      <div>빠르게 완료 가능</div>
      <div class="compare-good">시간이 오래 걸림</div>
    </div>
    <div class="compare-row">
      <div class="compare-label">병렬화</div>
      <div>순차적 필요</div>
      <div class="compare-good">동시 진행 가능</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">분할 전략 예시</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>프로젝트 리팩토링</code></div>
      <div class="option-desc">Agent A: 현재 코드 분석 + 개선점 도출 → analysis.md<br>Agent B: analysis.md 기반으로 실제 리팩토링 구현</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>풀스택 기능 추가</code></div>
      <div class="option-desc">Agent A: 프론트엔드 컴포넌트 작업<br>Agent B: 백엔드 API 작업<br>→ 각각 다른 파일을 수정하므로 충돌 없음</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>문서화 + 테스트</code></div>
      <div class="option-desc">Agent A: 코드 문서화 (README, 주석)<br>Agent B: 테스트 코드 작성<br>→ 서로 다른 파일이므로 병렬 가능</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>분할 계획 수립</strong>
        <p>Claude Code에게 "이 프로젝트에서 할 수 있는 작업을 3개 제안하고, 어떻게 2개의 에이전트로 분할할 수 있는지 설명해줘"라고 요청.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 작업을 분할하면 안 되는 경우는 어떤 때인가?</summary>
      <div class="quiz-answer">
        1. <strong>강한 의존성:</strong> B 작업이 A의 결과에 완전히 의존하는 경우 (순차적으로만 가능)<br>
        2. <strong>같은 파일 수정:</strong> 두 에이전트가 같은 파일을 동시에 수정해야 하는 경우<br>
        3. <strong>대화 맥락 필요:</strong> 이전 대화에서의 결정이나 논의가 작업에 필수적인 경우<br>
        이런 경우는 한 세션에서 순차적으로 처리하는 것이 안전합니다.
      </div>
    </details>
  </div>
</div>
`,

'3-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>여러 Claude Code 인스턴스가 협업하려면 결과를 공유하는 방법이 필요</li>
    <li>파일 시스템을 매개체로 사용하는 패턴이 가장 실용적이고 안정적</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">에이전트 간 통신 3가지 패턴</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>패턴 1: 결과 파일 공유</code></div>
      <div class="option-desc">
        Agent A가 결과를 파일에 쓰고, Agent B가 그 파일을 읽음. 가장 단순하고 안정적.
        <div class="code-block inline">
          <pre><code># Agent A에게:
"프로젝트를 분석하고 결과를 analysis.md에 저장해"

# Agent B에게:
"analysis.md를 읽고, 거기 나온 개선점을 구현해"</code></pre>
        </div>
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>패턴 2: 공유 CLAUDE.md</code></div>
      <div class="option-desc">
        모든 에이전트가 동일한 CLAUDE.md를 공유하여 규칙과 맥락을 일치시킴. 같은 프로젝트 디렉토리에서 실행하면 자동으로 같은 CLAUDE.md를 읽음.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>패턴 3: 작업 로그 패턴</code></div>
      <div class="option-desc">
        각 에이전트가 작업 로그를 공유 파일에 추가. 다음 에이전트가 이전 작업을 이해할 수 있음.
        <div class="code-block inline">
          <pre><code># Agent A에게:
"작업이 끝나면 WORK_LOG.md에 무엇을 했는지 기록해"

# Agent B에게:
"WORK_LOG.md를 먼저 읽고, 이어서 작업해"</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>결과 파일 공유 실습</strong>
        <p>tmux에서 두 pane을 열고 각각 <code>claude</code>를 실행. Pane A에서 분석 결과를 파일에 저장하고, Pane B에서 그 파일을 읽어서 작업해보세요.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>작업 로그 패턴</strong>
        <p>WORK_LOG.md 파일을 만들고, 두 에이전트가 번갈아 기록하며 작업하는 흐름을 체험.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 왜 파일 기반 통신이 가장 실용적인가?</summary>
      <div class="quiz-answer">
        1. <strong>단순함:</strong> 별도 프로토콜이나 설정 불필요. 파일을 읽고 쓰기만 하면 됨.<br>
        2. <strong>영속성:</strong> 파일은 세션이 종료되어도 남아있으므로, 시간차 작업도 가능.<br>
        3. <strong>투명성:</strong> 사용자가 직접 파일을 열어 중간 결과를 확인할 수 있음.<br>
        4. <strong>git 호환:</strong> 결과 파일을 git으로 버전 관리할 수 있음.
      </div>
    </details>
  </div>
</div>
`,

'3-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 3의 마무리 &mdash; 지금까지 배운 멀티 에이전트 기술을 실전으로 조합</li>
    <li>실제 프로젝트에서 복수 에이전트를 운영하는 경험을 쌓음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">실전 시나리오: 대시보드 기능 추가</div>
  <p class="card-desc">이 학습 대시보드 프로젝트 자체를 대상으로 멀티 에이전트 작업을 수행합니다.</p>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>Agent A (분석 담당)</strong>
        <p>tmux Window 0에서 Claude Code 실행: "이 프로젝트(index.html, styles.css, script.js, lessons.js)를 분석하고, 개선 가능한 점을 analysis.md에 정리해줘"</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Agent B (구현 담당)</strong>
        <p>tmux Window 1에서 Claude Code 실행: "analysis.md를 읽고, 가장 임팩트가 큰 개선사항 1개를 구현해줘"</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>결과 통합</strong>
        <p>두 에이전트의 작업을 <code>git diff</code>로 확인하고, 문제가 없으면 커밋.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Phase 3에서 배운 내용을 PM 관점에서 요약한다면?</summary>
      <div class="quiz-answer">
        "Claude Code를 한 명의 팀원이 아니라, <strong>필요에 따라 복제 가능한 팀</strong>으로 활용할 수 있다. Subagent는 자동으로 작업을 분담하고, 외부 인스턴스는 tmux를 통해 병렬 운영한다. 핵심은 <strong>작업을 적절히 분할하고, 파일을 통해 결과를 공유</strong>하는 것이다."
      </div>
    </details>
  </div>
</div>
`,

// ============================================================
// PHASE 4: 실무 운영
// ============================================================

'4-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 1~3의 기술을 일상 업무에 자연스럽게 녹이는 루틴 설계</li>
    <li>PM으로서 매일 반복하는 작업을 Claude Code로 자동화하면 시간 절약 큼</li>
    <li>"도구를 아는 것"과 "도구로 일하는 것"의 차이를 좁히는 단계</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">추천 일일 워크플로우</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">AM</div>
      <div class="step-content">
        <strong>오전 루틴 (업무 시작)</strong>
        <ul>
          <li>Ghostty 열기 &rarr; tmux 자동 진입</li>
          <li><code>claude --continue</code>로 어제 세션 이어받기</li>
          <li>"어제 작업 상태를 요약해줘" &rarr; 맥락 빠르게 파악</li>
          <li>오늘 할 일 정리 &rarr; Notion에 기록 (MCP 활용)</li>
        </ul>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">DAY</div>
      <div class="step-content">
        <strong>업무 중</strong>
        <ul>
          <li>복잡한 작업: Claude Code에게 위임 (tmux에서 병렬 가능)</li>
          <li>단순 작업: <code>claude -p</code>로 빠르게 처리</li>
          <li>코드 리뷰: <code>/review</code> Custom Command 활용</li>
          <li>컨텍스트가 길어지면: <code>/compact</code>로 압축</li>
        </ul>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">PM</div>
      <div class="step-content">
        <strong>오후 루틴 (업무 마무리)</strong>
        <ul>
          <li>"오늘 작업 내용을 기억해" &rarr; memory에 자동 저장</li>
          <li><code>/daily</code> Custom Command로 일일 보고서 생성</li>
          <li>tmux detach (세션은 백그라운드에서 유지)</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>일일 루틴 시뮬레이션</strong>
        <p>위 AM &rarr; DAY &rarr; PM 루틴을 한 번 따라해보세요. 각 단계에서 Claude Code를 어떻게 활용하는지 체감.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>daily Custom Command 만들기</strong>
        <p>Claude Code에게 "<code>~/.claude/commands/daily.md</code>를 만들어서 오늘의 git 활동과 다음 할 일을 정리하는 명령어를 만들어줘"라고 요청.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 왜 <code>claude --continue</code>로 시작하는 것이 <code>claude</code>로 새로 시작하는 것보다 효율적인가?</summary>
      <div class="quiz-answer">
        <code>--continue</code>는 이전 대화의 맥락을 유지하므로, 프로젝트 상태를 다시 설명할 필요가 없습니다. 또한 이전 세션에서 학습한 패턴이나 결정사항도 기억하고 있으므로, 동일한 질문을 반복하지 않아도 됩니다. 새 세션은 컨텍스트가 비어있어 처음부터 맥락을 다시 구축해야 합니다.
      </div>
    </details>
  </div>
</div>
`,

'4-2': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>세션 연속성은 Claude Code 활용의 핵심 &mdash; 맥락이 끊기면 생산성이 크게 떨어짐</li>
    <li>Claude Code의 내장 memory 시스템과 tmux-resurrect를 조합하면 거의 완벽한 연속성 확보</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">세션 연속성 3계층</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>1. tmux 레이아웃 연속성</code></div>
      <div class="option-desc">tmux-resurrect/continuum이 세션, 윈도우, pane, 디렉토리를 자동 저장/복원. Phase 1-4에서 이미 설정 완료.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>2. Claude Code 대화 연속성</code></div>
      <div class="option-desc"><code>claude --continue</code>: 마지막 대화를 이어받음.<br><code>claude --resume</code>: 세션 목록에서 선택하여 재개.<br>대화 히스토리가 자동 저장되므로 맥락이 유지됨.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>3. 프로젝트 지식 연속성</code></div>
      <div class="option-desc">memory 시스템: 사용자 선호도, 프로젝트 맥락, 피드백이 세션을 넘어 유지.<br>"오늘 작업 내용을 기억해"로 명시적 저장 가능.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">연속성 확보 실전 패턴</div>
  <div class="code-block">
    <div class="code-header"><span>세션 시작/종료 체크리스트</span></div>
    <pre><code># === 세션 시작 ===
claude --continue                    # 이전 대화 이어받기
# 또는
claude --resume                      # 세션 선택하여 재개

# 첫 마디:
"어제 작업 상태를 요약해줘"            # 맥락 확인

# === 세션 종료 ===
"오늘 작업한 내용을 기억해:
- [핵심 변경사항]
- [다음에 해야 할 일]
- [주의사항]"                         # 명시적 memory 저장

# tmux는 detach만 (종료하지 않음)
# Prefix + d</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>연속성 테스트</strong>
        <p>Claude Code 세션에서 "나는 오늘 대시보드 CSS를 수정했다. 다음에는 JavaScript를 개선할 예정이다"라고 기억시킨 뒤, 세션을 종료하고 <code>--continue</code>로 재개하여 이전 맥락이 유지되는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. <code>claude --continue</code>와 memory 시스템의 차이는?</summary>
      <div class="quiz-answer">
        <strong><code>--continue</code>:</strong> 이전 대화의 <strong>전체 맥락</strong>(모든 메시지)을 복원합니다. 단기 기억에 해당.<br>
        <strong>memory:</strong> 대화 속에서 중요한 정보만 <strong>선별적으로 저장</strong>합니다. 장기 기억에 해당. 세션이 바뀌어도 유지되며, 심지어 <code>/clear</code>를 해도 남아있습니다.<br>
        두 시스템을 함께 사용하면 단기 + 장기 기억 모두 확보됩니다.
      </div>
    </details>
  </div>
</div>
`,

'4-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>MCP 서버 생태계를 활용하면 Claude Code가 외부 서비스와 직접 소통 가능</li>
    <li>PM으로서 Notion, Google Drive, GitHub 등을 Claude Code와 연결하면 작업 흐름이 크게 단축</li>
    <li>Phase 2-5에서 MCP 기본을 배웠으므로, 이제 실무 활용 전략을 학습</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">PM을 위한 MCP 활용 시나리오</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Notion MCP + 프로젝트 관리</code></div>
      <div class="option-desc">
        "Notion에서 이번 주 스프린트 백로그를 가져와줘"<br>
        "이 작업 결과를 Notion 페이지에 업데이트해줘"<br>
        "Notion DB에 새 이슈를 만들어줘"<br>
        Jack님이 이미 사용 중인 패턴. 더 복잡한 쿼리와 자동화로 확장 가능.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Google Drive MCP + 문서 관리</code></div>
      <div class="option-desc">
        "Drive에서 '주간보고' 관련 문서를 찾아줘"<br>
        "이 분석 결과를 Google Docs에 정리해줘"
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>GitHub MCP + 코드 관리</code></div>
      <div class="option-desc">
        "열린 이슈 목록을 보여줘"<br>
        "이 PR의 리뷰 코멘트를 확인해줘"<br>
        <code>gh</code> CLI로도 가능하지만 MCP가 더 자연스러운 대화형 접근 제공.
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Figma MCP + 디자인 연동</code></div>
      <div class="option-desc">
        "이 Figma 디자인을 보고 HTML/CSS로 구현해줘"<br>
        디자인 시안을 코드로 변환하는 워크플로우.
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>현재 MCP 활용 점검</strong>
        <p><code>/mcp</code>로 현재 연결된 MCP 서버를 확인하고, "현재 연결된 MCP로 할 수 있는 작업을 5개 제안해줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>MCP 활용 실전</strong>
        <p>연결된 MCP(Notion 등)를 활용하여 실제 업무 작업을 수행. 예: "Notion에서 RUNuts 프로젝트 상태를 확인해줘".</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. MCP 서버를 통해 외부 서비스에 접근하는 것과, Claude Code에게 직접 URL을 알려주는 것의 차이는?</summary>
      <div class="quiz-answer">
        <strong>MCP:</strong> Claude Code가 서비스의 API를 <strong>직접 호출</strong>하여 데이터를 읽고 쓸 수 있음. 구조화된 데이터를 정확하게 가져오고, 수정까지 가능.<br>
        <strong>URL 직접 접근:</strong> 웹 페이지를 읽는 수준. 로그인이 필요한 서비스에 접근하기 어렵고, 데이터 수정은 불가능. MCP가 훨씬 강력합니다.
      </div>
    </details>
  </div>
</div>
`,

'4-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Hooks + Headless 모드 + 스크립트를 조합하면 반복 작업을 완전 자동화할 수 있음</li>
    <li>PM으로서 보고서 생성, 상태 점검, 코드 리뷰 등을 자동화하면 매일 시간 절약</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">자동화 파이프라인 예시</div>
  <div class="code-block">
    <div class="code-header"><span>매일 아침 프로젝트 상태 보고</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# daily-report.sh - cron이나 수동으로 실행
PROJECT_DIR=~/Documents/Projects/RUNuts\\ Project\\ Managing
REPORT_DIR=~/Documents/Reports

cd "$PROJECT_DIR"

claude -p "
이 프로젝트의 현재 상태를 분석해줘:
1. 최근 3일간 변경된 파일 (git log --since='3 days ago')
2. 현재 브랜치 상태
3. 다음에 해야 할 일 제안
간결하게 한국어로 요약해.
" > "$REPORT_DIR/daily-$(date +%Y%m%d).md"

echo "일일 보고서 생성 완료: $REPORT_DIR/daily-$(date +%Y%m%d).md"</code></pre>
  </div>

  <div class="code-block">
    <div class="code-header"><span>git hook: 커밋 전 자동 리뷰</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# .git/hooks/pre-commit
# 커밋 전에 Claude Code로 빠른 리뷰
REVIEW=$(git diff --cached | claude -p "이 변경사항에 명백한 버그나 보안 이슈가 있는지만 체크해. 문제 없으면 OK, 있으면 구체적으로 알려줘." --max-turns 1)

if echo "$REVIEW" | grep -qi "문제\|이슈\|버그\|위험"; then
  echo "⚠️ 코드 리뷰 결과 주의사항 발견:"
  echo "$REVIEW"
  echo ""
  echo "계속 커밋하려면 --no-verify 옵션을 사용하세요."
  exit 1
fi</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>일일 보고서 스크립트 만들기</strong>
        <p>Claude Code에게 "위 daily-report.sh 스크립트를 만들어서 실행해줘"라고 요청. 결과 파일을 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>나만의 자동화 만들기</strong>
        <p>자주 반복하는 작업 하나를 골라 <code>claude -p</code> 기반 스크립트로 자동화해보세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Hooks와 Headless 모드(<code>claude -p</code>)를 조합하면 어떤 시나리오가 가능해지는가?</summary>
      <div class="quiz-answer">
        예시: PostToolUse hook에서 파일이 수정될 때마다 <code>claude -p</code>로 자동 린팅/포맷팅을 실행할 수 있습니다. 또는 Stop hook에서 작업 완료 시 자동으로 일일 보고서를 생성하거나, Notification hook에서 Slack으로 알림을 보낼 수 있습니다. Hook이 "트리거"를, headless가 "실행"을 담당하는 자동화 파이프라인이 됩니다.
      </div>
    </details>
  </div>
</div>
`,

'4-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>새 프로젝트를 시작할 때마다 하네스를 처음부터 만드는 것은 비효율적</li>
    <li>템플릿 시스템을 만들면 5분 안에 프로젝트 환경을 구축할 수 있음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">프로젝트 초기화 스크립트</div>
  <div class="code-block">
    <div class="code-header"><span>~/bin/init-project.sh</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>#!/bin/bash
# 사용법: init-project.sh [프로젝트명] [설명]
PROJECT_NAME=$1
PROJECT_DESC=${2:-"프로젝트 설명을 입력하세요"}

if [ -z "$PROJECT_NAME" ]; then
  echo "사용법: init-project.sh [프로젝트명] [설명]"
  exit 1
fi

PROJECT_DIR=~/Documents/Projects/$PROJECT_NAME
mkdir -p "$PROJECT_DIR/.claude/commands"

# CLAUDE.md 생성
cat > "$PROJECT_DIR/CLAUDE.md" << EOF
# $PROJECT_NAME

## 프로젝트 개요
$PROJECT_DESC

## 핵심 규칙
- 변경사항 적용 전 계획을 먼저 설명
- 추측하지 않고, 확인되지 않은 내용은 명시
- 한국어로 답변

## 금지 사항
- rm -rf 사용 금지
- .env 파일 커밋 금지
EOF

# .claude/settings.json 생성
cat > "$PROJECT_DIR/.claude/settings.json" << 'EOF'
{
  "permissions": {
    "allow": [
      "Read", "Edit", "Write", "Glob", "Grep",
      "Bash(git *)", "Bash(ls *)", "Bash(cat *)"
    ]
  }
}
EOF

# git 초기화
cd "$PROJECT_DIR"
git init
echo ".env" > .gitignore
echo "node_modules/" >> .gitignore

echo "✅ $PROJECT_NAME 프로젝트 초기화 완료: $PROJECT_DIR"
echo "   - CLAUDE.md ✓"
echo "   - .claude/settings.json ✓"
echo "   - .gitignore ✓"</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>템플릿 스크립트 만들기</strong>
        <p>Claude Code에게 "위 init-project.sh를 ~/bin/에 만들고 실행 권한을 줘"라고 요청.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>테스트 프로젝트 생성</strong>
        <p><code>init-project.sh test-project "테스트용 프로젝트"</code>를 실행하고, 생성된 파일들을 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 프로젝트 템플릿에 반드시 포함되어야 하는 파일과 선택적 파일을 구분해보세요.</summary>
      <div class="quiz-answer">
        <strong>필수:</strong> CLAUDE.md (프로젝트 맥락과 규칙)<br>
        <strong>권장:</strong> .claude/settings.json (permissions), .gitignore<br>
        <strong>선택:</strong> .mcp.json (외부 서비스 필요 시), .claude/commands/ (반복 작업 있을 때), tmux 레이아웃 스크립트
      </div>
    </details>
  </div>
</div>
`,

'4-6': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Claude Code를 실무에서 사용하다 보면 다양한 문제가 발생 &mdash; 빠르게 해결하는 패턴을 알아두면 생산성 유지</li>
    <li>대부분의 문제는 몇 가지 패턴으로 분류되며, 한 번 배우면 반복 적용 가능</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">주요 트러블슈팅 패턴</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>문제: 컨텍스트 윈도우 초과</code></div>
      <div class="option-desc">
        <strong>증상:</strong> 이전 대화를 기억하지 못함, 같은 질문 반복, 응답 품질 저하<br>
        <strong>해결:</strong><br>
        1. <code>/compact</code>로 대화 압축<br>
        2. <code>/clear</code> 후 핵심 맥락만 다시 전달<br>
        3. 새 세션을 시작하고 memory에서 맥락 자동 로드
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>문제: CLAUDE.md가 적용되지 않음</code></div>
      <div class="option-desc">
        <strong>증상:</strong> 설정한 규칙을 따르지 않음<br>
        <strong>확인:</strong><br>
        1. <code>/status</code>로 로드된 파일 확인<br>
        2. 프로젝트 루트 디렉토리에서 <code>claude</code>를 실행하고 있는지 확인<br>
        3. CLAUDE.md 파일 경로와 이름이 정확한지 확인 (대소문자 주의)
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>문제: MCP 서버 연결 실패</code></div>
      <div class="option-desc">
        <strong>증상:</strong> MCP 도구 호출 시 에러<br>
        <strong>확인:</strong><br>
        1. <code>/mcp</code>로 서버 상태 확인<br>
        2. <code>claude mcp list</code>로 설정 확인<br>
        3. MCP 서버의 명령어가 실행 가능한지 확인 (예: <code>npx</code> 경로)
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>문제: Hook이 실행되지 않음</code></div>
      <div class="option-desc">
        <strong>증상:</strong> 설정한 hook이 동작하지 않음<br>
        <strong>확인:</strong><br>
        1. settings.json의 JSON 문법 오류 확인 (쉼표, 따옴표)<br>
        2. 명령어 경로가 올바른지 확인 (<code>which 명령어</code>로 테스트)<br>
        3. Hook 명령어를 터미널에서 직접 실행하여 동작 확인
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>문제: 응답이 너무 느림</code></div>
      <div class="option-desc">
        <strong>원인:</strong> 컨텍스트가 너무 크거나, 복잡한 작업<br>
        <strong>해결:</strong><br>
        1. <code>/compact</code>로 컨텍스트 줄이기<br>
        2. <code>/fast</code>로 빠른 출력 모드 전환<br>
        3. 작업을 더 작은 단위로 분할
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>의도적 문제 발생 & 해결</strong>
        <p>긴 대화를 한 뒤 <code>/cost</code>로 토큰 사용량을 확인하고, <code>/compact</code>로 압축해보세요. 압축 전후의 응답 품질과 속도를 비교.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. <code>/compact</code>와 <code>/clear</code>의 차이는?</summary>
      <div class="quiz-answer">
        <strong><code>/compact</code>:</strong> 이전 대화를 <strong>요약</strong>하여 압축. 핵심 맥락은 유지하되 토큰 수를 줄임. 대화를 이어가면서 컨텍스트를 절약할 때 사용.<br>
        <strong><code>/clear</code>:</strong> 대화 맥락을 <strong>완전히 삭제</strong>. 빈 상태에서 처음부터 시작. 단, memory는 유지되므로 프로젝트 기억은 남아있음.
      </div>
    </details>
  </div>
</div>
`,

'4-7': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Phase 1~4에서 배운 모든 기술을 실제 업무 시나리오에 통합하는 종합 실습</li>
    <li>PM으로서 Sprint 계획은 실제로 자주 수행하는 작업 &mdash; Claude Code로 어떻게 효율화하는지 체험</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">종합 실습: Sprint 계획 시뮬레이션</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>환경 준비 (Phase 1)</strong>
        <p>tmux 워크스페이스를 구성: study 세션에서 Claude Code 실행. 필요 시 추가 세션 생성.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>현황 분석 (Phase 2 + MCP)</strong>
        <p>Claude Code에게: "이 프로젝트의 현재 상태를 분석해줘. 파일 구조, 최근 변경사항, 개선이 필요한 부분을 정리해줘." MCP로 Notion에서 백로그도 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>작업 분할 & 실행 (Phase 3)</strong>
        <p>분석 결과를 바탕으로 작업 목록을 만들고, 가능한 것은 Claude Code로 직접 실행. 복잡한 작업은 멀티 에이전트로 분할.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <strong>정리 & 기록 (Phase 4)</strong>
        <p>결과를 정리하고, "오늘 작업 내용을 기억해"로 memory에 저장. Notion에 진행 상황 업데이트. <code>/daily</code>로 보고서 생성.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Phase 1~4에서 배운 기술을 각각 한 줄로 요약해보세요.</summary>
      <div class="quiz-answer">
        <strong>Phase 1:</strong> Ghostty + tmux + Claude Code를 결합한 체계적 터미널 워크스페이스 구축<br>
        <strong>Phase 2:</strong> CLAUDE.md, settings, hooks, permissions, MCP, commands로 Claude Code의 행동을 정밀 제어<br>
        <strong>Phase 3:</strong> Subagent와 다중 인스턴스를 활용한 작업 병렬화 및 파일 기반 협업<br>
        <strong>Phase 4:</strong> 일일 루틴, 세션 연속성, MCP 생태계, 자동화 파이프라인으로 실무 운영 체계화
      </div>
    </details>
  </div>
</div>
`,

// ============================================================
// PHASE 5: 모바일 소통
// ============================================================

'5-1': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Mac에 SSH로 접속하면 모바일에서도 Claude Code 세션에 접근 가능</li>
    <li>tmux 세션이 살아있으므로 어디서든 attach하여 이어 작업 가능</li>
    <li>Phase 1~4에서 구축한 환경을 모바일까지 확장하는 마지막 단계</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">macOS SSH 서버 활성화</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>원격 로그인 활성화</strong>
        <p>시스템 설정 &rarr; 일반 &rarr; 공유 &rarr; <strong>원격 로그인</strong> 활성화.<br>이것만으로 같은 네트워크(Wi-Fi)에서 SSH 접속이 가능합니다.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Mac의 IP 주소 확인</strong>
        <div class="code-block inline">
          <pre><code># 로컬 IP 확인
ipconfig getifaddr en0</code></pre>
        </div>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <strong>SSH 키 인증 설정 (비밀번호 대신)</strong>
        <div class="code-block inline">
          <pre><code># Mac에서 키 생성 (아직 없다면)
ssh-keygen -t ed25519

# 모바일 클라이언트에서 생성한 공개키를 Mac에 등록
echo "모바일_공개키_내용" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys</code></pre>
        </div>
      </div>
    </div>
  </div>
  <div class="callout callout-warn">
    <strong>보안 주의:</strong> 같은 로컬 네트워크(집/사무실 Wi-Fi) 내에서만 사용하세요. 외부 네트워크에서 접속하려면 <strong>Tailscale</strong> 같은 메시 VPN을 사용하는 것을 강력 권장합니다. 포트포워딩으로 SSH를 인터넷에 직접 노출하지 마세요.
  </div>
</div>

<div class="card">
  <div class="card-title">Tailscale을 이용한 안전한 원격 접속</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Tailscale이란?</code></div>
      <div class="option-desc">무료 메시 VPN. Mac과 모바일 기기를 사설 네트워크로 연결. 외부에서도 안전하게 SSH 접속 가능. 설정이 매우 간단.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>설정 방법</code></div>
      <div class="option-desc">
        1. Mac: <code>brew install tailscale</code> → 로그인<br>
        2. 모바일: Tailscale 앱 설치 → 같은 계정으로 로그인<br>
        3. Mac의 Tailscale IP로 SSH 접속 (예: <code>ssh user@100.x.x.x</code>)
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>로컬 네트워크 SSH 테스트</strong>
        <p>Mac에서 원격 로그인을 활성화하고, 같은 Wi-Fi에 연결된 다른 기기(또는 터미널)에서 <code>ssh $(whoami)@$(ipconfig getifaddr en0)</code>로 접속 테스트.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>SSH 후 tmux attach</strong>
        <p>SSH 접속 후 <code>tmux ls</code>로 세션 목록을 확인하고, <code>tmux attach -t study</code>로 기존 세션에 연결. Claude Code가 그대로 보이는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. SSH로 Mac에 접속하여 tmux attach하면, Mac에서 보이던 Claude Code 화면이 그대로 보이는가?</summary>
      <div class="quiz-answer">
        네, 정확히 그대로 보입니다. tmux는 서버-클라이언트 구조이므로, 어떤 클라이언트(SSH 세션)에서 attach해도 같은 화면을 공유합니다. Claude Code가 실행 중이었다면 그 화면이 그대로 표시되고, 작업 중이던 대화를 이어서 진행할 수 있습니다.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. Tailscale과 일반 SSH 포트포워딩의 차이는?</summary>
      <div class="quiz-answer">
        <strong>포트포워딩:</strong> 라우터에서 22번 포트를 인터넷에 노출. 전 세계 누구나 접근 시도 가능. 보안 위험 높음.<br>
        <strong>Tailscale:</strong> 사설 네트워크(VPN)를 생성하여 인증된 기기만 접근. 포트를 인터넷에 노출하지 않음. 훨씬 안전하고 설정도 간단.
      </div>
    </details>
  </div>
</div>
`,

'5-2': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>SSH 접속이 되면 다음은 tmux 세션을 효율적으로 이어받는 방법</li>
    <li>이것이 tmux의 진짜 힘 &mdash; PC에서 시작한 작업을 모바일에서 확인하고, 다시 PC로 돌아올 수 있음</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">tmux 세션 관리 명령어</div>
  <div class="code-block">
    <div class="code-header"><span>SSH 접속 후 사용</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># 세션 목록 확인
tmux ls
# 출력 예: main: 1 windows / study: 2 windows / runuts: 2 windows

# 특정 세션에 연결
tmux attach -t study

# 이미 다른 곳에서 attach 중이면 기존 연결을 끊고 attach
tmux attach -dt study   # -d: 기존 클라이언트 detach

# 세션을 새 터미널 크기에 맞추기
# attach 시 자동으로 맞춰짐 (tmux 3.x)

# 세션에서 빠져나오기 (종료하지 않음)
# Prefix + d (Ctrl+Space → d)</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">실전 시나리오</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>시나리오 1: 작업 결과 모바일에서 확인</code></div>
      <div class="option-desc">PC에서 Claude Code에게 긴 작업을 시킨 뒤 자리를 비움 &rarr; 이동 중에 모바일로 SSH 접속 &rarr; <code>tmux attach -t study</code> &rarr; 결과 확인 &rarr; detach</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>시나리오 2: 긴급 수정</code></div>
      <div class="option-desc">외출 중 긴급 이슈 발생 &rarr; 모바일로 SSH &rarr; tmux attach &rarr; Claude Code에게 긴급 수정 요청 &rarr; 결과 확인 &rarr; detach</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>시나리오 3: 야간 작업 모니터링</code></div>
      <div class="option-desc">퇴근 전 Claude Code에게 긴 작업을 시작시킴 &rarr; 집에서 모바일로 접속 &rarr; 진행 상황 확인 &rarr; 필요 시 추가 지시</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>PC-모바일 전환 시뮬레이션</strong>
        <p>PC에서 Claude Code로 작업을 시작 &rarr; tmux detach &rarr; 다른 터미널(또는 모바일)에서 SSH &rarr; <code>tmux attach -dt study</code>로 이어받기 &rarr; 작업 결과 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. <code>tmux attach -t study</code>와 <code>tmux attach -dt study</code>의 차이는?</summary>
      <div class="quiz-answer">
        <strong><code>-t study</code>:</strong> study 세션에 연결. 다른 곳에서 이미 attach 중이면 <strong>거부됨</strong> (또는 두 클라이언트가 동시에 보게 됨).<br>
        <strong><code>-dt study</code>:</strong> 기존 클라이언트를 <strong>detach</strong>한 뒤 연결. 모바일에서 접속할 때 PC 쪽 연결을 자동으로 끊으므로, 화면 크기가 모바일에 맞게 조정됩니다.
      </div>
    </details>
  </div>
</div>
`,

'5-3': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>SSH 접속을 모바일에서 편리하게 하려면 전용 클라이언트가 필요</li>
    <li>클라이언트마다 장단점이 있으므로 용도에 맞는 선택이 중요</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">추천 SSH 클라이언트</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Blink Shell (iOS) — 추천</code></div>
      <div class="option-desc">
        가장 강력한 iOS SSH 클라이언트.
        <ul>
          <li><strong>Mosh 지원:</strong> 불안정한 모바일 네트워크에서도 연결이 끊기지 않음</li>
          <li><strong>키보드 커스터마이징:</strong> tmux Prefix 등 단축키를 편하게 매핑</li>
          <li><strong>tmux 통합:</strong> 세션 자동 attach 설정 가능</li>
          <li>유료($16) 또는 GitHub에서 오픈소스 빌드 가능</li>
        </ul>
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>Termius (iOS/Android)</code></div>
      <div class="option-desc">
        크로스 플랫폼. 깔끔한 UI, SFTP 지원, 연결 관리 편리. 기본 무료.
        <ul>
          <li>여러 기기에서 연결 설정 동기화</li>
          <li>직관적인 UI로 초보자에게 적합</li>
        </ul>
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>JuiceSSH (Android)</code></div>
      <div class="option-desc">
        Android 전용. 가볍고 빠름.
        <ul>
          <li>스니펫 기능: 자주 쓰는 명령어를 버튼으로 저장</li>
          <li>무료 버전으로도 충분히 사용 가능</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">클라이언트 설정 팁</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>연결 프로파일 저장</code></div>
      <div class="option-desc">호스트명, 포트, 사용자명, SSH 키를 프로파일로 저장. 매번 입력하지 않아도 한 번 탭으로 접속.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>자동 명령어 설정</code></div>
      <div class="option-desc">접속 후 자동 실행 명령어에 <code>tmux attach -dt main || tmux new -s main</code>을 설정하면, 접속 즉시 tmux 세션에 진입.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>폰트 크기 조정</code></div>
      <div class="option-desc">모바일 화면에서 코드가 잘 보이도록 폰트 크기를 적절히 조정. 12~14px 정도가 적당.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>SSH 클라이언트 설치 및 설정</strong>
        <p>위 클라이언트 중 하나를 설치하고, Mac으로의 SSH 연결 프로파일을 만들어 접속 테스트.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>자동 tmux attach 설정</strong>
        <p>접속 후 자동 명령어에 <code>tmux attach -dt main || tmux new -s main</code>을 설정하여, 접속 즉시 tmux에 진입하도록 구성.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. Mosh와 SSH의 차이는 무엇이고, 왜 모바일에서 Mosh가 유리한가?</summary>
      <div class="quiz-answer">
        <strong>SSH:</strong> TCP 기반 연결. Wi-Fi가 끊기거나 IP가 바뀌면 연결이 끊어짐. 모바일에서 자주 발생하는 네트워크 전환(Wi-Fi↔LTE)에 취약.<br>
        <strong>Mosh:</strong> UDP 기반. IP가 바뀌어도 세션이 유지됨. 네트워크가 잠시 끊겨도 자동 재연결. 지연이 있어도 로컬 에코를 보여줘 타이핑이 부드러움. 모바일에서 훨씬 안정적.
      </div>
    </details>
  </div>
</div>
`,

'5-4': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>작은 화면에서도 tmux를 편하게 사용하기 위한 설정 조정</li>
    <li>터치 스크린에 최적화된 키바인딩과 가독성 조정</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">모바일 최적화 설정</div>
  <div class="code-block">
    <div class="code-header"><span>~/.tmux.conf 추가 설정</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code># === 모바일 접속 시 유용한 설정 ===

# 마우스 지원 (터치 스크롤)
set -g mouse on
# Jack님은 이미 설정 완료

# pane 전환을 Alt+방향키로 (Prefix 없이)
# 모바일에서 Prefix 입력이 번거로울 때 유용
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# 윈도우 전환도 Alt+숫자로
bind -n M-1 select-window -t 1
bind -n M-2 select-window -t 2
bind -n M-3 select-window -t 3</code></pre>
  </div>
</div>

<div class="card">
  <div class="card-title">모바일 사용 팁</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>Zoom 적극 활용</code></div>
      <div class="option-desc">화면이 작으므로 pane 분할보다 <kbd>Prefix + z</kbd>로 단일 pane을 전체 화면으로 확대하여 사용. 다른 pane은 <kbd>Prefix + z</kbd>로 복원 후 전환.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>윈도우 전환 중심으로</code></div>
      <div class="option-desc">pane 분할은 모바일에서 너무 좁으므로, 윈도우 전환(<kbd>Prefix + 0~9</kbd>)을 주로 사용하세요. 각 윈도우에 하나의 작업만 배치.</div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>외부 키보드 연결</code></div>
      <div class="option-desc">iPad + Magic Keyboard 또는 Bluetooth 키보드를 연결하면 데스크톱에 가까운 경험. Ctrl 키 조합이 편해져 tmux Prefix 입력이 수월해짐.</div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>모바일 최적화 설정 적용</strong>
        <p>Claude Code에게 "위 모바일 최적화 설정을 ~/.tmux.conf에 추가해줘"라고 요청. <code>tmux source ~/.tmux.conf</code>로 적용.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>모바일에서 실제 사용</strong>
        <p>모바일 SSH 클라이언트로 접속하여, Zoom 모드와 윈도우 전환을 실습. Claude Code에게 간단한 질문을 해보세요.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. 모바일에서 tmux를 사용할 때, pane 분할 대신 윈도우 전환을 권장하는 이유는?</summary>
      <div class="quiz-answer">
        모바일 화면은 좁기 때문에 pane을 분할하면 각 pane이 너무 좁아서 코드나 텍스트를 읽기 어렵습니다. 윈도우 전환은 전체 화면을 하나의 작업에 사용하므로 가독성이 좋습니다. 필요할 때 <kbd>Prefix + 0~9</kbd>로 빠르게 전환하는 것이 효율적입니다.
      </div>
    </details>
  </div>
</div>
`,

'5-5': `
<div class="lesson-why card">
  <div class="card-title">왜 지금 이걸 배우는가?</div>
  <ul>
    <li>Claude Code가 긴 작업을 수행할 때, 완료 여부를 모바일로 알 수 있으면 편리</li>
    <li>이미 Stop hook(알림음)을 사용 중이므로, 이를 원격 알림으로 확장</li>
    <li>전체 학습 코스의 마지막 단계 &mdash; 어디서든 Claude Code를 모니터링하는 환경 완성</li>
  </ul>
</div>

<div class="card">
  <div class="card-title">알림 시스템 구축 3가지 방법</div>
  <div class="option-group">
    <div class="option-item">
      <div class="option-name"><code>방법 1: ntfy.sh (추천 — 무료, 간편)</code></div>
      <div class="option-desc">
        오픈소스 푸시 알림 서비스. 별도 계정 없이 <code>curl</code> 한 줄로 모바일 알림 전송.
        <ul>
          <li>모바일: ntfy 앱 설치 &rarr; 토픽 구독 (예: <code>jack-claude-2026</code>)</li>
          <li>Mac: Stop hook에서 <code>curl</code>로 알림 전송</li>
        </ul>
        <div class="code-block inline">
          <pre><code># 테스트
curl -d "Claude Code 작업 완료!" ntfy.sh/jack-claude-2026</code></pre>
        </div>
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>방법 2: Slack Webhook</code></div>
      <div class="option-desc">
        이미 Slack을 사용 중이라면 별도 앱 설치 없이 알림 가능.
        <ul>
          <li>Slack에서 Incoming Webhook URL 생성</li>
          <li>Hook에서 해당 URL로 POST 요청</li>
        </ul>
        <div class="code-block inline">
          <pre><code>curl -X POST -H 'Content-type: application/json' \\
  --data '{"text":"Claude Code 작업 완료!"}' \\
  YOUR_SLACK_WEBHOOK_URL</code></pre>
        </div>
      </div>
    </div>
    <div class="option-item">
      <div class="option-name"><code>방법 3: macOS 알림 + Apple 생태계</code></div>
      <div class="option-desc">
        macOS 기본 알림을 사용. iPhone과 같은 Apple ID라면 일부 알림이 연동될 수 있음.
        <div class="code-block inline">
          <pre><code>osascript -e 'display notification "작업 완료" with title "Claude Code"'</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">settings.json에 알림 Hook 설정</div>
  <div class="code-block">
    <div class="code-header"><span>Stop hook 확장 (ntfy.sh 사용)</span>
      <button class="copy-btn" onclick="copyCode(this)">복사</button>
    </div>
    <pre><code>{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "afplay /System/Library/Sounds/Glass.aiff & curl -s -d 'Claude Code 작업 완료!' ntfy.sh/jack-claude-2026 > /dev/null 2>&1 &"
          }
        ]
      }
    ]
  }
}</code></pre>
  </div>
  <div class="callout callout-tip">
    <strong>팁:</strong> <code>&</code>로 백그라운드 실행하면 알림이 Claude Code의 응답 속도에 영향을 주지 않습니다. <code>> /dev/null 2>&1</code>은 출력을 숨깁니다.
  </div>
</div>

<div class="card">
  <div class="card-title">실습</div>
  <div class="practice-steps">
    <div class="practice-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <strong>ntfy.sh 설정</strong>
        <p>모바일에 ntfy 앱 설치 &rarr; <code>jack-claude-2026</code> 토픽 구독 &rarr; 터미널에서 <code>curl -d "테스트" ntfy.sh/jack-claude-2026</code> 실행 &rarr; 모바일에 알림이 오는지 확인.</p>
      </div>
    </div>
    <div class="practice-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <strong>Stop hook에 알림 추가</strong>
        <p>Claude Code에게 "Stop hook에 ntfy.sh 알림을 추가해줘. 기존 알림음은 유지하면서"라고 요청. 그 후 Claude Code에게 간단한 작업을 시키고, 모바일로 알림이 오는지 확인.</p>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card-title">이해 점검</div>
  <div class="quiz-list">
    <details class="quiz-item">
      <summary>Q. ntfy.sh 토픽이 공개라는 것은 보안상 괜찮은가?</summary>
      <div class="quiz-answer">
        기본적으로 ntfy.sh 토픽은 공개이므로, 토픽 이름을 추측하기 어렵게 만드는 것이 중요합니다 (예: <code>jack-claude-2026-x7k9</code>). 민감한 정보를 알림 내용에 포함하지 마세요 ("작업 완료" 정도만). 더 높은 보안이 필요하면 self-hosted ntfy 서버를 운영하거나, 인증이 필요한 Slack Webhook을 사용하세요.
      </div>
    </details>
    <details class="quiz-item">
      <summary>Q. Phase 1~5 전체를 한 문장으로 요약한다면?</summary>
      <div class="quiz-answer">
        "Ghostty + tmux로 체계적 작업 환경을 구축하고(P1), CLAUDE.md와 hooks로 Claude Code의 행동을 정밀 제어하며(P2), 멀티 에이전트로 작업을 병렬화하고(P3), 자동화 파이프라인으로 일상 업무를 효율화하며(P4), SSH와 모바일 알림으로 어디서든 작업을 이어갈 수 있는(P5) <strong>통합 AI 작업 환경</strong>을 완성했다."
      </div>
    </details>
  </div>
</div>
`

};
