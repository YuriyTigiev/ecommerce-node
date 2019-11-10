# Proyecto: Application MEAN Full-stack: Back-End

## 1. Consultas

- ###  Users

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| User | Register | El usuario se registra desde la aplicación cliente |
| User | Login | El usuario se autentica desde la aplicación cliente |
| User | List | El usuario, autenticado como administrador, accede a una lista completa de usuarios |
| User | ListOne | El usuario, autenticado, obtiene su usuario |
| User | Paginator | El usuario, autenticado como administrador, obtiene una sublista de usuarios |
| User | Search | El usuario, autenticado como administrador, obtiene una sublista de usuarios que cumplen el regex|
| User | Update One | El usuario, autenticado, actualiza su usuario|
| User | Update Rol | El usuario, autenticado como administrador, actualiza el rol de un usuario|
| User | Remove One | El usuario, autenticado, elimina su usuario|

- ### Categorías

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| Categoría | List |El usuario accede a una lista completa de categorías |
| Categoría | Create One | El usuario, autenticado como administrador, crea un producto |


- ### Productos

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| Producto | Create One | El usuario, autenticado como administrador, crea un producto |
| Producto | Update One | El usuario, autenticado como administrador, actualiza un producto |
| Producto | Remove One | El usuario, autenticado como administrador, elimina un producto |
| Producto | ListOne | El usuario accede a un producto |
| Producto | List |El usuario accede a una lista completa de productos |
| Producto | Paginator | El usuario obtiene una sublista de productos |
| Producto | CategoryList |El usuario accede a una sublista de productos de la categoría introducida |
| Producto | DiscountList |El usuario accede a una sublista de productos en oferta |
| Producto | PromotionList |El usuario accede a una sublista de productos en promoción |

- ### ShoppingCart
| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| ShoppingCart | List |El usuario, autenticado como administrador, accede a la lista completa de ShoppingCarts |
| ShoppingCart | Add Product | El usuario, autenticado, añade un producto en stock a su carro de la compra, reduce el stock del producto |
| ShoppingCart | Remove Product | El usuario, autenticado, elimina un producto a su carro de la compra  y añade de nuevo el producto al stock|

- ### Upload
| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| User | Update Image | El usuario, autenticado, actualiza su imagen de perfil|
| User | Get Image | El usuario, autenticado, obtieme su imagen de perfil|

## 2.Información de la API

- ###  2.1.Auntentificación


- Register

```
endpoint: Registrar un usuario
Método: POST
uri: /register
body parameters:
    nombre
        string (required) Example: name
        Un nombre válido
    email
        string (required) Example: email@myemail.com
        Un email válido

    password
        string (required) Example: mypassword
        Una contraseña válida
Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "role": "USER_ROLE",
            "_id": "5dc7c1982d93f523b0598abd",
            "nombre": "test18",
            "email": "test17@test.com",
            "__v": 0
        }
    
    400 - Header: Content-Type: application/json
    Body: {"error": "User validation failed: nombre: El nombre es necesario"}

    400 - Header: Content-Type: application/json
    Body: {"error": "User validation failed: nombre: El nombre necesita mas caracteres"}

    400 - Header: Content-Type: application/json
    Body: {"error": "User validation failed: email: El email es necesario"}

    400 - Header: Content-Type: application/json
    Body: { "error": "User validation failed: email: El email no cumple el formato" }

    400 - Header: Content-Type: application/json
    Body: {"error": "User validation failed: email: El email necesita mas caracteres"}

    400 - Header: Content-Type: application/json
    Body: { "error": "Email duplicado"}

    400 - Header: Content-Type: application/json
    Body: {"error": "User validation failed: password: El password es obligatorio"}

    400 - Header: Content-Type: application/json
    Body : {"error": "User validation failed: password: El password necesita mas caracteres"}

```

- Login

