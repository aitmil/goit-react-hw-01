import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";

export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody key={items.id}>
        {items.map((item) => (
          <tr key={item.id}>
            <Transaction item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
