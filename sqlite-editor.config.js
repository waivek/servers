module.exports = {
    apps: [{
        name: 'sqlite-editor',
        cmd: 'python',
        script: 'editor-api.py',
        cwd: '/home/vivek/sqlite-editor',
        env: {
            PATH: "/home/vivek/sqlite-editor/.direnv/python-3.10.12/bin"
        }
    }],
}

