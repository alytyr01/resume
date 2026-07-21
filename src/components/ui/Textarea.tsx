import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || React.useId();
    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
         <label htmlFor={textareaId} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
             'flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-400 focus:ring-red-400',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
