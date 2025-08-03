name: Build & Deploy All Demos

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    strategy:
      matrix:
        project: [ landingpage, anissaylaa, thairiverside, chickenmacandmore ]

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Build ${{ matrix.project }}
        run: |
          cd project/${{ matrix.project }}
          npm ci
          npm run build

      - name: Deploy ${{ matrix.project }}
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages
          publish_dir: project/${{ matrix.project }}/dist
          # landingpage at root, others in subfolders:
          destination_dir: ${{ matrix.project == 'landingpage' && '' || matrix.project }}
          user_name: github-actions[bot]
          user_email: github-actions[bot]@users.noreply.github.com
