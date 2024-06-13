module.exports = {
    apps: [
        {
            name: 'ui-components-css',
            cmd: 'python',
            script: 'ui-components-css-api.py',
            cwd: '/home/vivek/ui-components-css',
            env: { PATH: "/home/vivek/ui-components-css/.direnv/python-3.10.12/bin" },
            namespace: 'ui-components-css',
        },
        {
            name: 'ui-components-css-tailwind-watch',
            cmd: 'npx tailwindcss -o ~/ui-components-css/static/css-tailwind-outputs/ui-components-css-tailwind-output.css --watch',
            cwd: '/home/vivek/ui-components-css',
            namespace: 'ui-components-css',
        }
    ],
}
