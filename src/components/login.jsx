export default function Login () {

    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="card-body">
        <input type="text" placeholder="Username" className="input input-bordered w-full" />
        <input type="text" placeholder="Password" className="input input-bordered w-full" />
        <button className="btn btn-outline">Login</button>
        </div>
        </div>
        </main>
    )
}