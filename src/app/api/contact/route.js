import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Simulate sending email or saving to DB
        console.log(`Received message from ${name} (${email}): ${message}`);
        
        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
