document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const contentSections = document.querySelectorAll('.content-section');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const sidebar = document.getElementById('sidebar');
    const searchInput = document.getElementById('search-bar');
    const contentArea = document.getElementById('content-area');

    // Armazena o HTML original de cada seção para poder limpar os destaques da pesquisa
    const originalSectionsHTML = new Map();
    contentSections.forEach(section => {
        originalSectionsHTML.set(section.id, section.innerHTML);
    });

    // --- NAVEGAÇÃO PELA SIDEBAR ---
    const setActiveLink = (targetId) => {
        sidebarLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === targetId);
        });
    };

    const showSection = (targetId) => {
        contentSections.forEach(section => {
            section.classList.toggle('hidden', section.id !== targetId);
        });
        setActiveLink(targetId);
    };

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;
            
            // Limpa a pesquisa ao navegar para uma seção
            searchInput.value = '';
            // Restaura o HTML de todas as seções e mostra a alvo
            contentSections.forEach(section => {
               section.innerHTML = originalSectionsHTML.get(section.id);
            });
            showSection(targetId);


            // Fecha o menu no mobile ao clicar
            if (!sidebar.classList.contains('md:relative')) {
                sidebar.classList.add('-translate-x-full');
            }
        });
    });
    
    // Define a seção inicial
    showSection('section-0');

    // --- MENU MOBILE ---
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });
    
    // --- FUNCIONALIDADE DE COPIAR CÓDIGO/TEXTO (VERSÃO CORRIGIDA) ---
    const setupCopyButtons = (container) => {
         container.querySelectorAll('.copy-btn').forEach(copyButton => {
            // Previne múltiplos listeners
            if (copyButton.dataset.listenerAttached) return;

            copyButton.addEventListener('click', () => {
                const codeBlock = copyButton.closest('.code-block');
                const copyContainer = copyButton.closest('.copy-container');
                let textToCopy = '';

                if (codeBlock) {
                    const codeElement = codeBlock.querySelector('code');
                    if (codeElement) textToCopy = codeElement.innerText;
                } else if (copyContainer) {
                    const textElement = copyContainer.querySelector('.copy-text-area');
                    if (textElement) textToCopy = textElement.innerText;
                }

                if (textToCopy) {
                    // Cria um textarea temporário para realizar a cópia
                    const textArea = document.createElement('textarea');
                    textArea.value = textToCopy;

                    // Deixa o textarea invisível e fora da tela
                    textArea.style.position = 'fixed';
                    textArea.style.top = '-9999px';
                    textArea.style.left = '-9999px';
                    
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    let success = false;
                    try {
                        // Tenta executar o comando de cópia
                        success = document.execCommand('copy');
                    } catch (err) {
                        console.error('Falha ao tentar copiar o texto: ', err);
                    }
                    
                    // Remove o textarea da página
                    document.body.removeChild(textArea);

                    // Fornece feedback visual ao usuário
                    const buttonTextSpan = copyButton.querySelector('span');
                    const icon = copyButton.querySelector('i');
                    const originalText = buttonTextSpan ? buttonTextSpan.textContent : 'Copiar';

                    if (success) {
                        if(buttonTextSpan) buttonTextSpan.textContent = 'Copiado!';
                        if(icon) icon.className = 'fas fa-check';
                    } else {
                        if(buttonTextSpan) buttonTextSpan.textContent = 'Falhou!';
                        if(icon) icon.className = 'fas fa-times';
                    }
                    
                    // Restaura o estado original do botão após 2 segundos
                    setTimeout(() => {
                        if(buttonTextSpan) buttonTextSpan.textContent = originalText;
                        if(icon) icon.className = 'far fa-copy';
                    }, 2000);
                }
            });
            copyButton.dataset.listenerAttached = 'true';
        });
    };
    
    // Configura os botões de cópia iniciais
    setupCopyButtons(document.body);


    // --- FUNCIONALIDADE DE PESQUISA ---
    const performSearch = () => {
        const searchTerm = searchInput.value.trim();

        // Remove a mensagem de "nenhum resultado" anterior
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) noResultsMessage.remove();

        // Se a pesquisa for muito curta ou vazia, restaura a visualização padrão
        if (searchTerm.length < 2) {
            const activeLink = document.querySelector('.sidebar-link.active');
            const activeId = activeLink ? activeLink.dataset.target : 'section-0';
             contentSections.forEach(section => {
               section.innerHTML = originalSectionsHTML.get(section.id);
            });
            showSection(activeId);
            setupCopyButtons(document.body);
            return;
        }
        
        const searchTermLower = searchTerm.toLowerCase();
        let resultsFound = false;
        const searchRegex = new RegExp(searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');

        contentSections.forEach(section => {
            // Restaura o HTML original antes de cada pesquisa para evitar aninhamento de <mark>
            const originalHTML = originalSectionsHTML.get(section.id);
            section.innerHTML = originalHTML;

            if (section.textContent.toLowerCase().includes(searchTermLower)) {
                resultsFound = true;
                section.classList.remove('hidden');

                // Aplica o destaque
                section.innerHTML = section.innerHTML.replace(searchRegex, (match) => `<mark>${match}</mark>`);
            } else {
                section.classList.add('hidden');
            }
        });
        
        // Re-anexa os listeners de cópia, pois o innerHTML foi reescrito
        setupCopyButtons(document.body);

        // Se nenhum resultado for encontrado, mostra uma mensagem
        if (!resultsFound) {
            const message = document.createElement('div');
            message.id = 'no-results-message';
            message.className = 'content-card text-center py-10';
            message.innerHTML = `<i class="fas fa-search text-4xl text-gray-400 mb-4"></i><h3 class="text-xl font-semibold">Nenhum resultado encontrado para "${searchTerm}"</h3><p class="text-gray-500 mt-2">Tente pesquisar com outros termos.</p>`;
            contentArea.appendChild(message);
        }
    };

    searchInput.addEventListener('input', performSearch);
});

