$(function () {
    var maskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    };
    var options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    };
    $('.maskphone').mask(maskBehavior, options);
});

function EnviarEmailControl() {
    if (!verificarCamposEnvioEmail()) {
        $('.container_envio_email_site .input-group.erro_preenchimento .form-control').first().focus();
        return;
    }
    var email1Control = 'RODOLFOCHIQUINI@HOTMAIL.COM';
    var email2Control = '';
    var logo = 'https://www.cache2net3.com//Repositorio/2417/Logo/7e7f455a-c.png?=39623-1';
    var idSite = '2417';

    var url = ("https://2net.com.br/Email/SendEmail.aspx?nome="
        + $('#tbxNomeControl').val()
        + "&email=" + $('#tbxEmailControl').val()
        + "&idSite=" + idSite
        + "&telefone=" + $('#tbxTelefoneControl').val()
        + "&mensagem=" + $('#tbxMensagemControl').val()
        + "&email1=" + email1Control
        + "&email2=" + email2Control
        + "&logo=" + logo
        + "&urlRefer=" + window.location.href);

    if (typeof GoogleAds_HashFaleConosco != "undefined" && GoogleAds_HashFaleConosco.length > 0) {
        GoogleAds_gtag_report_conversion(url, GoogleAds_HashFaleConosco)
    } else {
        window.location.href = url;
    }
}

function verificarCamposEnvioEmail() {
    var camposPreenchidos = true;
    $('.container_envio_email_site .input-group').removeClass('erro_preenchimento');
    $('.container_envio_email_site .form-control').each(function () {
        var valorCampo = $(this).val();
        if (valorCampo == '' || $.trim(valorCampo) == '') {
            camposPreenchidos = false;
            $(this).closest('.input-group').addClass('erro_preenchimento');
        } else if ($(this).data('email') == '1' && !isValidEmail(valorCampo)) {
            camposPreenchidos = false;
            $(this).closest('.input-group').addClass('erro_preenchimento');
        }
    });

    return camposPreenchidos;
}

