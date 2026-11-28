import type { InputHTMLAttributes } from 'react';
import { CircleAlert } from 'lucide-react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  helper?: string;
  error?: string;
  invalid?: boolean;
};

export function Input({
  id,
  label,
  helper,
  error,
  invalid,
  type = 'text',
  ...props
}: InputProps) {
  const isInvalid = Boolean(invalid || error);
  const descriptionId = helper || error ? `${id}-description` : undefined;

  return (
    <div className="flex flex-col gap-1 text-[12px] font-mono">
      <label htmlFor={id}>{label.toUpperCase()}</label>
      <input
        {...props}
        id={id}
        type={type}
        aria-invalid={isInvalid}
        aria-describedby={descriptionId}
        className={`rounded-xl border-2 px-4 py-3 focus:border-[3px] focus:shadow-hard-sm ${isInvalid ? 'bg-coral-soft border-coral focus:border-coral' : 'bg-white border-ink focus:border-cobalt'}`}
      />
      {error ? (
        <span
          id={descriptionId}
          className="flex items-center gap-1 text-[14px] font-sans text-coral"
        >
          <CircleAlert aria-hidden="true" />
          {error}
        </span>
      ) : (
        helper && (
          <span id={descriptionId} className="text-[14px] font-sans">
            {helper}
          </span>
        )
      )}
    </div>
  );
}
