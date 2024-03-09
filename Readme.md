# Angular 17 Kanban Board

This project is a Kanban board application built with Angular 17, utilizing Angular CDK for drag-and-drop functionality. Kanban boards are effective tools for managing tasks and workflows, allowing users to visualize work, prioritize tasks, and track progress.

## Features

- **Drag and Drop**: Utilizes Angular CDK to implement seamless drag and drop functionality for tasks within the Kanban board.
- **Responsive Design**: The application is designed to be responsive, ensuring optimal user experience across various devices and screen sizes.
- **Task Management**: Users can create, edit, delete, and move tasks between different stages (columns) on the Kanban board.
- **Customization**: Users can customize columns, task titles, and other attributes to suit their specific workflow requirements.
- **Data Persistence**: Tasks and board configurations are persisted in the browser's local storage, allowing users to revisit the board and retain their changes.

## Execution Screenshots:

- Here's how the board would look like initially:
  ![Kanban Board img-1](https://github.com/Muhammad-Mahir157/Kanban-Board/assets/82761065/fb79a4b6-c7cf-4eb8-b68c-31c7cd25af56)

- You can add your info regarding the Kanban Board by clicking the Create Button:
  ![Kanban Board img-2](https://github.com/Muhammad-Mahir157/Kanban-Board/assets/82761065/631b0368-14a1-4551-97f2-d75b6b01f6f7)

- You can add Name Your Board, Columns, and Tasks. Also, you can add or delete new Tasks and Columns:
  ![Kanban Board img-3](https://github.com/Muhammad-Mahir157/Kanban-Board/assets/82761065/fedfba93-8d72-4b65-b9e2-b98a2841b09f)

- You can have as many Tasks and Columns as you want:
![Kanban Board img-4](https://github.com/Muhammad-Mahir157/Kanban-Board/assets/82761065/0dd233a5-1294-4ce9-b4a6-0096a4caf50d)

- Here's how the Board would look like on clicking the save Configuration button:
  ![Kanban Board img-5](https://github.com/Muhammad-Mahir157/Kanban-Board/assets/82761065/865eef87-d206-4c30-a648-8726e32a0929)

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/Muhammad-Mahir157/Kanban-Board.git

2. Install dependencies using npm
    
    npm install

### Usage

1. Start the development server:

    ng serve

2. Open your web browser and navigate to http://localhost:4200/ to view the Kanban board application.


### Configuration
You can customize the Kanban board by modifying the following files:

1. src/app/modules/main-view.component.html: Define the structure and layout of the Kanban board.
2. src/app/modules/main-view.component.ts: Implement logic for managing tasks and columns.

### Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

### License
This project is licensed under the MIT License.
