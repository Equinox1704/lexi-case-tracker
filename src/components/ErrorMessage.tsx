 import React from 'react';
 import { AlertCircle } from 'lucide-react';

 interface ErrorMessageProps {
    message: string;
 }
 
 export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="flex items-center justify-center py-8 text-red-600">
        <AlertCircle className="w-5 h-5 mr-2" />
        <span>{message}</span>
        </div>
    );
 };