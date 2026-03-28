// === Claude Code Mastery - 학습 플랫폼 ===

// 레슨 메타데이터 (placeholder 레슨 자동 생성용)
const LESSONS = {
  '1-3': { phase: 1, color: 'blue', phaseLabel: 'Phase 1 — 터미널 환경', title: 'tmux + Claude Code 통합 패턴', desc: 'Claude Code를 tmux 안에서 효율적으로 운영하는 핵심 패턴을 학습합니다.', prev: '1-2', next: '1-4', prevLabel: '1-2 레이아웃', nextLabel: '1-4 환경 영속성' },
  '1-4': { phase: 1, color: 'blue', phaseLabel: 'Phase 1 — 터미널 환경', title: 'tmux-resurrect/continuum 환경 영속성', desc: '재부팅 후에도 tmux 환경이 자동 복원되도록 설정합니다.', prev: '1-3', next: '1-5', prevLabel: '1-3 통합 패턴', nextLabel: '1-5 키바인딩' },
  '1-5': { phase: 1, color: 'blue', phaseLabel: 'Phase 1 — 터미널 환경', title: 'Ghostty + tmux 키바인딩 정리', desc: '두 도구의 단축키 충돌을 해소하고 최적의 키 배치를 설계합니다.', prev: '1-4', next: '1-6', prevLabel: '1-4 영속성', nextLabel: '1-6 실전 구축' },
  '1-6': { phase: 1, color: 'blue', phaseLabel: 'Phase 1 — 터미널 환경', title: '실전 워크스페이스 구축', desc: 'Phase 1의 모든 기술을 조합하여 실제 작업 환경을 완성합니다.', prev: '1-5', next: '2-1', prevLabel: '1-5 키바인딩', nextLabel: '2-1 CLAUDE.md' },
  '2-1': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'CLAUDE.md 설계 원칙과 패턴', desc: '효과적인 CLAUDE.md를 작성하는 구조, 패턴, 안티패턴을 학습합니다.', prev: '1-6', next: '2-2', prevLabel: '1-6 실전 구축', nextLabel: '2-2 settings.json' },
  '2-2': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'settings.json 전체 옵션 맵', desc: 'Claude Code 설정의 모든 옵션을 이해하고 전략적으로 구성합니다.', prev: '2-1', next: '2-3', prevLabel: '2-1 CLAUDE.md', nextLabel: '2-3 Hooks' },
  '2-3': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'Hooks 심화', desc: 'PreToolUse, PostToolUse, Notification 등 전체 Hook 유형과 조건부 실행을 마스터합니다.', prev: '2-2', next: '2-4', prevLabel: '2-2 settings.json', nextLabel: '2-4 Permissions' },
  '2-4': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'Permissions 전략 설계', desc: 'allow/deny 패턴을 전략적으로 설계하여 보안과 편의의 균형을 잡습니다.', prev: '2-3', next: '2-5', prevLabel: '2-3 Hooks', nextLabel: '2-5 MCP' },
  '2-5': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'MCP 서버 설정과 활용 심화', desc: '복수 MCP 서버 관리, 커스텀 MCP 서버 개념을 학습합니다.', prev: '2-4', next: '2-6', prevLabel: '2-4 Permissions', nextLabel: '2-6 하네스 실습' },
  '2-6': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: '프로젝트별 하네스 설계 실습', desc: '실제 프로젝트를 위한 완전한 하네스를 직접 설계합니다.', prev: '2-5', next: '2-7', prevLabel: '2-5 MCP', nextLabel: '2-7 Memory' },
  '2-7': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'Memory 시스템과 세션 연속성', desc: 'Claude Code의 메모리 시스템을 활용한 세션 간 연속성 전략을 학습합니다.', prev: '2-6', next: '2-8', prevLabel: '2-6 하네스 실습', nextLabel: '2-8 Commands' },
  '2-8': { phase: 2, color: 'mauve', phaseLabel: 'Phase 2 — 하네스 엔지니어링', title: 'Slash Commands와 Custom Commands', desc: '커스텀 슬래시 명령어를 만들어 반복 작업을 자동화합니다.', prev: '2-7', next: '3-1', prevLabel: '2-7 Memory', nextLabel: '3-1 Subagent' },
  '3-1': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: 'Subagent 개념과 동작 원리', desc: 'Claude Code 내부의 subagent가 무엇이고 어떻게 동작하는지 이해합니다.', prev: '2-8', next: '3-2', prevLabel: '2-8 Commands', nextLabel: '3-2 다중 세션' },
  '3-2': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: 'tmux 기반 다중 Claude Code 세션 운영', desc: '여러 Claude Code 인스턴스를 tmux에서 동시에 운영합니다.', prev: '3-1', next: '3-3', prevLabel: '3-1 Subagent', nextLabel: '3-3 Headless' },
  '3-3': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: 'Headless 모드 (claude -p) 활용', desc: '비대화형 실행, 파이프라인 연동, 스크립트화를 학습합니다.', prev: '3-2', next: '3-4', prevLabel: '3-2 다중 세션', nextLabel: '3-4 작업 분할' },
  '3-4': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: '작업 분할 전략', desc: '어떤 작업을 subagent로 위임할지 판단하는 기준을 학습합니다.', prev: '3-3', next: '3-5', prevLabel: '3-3 Headless', nextLabel: '3-5 통신 패턴' },
  '3-5': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: '에이전트 간 통신 패턴', desc: '파일 기반 통신, 공유 CLAUDE.md 등 에이전트 간 협업 방법을 학습합니다.', prev: '3-4', next: '3-6', prevLabel: '3-4 작업 분할', nextLabel: '3-6 실전 멀티' },
  '3-6': { phase: 3, color: 'green', phaseLabel: 'Phase 3 — Agent Team', title: '실전: 복수 에이전트 프로젝트 작업', desc: '여러 에이전트를 동시에 운영하는 시뮬레이션을 진행합니다.', prev: '3-5', next: '4-1', prevLabel: '3-5 통신 패턴', nextLabel: '4-1 워크플로우' },
  '4-1': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '일일 워크플로우 설계', desc: '오전/오후 루틴과 자동화 트리거를 설계합니다.', prev: '3-6', next: '4-2', prevLabel: '3-6 실전 멀티', nextLabel: '4-2 세션 연속성' },
  '4-2': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '세션 연속성 고도화', desc: 'MEMORY.md / SESSION_LOG.md 패턴을 체계화합니다.', prev: '4-1', next: '4-3', prevLabel: '4-1 워크플로우', nextLabel: '4-3 MCP 생태계' },
  '4-3': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: 'MCP 생태계 활용', desc: 'Notion, Drive 등 외부 서비스 통합 전략을 학습합니다.', prev: '4-2', next: '4-4', prevLabel: '4-2 세션 연속성', nextLabel: '4-4 자동화' },
  '4-4': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '자동화 파이프라인 구축', desc: 'hooks + scheduled tasks + Claude Code를 조합한 자동화를 구축합니다.', prev: '4-3', next: '4-5', prevLabel: '4-3 MCP 생태계', nextLabel: '4-5 템플릿' },
  '4-5': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '프로젝트 템플릿 시스템', desc: '새 프로젝트를 빠르게 시작할 수 있는 키트를 만듭니다.', prev: '4-4', next: '4-6', prevLabel: '4-4 자동화', nextLabel: '4-6 트러블슈팅' },
  '4-6': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '트러블슈팅과 디버깅 패턴', desc: '세션 문제 해결, 컨텍스트 관리 패턴을 학습합니다.', prev: '4-5', next: '4-7', prevLabel: '4-5 템플릿', nextLabel: '4-7 Sprint' },
  '4-7': { phase: 4, color: 'peach', phaseLabel: 'Phase 4 — 실무 운영', title: '종합 실습: Sprint 계획 시뮬레이션', desc: 'Phase 1~4 기술을 통합하는 종합 실습입니다.', prev: '4-6', next: '5-1', prevLabel: '4-6 트러블슈팅', nextLabel: '5-1 SSH' },
  '5-1': { phase: 5, color: 'teal', phaseLabel: 'Phase 5 — 모바일 소통', title: 'SSH 원격 접근 설정', desc: 'Mac SSH 서버 구성과 키 인증, 보안 설정을 학습합니다.', prev: '4-7', next: '5-2', prevLabel: '4-7 Sprint', nextLabel: '5-2 tmux attach' },
  '5-2': { phase: 5, color: 'teal', phaseLabel: 'Phase 5 — 모바일 소통', title: 'tmux attach로 세션 이어받기', desc: '모바일에서 기존 tmux 세션에 접근하는 방법을 학습합니다.', prev: '5-1', next: '5-3', prevLabel: '5-1 SSH', nextLabel: '5-3 모바일 앱' },
  '5-3': { phase: 5, color: 'teal', phaseLabel: 'Phase 5 — 모바일 소통', title: 'iOS/Android SSH 클라이언트 설정', desc: 'Termius, Blink Shell 등 모바일 클라이언트를 설정합니다.', prev: '5-2', next: '5-4', prevLabel: '5-2 tmux attach', nextLabel: '5-4 모바일 최적화' },
  '5-4': { phase: 5, color: 'teal', phaseLabel: 'Phase 5 — 모바일 소통', title: '모바일 친화적 tmux 설정', desc: '터치 스크린용 keybinding과 가독성 조정을 학습합니다.', prev: '5-3', next: '5-5', prevLabel: '5-3 모바일 앱', nextLabel: '5-5 알림' },
  '5-5': { phase: 5, color: 'teal', phaseLabel: 'Phase 5 — 모바일 소통', title: '알림 시스템 구축', desc: 'Claude Code 완료 알림을 모바일로 전달하는 시스템을 구축합니다.', prev: '5-4', next: null, prevLabel: '5-4 모바일 최적화', nextLabel: null },
};

