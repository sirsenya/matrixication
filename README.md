# sorting_app

1. npm i
2. rename .env.example to .env;
3. in development mode: "npm run start:dev"
4. in deploy mode:

- via docker: "docker compose up --build" (docker should be installed)
- locally: "npm run build && npm run start"

5. when server is running (Listening on port 4000) send a following GET request: "http://localhost:4000/?M=7&N=6". M is quantity of arrays, N is length of each array - you can change their value;

6. to stop the app "ctrl/cmd + c"

7. to test the app "npm run test"
