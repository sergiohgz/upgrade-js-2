const baseURL = 'https://reqres.in/api';

const PER_PAGE = 3;

const rootElement = document.getElementById('root');
const listNode = document.createElement('ul');
rootElement.appendChild(listNode);


const botonLoadMore = document.createElement('button');
botonLoadMore.innerHTML = 'Cargar más';
rootElement.appendChild(botonLoadMore);
botonLoadMore.addEventListener('click', () => {
    const listNode = document.getElementsByTagName('ul')[0];
    const listNodeLength = listNode.childNodes.length;
    getUsuarios(listNodeLength / PER_PAGE + 1, PER_PAGE);
});

const createUsuarioInList = (usuario) => {
    const itemNode = document.createElement('li');
    itemNode.innerHTML = `${usuario.first_name} ${usuario.last_name}`;
    const button = document.createElement('button');
    const onClick = () => getUsuario(usuario.id).then((userInfo) => console.log('Información del usuario', userInfo));
    button.addEventListener('click', onClick);
    button.innerHTML = 'Cargar detalle';
    itemNode.appendChild(button);
    listNode.appendChild(itemNode);
}


const getUsuarios = async (page = 1, per_page= PER_PAGE) => {
    const respuestaApi = await fetch(`${baseURL}/users?page=${page}&per_page=${per_page}`);
    const respuestaJson = await respuestaApi.json();
    respuestaJson.data.forEach(usuario => {
        createUsuarioInList(usuario)
    });
    if (respuestaJson.data.length === 0) {
        rootElement.removeChild(botonLoadMore)
    }
};

const getUsuario = async (userId) => {
    const respuestaApi = await fetch(`${baseURL}/users/${userId}`);
    const respuestaJson = await respuestaApi.json();
    console.log(`Usuario con id ${userId}:`, respuestaJson);
    return respuestaJson.data;
};

const createUsuario = async (userData) => {
    const respuestaApi = await fetch(`${baseURL}/users`, {
        body: userData,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST'
    });
    const respuestaJson = await respuestaApi.json();
    console.log('Usuario creado', respuestaJson);
};

getUsuarios();
