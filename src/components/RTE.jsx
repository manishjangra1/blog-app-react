'use client'

import React from 'react'
import { Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1 text-slate-700 font-medium'>{label}</label>}

    <div className='bg-white rounded-lg overflow-hidden border border-slate-200'>
        <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange, value}}) => (
            <ReactQuill 
                theme="snow"
                value={value || defaultValue}
                onChange={onChange}
                className='h-72 mb-12'
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                        ['link', 'image', 'code-block'],
                        ['clean']
                    ],
                }}
            />
        )}
        />
    </div>
    </div>
  )
}
