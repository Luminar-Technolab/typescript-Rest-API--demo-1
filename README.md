Real-time scenario: Fetch users from an API and transform them into a simplified user list for a dashboard.
Project structure
typescript-async/
│
├── src/
│   ├── types.ts
│   ├── api.ts
│   ├── transform.ts
│   └── index.ts
│
├── tsconfig.json
└── package.json
When using NodeNext and verbatimModuleSyntax: true:
1.	Use .js extensions for relative imports.
2.	Use import type for type-only imports.

1.	Create folder typescript-async
2.	Use npm init -y to create package.json , change type as module, update "build": "tsc",
3.	    "start": "node index.js"
4.	Use npx tsc –init to create tsconfig.json file
5.	To execute app : npm run build
npm start



