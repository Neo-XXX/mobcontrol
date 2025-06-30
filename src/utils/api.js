export async function saveScore(data) {
  try {
    const res = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  } catch (err) {
    console.error('Failed to save score', err);
  }
}

export async function getScores() {
  try {
    const res = await fetch('/api/score');
    return res.json();
  } catch (err) {
    console.error('Failed to fetch scores', err);
    return [];
  }
}
