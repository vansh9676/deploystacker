#!/usr/bin/env python3
"""
DeployStacker — Local Development Server
Run: python3 server.py
Then open: http://localhost:8080
"""
import http.server
import socketserver
import os
import mimetypes

# Ensure SVG files saved with .jpg extension are served correctly
mimetypes.add_type('image/svg+xml', '.svg')
# For our SVG-as-jpg trick, we override jpg to check content


PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        # Serve our SVG-content .jpg files as image/svg+xml
        if path.endswith('.jpg') or path.endswith('.jpeg'):
            try:
                with open(path, 'rb') as f:
                    header = f.read(5)
                if header.startswith(b'<svg') or header.startswith(b'<?xml') or header.startswith(b'<SVG'):
                    return 'image/svg+xml'
            except Exception:
                pass
        return super().guess_type(path)

    def log_message(self, format, *args):
        print(f"  {self.address_string()} → {format % args}")

print(f"\n  🚀 DeployStacker Dev Server")
print(f"  ─────────────────────────────")
print(f"  Local:  http://localhost:{PORT}")
print(f"  Press Ctrl+C to stop\n")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
