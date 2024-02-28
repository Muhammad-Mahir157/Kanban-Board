# Angular 17 Kanban Board

This project is a Kanban board application built with Angular 17, utilizing Angular CDK for drag and drop functionality. Kanban boards are effective tools for managing tasks and workflows, allowing users to visualize work, prioritize tasks, and track progress.

## Features

- **Drag and Drop**: Utilizes Angular CDK to implement seamless drag and drop functionality for tasks within the Kanban board.
- **Responsive Design**: The application is designed to be responsive, ensuring optimal user experience across various devices and screen sizes.
- **Task Management**: Users can create, edit, delete, and move tasks between different stages (columns) on the Kanban board.
- **Customization**: Users can customize columns, task titles, and other attributes to suit their specific workflow requirements.
- **Data Persistence**: Tasks and board configurations are persisted in the browser's local storage, allowing users to revisit the board and retain their changes.

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