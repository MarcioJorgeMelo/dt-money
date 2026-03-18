# 💰 Organizador de Finanças (Projeto de Estudos)

Este projeto foi desenvolvido exclusivamente para fins de estudo, com foco em **reforçar fundamentos do React** e melhorar a tomada de decisão no uso de suas APIs.

A ideia central não é construir uma aplicação pronta para produção, mas sim **voltar aos princípios**, entendendo melhor como e quando utilizar cada ferramenta do ecossistema React de forma eficiente.

---

## 📌 Sobre o projeto

A aplicação consiste em um **organizador de finanças**, permitindo:

* Registrar entradas e saídas
* Categorizar transações
* Visualizar resumo financeiro (entradas, saídas e total)
* Listar e buscar transações

---

## 🧠 Foco de aprendizado

Durante o desenvolvimento, o principal objetivo foi explorar e entender melhor **otimizações e controle de renderização no React**.

---

### ⚡ useCallback

```js
// useCallback -> utilizado para otimizar o padrão do react, que caso algo mude, tudo é renderizado. Permite informar quais dependências a função realmente tem, p/ otimização
```

**Aprendizado:**

* Evitar recriação desnecessária de funções
* Reduzir re-renderizações em componentes filhos
* Controle mais preciso de dependências

---

### 🎯 useContextSelector

```js
// Essa função permite retornar ao elemento apenas a dependência utilizada e não todo o contexto -> Otimiza renderização
const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
})
```

**Aprendizado:**

* Evitar re-renderizações causadas por mudanças irrelevantes no contexto
* Consumir apenas o que realmente é necessário
* Melhor performance em aplicações com muitos estados globais

---

### 🧮 useMemo

```js
// Com useMemo -> Fará a variavel ser renderizada apenas se 'transactions' mudar

// Irei reduzir o array de objeto a isso:
// { income: x, outcome: y, total: z }
const summary = useMemo(() => {
    return transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }

            return acc
        },
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )
}, [transactions])
```

**Aprendizado:**

* Evitar cálculos desnecessários a cada render
* Trabalhar com dados derivados de forma performática
* Melhorar eficiência em listas e agregações

---

### 🧩 React.memo

```js
// Não vale a pena p/ pequenos componentes, pois na maioria das vezes, comparar HTML é mais rápido que 'deep comparison'
// Usar 'memo' -> verifica se houve mudanças nos hooks, props ou parents, antes de inicar o processo padrão do react, de recriar o componente p/ compara-lo, após novas mudanças
```

**Aprendizado:**

* Entender quando otimizar (e quando não)
* Evitar overengineering
* Balancear custo de comparação vs custo de renderização

---

## ⚙️ Funcionalidades

* 💸 Cadastro de transações (entrada/saída)
* 📊 Resumo financeiro automático
* 🔎 Busca de transações
* 📋 Listagem organizada

---

## 🛠️ Tecnologias

* React
* TypeScript
* Context API
* Hooks avançados (useMemo, useCallback, etc.)

---

## 💡 Objetivo final

> Evoluir na forma de pensar aplicações React, focando em **performance, legibilidade e tomada de decisão técnica consciente**.

---

## 📎 Observação

Este repositório é apenas para estudo e experimentação.
Pode conter mudanças frequentes, refatorações e abordagens diferentes para o mesmo problema.
