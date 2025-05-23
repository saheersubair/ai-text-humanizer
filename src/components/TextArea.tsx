import React from 'react';

interface TextAreaProps {
  label: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  bgColor?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  placeholder,
  onChange,
  readOnly = false,
  bgColor = 'bg-gray-50',
}) => {
  return (
    <div className="flex flex-col h-full">
      <label className="text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea
        className={`flex-grow ${bgColor} border border-gray-200 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-medium text-gray-800 min-h-[300px]`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};