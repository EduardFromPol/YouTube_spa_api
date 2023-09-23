require('dotenv').config();
const request = require('supertest');
const app = require('./server.js');



describe('GET', () => {
    it('Get all users', async () => {
        const response = await request(app)
            .get('/api/youtube/users')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('User must be authorized', async () => {
        const response = await request(app)
            .get('/api/youtube')
            .set('Authorization', 'Bearer')
            .set('Accept', 'application/json')
            .expect(401)
        expect(response.text).toEqual('Unauthorized')
    });

    it('User get invalid token', async () => {
        const response = await request(app)
            .get('/api/youtube/users')
            .set('Authorization', 'Bearer invalid_token')
            .expect(403)
        expect(response.text).toEqual('Forbidden');
    });
});


describe('POST', () => {

    // this user was in Register test - 62 line
    const user = {
        "login": "test12",
        "password": "testtest"
    };

    it('Login', async () => {
        const user = {
            "login": "ibadt1",
            "password": "12345678"
        }
        await request(app)
            .post('/api/authorization/login')
            .send(user)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
    });


    it('Register', async () => {
        await request(app)
            .post('/api/authorization/register')
            .send(user)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    });

    // new test about create user if he was created
    it('Register if user already created', async () => {
        await request(app)
            .post('/api/authorization/register')
            .send(user)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
    })

    it('Register without login or password', async () => {
        const user = {
            "login": "ibadt1"
        };
        await request(app)
            .post('/api/authorization/register')
            .send(user)
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect(400)
    });
});


describe('DELETE', () => {
    it('DELETE test user', async () => {
        await request(app)
            .delete('/api/youtube/deleteUser')
            .set('Authorization', `Bearer ${process.env.TOKEN}`)
            .set('Access', 'application/json')
            .expect(200)
    });
})