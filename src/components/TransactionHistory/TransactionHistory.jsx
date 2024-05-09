import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody} key={items.id}>
        {items.map((item) => (
          <tr className={css.tr} key={item.id}>
            <Transaction item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
