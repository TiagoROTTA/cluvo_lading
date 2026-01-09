import { NextRequest, NextResponse } from 'next/server'
import Airtable from 'airtable'

// Configure Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID || '')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, stage, description } = body

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!stage) {
      return NextResponse.json(
        { error: 'Startup stage is required' },
        { status: 400 }
      )
    }

    // Create record in Airtable
    await base(process.env.AIRTABLE_TABLE_NAME || 'Waitlist').create([
      {
        fields: {
          Email: email,
          Name: name,
          Description: description || '',
          'Company Stage': stage,
        },
      },
    ])

    console.log('Successfully added to Airtable:', { email, name, stage })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully added to waitlist!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing waitlist submission:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}

