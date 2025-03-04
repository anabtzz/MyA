window.revelar = ScrollReveal({reset: false});

revelar.reveal('.container-topo', 
    {
        duration: 2000,
        distance: '20px',
        delay: 1000
    });
    revelar.reveal('.topo', 
        {
            duration: 2000,
            distance: '20px',
            delay: 1000
        });
    revelar.reveal('.titulo', 
        {
            duration: 2000,
            distance: '80px'
        });
        revelar.reveal('.f', 
            {
                duration: 1800,
                distance: '80px',
                delay: 500
            });
            revelar.reveal('.d', 
                {
                    duration: 1000,
                    distance: '80px',
                    delay: 1000
                });
                revelar.reveal('.v', 
                    {
                        duration: 1800,
                        distance: '80px',
                        delay: 1500
                    });

                    revelar.reveal('.abordagem', 
                        {
                            duration: 2500,
                            distance: '80px',
                            delay: 600,
                            origin: 'left'
                        });
                        revelar.reveal('.software', 
                            {
                                duration: 2500,
                                distance: '80px',
                                delay: 600,
                                origin: 'right'
                            });
                            revelar.reveal('.projeto', 
                                {
                                    duration: 2500,
                                    distance: '45px',
                                    delay: 600,
                                    origin: 'bottom'
                                });
                                revelar.reveal('.atividades', 
                                    {
                                        duration: 2500,
                                        distance: '45px',
                                        delay: 600,
                                        origin: 'bottom'
                                    });
                                revelar.reveal('.btnd', 
                                    {
                                        duration: 2500,
                                        distance: '45px',
                                        delay: 600,
                                        origin: 'bottom'
                                    });

                                    revelar.reveal('.social', 
                                        {
                                            duration: 2500,
                                            distance: '40px',
                                            delay: 1400,
                                            
                                        });

                                        revelar.reveal('.rodape', 
                                            {
                                                duration: 2500,
                                                distance: '40px',
                                                delay: 1600,
                                                
                                            });
        
    




// Seleciona os elementos
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupAbout = document.getElementById('popup-about');
const closePopup = document.querySelector('.close');

// Mapeia os projetos
const projects = {
    devreads: {
        title: 'DEVREADS',
        about:'Projeto E-commerce de uma livraria de T.I',
        description: 'A DEVREADS foi meu ultimo projeto que eu fiz em 2024, sendo ele meu Trabalho de conclusão de curso já finalizado. Um sistema completo de venda de e-books de T.I tendo interação com o banco de dados. Nele foi usado ASP.Net Core MVC para o sistema, SQL para o banco de dados e Dart para fazer o App Mobile que faz parte do projeto do meu cliente.  ',
        img: 'img/devreads.png'
    },
    eventura: {
        title: 'EVENTURA',
        about: 'Plataforma de Eventos em comemoração ao 470 anos de São Paulo.',
        description: 'Um projeto de aplicativo mobile finalizado em Setembro de 2024 feito em Flutter - Dart para mostrar eventos populares que acontecem em São Paulo. Este projeto foi meu segundo App Mobile que eu fiz durante o curso sendo o primeiro em Java no Android Studio que sendo sincera não foi uma expericencia muito boa.', 
        img: 'img/eventura.png'
    },
    dogshop: {
        title: 'DOGSHOP',
        about: 'Uma identidade visual sobre um PetShop.',
        description: 'Meu primeiro projeto criado no final do meu primeiro ano em 2022, simples sobre um PetShop sendo somente uma indentidade visual e defesa.',
        img: 'img/dogshop.png'
    }
};

// Adiciona evento para cada imagem
document.querySelectorAll('.atividades img').forEach(img => {
    img.addEventListener('click', () => {
        const project = projects[img.className];
        if (project) {
            popupImg.src = project.img;
            popupTitle.textContent = project.title;
            popupAbout.textContent = project.about;
            popupDescription.textContent = project.description;
            popup.style.display = 'flex';
        }
    });
});

// Fecha o pop-up ao clicar no botão de fechamento
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha o pop-up ao clicar fora do conteúdo
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

                    

