import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ item }) => {
  return (
    <div className={css.transDiv}>
      <table className={css.transTable}>
        <thead>
          <tr>
            <th className={css.transRow}>Type</th>
            <th className={css.transRow}>Amount</th>
            <th className={css.transRow}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {item.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.transRow}>{type}</td>
              <td className={css.transRow}>{amount}</td>
              <td className={css.transRow}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};