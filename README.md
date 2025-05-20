# 🤖 AI Code Generator

An interactive web app that generates code based on natural language prompts using Azure OpenAI. Built with Flask for the backend, Tailwind CSS for a clean UI, and integrated with Azure AI Foundry for powerful code generation capabilities.

---

## 🚀 Features

- ✨ Natural language to code conversion using Azure OpenAI
- 🧠 AI agent model integrated via Azure AI Foundry
- 🌐 Web-based interface built with Flask
- 🎨 Stylish, responsive frontend with Tailwind CSS
- 🌙 Dark mode support (toggle coming soon)
- 📄 Markdown + syntax-highlighted output display

---

## 🖼️ Demo

> Try entering a prompt like:  
> _"Write a java code to inherit a subclass named car from the superclass named vehicle and also write a function in superclass which is being overridden in car class"_

![image](https://github.com/user-attachments/assets/2dcd6df9-7392-4a02-8593-8331183c3f3c)


## 📦 Project Structure

ai-code-generator/
│
├── app.py # Flask backend
├── .env # Azure API credentials (not tracked)
├── requirements.txt # Python dependencies
│
├── templates/
│ └── index.html # Frontend UI
│
├── static/
│ ├── main.js # JS logic to fetch and display output
│ ├── style.css # Tailwind-based custom styles
│
│└── README.md

💡 Technologies Used

-> Flask (Python)
-> Azure OpenAI (via Azure AI Foundry)
-> JavaScript (fetch API, markdown renderers)
-> highlight.js & marked.js for pretty output
