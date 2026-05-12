const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

// Mock the View because we are not testing the UI, only Controller-Model interaction.
const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; // Reset singleton for tests
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
      
        // Call controller method
    controller.handleAddTodo('Learn Integration Testing');

    // Get todos from service
    const todos = service.todos;

    // Assert length
    expect(todos.length).toBe(1);

    // Assert text
    expect(todos[0].text).toBe('Learn Integration Testing');
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        // TODO: First, directly add a todo to the service.
        // Get the ID of the new todo.
        // Call the controller's handleRemoveTodo method with that ID.
        // Assert that the service's todos array is now empty.
         service.addTodo('Learn Integration Testing');

    const todoId = service.todos[0].id;

    controller.handleRemoveTodo(todoId);

    expect(service.todos.length).toBe(0);
    });
});
