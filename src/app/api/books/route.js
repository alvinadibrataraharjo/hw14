import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req, res) {
  const data = await req.formData();

  try {
    const book = await prisma.book.create({
      data: {
        title: data.get('title'),
        author: data.get('author'),
        publisher: data.get('publisher'),
        year: parseInt(data.get('year')),
        pages: parseInt(data.get('pages'))
      },
    });
    return NextResponse.json(book);
  } catch (error) {
    console.log(error);
  }
}