// Phase별 단계 수
const PHASE_COUNTS = { 1: 6, 2: 8, 3: 6, 4: 7, 5: 5 };
const TOTAL_STEPS = 32;

// === 초기화 ===
document.addEventListener('DOMContentLoaded', () => {
  injectSVGGradient();
  generatePlaceholderLessons();
  initNavigation();
  initTheme();
  initSidebar();
  initCommandSearch();
  initCopyButtons();
  updateProgress();

  // URL 해시로 초기 페이지 결정
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    navigateTo(hash);
  }
});

// === SVG 그라디언트 주입 ===
function injectSVGGradient() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.position = 'absolute';
  svg.style.width = '0';
  svg.style.height = '0';
  svg.innerHTML = `
    <defs>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color: var(--blue)" />
        <stop offset="100%" style="stop-color: var(--mauve)" />
      </linearGradient>
    </defs>
  `;
  document.body.prepend(svg);
}

// === Placeholder 레슨 생성 ===
function generatePlaceholderLessons() {
  const content = document.getElementById('content');

  Object.entries(LESSONS).forEach(([key, lesson]) => {
    // 이미 HTML에 콘텐츠가 있는 레슨은 스킵 (1-1, 1-2는 HTML에 직접 작성)
    const existing = document.getElementById(`lesson-${key}`);
    if (existing) {
      // 이미 존재하지만 coming-soon인 경우만 재생성
      if (!existing.querySelector('.coming-soon')) return;
    }

    const section = existing || document.createElement('section');
    section.className = 'page';
    section.id = `lesson-${key}`;

    const prevNav = lesson.prev
      ? `<a href="#lesson-${lesson.prev}" class="lesson-nav-btn" onclick="navigateTo('lesson-${lesson.prev}')">&#8592; ${lesson.prevLabel}</a>`
      : '<span></span>';
    const nextNav = lesson.next
      ? `<a href="#lesson-${lesson.next}" class="lesson-nav-btn lesson-nav-next" onclick="navigateTo('lesson-${lesson.next}')">${lesson.nextLabel} &#8594;</a>`
      : `<a href="#overview" class="lesson-nav-btn lesson-nav-next" onclick="navigateTo('overview')">Overview &#8594;</a>`;

    section.innerHTML = `
      <div class="lesson-header" style="--phase-color: var(--${lesson.color})">
        <div class="lesson-phase">${lesson.phaseLabel}</div>
        <h1>${key}. ${lesson.title}</h1>
        <p class="lesson-desc">${lesson.desc}</p>
      </div>
      <div class="card">
        <div class="coming-soon">
          <span class="coming-icon">&#128218;</span>
          <p>이 레슨의 콘텐츠는 학습 진행에 따라 채워집니다.</p>
          <p class="coming-sub">Claude Code 세션에서 "${key} 학습 시작"이라고 말하면 이 페이지가 업데이트됩니다.</p>
        </div>
      </div>
      <div class="lesson-nav">
        ${prevNav}
        ${nextNav}
      </div>
    `;

    if (!existing) content.appendChild(section);
  });
}

