"use client";

import { useState } from "react";
import { validateAll, validateField } from "./validation";

/** Minimal form state + validation hook (no external dependencies). */
export function useForm(initialValues, schema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name] && schema[name]) {
      setErrors((er) => ({ ...er, [name]: validateField(name, value, schema[name]) }));
    }
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    if (schema[name]) setErrors((er) => ({ ...er, [name]: validateField(name, value, schema[name]) }));
  };

  /** Returns true when valid; focuses the first invalid field otherwise. */
  const validate = () => {
    const next = validateAll(values, schema);
    setErrors(next);
    setTouched(Object.fromEntries(Object.keys(schema).map((k) => [k, true])));
    const first = Object.keys(next)[0];
    if (first && typeof document !== "undefined") document.getElementById(first)?.focus();
    return !first;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  const field = (name) => ({ id: name, value: values[name], onChange, onBlur, error: errors[name] });

  return { values, errors, field, validate, reset, setValues };
}
