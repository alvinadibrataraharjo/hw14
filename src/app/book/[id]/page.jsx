import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
const prisma = new PrismaClient();

async function getData(id) {
  try {
    const book = await prisma.book.findUnique({
      where: { id },
    });
    return book;
  } catch (error) {
    console.log(error);
  }
}

export default async function BookPage({ params }) {
  const { id } = params;
  const data = await getData(+id);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Edit Book
        </h2>
      </div>
      <form action="">
        <div className="card-body">
          <div className="row">
            <div className="flex">
            <div className="col-3">  
              <h2 className='mt-3 mr-2 card-title'>Title</h2>
            </div>
            <div className="col-9 w-full">
              <input name= "email" type="text" value={data.title} className="input input-bordered w-full" />
            </div>

            </div>
          </div>
          <div className="row">
            <div className="flex">
            <div className="col-3">  
              <h2 className='mt-3 mr-2 card-title'>Author</h2>
            </div>
            <div className="col-9 w-full">
              <input name= "email" type="text" value={data.author} className="input input-bordered w-full" />
            </div>

            </div>
          </div>
          <div className="row">
            <div className="flex">
            <div className="col-3">  
              <h2 className='mt-3 mr-2 card-title'>Year</h2>
            </div>
            <div className="col-9 w-full">
              <input name= "email" type="text" value={data.year} className="input input-bordered w-full" />
            </div>

            </div>
          </div>
          
          <div className="row">
            <div className="flex">
            <div className="col-3">  
              <h2 className='mt-3 mr-2 card-title'>Publisher</h2>
            </div>
            <div className="col-9 w-full">
              <input name= "email" type="text" value={data.publisher} className="input input-bordered w-full" />
            </div>

            </div>
          </div>
          <div className="row">
            <div className="flex">
            <div className="col-3">  
              <h2 className='mt-3 mr-2 card-title'>Pages</h2>
            </div>
            <div className="col-9 w-full">
              <input name= "email" type="text" value={data.pages} className="input input-bordered w-full" />
            </div>

            </div>
          </div>
        <button type="submit" className="btn btn-outline">Save</button>
        </div>
      </form>
      </div>
    </main>
  );
}
