import './globals.css';
import { ColorPalette } from './components/ColorPalette';

export default function RootLayout() {
  return (
    <html lang='eng'>
      <body>
        <div className="min-h-screen bg-neutral-50">
          <ColorPalette />
        </div>
      </body>
    </html>
  );
}
