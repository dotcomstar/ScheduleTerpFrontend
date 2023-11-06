A website to auto-generate the best course schedule for UMD students.

Just input your courses and click generate!

<img width="1437" alt="screenshot of home page" src="https://github.com/dotcomstar/ScheduleTerpFrontend/assets/32310882/9e1aa9ec-c4dd-4849-a876-1288384873f8">

<img width="1437" alt="screenshot of generated schedules" src="https://github.com/dotcomstar/ScheduleTerpFrontend/assets/32310882/16a4f759-e8cd-4bf1-b896-0832ce963864">

# Tech stack

ScheduleTerp Frontend is written in Typescript with React, making use of Material UI and React-Router. The frontend is hosted on Vercel. To generate schedules, our RESTful API backend is called. This backend calls an AWS Lambda function and returns back a JSON of schedules. In order to find out about course data, we make calls to the UMD.io and PlanetTerp APIs.

See our [Trello board](https://trello.com/invite/b/krt4dTM3/ATTI2b30f7998eb1099bf1ad5ff15b61d35819A6DDDB/frontend)!

<img src="https://github.com/dotcomstar/ScheduleTerpFrontend/assets/32310882/90c478fd-92ea-43d1-aea4-3e429b607ab7" alt="ScheduleTerp Application Layers" width="800" />

<img src="https://github.com/dotcomstar/ScheduleTerpFrontend/assets/32310882/42b55f51-3a8b-42c0-8671-8eec4ceadf40" alt="ScheduleTerp DynamoDB Table Format Diagram" width="800" />
