# Research-Paper-Article-Simplifier-Summarizer-Chrome-Extension

A dual-mode toolkit (Chrome Extension + Web App) that simplifies complex research papers, PDFs, and technical articles using AI. Users can highlight text to instantly receive a plain-English explanation and a concise bullet-point summary.



## 🚀 **1. Chrome Extension: Research Paper Simplifier & Summarizer**



### **📌 Overview**

This Chrome Extension lets you highlight text from:

-   PDFs    
-   Research papers
-   arXiv articles
-   Google Scholar
-   Technical blogs
-   Any webpage
    

… and instantly get:

-   A simplified explanation
-   A short 3-point summary
    

Displayed in a **floating AI tooltip** that appears next to the highlighted text.



### **✨ Features**

-   🖍️ **Highlight to simplify** — no buttons needed
-   🧠 **AI-powered explanation** using OpenAI/Gemini
-   📌 **Floating tooltip UI**
-   ⚡ Works on **all websites**, including PDFs
-   🎨 Clean, modern UI    
-   🔒 API key stored locally (not uploaded anywhere)
    


### **📥 Installation (Developer Mode)**

#### **Chrome**

1.  Download the folder: `paper-simplifier-extension/`    
2.  Open Chrome → go to  
    `chrome://extensions/`
3.  Enable **Developer mode** (top right)
4.  Click **Load Unpacked**
5.  Select the extension folder
    
You’ll now see the icon in your toolbar.



### **🛠️ Setup API Key**

1.  Open the extension icon → _Settings_ (popup.html)    
2.  Paste your API key for:
    -   OpenAI (`gpt-4o`, `gpt-4o-mini`, etc.)
    -   OR Google Gemini (`gemini-1.5-flash`, etc.)

The key is stored locally using Chrome Storage.



### **🎯 How It Works**

1.  Open any article or PDF    
2.  Highlight a sentence or paragraph
3.  A floating tooltip appears
4.  AI generates:
    -   A plain-English explanation
    -   A 3-point summary

If you click outside, the tooltip disappears.



### **🧩 Tech Stack**

-   JavaScript (Content Scripts)
-   Chrome Extensions API (MV3) 
-   TailwindCSS (popup)
-   OpenAI / Google Gemini API
-   Tooltip + DOM injection
