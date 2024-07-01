# Condensify, the AI Summariser 📝
This is a react + vite + tailwind powered application that uses articficial intelligence and machine learning through Open AI's API system - Rapid API's Article Extractor and Summarizer. This web application takes a link from any website page and reduces it down into a readable paragraph summary to reduce reading time and improve speed and efficiency.

## Key Functionality:
- Takes a web URL and will produce a readable paragraph through API integration
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








This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
