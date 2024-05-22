document.addEventListener('DOMContentLoaded', async function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        const res = await fetch('https://api.github.com/users/RodCinelli');
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }
        const json = await res.json();
        nameElement.innerText = json.name || 'Nome não disponível';
        usernameElement.innerText = json.login || 'Usuário não disponível';
        avatarElement.src = json.avatar_url || 'https://via.placeholder.com/180x180';
        followingElement.innerText = json.following || 0;
        followersElement.innerText = json.followers || 0;
        reposElement.innerText = json.public_repos || 0;
        linkElement.href = json.html_url || '#';
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        nameElement.innerText = 'Erro ao carregar';
        usernameElement.innerText = 'Erro ao carregar';
        avatarElement.src = 'https://via.placeholder.com/180x180';
        followingElement.innerText = '-';
        followersElement.innerText = '-';
        reposElement.innerText = '-';
        linkElement.href = '#';
    }
});
