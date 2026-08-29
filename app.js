const timeElement =
  document.getElementById("time");

const panel =
  document.getElementById("panel");

const panelTitle =
  document.getElementById("panel-title");

const panelContent =
  document.getElementById("panel-content");


/* CLOCK */

function updateTime() {

  const now = new Date();

  timeElement.textContent =
    new Intl.DateTimeFormat(
      undefined,
      {
        hour: "numeric",
        minute: "2-digit"
      }
    ).format(now);
}

updateTime();

setInterval(updateTime, 1000);


/* APP DATA */

const apps = {

  apps: [
    "APPS",
    "Your MAYH3M apps will live here."
  ],

  calculator: [
    "CALCULATOR",
    "The MAYH3M calculator module is ready."
  ],

  notes: [
    "NOTES",
    "Your MAYH3M notes will live here."
  ],

  clock: [
    "CLOCK",
    "Live MAYH3M system clock."
  ],

  games: [
    "GAMES",
    "MAYH3M games will live here."
  ],

  settings: [
    "SETTINGS",
    "MAYH3M OS settings will live here."
  ]
};


/* OPEN APP */

function openApp(name) {

  if (name === "home") {

    panel.classList.add("hidden");

    return;
  }

  const app = apps[name];

  if (!app) return;

  panelTitle.textContent =
    app[0];

  panelContent.innerHTML =
    `<p>${app[1]}</p>`;

  panel.classList.remove("hidden");
}


/* BUTTONS */

document
  .querySelectorAll("[data-app]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        openApp(
          button.dataset.app
        );

      }
    );

  });


/* CLOSE */

document
  .getElementById("close")
  .addEventListener(
    "click",
    () => openApp("home")
  );


/* CLOSE BY TAPPING OUTSIDE */

panel.addEventListener(
  "click",
  event => {

    if (event.target === panel) {

      openApp("home");

    }

  }
);