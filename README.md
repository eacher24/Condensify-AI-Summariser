# Condensify, the AI Summariser 📝
This is a react + vite + tailwind + redux toolkit powered application that uses articficial intelligence and machine learning through Open AI's API system - Rapid API's Article Extractor and Summarizer. This web application takes a link from any website page and reduces it down into a readable paragraph summary to reduce reading time and improve speed and efficiency. Special focus on the project's feel and look came down to focusing on UX/UI principles and thus the frontend was created with a desired glassomorphism effect to induce a sense of technological advancement at this technology but also to invoke simplicity, such that the user knows exactly what they are using the website for,

### User View of Application:
<img width="400" alt="" src="https://github.com/eacher24/Condensify-AI-Summariser/blob/main/Page-1.png">
<img width="400" alt="" src="https://github.com/eacher24/Condensify-AI-Summariser/blob/main/Page-1.png">


## Key Functionality:
- Takes a web URL and the programme makes an advance redux toolkit query API request
- The application then displays a small paragrpah summary about the webpage provided for the user to read
- Contains a history of article summaries
- Links back to this github repository

### Instructions on running programme on local:
- Clone project to local
- The file .env_sample contains the template required to insert your own api key from https://rapidapi.com/restyler/api/article-extractor-and-summarizer
- Once you have your api key, change the filename from .env_sample to .env 
- To run on your local machine, copy and past the command below into the terminal once you have naviagted to the root directory of this project
  ```console
  npm run dev 
  ```

#### Technologies used in this project:
![Static Badge](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white&labelColor=blue&color=white)
![Static Badge](https://img.shields.io/badge/Vite-purple?style=for-the-badge&logo=vite&logoColor=white&labelColor=purple&color=white)
![Static Badge](https://img.shields.io/badge/Redux-blue?style=for-the-badge&logo=redux&logoColor=white&labelColor=indigo&color=white)
![Static Badge](https://img.shields.io/badge/OpenAI-blue?style=for-the-badge&logo=openai&logoColor=white&labelColor=%2374AA9C&color=white)












This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
