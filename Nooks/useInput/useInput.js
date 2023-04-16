export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const val = event.target.value;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(val);
    }
    if (willUpdate) {
      setValue(val);
    }
  };
  return { props: { value, onChange }, utils: { setValue } };
};
