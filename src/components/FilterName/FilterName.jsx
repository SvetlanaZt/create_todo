export default function FilterName({ onChange }) {
  return (
    <>
      <input
        type="text"
        // value={value}
        onChange={onChange}
        placeholder="Search"
      ></input>
    </>
  );
}
