---

# AI Text Humanizer

**AI Text Humanizer** is a free, open-source web tool designed to transform AI-generated text into more natural, human-like language. This browser-based application ensures your content sounds authentic and engaging, making it ideal for students, content creators, and professionals seeking to refine AI-generated drafts.

## 🚀 Live Demo

Experience the tool in action here:
👉 [zayuvalya.github.io/AI-Text-Humanizer](https://zayuvalya.github.io/AI-Text-Humanizer/)

## 🔧 Key Features

* **Context-Aware Paraphrasing**: Utilizes a vocabulary dataset to replace words with contextually appropriate synonyms.
* **Highlight Changes**: Altered words are highlighted in the output for easy identification.
* **Word & Sentence Counters**: Real-time tracking of word and sentence counts for input text.
* **Responsive Design**: Optimized for both desktop and mobile devices.
* **Dark Theme Interface**: Elegant dark-themed UI for a better user experience.
* **Open Source**: Encourages community contributions to improve and expand the project.

## 🛠️ How It Works

The application operates entirely in the browser, ensuring privacy and accessibility without the need for logins. It employs the following components:

* **Vocabulary Dataset**: A JSON file (`eng_synonyms.json`) containing words and their synonyms.
* **Stop Words Handling**: A list of common words (`stop_words.json`) that are not altered during processing.
* **Fixed Terms Detection**: An array of specific terms that should not be modified.
* **Proper Noun Detection**: Identifies and preserves proper nouns.
* **Paraphrasing Algorithm**: Replaces words with synonyms while preserving the original meaning and structure.

## 📁 Project Structure

* `index.html`: Contains the layout and structure of the web application.
* `styles.css`: Provides styling for the dark theme and responsive design.
* `script.js`: Implements the paraphrasing logic and interactive functionality.
* `eng_synonyms.json`: Stores the vocabulary dataset for synonym replacement.
* `stop_words.json`: Contains the list of stop words.

## 🧪 Developer Overview

For developers interested in understanding the internal logic:

1. **Vocabulary Dataset**: Stored in `eng_synonyms.json`, it maps words to an array of synonyms.
2. **Stop Words Handling**: Loaded from `stop_words.json`, these words are excluded from modification.
3. **Fixed Terms Detection**: An array within the script itself contains terms that should remain unchanged.
4. **Proper Noun Detection**: Utilizes regex patterns to identify proper nouns.
5. **Paraphrasing Algorithm**: Splits the input text into words and punctuation, replacing words with synonyms where appropriate, and highlighting changes.

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a branch for your changes.
3. Submit a pull request detailing your updates.

## 📄 License

This project is licensed under the MIT License, ensuring it remains free and open for everyone to use and improve.

---
