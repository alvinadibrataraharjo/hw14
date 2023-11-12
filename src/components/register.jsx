'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Register () {
    const submitForm = async (e) => {
        e.preventDefault();
        
        console.log(e.target[2].value, 'e target')
        const payload = {
          name: e.target[0].value,
          email: e.target[1].value,
          password: e.target[2].value,
        };

        console.log(payload, 'payload')
    
        try {
          await axios.post('/api/register', payload);
        //   push('/login');
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Register your account
            </h2>
            </div>
            <div className="card-body">
            <form onSubmit={submitForm} action="">
                <input type="text" name="name" placeholder="Username" className="input input-bordered w-full" />
                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                <input type="text" name="password" placeholder="Password" className="input input-bordered w-full" />
                <button type="submit" className="btn btn-outline">Register</button>
            </form>
            </div>
            </div>
        </main>
    )
}