import { StyledInput } from './FilterName.styled';
export default function FilterName({ onChange }) {
  return (
    <>
      <StyledInput
        type="text"
        onChange={onChange}
        placeholder="Search"
      ></StyledInput>
    </>
  );
}
