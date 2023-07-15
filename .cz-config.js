module.exports = {
  subjectLimit: 100,
  subjectSeparator: ": ",
  typePrefix: "[",
  typeSuffix: "]",
  scopes: {},
  scopeOverrides: {},
  skipEmptyScopes: {},
  skipQuestions: [],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "hotfix", "modify", "delete"],
  appendBranchNameToCommitMessage: false,

  breakingPrefix: "BREAKING_CHANGE:",
  footerPrefix: "JIRA_ISSUE_KEY:",
  breaklineChar: "|",
  upperCaseSubject: false,
  askForBreakingChangeFirst: false,
  usePreparedCommit: false,

  types: [
    { value: "🫥 wip", name: "todo:\t\t진행중" },
    // base
    { value: "🌟 feat", name: "feat:\t\t신규 기능" },
    { value: "🪲 fix", name: "fix:\t\t버그 수정" },
    { value: "🔥 hotfix", name: "hotfix:\t긴급 버그 수정" },
    { value: "🔧 modify", name: "modify:\t코드 수정" },
    { value: "🙅🏻‍♀️ delete", name: "delete:\t코드 삭제" },

    { value: "🌈 perf", name: "perf:\t\t성능 개선" },
    { value: "💡 refactor", name: "refactor:\t로직 변경 없는 코드 개선" },
    { value: "✅ test", name: "test:\t\t테스트 추가 및 수정" },

    { value: "📝 comment", name: "comment:\t주석 작업" },
    { value: "⚙️ config", name: "config:\t설정 파일 작업" },
    { value: "🚚 chore", name: "chore:\t패키지 매니징 작업" },

    { value: "💄 style", name: "style:\t스타일 개선" },
    { value: "🧬 infra", name: "infra:\t인프라 작업" },
    { value: "🛠️ db", name: "db:\t\t데이터베이스 작업" },
    { value: "📝 docs", name: "docs:\t\t문서 작업" },

    // git
    { value: "🤝 merge", name: "merge:\t코드 병합" },
    { value: "🔙 revert", name: "revert:\t코드 되돌리기" },
  ],

  messages: {
    type: "type:——————————\n",
    subject: "subject:————————\n",
    body: "body:——————————\n",
    breaking: "breaking changes:————\n",
    footer: "jira issue key:—————\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?\n",
  },
};
