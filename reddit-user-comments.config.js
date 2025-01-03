module.exports = {
    apps: [{
        name: 'reddit-user-comments',
        cmd: 'python',
        script: 'reddit_user_comments_api.py',
        cwd: '/home/vivek/reddit-user-comments',
        env: {
            PATH: "/home/vivek/reddit-user-comments/.direnv/python-3.10.12/bin"
        }
    }],
}
