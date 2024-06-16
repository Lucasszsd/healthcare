document.addEventListener('DOMContentLoaded', () => {
  const guideForm = document.getElementById('guideForm');
  const guidesList = document.getElementById('guidesList');

  const API_URL = 'http://localhost:3000/guides';

  const fetchGuides = async () => {
    try {
      const response = await fetch(API_URL);
      const guides = await response.json();
      guidesList.innerHTML = '';
      guides.forEach((guide) => {
        console.log(guide);
        const li = document.createElement('li');
        li.innerHTML = `<h2>${guide.title}</h2><p>${guide.content}</p>`;
        guidesList.appendChild(li);
      });
    } catch (error) {
      console.error('Erro ao buscar os guias:', error);
    }
  };

  const createGuide = async (guide) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guide),
      });
      return response.json();
    } catch (error) {
      console.error('Erro ao criar o guia:', error);
    }
  };
  guideForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newGuide = {
      title: event.target.title.value,
      content: event.target.content.value,
    };
    await createGuide(newGuide);
    await fetchGuides();
    guideForm.reset();
  });

  fetchGuides();
});