// === 네비게이션 ===
function initNavigation() {
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(item.dataset.section);
    });
  });
}

function navigateTo(sectionId) {
  // 페이지 전환
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'instant', block: 'start' });
    window.scrollTo(0, 0);
  }

  // 사이드바 활성화
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (navItem) {
    navItem.classList.add('active');
    navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // 상단바 제목 업데이트
  const topbarTitle = document.getElementById('topbarTitle');
  if (topbarTitle) {
    if (sectionId === 'overview') {
      topbarTitle.textContent = 'Overview';
    } else if (sectionId.startsWith('lesson-')) {
      const key = sectionId.replace('lesson-', '');
      const lesson = LESSONS[key];
      topbarTitle.textContent = lesson ? `${key}. ${lesson.title}` : sectionId;
    } else if (sectionId.startsWith('ref-')) {
      topbarTitle.textContent = navItem ? navItem.textContent.trim() : sectionId;
    }
  }

  // 모바일: 사이드바 + 백드롭 닫기
  document.getElementById('sidebar')?.classList.remove('open');
  document.querySelector('.sidebar-backdrop')?.classList.remove('visible');

  // URL 해시 업데이트
  history.replaceState(null, '', `#${sectionId}`);
}

// 전역 함수로 등록 (HTML onclick에서 호출)
window.navigateTo = navigateTo;