```
endpoint: Obtener token y usuario
Método: POST
uri: /login
body parameters:
    email
        string (required) Example: email@myemail.com
        Un email válido

    password
        string (required) Example: mypassword
        Una contraseña válida
Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "user": [
                {
                    "role": "USER_ROLE",
                    "_id": "5dc7d9b024f638038c0216dc",
                    "nombre": "test2",
                    "email": "test2@test.com",
                "__v": 0
                }
            ],
            "token":        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQHRlc3QuY29tIiwiaWF0IjoxNTczMzc4NDkxLCJleHAiOjE1NzM0NjQ4OTF9.eNztaEf6gL6NZwP_plNdg_JiDsLePp8VSU92SFVOsQk"
        }
    
    400 - Header: Content-Type: application/json
    Body: {"error": "usuario o password incorrectos"}

    400 - Header: Content-Type: application/json
    Body: {"error": "no introducistes el usuario o el password"}

```

- ###  2.2.Usuario

- List

```

endpoint: Obtener lista de usuarios
Método: GET
uri: /users
query params:
    count: retorna el número de usuarios si es true
body parameters:
    token
        string (required): Token de administrador válido
Respuestas:
    
    
    200 - Header: Content-Type: application/json
    Body:
       [
        {
            "role": "USER_ROLE",
            "_id": "5dc2fb270254ed105408a63f",
            "nombre": "test4",
            "email": "test4@test.com",
            "__v": 0,
            "ca": "5dc30cb2a219f31cb0eeaa02"
        },
        .
        .
        .
        {
            "role": "ADMIN_ROLE",
            "_id": "5dc40472b1be8323c41819fc",
            "email": "test8@test.com",
            "nombre": "test8",
            "__v": 0
        }
    ]

    ?count=true
    200 - Header: Content-Type: application/json
    Body:
       [
        {
            "role": "USER_ROLE",
            "_id": "5dc2fb270254ed105408a63f",
            "nombre": "test4",
            "email": "test4@test.com",
            "__v": 0,
            "ca": "5dc30cb2a219f31cb0eeaa02"
        },
        .
        .
        .
        {
            "role": "ADMIN_ROLE",
            "_id": "5dc40472b1be8323c41819fc",
            "email": "test8@test.com",
            "nombre": "test8",
            "__v": 0
        },
          {
            "user_number": 12
        }
    ]
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }
    
```
- Paginator

```
endpoint: Obtener lista de usuarios
Método: GET
uri: /users/:page/:elements
    :page: número de página
    :elements: número de elementos por página
body:
    token
    string (required): Token de administrador válido

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        [
            {
            "role": "USER_ROLE",
            "_id": "5dc7c0f0bc82381dc85caf21",
            "nombre": "test",
            "email": "test15@test.com",
            "__v": 0
            },
            .
            .
            .
            {
                "role": "USER_ROLE",
                "_id": "5dc7c1982d93f523b0598abd",
                "nombre": "test18",
                "email": "test17@test.com",
                "__v": 0
            },
        {
            "user_number": 12
        }
    ]
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }

```

- ListOne

```
endpoint: El usuario, autenticado, obtiene su usuario
Método: GET
uri: /users/:id
    :id: id del usuario
body:
    token
    string (required): Token de administrador válido o el token de su usuario

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
       {
            "role": "USER_ROLE",
            "_id": "5dc2fb270254ed105408a63f",
            "nombre": "test",
            "email": "test4@test.com",
            "__v": 0,
            "ca": "5dc30cb2a219f31cb0eeaa02"
        }
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }

```
- Search

```
endpoint:  El usuario, autenticado como administrador, obtiene una sublista de usuarios que cumplen el regex.
Método: GET
uri: /users/buscar/regex/:busqueda
    :busqueda: letras para buscar en la lista de emails y nombre de usuarios.
body:
    token
    string (required): Token de administrador válido

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        [
            {
                "_id": "5dc7b0ba3f4d9b2a2cd5ae12",
                "nombre": "Juan",
                "email": "test12@test.com"
            }
            .
            .
            .
            {
                "_id": "5dc7c1982d93f523b0598abd",
                "nombre": "Juanito",
                "email": "test28@test.com"
            }
        ]
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }

```
- Update One

