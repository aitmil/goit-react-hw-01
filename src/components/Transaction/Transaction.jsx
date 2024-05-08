import css from "./Transaction.module.css";

export default function Transaction({ item: { type, amount, currency } }) {
  return (
    <>
      <td> {type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