function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const languageIcons = document.querySelectorAll('.language-selector a');
    const newsContent = document.querySelector('.news-content');
    const pageLinks = document.querySelectorAll('.page-number');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    // Função para mudar idioma ao clicar nos ícones de idioma
    languageIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = icon.getAttribute('data-lang');
            if (lang === 'en') {
                translateToEnglish();
            } else {
                translateToPortuguese();
            }
        });
    });

    // Função para mudar página de notícias ao clicar nos links de página
    pageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            updateNews(page);
            pageLinks.forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Controle de navegação do carrossel
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Função para mostrar slide específico ao clicar nos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Função para mostrar slide atual
    function showSlide(index) {
        carouselItems[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = (index + totalItems) % totalItems;
        carouselItems[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    // Traduções de conteúdo
    const translations = {
        'en': {
            title: 'Law Firm',
            description: 'Law firm specializing in Digital Law, offering consultancy in GDPR, assistance in the Civil Rights Framework for the Internet, defense in cybercrimes, and much more.',
            nav: ['Home', 'About Us', 'Practice Areas', 'News', 'Contact'],
            aboutHeading: 'About Us',
            aboutContent: 'Fulano specializes in Digital Law, offering consultancy in GDPR, assistance in the Civil Rights Framework for the Internet, defense in cybercrimes, and much more.',
            areasHeading: 'Practice Areas',
            areas: ['Civil Law', 'Business Law', 'Real Estate Law', 'Asset Protection', 'Succession Planning', 'Business Recovery'],
            newsHeading: 'News',
            newsItems: [
                {
                    title: 'News Title 1',
                    summary: 'Summary of news 1...',
                    image: 'noticia1.jpg',
                    link: 'news1.html'
                },
                {
                    title: 'News Title 2',
                    summary: 'Summary of news 2...',
                    image: 'noticia2.jpg',
                    link: 'news2.html'
                },
                {
                    title: 'News Title 3',
                    summary: 'Summary of news 3...',
                    image: 'noticia3.jpg',
                    link: 'news3.html'
                },
                {
                    title: 'News Title 4',
                    summary: 'Summary of news 4...',
                    image: 'noticia4.jpg',
                    link: 'news4.html'
                },
                {
                    title: 'News Title 5',
                    summary: 'Summary of news 5...',
                    image: 'noticia5.jpg',
                    link: 'news5.html'
                },
                {
                    title: 'News Title 6',
                    summary: 'Summary of news 6...',
                    image: 'noticia6.jpg',
                    link: 'news6.html'
                },
                {
                    title: 'News Title 7',
                    summary: 'Summary of news 7...',
                    image: 'noticia7.jpg',
                    link: 'news7.html'
                },
                {
                    title: 'News Title 8',
                    summary: 'Summary of news 8...',
                    image: 'noticia8.jpg',
                    link: 'news8.html'
                }
            ],
            contactHeading: 'Contact',
            contactInfo: [
                'Email: <a href="mailto:contato@advogado.com">contato@advogado.com</a>',
                'Phone: <a href="tel:+5519997775596">+55 19 99777-5596</a>',
                'WhatsApp: <a href="https://wa.me/5519997775596" target="_blank">+55 19 99777-5596</a>',
                'Business Hours: Monday to Friday, 9am to 6pm',
                'Address: Rua dos Advogados, 123, São Paulo, SP'
            ],
            formLabels: ['Full Name:', 'Email:', 'Message:', 'Send'],
            footer: '© 2024 Law Firm'
        },
        'pt': {
            title: 'Escritório de Advocacia',
            description: 'Escritório de Advocacia especializado em Direito Digital, oferecendo consultoria em LGPD, assessoria em Marco Civil da Internet, defesa em cibercrimes, e muito mais.',
            nav: ['Home', 'Quem Somos', 'Áreas de Atuação', 'Notícias', 'Contato'],
            aboutHeading: 'Quem Somos',
            aboutContent: 'Fulano é especializado em Direito Digital, oferecendo consultoria em LGPD, assessoria em Marco Civil da Internet, defesa em cibercrimes, e muito mais.',
            areasHeading: 'Áreas de Atuação',
            areas: ['Direito Cível', 'Direito Empresarial', 'Direito Imobiliário', 'Blindagem Patrimonial', 'Planejamento Sucessório', 'Recuperação de Empresas'],
            newsHeading: 'Notícias',
            newsItems: [
                {
                    title: 'Título da Notícia 1',
                    summary: 'Resumo da notícia 1...',
                    image: 'noticia1.jpg',
                    link: 'news1.html'
                },
                {
                    title: 'Título da Notícia 2',
                    summary: 'Resumo da notícia 2...',
                    image: 'noticia2.jpg',
                    link: 'news2.html'
                },
                {
                    title: 'Título da Notícia 3',
                    summary: 'Resumo da notícia 3...',
                    image: 'noticia3.jpg',
                    link: 'news3.html'
                },
                {
                    title: 'Título da Notícia 4',
                    summary: 'Resumo da notícia 4...',
                    image: 'noticia4.jpg',
                    link: 'news4.html'
                },
                {
                    title: 'Título da Notícia 5',
                    summary: 'Resumo da notícia 5...',
                    image: 'noticia5.jpg',
                    link: 'news5.html'
                },
                {
                    title: 'Título da Notícia 6',
                    summary: 'Resumo da notícia 6...',
                    image: 'noticia6.jpg',
                    link: 'news6.html'
                },
                {
                    title: 'Título da Notícia 7',
                    summary: 'Resumo da notícia 7...',
                    image: 'noticia7.jpg',
                    link: 'news7.html'
                },
                {
                    title: 'Título da Notícia 8',
                    summary: 'Resumo da notícia 8...',
                    image: 'noticia8.jpg',
                    link: 'news8.html'
                }
            ],
            contactHeading: 'Contato',
            contactInfo: [
                'Email: <a href="mailto:contato@advogado.com">contato@advogado.com</a>',
                'Telefone: <a href="tel:+5519997775596">+55 19 99777-5596</a>',
                'WhatsApp: <a href="https://wa.me/5519997775596" target="_blank">+55 19 99777-5596</a>',
                'Horário de Funcionamento: Segunda a Sexta, das 9h às 18h',
                'Endereço: Rua dos Advogados, 123, São Paulo, SP'
            ],
            formLabels: ['Nome Completo:', 'Email:', 'Mensagem:', 'Enviar'],
            footer: '© 2024 Escritório de Advocacia'
        }
    };

    // Função para traduzir para inglês
    function translateToEnglish() {
        translateContent(translations['en']);
    }

    // Função para traduzir para português
    function translateToPortuguese() {
        translateContent(translations['pt']);
    }

    // Função para traduzir o conteúdo
    function translateContent(content) {
        document.querySelector('title').innerText = content.title;
        document.querySelector('meta[name="description"]').setAttribute('content', content.description);

        const navItems = document.querySelectorAll('header nav ul li a');
        navItems.forEach((item, index) => {
            item.innerText = content.nav[index];
        });

        document.getElementById('about-heading').innerText = content.aboutHeading;
        document.querySelector('#about .about-content div p').innerText = content.aboutContent;

        document.getElementById('areas-heading').innerText = content.areasHeading;
        const areaItems = document.querySelectorAll('.area h3');
        areaItems.forEach((item, index) => {
            item.innerText = content.areas[index];
        });

        document.getElementById('news-heading').innerText = content.newsHeading;

        updateNews(1);

        document.getElementById('contact-heading').innerText = content.contactHeading;

        const contactInfoItems = document.querySelectorAll('.contact-info p');
        contactInfoItems.forEach((item, index) => {
            item.innerHTML = content.contactInfo[index];
        });

        const formLabels = document.querySelectorAll('#contactForm label');
        formLabels.forEach((label, index) => {
            label.innerText = content.formLabels[index];
        });

        document.querySelector('#contactForm button').innerText = content.formLabels[3];
        document.querySelector('footer p').innerText = content.footer;
    }

    // Função para atualizar as notícias
    function updateNews(page) {
        const newsPageContent = translations['pt'].newsItems.slice((page - 1) * 4, page * 4);
        newsContent.innerHTML = newsPageContent.map(item => `
            <div class="col-listagem col-12 col-sm-6 col-md-6 col-lg-3">
                <div class="card">
                    <div class="img-fluid">
                        <img loading="lazy" src="images/${item.image}" alt="${item.title}" title="${item.title}">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title" title="${item.title}">${item.title}</h4>
                        <p class="card-text">${item.summary}</p>
                        <a href="${item.link}" class="btn btn-card btn-primary">Saiba mais&nbsp;<i class="fa fa-plus"></i></a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Adicionar classe "scrolled" ao cabeçalho ao rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intervalo para trocar slides do carrossel automaticamente
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);

    // Inicializar o site em português
    translateToPortuguese();
});
