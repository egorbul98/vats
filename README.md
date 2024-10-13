http://prof-xolod.ru/

## Разработка
1. yarn
2. cp .env.example .env
2. yarn start:dev

    Если нужно разрабатывать только клиент, то для быстрой сборки лучше использовать 

    2.1. yarn start:react-scripts

3. open http://localhost:3000

## прод
1. yarn start:prod

## скрипты автогенерации
в package.json:
```
    "generate:brands": "node --loader ts-node/esm  ./scripts/generate-brands-images-imports.ts",
    "generate:certificates": "node --loader ts-node/esm  ./scripts/generate-certificates-images-imports.ts"
```