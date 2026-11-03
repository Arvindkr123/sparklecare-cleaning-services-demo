const base =
  "block w-full rounded-xl border bg-white px-4 text-[15px] text-navy-950 placeholder:text-navy-300 transition focus:outline-none focus:ring-4";

const stateCls = (error) =>
  error
    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
    : "border-navy-200 hover:border-navy-300 focus:border-teal-400 focus:ring-teal-100";

function Wrapper({ id, label, required, error, hint, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-800">
        {label} {required && <span className="text-teal-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-navy-400">{hint}</p>
      ) : null}
    </div>
  );
}

export function TextField({ id, label, required, error, hint, className, ...props }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <input
        id={id}
        name={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        className={`${base} h-12 ${stateCls(error)}`}
        {...props}
      />
    </Wrapper>
  );
}

export function SelectField({ id, label, required, error, hint, options, placeholder, className, ...props }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <div className="relative">
        <select
          id={id}
          name={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required={required}
          className={`${base} h-12 appearance-none pr-10 ${stateCls(error)}`}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </Wrapper>
  );
}

export function TextAreaField({ id, label, required, error, hint, className, ...props }) {
  return (
    <Wrapper id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <textarea
        id={id}
        name={id}
        rows={4}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        className={`${base} resize-y py-3 ${stateCls(error)}`}
        {...props}
      />
    </Wrapper>
  );
}
