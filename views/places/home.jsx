const React = require('react')

function home (html) {
    return (
        <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = home
