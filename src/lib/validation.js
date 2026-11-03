const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateField(name, value, rules = {}) {
  const v = typeof value === "string" ? value.trim() : value;
  if (rules.required && !v) return rules.requiredMessage || "This field is required.";
  if (!v) return "";
  if (rules.minLength && v.length < rules.minLength) return `Please enter at least ${rules.minLength} characters.`;
  if (rules.maxLength && v.length > rules.maxLength) return `Please keep this under ${rules.maxLength} characters.`;
  if (rules.type === "email" && !EMAIL_RE.test(v)) return "Please enter a valid email address.";
  if (rules.type === "phone") {
    const digits = v.replace(/\D/g, "");
    if (!/^[+\d\s().-]+$/.test(v) || digits.length < 7 || digits.length > 15)
      return "Please enter a valid phone number (include country code).";
  }
  if (rules.type === "futureDate") {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(v) < today) return "Please choose today or a future date.";
  }
  return "";
}

export function validateAll(values, schema) {
  const errors = {};
  for (const [name, rules] of Object.entries(schema)) {
    const err = validateField(name, values[name], rules);
    if (err) errors[name] = err;
  }
  return errors;
}
