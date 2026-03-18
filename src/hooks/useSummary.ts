import { TransactionsContext } from "../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"

export function useSummary() {
    // Essa função permite retornar ao elemento apenas a dependência utilizada e não todo o contexto -> Otimiza renderização
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    // Irei reduzir o array de objeto a isso:
    // { income: x, outcome: y, total: z }
    const summary = transactions.reduce(
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

    return summary
}