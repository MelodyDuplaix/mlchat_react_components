# React UI Component Library for RAG Application

## Project Description

This project is a React UI component library designed for a Retrieval-Augmented Generation (RAG) application. The application allows users to intelligently leverage their document repositories locally, without exposing sensitive data to the internet. It processes documents, indexes them into a vector knowledge base, and provides access through an intuitive user interface. The backend is built with Python (FastAPI), while this library provides the frontend UI components.

## Technologies Used

*   **React 18+:** A JavaScript framework for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that enhances code quality and maintainability.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Storybook:** A tool for developing and documenting UI components in isolation.
*   **React Hook Form:** For form management.
*   **react-markdown & react-syntax-highlighter:** For displaying chat messages with Markdown formatting and syntax highlighting.
*   **React Testing Library:** For testing the UI components.
*   **Axios or React Query:** For API communication.

## Installation and Usage

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the Storybook development server:**

    ```bash
    npm run storybook
    ```

    This will open Storybook in your browser, where you can explore the available components and their documentation.

## Project Structure

```
├── .storybook/         # Storybook configuration
├── docs/               # Project documentation
├── src/                # Source code
│   ├── assets/         # Static assets
│   ├── components/     # Reusable UI components
│   ├── stories/        # Storybook stories for components
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Entry point
│   └── ...
├── public/             # Static assets
├── README.md           # This file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## UI Components

This library aims to provide a set of reusable UI components for the RAG application. The following components are planned:

*   **Chat Component:** An interactive chat interface with message history and Markdown formatting.
*   **Document Upload Component:** An interface for uploading and managing documents.
*   **Source Visualization Component:** A component for displaying the sources of answers.
*   **Performance Metrics Component:** A component for displaying performance metrics.
*   **Navigation and Layout Components:** Components for navigation and layout.
