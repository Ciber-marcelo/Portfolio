//é asim q acesamos uma api no next, veja o video para mais detalhes 
//"https://www.youtube.com/watch?v=RVGRPleYFUI&list=PLY_G6KZ7jlfU41bdaWpTsOnfCC7bmpJcL&index=16&ab_channel=GBDev"

import { NextResponse } from "next/server"
import axios from "axios"

//codigo do discord, ta no arquivo .env.local
const WEBHOOK_URL = process.env.WEBHOOK_URL!

type bodySchema = {
   name: string
   email: string
   message: string
}

export async function POST(request: Request) {
   try {
      const body: bodySchema = await request.json()
      const { name, email, message } = body
      const messageData = {
         embeds: [
            {
               title: 'Mensagem de Contato',
               color: 0x4983f5,
               fields: [
                  {
                     name: 'Nome',
                     value: name,
                     inline: true,
                  },
                  {
                     name: 'E-mail',
                     value: email,
                     inline: true,
                  },
                  {
                     name: 'Mensagem',
                     value: message,
                  },
               ],
            },
         ]
      }
      await axios.post(WEBHOOK_URL, messageData)
      return NextResponse.json({
         message: 'Mensagem enviada com sucesso'
      })

   } catch (err) {
      console.error(err)
      return NextResponse.error()
   }

}