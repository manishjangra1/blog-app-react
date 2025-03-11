import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // Simulate database save
        console.log(`Subscribing ${email} to newsletter...`);
        
        return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

// backend logic update
