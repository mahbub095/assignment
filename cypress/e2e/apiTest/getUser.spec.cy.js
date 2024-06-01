/// <reference types="Cypress" />

describe('api test cases', () => {

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MzksInVzZXJuYW1lIjoiIiwiZW1haWwiOiJtYWhidWIuMDA5NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjFlMjgyODRmNTllOTI2NTQ3YmI2NzkzYWQ4NzIzNzIyIiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjAuMC4wLjAiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyNC0wNi0wMSAxNTowNTozNi40NDYgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0wMSAxNTowNTozNi40NDYgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNzE3MjU0MzYzfQ.PW0sVS-p9iJ7ruXEf1u7FYKFmlZbm5rZlvMPHDU_8dxvOWyaOzSEPaCaW6NfsJcJytlbpVAfEP62cRgIg-WLu_vK63izaoERJDni-go0GDOOxQGEqwdJMK2tBWfUxc5t5-btH0bur_2b0EZVR9GDPUbbsWkMfjibbRjPDF5FT5E'
    it('get user', () => {
        cy.request({
            method: 'GET',
            url: 'https://juice-shop.herokuapp.com/api/Users?id=39',
            headers: {
                'authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MzksInVzZXJuYW1lIjoiIiwiZW1haWwiOiJtYWhidWIuMDA5NUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjFlMjgyODRmNTllOTI2NTQ3YmI2NzkzYWQ4NzIzNzIyIiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IjAuMC4wLjAiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyNC0wNi0wMSAxNTowNTozNi40NDYgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0wMSAxNTowNTozNi40NDYgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNzE3MjU0MzYzfQ.PW0sVS-p9iJ7ruXEf1u7FYKFmlZbm5rZlvMPHDU_8dxvOWyaOzSEPaCaW6NfsJcJytlbpVAfEP62cRgIg-WLu_vK63izaoERJDni-go0GDOOxQGEqwdJMK2tBWfUxc5t5-btH0bur_2b0EZVR9GDPUbbsWkMfjibbRjPDF5FT5E"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)

        })

        it('get products', () => {
            cy.request({
                method: 'GET',
                url: 'https://juice-shop.herokuapp.com/api/products?id=3',

            }).then((res) => {
                expect(res.status).to.eq(200)

            })
        })
    })
})
