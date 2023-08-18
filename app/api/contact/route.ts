import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";
import { emailTemplate } from "@/templates/email";

const generateEmailContent = (data: object) =>{
    const stringData = Object.entries(data).reduce((str,[key,val]) =>{
        (str += `${key}: ${val}\n\n`);
        return str
    },'')

    const htmlData = emailTemplate(Object.entries(data).reduce((str,[key,val]) =>{
        (str += `<h2>${val}</h2>`);
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
    console.log(generateEmailContent(data))
    if(!name || !email || !subject || !message){
        return  NextResponse.json({message:"Bad request"}, {status:400})
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject,
            // text: "this is a test string",
            // html:"<h1>Test Title</h1><p>some body text</p><h2>Testing</h2>"
            ...generateEmailContent(data)
        })
        return  NextResponse.json({message:"Bad request"}, {status:400})
    } catch (error: any) {
         console.log(error)
        return  NextResponse.json({message: error.message}, {status:400})
    }

   return  NextResponse.json({message:"Bad request"}, {status:400})
}