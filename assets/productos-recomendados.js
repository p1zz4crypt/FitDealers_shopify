class RecommendedProducts extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.loadRecommendations();    
  }

  async loadRecommendations() {
    try {
      const response = await fetch(`${this.dataset.url}&product_id=${this.dataset.productId}&section-id=${this.dataset.sectionId}`);
      const htmlText = await response.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = htmlText;

      const recommendations = wrapper.querySelector('.productos-recomendados__container');

      if (recommendations && recommendations.innerHTML.trim() !== '') {
        this.innerHTML = recommendations.outerHTML;
      } else {
        this.innerHTML = `<p class="text-center text-gray-500 col-span-full">No se han agregado recomendaciones.</p>`;
      }
    } catch (error) {
      console.error('Error al cargar recomendaciones:', error);
      this.innerHTML = `<p class="text-center text-red-500">Error al cargar recomendaciones.</p>`;
    }
  }
}

customElements.define('recommended-products', RecommendedProducts);
