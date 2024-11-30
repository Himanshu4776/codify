# Codify - Modern Code Editor

## Overview
Codify is a versatile online code editor that supports multiple programming languages and features both classical programming and web development environments. It offers real-time code execution, multiple themes, and an integrated console.

## Check it out live here
### https://codify-gamma.vercel.app/

## Features
- Multi-language support (JavaScript, Python, C++, Java)
- Web development environment with HTML, CSS support
- Multiple editor themes including:
  - Android Studio
  - Dracula
  - Github Dark/Light
  - Copilot
  - Solarized Dark/Light
- Real-time code execution using Judge0 API
- Integrated console input/output
- Local storage for code persistence
- Responsive design

## Tech Stack
- React
- TypeScript
- Judge0 API for code execution
- Axios for API calls
- Local Storage for data persistence

## Need Start the application in local environment?

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/codify.git
```
2. Install dependencies:
```bash
cd codify && npm install
```
3. Set up environment variables:
Create a `.env` file in the root directory with:
REACT_APP_JUDGE0_CREATE_SUBMISSION_API_KEY=your_api_key
REACT_APP_JUDGE0_GET_SUBMISSION_API_KEY=your_api_key

## Usage
1. Start the development server:
```bash
npm start
```
2. Choose your coding environment:
- Classical Programming: For languages like Python, Java, C++, JavaScript
- Web Development: For HTML, CSS, JavaScript

3. Features:
- Select your preferred programming language
- Choose from multiple themes
- Write and execute code
- View output in the integrated console
- Input test cases through console input
- Auto-save functionality

## Environment Setup
1. Get your API keys from RapidAPI Judge0 CE
2. Set up the environment variables
3. Ensure you have Node.js installed

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.
