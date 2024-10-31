impor type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse)  
 {
   if (req.method === 'POST') {
     const { email, password } = req.body;

     try {
       const user = await prisma.user.create({  

         data: {
           email,
           password,
         },
       });

       res.status(201).json({ message: 'User created successfully' });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message:  
  'Error creating user' });
     }
   } else {
     res.status(405).json({ message: 'Method Not Allowed'  
  });
   }
 }
