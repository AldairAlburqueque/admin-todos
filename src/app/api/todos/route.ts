import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';

export async function GET(req: Request) {
  

  const { searchParams } = new URL(req.url)
  const take = Number(searchParams.get('take') ?? '10');
  const skip = Number(searchParams.get('skip') ?? '0');

  if ( isNaN(take) ) {
    return NextResponse.json({ message: 'Take tiene que ser un numero'}, { status: 400})
  }
  if ( isNaN(skip) ) {
    return NextResponse.json({ message: 'skip tiene que ser un numero'}, { status: 400})
  }

  const todos = await prisma.todo.findMany(
    {
      take, skip,
    }
  );
  return NextResponse.json( todos );
  }


  const postSqchema = yup.object({
    description:  yup.string().required(),
    complete: yup.boolean().optional().default(false) //! TODO mostrar algo interesante
  })
  
  export async function POST(request: Request) { 

    try {
      const { description, complete } = await postSqchema.validate( await request.json() );

      const todo = await prisma.todo.create({data: { description, complete } })
  
      return NextResponse.json(todo)
    } catch (error) {
      return NextResponse.json( error , { status: 400 } );
    }
  }