import { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('/api/hello');
  const [output, setOutput] = useState('No request sent yet.');
  const [isPending, setIsPending] = useState(false);

  async function sendRequest() {
    setIsPending(true);
    setOutput('Sending request…');

    try {
      const response = await fetch(url);
      const body = await response.text();
      const contentType = response.headers.get('content-type') ?? '(not provided)';

      setOutput(`Status: ${response.status}\nContent-Type: ${contentType}\n\n${body}`);
    } catch (error) {
      setOutput(`Request failed: ${String(error)}`);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <main>
      <h1>Authentication lab</h1>
      <label htmlFor="request-url">Request URL</label>
      <input
        id="request-url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        disabled={isPending}
      />
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          void sendRequest();
        }}
      >
        {isPending ? 'Sending…' : 'Send GET request'}
      </button>
      <h2>Response</h2>
      <pre aria-live="polite">{output}</pre>
    </main>
  );
}
