import Icon from "./sprite.svg";
import "./style.css";

function renderTemplate() {
  return `
    <div class="wrapper" style={wrapper}>
      <svg class="lightThemeIconColor" role="img" aria-label="Иконка солнца">
        <use href="${Icon}#icon-sun"></use>
      </svg>
      <div class="control">
        <input 
          type="checkbox"
          name="theme"
          id="toggle"
          class="toggle"
          aria-label="Переключить между тёмной и светлой темой"/>
          
        <label
          aria-hidden="true"
          class="track lightThemeTrackColor"
          for="toggle">
        </label>
        
        <div aria-hidden="true" class="marker"></div>
      </div> 

      <svg class="icon lightThemeIconColor" role="img" aria-label="Иконка солнца">
        <use href="${Icon}#icon-moon"></use>
      </svg>
    </div>
  `;
}

function switchingLogic(track, marker) {
  track.classList.toggle("lightThemeTrackColor");
  track.classList.toggle("darkThemeTrackColor");
  marker.classList.toggle("darkMarker");
}

function getElements() {
  const checkbox = document.querySelector(".toggle");
  const track = document.querySelector(".track");
  const marker = document.querySelector(".marker");
  checkbox.addEventListener("click", () => switchingLogic(track, marker));
}

function renderOnPage() {
  const template = renderTemplate();
  return template;
}

export default { renderOnPage, getElements };
