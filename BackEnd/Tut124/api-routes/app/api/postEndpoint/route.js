import { NextResponse } from "next/server";
 
export async function POST(request) {
    console.log('Request received from Client 😀');
    let data = await request.json();
    console.log(data);
    
    return NextResponse.json({
        "Info" : "Your POST request has been received by server",
        "Sent By" : "NextJS Server!"
    })
}
