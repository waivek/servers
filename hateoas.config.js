module.exports = {
    apps: [{
        name: 'hateoas',
        cmd: 'python',
        script: 'hateoas-api.py',
        cwd: '/home/vivek/hateoas',
        env: {
            PATH: "/home/vivek/hateoas/.direnv/python-3.10.12/bin"
        }
    }],
}