```
endpoint: El usuario, autenticado, actualiza su usuario
Método: PUT
uri: /users/:id
    :id: id del usuario que cambia el rol
body:
    token
        string (required): Token de administrador válido
     email
        string:  Example: email@myemail.com
        Un email válido
    password
        string: Example: mypassword
        Una contraseña válida

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "role": "USER_ROLE",
            "_id": "5dc7ea0a80b85928984b3186",
            "nombre": "test23",
            "email": "test26@test.com",
            "__v": 0
        }

    400- Header: Content-Type: application/json
    Body: {"error": "Validation failed: email: El email necesita mas caracteres"}
    
    400- Header: Content-Type: application/json
    Body:{"error": "Validation failed: email: El email no cumple el formato"}

    400- Header: Content-Type: application/json
    Body:{"error": "Validation failed: email: El email no cumple el formato"}

    400- Header: Content-Type: application/json
    Body:{"error": "Validation failed: nombre: El nombre necesita mas caracteres"}
    
    400- Header: Content-Type: application/json
    Body:{"error": "Email duplicado"}

    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }

```

- Update Rol

```
endpoint: El usuario, autenticado como administrador, actualiza el rol de un usuario
Método: PUT
uri: /users/role/:id
    :id: id del usuario que cambia el rol
body:
    token
        string (required): Token de administrador válido
    role
        string (required): [ADMIN_ROLE, USER_ROLE]

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "role": "ADMIN_ROLE",
            "_id": "5dc7e60e63e75f2ab8e8f87d",
            "nombre": "test23",
            "email": "test23@test.com",
            "__v": 0
        }

    400- Header: Content-Type: application/json
    Body: {"error": "Validation failed: role: ADMIN_ROLEs no es un rol válido"}
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }
```

- Remove One

```
endpoint: El usuario, autenticado, elimina su usuario
Método: DELETE
uri: /users/:id
    :id: id del usuario para eliminar
body:
    token
        string (required): Token de administrador válido o el token del usuario para eliminar

Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "role": "USER_ROLE",
            "_id": "5dc7ea0a80b85928984b3186",
            "nombre": "test23",
            "email": "test23@test.com",
            "__v": 0
        }

    400- Header: Content-Type: application/json
    Body: {"error": "Cast to ObjectId failed for value \"sdfdsf\" at path \"_id\" for model \"User\"}
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }
```

- ###  2.2.Categorías

- List

```
endpoint: El usuario accede a una lista completa de categorías
Método: GET
uri: /categories
 
Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
      [
        {
            "subcategoria": [
                "Periféricos"
            ],
            "_id": "5dbeacc2929b120644888d50",
            "categoria": "Mouse",
            "__v": 0
        },
        .
        .
        .
        {
        "subcategoria": [
            "Periféricos"
        ],
        "_id": "5dbeaeea10eb8f2850d0fd12",
        "categoria": "Teclado",
        "__v": 0
        }
      ]
]
```
- Create One

```
endpoint: El usuario accede a una lista completa de categorías
Método: POST
uri: /categories
body:
    token
        string (required): Token de administrador válido
    categoria
        string (required):  Ejemplo: "Altavoces"
    subcategoria: Padres de la categoría 
        [string] : Ejemplo: ["Periféricos"]
 
Respuestas:
    
    200 - Header: Content-Type: application/json
    Body:
        {
            "subcategoria": [
            "Periféricos"
            ],
        "_id": "5dc7f1571de8f22fec0cfe7b",
        "categoria": "Altavoces",
        "__v": 0
        }

    400 - Header: Content-Type: application/json
    Body: {"error": "Categories validation failed: categoria: La categoria es obligatoria"}
    
    401 - Header: Content-Type: application/json
    Body:   {
                "mensaje": "Token incorrecto",
                "errors": {
                    "name": "JsonWebTokenError",
                    "message": "jwt must be provided"
                }
            }
```




