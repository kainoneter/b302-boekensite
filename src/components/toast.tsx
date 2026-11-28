import { CircleCheck, CircleX, Lock, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const types = {
  success: { color: 'bg-success', icon: CircleCheck },
  error: { color: 'bg-error', icon: CircleX },
  unauthorized: { color: 'bg-warning', icon: Lock },
};

type ToastProps = {
  type?: keyof typeof types;
  title: string;
  message?: string;
  onClose?: () => void;
  dismissAfter?: number;
  dismissible?: boolean;
};

export function Toast({
  type = 'success',
  title,
  message,
  onClose,
  dismissAfter,
  dismissible = true,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);
  const canClose = Boolean(onClose);

  useEffect(() => {
    if (!canClose || dismissAfter === undefined || isExiting) return;

    const timeout = window.setTimeout(() => setIsExiting(true), dismissAfter);
    return () => window.clearTimeout(timeout);
  }, [canClose, dismissAfter, isExiting]);

  const { color, icon: Icon } = types[type];
  const animation = isExiting
    ? 'pointer-events-none animate-toast-out motion-reduce:[animation-duration:1ms]'
    : 'motion-safe:animate-toast-in';

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex w-[calc(100%-2.5rem)] max-w-sm overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-hard ${animation}`}
      onAnimationEnd={event => {
        if (event.target === event.currentTarget && event.animationName === 'toast-out') {
          onClose?.();
        }
      }}
    >
      <div
        className={`${color} w-12 shrink-0 grid place-items-center border-r-2 border-ink`}
      >
        <Icon aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-start gap-3">
          <h3 className="min-w-0 flex-1 font-bold wrap-break-word">{title}</h3>
          {dismissible && onClose && (
            <button
              type="button"
              onClick={() => setIsExiting(true)}
              className="shrink-0 cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-cobalt"
              aria-label="Melding sluiten"
            >
              <X aria-hidden="true" />
            </button>
          )}
        </div>
        {message && (
          <p className="mt-1 text-sm text-ink-soft wrap-break-word">{message}</p>
        )}
      </div>
    </div>
  );
}
