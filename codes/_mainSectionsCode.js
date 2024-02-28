class ProyectElement {
  constructor (name = "a", description = "lorem", features = [], links, skillsList = [], videoSrc, isPortfolioCard = false) {
    this.name = name
    this.description = description
    this.features = features
    this.links = links
    this.skillsList = skillsList
    this.videoSrc = videoSrc
    this.isPortfolioCard = isPortfolioCard
  }

  #createModal() {
    $root.innerHtml += ``
  }

  getElement () {
    const featuresList = this.features.map(feature => {
      return `<li>${feature}</li>`
    }).join("")
    const skills = this.skillsList.map(skill => {
      return `<li>${skill}</li>`
    }).join("")

    const element = document.createElement("article")
    element.classList.add("proyectCard")
    element.id = this.isPortfolioCard ? 'id="portfolio_ProyectCard"' : ""

    element.innerHTML = `
        <span class="material-symbols-outlined pC_seeMore">expand_content</span>
        <div class="proyectCard_info">
          <header class="pC_header">
            <h3>${this.name}</h3>
          </header>
          <section class="pC_body">
            <p>${this.description}</p>
            <div>
              <p>Características:</p>
              <ul class="pC_features">
                ${featuresList}
              </ul>
            </div>
            <a class="pC_link" href="${this.links}">(ENLACE)</a>
          </section>
          <footer class="pC_footer">
            <ul class="pC_skillsList">
              ${skills}
            </ul>
          </footer>  
        </div>
        <div class="proyectCard_demo"><video src="demos/demo1EJ.mp4" autoplay muted loop title="Demo del sitio en video"></div>
    `
    return element
  }
}

const Eccomerce_proyect = new ProyectElement("Eccomerce", "", ["a","b","c"], "", ["react","java","js"], "")

const PokeApi_proyect = new ProyectElement("Pokedex & team creator", `!Este no es cualquier proyecto con la pokeApi!. En él tendrás un 
  sistema de búsqueda avanzado a tráves de distintos filtros para que puedas encontrar justo al pokemon que estás buscando para tu equipo 
  ... (continuar y reescribir xd)`, ["Trabajo con múltiples APIs", "Exposición de contenido", "Aplicación de búsqueda y múltiples filtros",
  "Guardado de favoritos", "(seguir)"], "", ["React", "html", "css", "sass", "js"], "demos/demo1EJ.mp4")

const Colaborative_proyect = new ProyectElement("Página con los panas de egg", "Trabajo en equipo desarrollado con colegas del bootcamp de egg",
  ["Trabajo cooperativo", "Organización de proyecto", "Presentación de ideas y toma de desiciones", "dasdas"], "", 
  ["Git", "github", "html", "..."], "")

/*  */
const proyects = [Eccomerce_proyect, PokeApi_proyect, Colaborative_proyect]

const $proyectsContainer = document.querySelector(".proyectCards_container")

proyects.forEach(proyect => {
  $proyectsContainer.appendChild(proyect.getElement())
})
