import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };
  const resetForm = () => {
    setForm(initialState);
  };
  return { form, onChange, resetForm };
};

export default useForm;
