# Kata

语言：[English](README.md) | [中文](README.zh-CN.md)

Kata 是一套 AI Agent 编程最佳实践框架。它用可复用的流程、技能、约束和验证循环，把 AI 编程从随机发挥变成稳定工程动作。

Kata 将 Codex 和 Claude Code 作为一等开发工具支持。

它把“安装能力”和“初始化项目”分开：

- `npx skills add Woods30/kata` 只安装 Kata skill 和默认平台元数据。
- `kata init` 才初始化目标项目，生成 agent 说明、docs、memory 和 hooks 模板。

## 安装

作为通用 agent skill 安装：

```bash
npx skills add Woods30/kata
```

通过 Claude Marketplace 安装：

```bash
claude plugin marketplace add Woods30/kata
claude plugin install kata@kata
```

支持的平台：

- `codex`：安装 `.codex-plugin/` 和 `skills/kata/`
- `claude`：安装 `.claude-plugin/`、`commands/` 和 `skills/kata/`
- `both`：同时安装两个平台入口

默认安装 Codex 和 Claude 两个平台入口。本地直接安装时，可以使用 `kata add --platform=codex`、`kata add --platform=claude` 或 `kata add --platform=both`。

安装器不会创建项目 docs、memory 或 hooks。需要初始化项目时再运行 `kata init`。

`commands/` 是 Claude slash command 兼容层。Codex 不依赖它；Codex 通过 `skills/kata/SKILL.md` 的 description 隐式触发 Kata。`npx skills update` 更新的是已安装 skills，不应把它当成 Claude slash commands 的可靠同步来源；需要安装或刷新 commands 时，使用 Claude Marketplace/plugin 安装路径。

## 初始化项目

```bash
kata init
```

`kata init` 只创建缺失文件，并在已有说明文件中追加带标记的 Kata 区块：

- `AGENTS.md`
- `CLAUDE.md`
- `docs/spec.md`
- `docs/prompt_plan.md`
- `docs/todo.md`
- `.kata/memory/project.md`
- `.kata/memory/decisions.md`
- `.kata/memory/session.md`
- `.kata/skills.md`
- `.claude/settings.json`
- `.codex/settings.json`
- `.kata/scripts/session-reminder.sh`
- `.kata/scripts/memory-check.sh`

Hooks 通过平台支持的 settings 文件创建。若项目已有 settings 文件，Kata 不会覆盖，需要手动合并。

## 框架组成

- 可复用流程：初始化、规划、开发、记忆。
- Skills：使用渐进式披露的可移植 `SKILL.md` 指令。
- 技能编排：优先调用已安装技能，例如 `superpowers`，没有匹配技能时才使用 Kata 内置流程。
- 约束：写入 `AGENTS.md` 和 `CLAUDE.md` 的项目规则。
- 验证循环：计划前先头脑风暴并澄清 spec，开发中跑测试，会话结束前更新记忆。
- 项目级 hooks：`.claude/settings.json` 和 `.codex/settings.json`。
- 共享记忆：`.kata/memory/` 可被支持的 IDE 共用。

## 仓库结构

```text
kata/
├── .codex-plugin/
├── .claude-plugin/
├── commands/
│   ├── help.md
│   ├── init.md
│   ├── plan.md
│   ├── dev.md
│   ├── test.md
│   └── memory.md
├── scripts/
│   ├── install.js
│   ├── init-project.js
│   ├── kata.js
│   └── skills.js
└── skills/
    └── kata/
        ├── SKILL.md
        ├── templates/
        └── workflows/
```