// === 테마 ===
function initTheme() {
  // 기본값은 라이트 모드
  const saved = localStorage.getItem('cc-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('cc-theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerHTML = theme === 'dark' ? '&#9788;' : '&#9790;';
}

// === 사이드바 (모바일) ===
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('sidebarClose');

  // 백드롭 엘리먼트 생성
  const backdrop = document.createElement('div');
  backdrop.className = 'sidebar-backdrop';
  document.body.appendChild(backdrop);

  function openSidebar() {
    sidebar?.classList.add('open');
    backdrop.classList.add('visible');
  }
  function closeSidebar() {
    sidebar?.classList.remove('open');
    backdrop.classList.remove('visible');
  }

  menuBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sidebar?.classList.contains('open')) closeSidebar();
    else openSidebar();
  });
  closeBtn?.addEventListener('click', closeSidebar);
  backdrop.addEventListener('click', closeSidebar);
}

// === 명령어 검색 ===
function initCommandSearch() {
  const input = document.getElementById('cmdSearch');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    document.querySelectorAll('#cmdList .cmd').forEach(cmd => {
      cmd.style.display = cmd.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
    document.querySelectorAll('#cmdList .cmd-category').forEach(cat => {
      const visible = cat.querySelectorAll('.cmd:not([style*="display: none"])');
      cat.style.display = visible.length > 0 ? '' : 'none';
    });
  });
}

// === 코드 복사 ===
function initCopyButtons() {
  // onclick으로 처리하므로 별도 init 불필요
}

function copyCode(btn) {
  const codeBlock = btn.closest('.code-block');
  const code = codeBlock?.querySelector('code');
  if (!code) return;

  navigator.clipboard.writeText(code.textContent).then(() => {
    btn.textContent = '복사됨!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '복사';
      btn.classList.remove('copied');
    }, 2000);
  });
}

window.copyCode = copyCode;

// === 진행률 (향후 확장용) ===
function updateProgress() {
  // 현재는 정적. 학습 진행 시 업데이트 가능
  const completed = 0;
  const pct = Math.round((completed / TOTAL_STEPS) * 100);

  // 원형 진행률
  const ring = document.getElementById('progressRing');
  if (ring) {
    const circumference = 2 * Math.PI * 52; // r=52
    ring.style.strokeDashoffset = circumference - (circumference * pct / 100);
  }

  const pctEl = document.getElementById('progressPct');
  if (pctEl) pctEl.textContent = pct + '%';

  const pill = document.getElementById('progressPill');
  if (pill) pill.textContent = `${completed} / ${TOTAL_STEPS}`;

  // Phase별
  for (let p = 1; p <= 5; p++) {
    const count = 0; // 향후 localStorage에서 로드
    const total = PHASE_COUNTS[p];
    const countEl = document.querySelector(`[data-phase-count="${p}"]`);
    if (countEl) countEl.textContent = `${count}/${total}`;

    const fillEl = document.querySelector(`[data-phase-fill="${p}"]`);
    if (fillEl) fillEl.style.width = `${(count / total) * 100}%`;
  }
}
