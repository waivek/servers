module.exports = {
    apps: [
        {
            name: 'hackernews-search',
            cmd: 'python',
            script: 'hackernews-search-api.py',
            cwd: '/home/vivek/hackernews-search',
            env: { PATH: "/home/vivek/hackernews-search/.direnv/python-3.10.12/bin" },
            namespace: 'hackernews-search',
        },
        {
            name: 'hackernews-search-tailwind-watch',
            cmd: 'npx tailwindcss -o ~/hackernews-search/static/hn-search.css --watch',
            cwd: '/home/vivek/hackernews-search',
            namespace: 'hackernews-search',
        }
    ]
}
