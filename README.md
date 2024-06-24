# To-Do List Application

This is a simple and visually appealing To-Do List application built using React, Redux, and Material-UI. The application allows users to add, view, edit, and delete tasks. It also features task completion toggling and uses local storage to persist tasks between sessions.

## Features

- Add Task: Users can add a new task using an input field.
- View Tasks: Displays all added tasks in a list format.
- Edit Task: Users can edit existing tasks.
- Delete Task: Users can delete tasks from the list.
- Toggle Task: Users can mark tasks as completed.
- Persistent Storage: Tasks are saved to local storage.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Material-UI**: For UI components and styling.
- **Local Storage**: For persisting tasks between sessions.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ChaudharySurajSingh/ToDoApp.git
   cd todo-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

todo-app/
│
├── public/
├── src/
│ ├── components/
│ │ ├── TaskInput.js
│ │ └── TaskList.js
│ ├── features/
│ │ └── tasks/
│ │ └── tasksSlice.js
│ ├── theme.js
│ ├── App.js
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

## Usage

- **Adding a Task**: Enter a task in the input field and click the "Add Task" button or press Enter.
- **Editing a Task**: Click the edit icon next to the task, modify the text in the prompt, and save.
- **Deleting a Task**: Click the delete icon next to the task.
- **Toggling Task Completion**: Click the circle icon next to the task to mark it as completed or incomplete.

## Customization

You can customize the colors and styles of the application by modifying the `theme.js` file and the CSS in `App.css`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

Suraj Singh - justsurajsingh3270@gmail.com(mailto:justsurajsingh3270@gmail.com)

Project Link: [https://github.com/ChaudharySurajSingh/ToDoApp.git]
