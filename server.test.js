const request = require('supertest');

// Sample test tasks
const createtask = { description: "This is from JEST for Testing Purpose Only", title: 'Testing With JEST' }
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjY1OTMyODQ3OWFhZGE2NjA1Y2FhNWFhZiIsInVzZXJuYW1lIjoiMTIzNDUiLCJpYXQiOjE3MDQxNzYxODcsImV4cCI6MTcwNDYwODE4N30.XS2dPaR8s1as-t0z4r06hk8XlW2r68Rqmpou44tQpaU"


// // Test the POST /task route

describe('POST /createnote', () => {
  test('should add a new task', async () => {
    const response = await request('http://localhost:5000/api').post('/createnote').send(createtask).set({ "token": TOKEN });
    expect(response.status).toBe(201);
    expect(response.body.Task_Notes).toHaveProperty('title');
    expect(response.body.Task_Notes).toHaveProperty('Created_at');
    expect(response.body.Task_Notes).toHaveProperty('description');
    expect(response.body.Task_Notes.title).toBe(createtask.title);
    expect(response.body.status).toBe("Sucessful");
  });
});


// Test the GET /getnote route
describe('GET /getnote', () => {
  test('Should return all Notes', async () => {
    const response = await request('http://localhost:5000/api').get(`/getnote`).set({ "token": TOKEN })
    expect(response.status).toBe(200);
    expect(response.body.Task_Notes[0]).toHaveProperty('title');
    expect(response.body.Task_Notes[0]).toHaveProperty('Created_at');
    expect(response.body.Task_Notes[0]).toHaveProperty('description');
    expect(response.body.status).toBe("Successful");
  });
    
  test('Should return a Note', async () => {
    const response = await request('http://localhost:5000/api').get(`/getnote?id=6593a70442ebabcf56e6e39c`).set({ "token": TOKEN })
    expect(response.status).toBe(200);
    expect(response.body.Task_Notes).toHaveProperty('title');
    expect(response.body.Task_Notes).toHaveProperty('Created_at');
    expect(response.body.Task_Notes).toHaveProperty('description');
    expect(response.body.status).toBe("Successful");
  });
  
  test('Should return Not Found', async () => {
    const response = await request('http://localhost:5000/api').get(`/getnote?id=WrongTaskID`).set({ "token": TOKEN })
    expect(response.status).toBe(404);
    expect(response.body.status).toBe('Not Found!');
    expect(response.body.message).toBe('No Task Found for given ID');
  });

});

// Test the PATCH /updatenote
const updatetask = { description: "This is to update, JEST for Testing Purpose Only", title: 'Successfully Updated, Testing With JEST' }
describe('PATCH /updatenote', () => {
  test('should update a task', async () => {
    const response = await request('http://localhost:5000/api').patch(`/updatenote?tid=6593a70442ebabcf56e6e39c`).send(updatetask).set({ "token": TOKEN })
    expect(response.status).toBe(200);
    expect(response.body.Updated_Task_Notes).toHaveProperty('title');
    expect(response.body.Updated_Task_Notes).toHaveProperty('Created_at');
    expect(response.body.Updated_Task_Notes).toHaveProperty('description');
    expect(response.body.Updated_Task_Notes).toHaveProperty('Updated_at');
    expect(response.body.status).toBe("Successfully Updated");
  });
});

// Test the DELETE /deletenote/:id route
describe('DELETE /deletenote', () => {
  test('Delete a task', async () => {
    const response = await request('http://localhost:5000/api').delete(`/deletenote/659328bb324262215ff9983e`).set({ "token": TOKEN });
    expect(response.body.message).toBe('659328bb324262215ff9983e Already Deleted');
    expect(response.status).toBe(200);
  });
});
