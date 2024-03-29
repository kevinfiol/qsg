export const template = ({ contents }) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/img/favicon.png type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/ibm-plex-mono.min.css">
        <link rel="stylesheet" href="/static/resume.css" />
        <title>Kevin Fiol - Resume</title>
    </head>

    <body>
        <main class="resume">
            ${contents}
        </main>
    </body>
</html>
`;