'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
export default function Login () {
  const router = useRouter();

  const loginForm = async (e) => {
    e.preventDefault();

    const payload = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    console.log(payload)

    try {
      await axios.post('/api/login', payload);
      router.push('/home');
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={loginForm} action="">
          <div className="card-body">
          <input name= "email" type="text" placeholder="Email" className="input input-bordered w-full" />
          <input name = "password" type="text" placeholder="Password" className="input input-bordered w-full" />
          <button type="submit" className="btn btn-outline">Login</button>
          </div>
        </form>
        </div>
        </main>
    )
}