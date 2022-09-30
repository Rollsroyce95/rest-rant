const React = require('react')

function errorPage (html) {
    return (
        <html>
            <head>
                <title>error page</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = errorPage
