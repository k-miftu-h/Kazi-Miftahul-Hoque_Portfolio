import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Configuring is mostly handled aggressively via CLOUDINARY_URL in .env.local natively,
// but setting secure: true ensures all URLs come back as HTTPS.
cloudinary.config({
  secure: true
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");
    const prefix = searchParams.get("prefix");

    let expression = "";
    if (folder && prefix) expression = `folder:"${folder}" AND public_id:"${prefix}*"`;
    else if (folder) expression = `folder:"${folder}"`;
    else if (prefix) expression = `public_id:"${prefix}*"`;

    if (!expression) {
      return NextResponse.json({ error: "No query strategy provided" }, { status: 400 });
    }

    const result = await cloudinary.search
      .expression(expression)
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    return NextResponse.json({ resources: result.resources }, { status: 200 });
  } catch (error) {
    console.error('Cloudinary API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch images from Cloudinary' }, { status: 500 });
  }
}
