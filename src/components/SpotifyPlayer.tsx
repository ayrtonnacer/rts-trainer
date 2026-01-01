export function SpotifyPlayer() {
  return (
    <div className="fixed bottom-4 right-4 z-20 max-w-sm rounded-lg overflow-hidden shadow-lg bg-background border border-border">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/6AQbmUe0Qwf5PZnt4HmTXv?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
