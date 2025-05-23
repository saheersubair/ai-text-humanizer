interface SubmitResponse {
  status: string;
  id: string;
}

interface DocumentResponse {
  id: string;
  output: string;
  input: string;
  readability: string;
  createdDate: string;
  purpose: string;
}

const API_KEY = 'dd410c04-f157-4f4c-9e41-b7d125f2b339';
const BASE_URL = 'https://humanize.undetectable.ai';

export class HumanizeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HumanizeError';
  }
}

export async function submitText(text: string): Promise<string> {
  try {
    const response = await fetch(`${BASE_URL}/submit`, {
      method: 'POST',
      headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: text,
        readability: 'High School',
        purpose: 'General Writing',
        strength: 'More Human',
        model: 'v11',
      }),
    });

    if (!response.ok) {
      throw new HumanizeError('Failed to submit text for humanization');
    }

    const data: SubmitResponse = await response.json();
    return data.id;
  } catch (error) {
    if (error instanceof HumanizeError) {
      throw error;
    }
    throw new HumanizeError('Network error while submitting text');
  }
}

export async function pollDocument(id: string): Promise<string> {
  try {
    const response = await fetch(`${BASE_URL}/document`, {
      method: 'POST',
      headers: {
        'apikey': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new HumanizeError('Failed to retrieve humanized text');
    }

    const data: DocumentResponse = await response.json();
    
    if (!data.output) {
      throw new HumanizeError('pending');
    }

    return data.output;
  } catch (error) {
    if (error instanceof HumanizeError) {
      throw error;
    }
    throw new HumanizeError('Network error while polling for result');
  }
}