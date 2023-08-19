import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";
import { emailTemplate } from "@/templates/email";

const formattedKey: { [key: string]: string } = {
    name:"Name",
    email:"Email",
    subject:"Subject",
    message:"Message"
}
const generateEmailContent = (data: object) =>{
    const stringData = Object.entries(data).reduce((str,[key,val]) =>{
        (str += `${key}: ${val}\n\n`);
        return str
    },'')

    const htmlData = emailTemplate(Object.entries(data).reduce((str,[key,val]) =>{
        (str += `<h1 class="form-heading" align="left">${formattedKey[key]}</h1><p class="form-answer" align="left">${val}</p>`);
        return str
    },''))

    return{
        text: stringData,
        html: htmlData
    }
}
export async function POST(request: Request) {
    const requestBody =  await request.text();
    const data = JSON.parse(requestBody);
    const { name, email, subject, message } = data
   
    if(!name || !email || !subject || !message){
        return  NextResponse.json({message:"Bad request"}, {status:400})
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject,
            ...generateEmailContent(data)
        })
        return  NextResponse.json({message:"Email Sent"}, {status:200})
    } catch (error: any) {
         console.log(error)
        return  NextResponse.json({message: error.message}, {status:400})
    }

   return  NextResponse.json({message:"Bad request"}, {status:400})
}