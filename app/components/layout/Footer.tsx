export function Footer() {
  return (
    <footer className="flex justify-between py-4 border-t border-border text-xs text-muted uppercase mt-4">
      <p>&copy; {new Date().getFullYear()} &mdash; All Rights Reserved.</p>
      <p>Designed with Intent.</p>
    </footer>
  );
}
