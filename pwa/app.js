const tracks = [
  {
    id: "akina-pass",
    name: "Galston Gorge",
    region: "Hornsby / Galston",
    difficulty: "Technical",
    rating: 4.7,
    distanceKm: 32.0,
    lengthKm: 6.3,
    elevationGainM: 190,
    description:
      "A tight, scenic Sydney classic with steep sections, layered corners, and very little room for mistakes.",
    bestSeason: "Cool clear mornings",
    hazards: ["Tight bends", "Steep grade", "Tourist traffic"],
    tags: ["Hairpins", "Scenic", "Northwest Sydney"],
    startPoint: { latitude: -33.664, longitude: 151.101 },
    image: "./assets/akina-pass.svg",
  },
  {
    id: "hakone-loop",
    name: "Riverside Drive",
    region: "Top Ryde / Lane Cove River edge",
    difficulty: "Flowing",
    rating: 4.1,
    distanceKm: 16.0,
    lengthKm: 5.0,
    elevationGainM: 95,
    description:
      "Not the wildest road in the set, but it has a fun riverside rhythm and is easy to fit into a quick local drive.",
    bestSeason: "Weekday early mornings",
    hazards: ["Local traffic", "Cyclists", "Intersections"],
    tags: ["Urban edge", "Warm-up run", "Ryde"],
    startPoint: { latitude: -33.811, longitude: 151.131 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "tsubaki-line",
    name: "Ku-ring-gai Chase Road",
    region: "Mount Colah to Bobbin Head side",
    difficulty: "Flowing",
    rating: 4.6,
    distanceKm: 30.0,
    lengthKm: 9.7,
    elevationGainM: 240,
    description:
      "Fast by Sydney standards with long forested sections, good elevation changes, and a clean national-park feel.",
    bestSeason: "Dry mornings",
    hazards: ["Cyclists", "Wildlife", "Park traffic"],
    tags: ["National park", "Forest", "North Shore"],
    startPoint: { latitude: -33.652, longitude: 151.117 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "bobbin-head-road",
    name: "Bobbin Head Road",
    region: "North Turramurra",
    difficulty: "Demanding",
    rating: 4.8,
    distanceKm: 26.0,
    lengthKm: 10.5,
    elevationGainM: 260,
    description:
      "One of the most loved Sydney runs: smooth enough to flow, technical enough to stay interesting, and especially pretty near the water.",
    bestSeason: "Sunrise or quiet weekdays",
    hazards: ["Cyclists", "Leaf litter", "Weekend traffic"],
    tags: ["Classic", "Creek run", "North Shore"],
    startPoint: { latitude: -33.718, longitude: 151.162 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "mccarrs-creek-road",
    name: "McCarrs Creek Road",
    region: "Church Point / Pittwater fringe",
    difficulty: "Technical",
    rating: 4.7,
    distanceKm: 34.0,
    lengthKm: 8.8,
    elevationGainM: 180,
    description:
      "A narrow and rewarding run with old-school bush-road energy, great scenery, and plenty of corners packed into a short stretch.",
    bestSeason: "Clear mornings",
    hazards: ["Narrow sections", "Oncoming traffic", "Damp patches"],
    tags: ["Bush road", "Pittwater", "Technical"],
    startPoint: { latitude: -33.646, longitude: 151.279 },
    image: "./assets/akina-pass.svg",
  },
  {
    id: "old-pacific-highway",
    name: "Old Pacific Highway",
    region: "Berowra to Mount White",
    difficulty: "Flowing",
    rating: 4.9,
    distanceKm: 49.0,
    lengthKm: 43.0,
    elevationGainM: 620,
    description:
      "The iconic Sydney day-drive road: long, fast, and endlessly linkable, with enough variety to stay fun the whole way up.",
    bestSeason: "Cool dry mornings",
    hazards: ["Motorcycles", "Police presence", "Mixed road surface"],
    tags: ["Legend", "Long run", "Cruise"],
    startPoint: { latitude: -33.623, longitude: 151.150 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "old-bathurst-road",
    name: "Old Bathurst Road",
    region: "Blaxland side",
    difficulty: "Technical",
    rating: 4.3,
    distanceKm: 67.0,
    lengthKm: 5.4,
    elevationGainM: 170,
    description:
      "A short Blue Mountains-flavoured section with a proper climb and old-road character that feels different from the northern Sydney routes.",
    bestSeason: "Dry afternoons",
    hazards: ["Residential edges", "Loose debris", "Limited width"],
    tags: ["Blue Mountains edge", "Short blast", "Climb"],
    startPoint: { latitude: -33.748, longitude: 150.603 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "mitchells-pass",
    name: "Mitchell's Pass",
    region: "Lapstone / Glenbrook",
    difficulty: "Technical",
    rating: 4.4,
    distanceKm: 60.0,
    lengthKm: 5.0,
    elevationGainM: 210,
    description:
      "An old mountain road with a proper carved-into-the-hill feel. Best appreciated in the legal one-way downhill flow.",
    bestSeason: "Quiet weekday mornings",
    hazards: ["One-way sections", "Wet rock face runoff", "Tourist stops"],
    tags: ["Historic road", "One way", "Escarpment"],
    startPoint: { latitude: -33.772, longitude: 150.623 },
    image: "./assets/akina-pass.svg",
  },
  {
    id: "oatley-castle",
    name: "Oatley Castle roads",
    region: "Oatley Park",
    difficulty: "Technical",
    rating: 3.8,
    distanceKm: 22.0,
    lengthKm: 3.6,
    elevationGainM: 70,
    description:
      "A cluster of thin touge-style park roads that feel surprisingly twisty for the area, but this one needs extra restraint and awareness.",
    bestSeason: "Very early quiet periods",
    hazards: ["Pedestrians", "Park traffic", "Very narrow lanes"],
    tags: ["Park road", "Short loop", "Be careful"],
    startPoint: { latitude: -33.983, longitude: 151.072 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "sir-bertram-stevens-drive",
    name: "Sir Bertram Stevens Drive",
    region: "Royal National Park / Audley",
    difficulty: "Flowing",
    rating: 4.7,
    distanceKm: 39.0,
    lengthKm: 9.8,
    elevationGainM: 260,
    description:
      "A sweeping Royal National Park road with quick transitions, lush scenery, and a real sense of escaping the city.",
    bestSeason: "Crisp mornings",
    hazards: ["Wildlife", "Cyclists", "Tourist traffic"],
    tags: ["Royal National Park", "Scenic", "South Sydney"],
    startPoint: { latitude: -34.070, longitude: 151.057 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "lady-wakehurst-drive",
    name: "Lady Wakehurst Drive",
    region: "Royal National Park",
    difficulty: "Flowing",
    rating: 4.5,
    distanceKm: 43.0,
    lengthKm: 9.4,
    elevationGainM: 210,
    description:
      "A faster-feeling companion to the Audley roads with nice forest atmosphere and plenty of easy rhythm when traffic is light.",
    bestSeason: "Cool dry weekdays",
    hazards: ["Park traffic", "Cyclists", "Changing grip under trees"],
    tags: ["Royal National Park", "Forest", "Cruise"],
    startPoint: { latitude: -34.095, longitude: 151.042 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "harry-graham-drive",
    name: "Harry Graham Drive",
    region: "Mount Kembla side",
    difficulty: "Technical",
    rating: 4.2,
    distanceKm: 93.0,
    lengthKm: 4.7,
    elevationGainM: 180,
    description:
      "A compact escarpment run with old-road charm and a more local hidden-gem vibe than the better-known southern roads.",
    bestSeason: "Dry daylight runs",
    hazards: ["Narrow sections", "Driveways", "Debris after rain"],
    tags: ["Illawarra", "Hidden gem", "Short run"],
    startPoint: { latitude: -34.428, longitude: 150.823 },
    image: "./assets/akina-pass.svg",
  },
  {
    id: "mount-keira-road",
    name: "Mount Keira Road",
    region: "Wollongong escarpment",
    difficulty: "Demanding",
    rating: 4.8,
    distanceKm: 92.0,
    lengthKm: 8.6,
    elevationGainM: 330,
    description:
      "Steep, scenic, and properly memorable, with the kind of escarpment views and corner density that make it worth the drive south.",
    bestSeason: "Clear mornings",
    hazards: ["Tourist lookout traffic", "Fog", "Steep descents"],
    tags: ["Escarpment", "Lookout", "South coast run"],
    startPoint: { latitude: -34.402, longitude: 150.857 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "putty-road",
    name: "Putty Road",
    region: "Wilberforce to Singleton direction",
    difficulty: "Flowing",
    rating: 4.9,
    distanceKm: 86.0,
    lengthKm: 168.0,
    elevationGainM: 940,
    description:
      "An all-day road rather than a short hit: big distance, huge variety, and the sort of run people plan the whole day around.",
    bestSeason: "Cool dry seasons",
    hazards: ["Fatigue", "Wildlife", "Remote sections"],
    tags: ["Day trip", "Long run", "Iconic"],
    startPoint: { latitude: -33.586, longitude: 150.892 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "bells-line-of-road",
    name: "Bells Line of Road",
    region: "Blue Mountains",
    difficulty: "Flowing",
    rating: 4.5,
    distanceKm: 92.0,
    lengthKm: 59.0,
    elevationGainM: 760,
    description:
      "Fast mountain-road energy with broad scenery and a strong day-drive feel, especially good if you want a change from the northern routes.",
    bestSeason: "Autumn and winter mornings",
    hazards: ["Slow traffic", "Weather changes", "Enforcement"],
    tags: ["Blue Mountains", "Day trip", "Scenic"],
    startPoint: { latitude: -33.551, longitude: 150.628 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "macquarie-pass",
    name: "Macquarie Pass",
    region: "Illawarra far south of Sydney",
    difficulty: "Demanding",
    rating: 4.8,
    distanceKm: 120.0,
    lengthKm: 9.0,
    elevationGainM: 370,
    description:
      "Further from Sydney, but absolutely worth noting for its steep rainforest character and memorable sequence of corners.",
    bestSeason: "Cool dry mornings",
    hazards: ["Tourist traffic", "Wet patches", "Heavy vehicles"],
    tags: ["Farther trip", "Rainforest", "Escarpment"],
    startPoint: { latitude: -34.601, longitude: 150.683 },
    image: "./assets/akina-pass.svg",
  },
  {
    id: "jamberoo-mountain-road",
    name: "Jamberoo Mountain Road",
    region: "Kiama hinterland",
    difficulty: "Demanding",
    rating: 4.8,
    distanceKm: 129.0,
    lengthKm: 12.0,
    elevationGainM: 420,
    description:
      "A serious southern day-trip road with beautiful valley views and enough elevation change to feel special every time.",
    bestSeason: "Cold clear mornings",
    hazards: ["Damp shade", "Tourist traffic", "Tight corners"],
    tags: ["Farther trip", "Mountain pass", "Scenic"],
    startPoint: { latitude: -34.655, longitude: 150.727 },
    image: "./assets/tsubaki-line.svg",
  },
  {
    id: "kangaroo-valley-road-barrengarry",
    name: "Kangaroo Valley Road",
    region: "Barrengarry side",
    difficulty: "Flowing",
    rating: 4.7,
    distanceKm: 145.0,
    lengthKm: 14.0,
    elevationGainM: 450,
    description:
      "Beautiful and more remote-feeling, with a broad scenic sweep that turns into a proper destination drive from Sydney.",
    bestSeason: "Clear autumn days",
    hazards: ["Tourist traffic", "Changing weather", "Long trip fatigue"],
    tags: ["Farther trip", "Valley road", "Scenic"],
    startPoint: { latitude: -34.731, longitude: 150.525 },
    image: "./assets/hakone-loop.svg",
  },
  {
    id: "kangaroo-valley-road-beaumont",
    name: "Kangaroo Valley Road",
    region: "Beaumont side",
    difficulty: "Technical",
    rating: 4.7,
    distanceKm: 148.0,
    lengthKm: 11.0,
    elevationGainM: 410,
    description:
      "The Beaumont side feels tighter and more committed in places, with rewarding views when conditions are good and traffic is light.",
    bestSeason: "Cool clear days",
    hazards: ["Fog", "Tight corners", "Remote sections"],
    tags: ["Farther trip", "Escarpment", "Advanced"],
    startPoint: { latitude: -34.756, longitude: 150.536 },
    image: "./assets/akina-pass.svg",
  },
];

const CURRENT_VERSION = "0.3.3";
const storageKey = "tougemaps-pwa-state-v1";
const defaultState = { selectedTrackId: tracks[0].id, done: {}, ratings: {} };
let appState = loadState();
let installPrompt = null;
let userLocation = null;
let swRegistration = null;
let isReloadingForUpdate = false;
const sydneyReference = {
  name: "Sydney",
  latitude: -33.8688,
  longitude: 151.2093,
};

const elements = {
  routeCount: document.getElementById("routeCount"),
  doneCount: document.getElementById("doneCount"),
  avgRating: document.getElementById("avgRating"),
  appVersion: document.getElementById("appVersion"),
  updateButtonLabel: document.getElementById("updateButtonLabel"),
  updateButtonMeta: document.getElementById("updateButtonMeta"),
  distanceStatLabel: document.getElementById("distanceStatLabel"),
  selectionBadge: document.getElementById("selectionBadge"),
  locationStatus: document.getElementById("locationStatus"),
  locationButton: document.getElementById("locationButton"),
  updateButton: document.getElementById("updateButton"),
  searchInput: document.getElementById("searchInput"),
  trackList: document.getElementById("trackList"),
  detailBody: document.getElementById("detailBody"),
  heroMapFrame: document.getElementById("heroMapFrame"),
  detailDifficulty: document.getElementById("detailDifficulty"),
  detailSeason: document.getElementById("detailSeason"),
  detailRegion: document.getElementById("detailRegion"),
  detailName: document.getElementById("detailName"),
  detailRating: document.getElementById("detailRating"),
  detailDescription: document.getElementById("detailDescription"),
  detailMetrics: document.getElementById("detailMetrics"),
  detailTags: document.getElementById("detailTags"),
  markDoneButton: document.getElementById("markDoneButton"),
  googleMapsButton: document.getElementById("googleMapsButton"),
  appleMapsButton: document.getElementById("appleMapsButton"),
  shareTrackButton: document.getElementById("shareTrackButton"),
  personalRatingValue: document.getElementById("personalRatingValue"),
  ratingStars: document.getElementById("ratingStars"),
  mapFrame: document.getElementById("mapFrame"),
  externalMapLink: document.getElementById("externalMapLink"),
  hazardsList: document.getElementById("hazardsList"),
  installButton: document.getElementById("installButton"),
  shareAppButton: document.getElementById("shareAppButton"),
  template: document.getElementById("trackCardTemplate"),
};

init();

function init() {
  elements.appVersion.textContent = `v${CURRENT_VERSION}`;
  setUpdateButtonState("idle");
  wireEvents();
  render();
  registerServiceWorker();
}

function wireEvents() {
  elements.searchInput.addEventListener("input", renderTrackList);
  elements.locationButton.addEventListener("click", requestUserLocation);
  elements.markDoneButton.addEventListener("click", toggleDone);
  elements.updateButton.addEventListener("click", checkForUpdates);
  elements.googleMapsButton.addEventListener("click", () => {
    const track = getSelectedTrack();
    openExternal(buildGoogleMapsLink(track));
  });
  elements.appleMapsButton.addEventListener("click", () => {
    const track = getSelectedTrack();
    openExternal(buildAppleMapsLink(track));
  });
  elements.shareTrackButton.addEventListener("click", shareSelectedTrack);
  elements.shareAppButton.addEventListener("click", shareApp);
  elements.installButton.addEventListener("click", installApp);

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-filter]")
        .forEach((chip) => chip.classList.remove("is-active"));
      button.classList.add("is-active");
      renderTrackList();
    });
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    elements.installButton.hidden = false;
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    elements.installButton.hidden = true;
  });
}

function render() {
  renderOverview();
  renderTrackList();
  renderDetail();
}

function renderOverview() {
  const ratingValues = Object.values(appState.ratings);
  const avg = ratingValues.length
    ? ratingValues.reduce((sum, value) => sum + value, 0) / ratingValues.length
    : 0;
  const sorted = sortTracksByDistance(tracks);
  const nearestDistance = sorted.length ? getDistanceLabel(sorted[0]) : "N/A";

  elements.routeCount.textContent = String(tracks.length);
  elements.doneCount.textContent = String(Object.keys(appState.done).length);
  elements.distanceStatLabel.textContent = userLocation ? "Closest route" : "Avg. rating";
  elements.avgRating.textContent = userLocation ? nearestDistance : avg.toFixed(1);
}

function renderTrackList() {
  const filter = document.querySelector("[data-filter].is-active")?.dataset.filter ?? "all";
  const query = elements.searchInput.value.trim().toLowerCase();
  const filtered = sortTracksByDistance(tracks).filter((track) => {
    const haystack = [track.name, track.region, ...track.tags].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const isDone = Boolean(appState.done[track.id]);
    const matchesFilter =
      filter === "all" || (filter === "done" && isDone) || (filter === "todo" && !isDone);
    return matchesQuery && matchesFilter;
  });

  elements.trackList.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No routes match this filter yet.";
    elements.trackList.append(empty);
    return;
  }

  filtered.forEach((track) => {
    const fragment = elements.template.content.cloneNode(true);
    const card = fragment.querySelector(".track-card");
    const image = fragment.querySelector(".track-card__image");
    const imageWrap = fragment.querySelector(".track-card__image-wrap");
    const personalRatingBadge = fragment.querySelector(".track-card__personal-rating");
    const doneBadge = fragment.querySelector(".track-card__done-badge");
    const name = fragment.querySelector(".track-card__name");
    const rating = fragment.querySelector(".track-card__rating");
    const region = fragment.querySelector(".track-card__region");
    const meta = fragment.querySelector(".track-card__meta");

    image.src = buildRouteLocatorSvg(track);
    image.alt = `${track.name} location relative to Sydney`;
    name.textContent = track.name;
    rating.textContent = `${track.rating.toFixed(1)} / 5`;
    region.textContent = track.region;
    meta.innerHTML = "";
    const isDone = Boolean(appState.done[track.id]);
    const personalRating = appState.ratings[track.id];
    personalRatingBadge.hidden = !personalRating;
    personalRatingBadge.textContent = personalRating ? `Rate ${personalRating}/5` : "";
    doneBadge.hidden = !isDone;
    card.classList.toggle("is-done", isDone);
    imageWrap.classList.toggle("is-done", isDone);

    [
      track.difficulty,
      `${track.lengthKm} km route`,
      getDistanceLabel(track),
      isDone ? "Done" : "Not done",
    ].forEach((label) => {
      const pill = document.createElement("span");
      pill.className = "tag";
      pill.textContent = label;
      meta.append(pill);
    });

    if (track.id === appState.selectedTrackId) {
      card.classList.add("is-selected");
    }

    card.addEventListener("click", () => {
      if (isMobileLayout() && appState.selectedTrackId === track.id) {
        appState.selectedTrackId = null;
      } else {
        appState.selectedTrackId = track.id;
      }
      saveState();
      render();
    });

    elements.trackList.append(fragment);

    if (isMobileLayout() && appState.selectedTrackId === track.id) {
      elements.trackList.append(buildMobileTrackDetails(track));
    }
  });
}

function renderDetail() {
  if (isMobileLayout()) {
    return;
  }

  const track = getSelectedTrack();
  elements.detailBody.classList.add("detail-body");
  elements.selectionBadge.textContent = track.name;

  elements.heroMapFrame.src = buildHeroMapLink(track);
  elements.detailDifficulty.textContent = track.difficulty;
  elements.detailSeason.textContent = track.bestSeason;
  elements.detailRegion.textContent = track.region;
  elements.detailName.textContent = track.name;
  elements.detailRating.textContent = `${track.rating.toFixed(1)} / 5`;
  elements.detailDescription.textContent = track.description;

  renderMetricRow(track);
  renderTags(track);
  renderRatingStars(track);
  renderHazards(track);
  renderDoneButton(track);
  renderMap(track);
}

function renderMetricRow(track) {
  elements.detailMetrics.replaceChildren();

  [
    ["From you", getDistanceLabel(track)],
    ["Route length", `${track.lengthKm} km`],
    ["Elevation gain", `${track.elevationGainM} m`],
  ].forEach(([label, value]) => {
    const metric = document.createElement("div");
    metric.className = "metric";
    metric.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    elements.detailMetrics.append(metric);
  });
}

function renderTags(track) {
  elements.detailTags.replaceChildren();
  track.tags.forEach((tagLabel) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagLabel;
    elements.detailTags.append(tag);
  });
}

function renderRatingStars(track) {
  const personalRating = appState.ratings[track.id];
  elements.personalRatingValue.textContent = personalRating
    ? `${personalRating} / 5`
    : "Not rated yet";
  elements.ratingStars.replaceChildren();

  for (let rating = 1; rating <= 5; rating += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "star-button";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(personalRating === rating));
    button.setAttribute("aria-label", `Rate ${rating} out of 5`);
    button.innerHTML = personalRating && rating <= personalRating ? "&#9733;" : "&#9734;";

    if (personalRating && rating <= personalRating) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      if (appState.ratings[track.id] === rating) {
        delete appState.ratings[track.id];
      } else {
        appState.ratings[track.id] = rating;
      }
      saveState();
      renderOverview();
      renderRatingStars(track);
    });

    elements.ratingStars.append(button);
  }
}

function renderHazards(track) {
  elements.hazardsList.replaceChildren();
  track.hazards.forEach((hazard) => {
    const item = document.createElement("li");
    item.textContent = hazard;
    elements.hazardsList.append(item);
  });
}

function renderDoneButton(track) {
  const isDone = Boolean(appState.done[track.id]);
  elements.markDoneButton.textContent = isDone ? "Mark as not done" : "Mark as done";
  elements.markDoneButton.classList.toggle("button--complete", isDone);
}

function renderMap(track) {
  const mapLink = buildGoogleMapsLink(track);
  elements.externalMapLink.href = mapLink;
  elements.mapFrame.src = buildEmbedMapLink(track.startPoint.latitude, track.startPoint.longitude);
}

function toggleDone() {
  const track = getSelectedTrack();
  if (!track) {
    return;
  }

  if (appState.done[track.id]) {
    delete appState.done[track.id];
  } else {
    appState.done[track.id] = true;
  }

  saveState();
  render();
}

function buildMobileTrackDetails(track) {
  const wrapper = document.createElement("article");
  wrapper.className = "track-inline-detail";

  const isDone = Boolean(appState.done[track.id]);
  const personalRating = appState.ratings[track.id];

  wrapper.innerHTML = `
    <div class="track-inline-detail__header">
      <span class="badge badge--warm">${track.difficulty}</span>
      <span class="badge">${getDistanceLabel(track)} away</span>
    </div>
    <p class="track-inline-detail__description">${track.description}</p>
    <div class="track-inline-detail__metrics">
      <span class="metric"><span>Length</span><strong>${track.lengthKm} km</strong></span>
      <span class="metric"><span>Gain</span><strong>${track.elevationGainM} m</strong></span>
      <span class="metric"><span>Season</span><strong>${track.bestSeason}</strong></span>
    </div>
    <div class="track-inline-detail__tags">${track.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("")}</div>
    <div class="track-inline-detail__actions">
      <button class="button ${isDone ? "button--complete" : "button--primary"}" data-action="done">${isDone ? "Mark as not done" : "Mark as done"}</button>
      <button class="button button--secondary" data-action="google">Google Maps</button>
      <button class="button button--secondary" data-action="apple">Apple Maps</button>
      <button class="button button--ghost" data-action="share">Share</button>
    </div>
    <section class="track-inline-detail__rating">
      <div class="subpanel__header">
        <h3>Your rating</h3>
        <span>${personalRating ? `${personalRating} / 5` : "Not rated yet"}</span>
      </div>
      <div class="stars" data-role="inline-stars"></div>
    </section>
    <section class="track-inline-detail__hazards">
      <div class="subpanel__header">
        <h3>Hazards</h3>
      </div>
      <ul class="hazards">${track.hazards.map((hazard) => `<li>${hazard}</li>`).join("")}</ul>
    </section>
  `;

  const starsContainer = wrapper.querySelector('[data-role="inline-stars"]');
  for (let rating = 1; rating <= 5; rating += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "star-button";
    button.setAttribute("aria-label", `Rate ${rating} out of 5`);
    button.innerHTML = personalRating && rating <= personalRating ? "&#9733;" : "&#9734;";

    if (personalRating && rating <= personalRating) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (appState.ratings[track.id] === rating) {
        delete appState.ratings[track.id];
      } else {
        appState.ratings[track.id] = rating;
      }
      saveState();
      render();
    });

    starsContainer.append(button);
  }

  wrapper.querySelector('[data-action="done"]').addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDoneForTrack(track.id);
  });
  wrapper.querySelector('[data-action="google"]').addEventListener("click", (event) => {
    event.stopPropagation();
    openExternal(buildGoogleMapsLink(track));
  });
  wrapper.querySelector('[data-action="apple"]').addEventListener("click", (event) => {
    event.stopPropagation();
    openExternal(buildAppleMapsLink(track));
  });
  wrapper.querySelector('[data-action="share"]').addEventListener("click", async (event) => {
    event.stopPropagation();
    await shareTrack(track);
  });

  return wrapper;
}

async function shareSelectedTrack() {
  const track = getSelectedTrack();
  if (!track) {
    return;
  }

  await shareTrack(track);
}

async function shareTrack(track) {
  const shareData = {
    title: `${track.name} on TougeMaps`,
    text: `Check out ${track.name} in ${track.region}.`,
    url: buildGoogleMapsLink(track),
  };

  await shareOrCopy(shareData, "Track link copied to your clipboard.");
}

async function shareApp() {
  const shareData = {
    title: "TougeMaps PWA",
    text: "Browse touge routes, mark them done, and open navigation quickly.",
    url: window.location.href,
  };

  await shareOrCopy(shareData, "App link copied to your clipboard.");
}

async function shareOrCopy(shareData, fallbackMessage) {
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(shareData.url);
    window.alert(fallbackMessage);
  } catch (error) {
    console.error("Share failed", error);
  }
}

async function installApp() {
  if (!installPrompt) {
    return;
  }

  installPrompt.prompt();
  const result = await installPrompt.userChoice;
  if (result.outcome !== "accepted") {
    return;
  }

  installPrompt = null;
  elements.installButton.hidden = true;
}

async function checkForUpdates() {
  elements.updateButton.disabled = true;
  setUpdateButtonState("checking");

  try {
    const response = await fetch(`./version.json?ts=${Date.now()}`, {
      cache: "no-store",
    });
    const payload = await response.json();
    const remoteVersion = payload.version;

    if (remoteVersion === CURRENT_VERSION) {
      setUpdateButtonState("latest");
      return;
    }

    setUpdateButtonState("available", remoteVersion);

    if (swRegistration) {
      await applyServiceWorkerUpdate(swRegistration);
      return;
    }

    reloadWithCacheBust();
  } catch (error) {
    console.error("Update check failed", error);
    setUpdateButtonState("error");
  } finally {
    window.setTimeout(() => {
      elements.updateButton.disabled = false;
      setUpdateButtonState("idle");
    }, 2200);
  }
}

async function applyServiceWorkerUpdate(registration) {
  setUpdateButtonState("applying");
  await registration.update();

  if (registration.waiting) {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
    return;
  }

  if (registration.installing) {
    await waitForWorkerState(registration.installing);

    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      return;
    }
  }

  reloadWithCacheBust();
}

function waitForWorkerState(worker) {
  return new Promise((resolve, reject) => {
    const handleStateChange = () => {
      if (worker.state === "installed" || worker.state === "activated" || worker.state === "redundant") {
        worker.removeEventListener("statechange", handleStateChange);
        resolve();
      }
    };

    worker.addEventListener("statechange", handleStateChange);
    handleStateChange();

    window.setTimeout(() => {
      worker.removeEventListener("statechange", handleStateChange);
      reject(new Error("Timed out waiting for service worker update"));
    }, 12000);
  });
}

function reloadWithCacheBust() {
  if (isReloadingForUpdate) {
    return;
  }

  isReloadingForUpdate = true;
  const refreshedUrl = new URL(window.location.href);
  refreshedUrl.searchParams.set("updated", Date.now().toString());
  window.location.replace(refreshedUrl.toString());
}

function setUpdateButtonState(state, remoteVersion = "") {
  elements.updateButton.dataset.state = state;

  if (state === "checking") {
    elements.updateButtonLabel.textContent = "Checking for update";
    elements.updateButtonMeta.textContent = `Installed: v${CURRENT_VERSION}`;
    return;
  }

  if (state === "latest") {
    elements.updateButtonLabel.textContent = "App is current";
    elements.updateButtonMeta.textContent = `You have v${CURRENT_VERSION}`;
    return;
  }

  if (state === "available") {
    elements.updateButtonLabel.textContent = "Update available";
    elements.updateButtonMeta.textContent = `New version: v${remoteVersion}`;
    return;
  }

  if (state === "applying") {
    elements.updateButtonLabel.textContent = "Applying update";
    elements.updateButtonMeta.textContent = "Installing new version now";
    return;
  }

  if (state === "error") {
    elements.updateButtonLabel.textContent = "Update check failed";
    elements.updateButtonMeta.textContent = "Try again in a moment";
    return;
  }

  elements.updateButtonLabel.textContent = "Check for update";
  elements.updateButtonMeta.textContent = `v${CURRENT_VERSION} installed`;
}

function requestUserLocation() {
  if (!("geolocation" in navigator)) {
    elements.locationStatus.textContent = "This browser does not support location.";
    return;
  }

  elements.locationStatus.textContent = "Finding your nearest roads...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      elements.locationStatus.textContent = "Routes are now sorted by your live distance.";
      elements.locationButton.textContent = "Refresh location";
      render();
    },
    () => {
      elements.locationStatus.textContent =
        "Location was unavailable, so routes are using their fallback order.";
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000,
    },
  );
}

function getSelectedTrack() {
  return (
    tracks.find((track) => track.id === appState.selectedTrackId) ??
    tracks[0] ??
    null
  );
}

function toggleDoneForTrack(trackId) {
  if (appState.done[trackId]) {
    delete appState.done[trackId];
  } else {
    appState.done[trackId] = true;
  }

  saveState();
  render();
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : { ...defaultState };
  } catch (error) {
    console.error("Failed to load local state", error);
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}

function buildGoogleMapsLink(track) {
  const { latitude, longitude } = track.startPoint;
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}

function buildAppleMapsLink(track) {
  const { latitude, longitude } = track.startPoint;
  return `https://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(track.name)}`;
}

function buildEmbedMapLink(latitude, longitude) {
  const latPadding = 0.018;
  const lngPadding = 0.022;
  const bbox = [
    longitude - lngPadding,
    latitude - latPadding,
    longitude + lngPadding,
    latitude + latPadding,
  ].join(",");

  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;
}

function buildHeroMapLink(track) {
  const bbox = buildSydneyContextBbox(track.startPoint.latitude, track.startPoint.longitude);
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${track.startPoint.latitude},${track.startPoint.longitude}`;
}

function buildSydneyContextBbox(latitude, longitude) {
  const minLat = Math.min(latitude, sydneyReference.latitude) - 0.16;
  const maxLat = Math.max(latitude, sydneyReference.latitude) + 0.16;
  const minLon = Math.min(longitude, sydneyReference.longitude) - 0.16;
  const maxLon = Math.max(longitude, sydneyReference.longitude) + 0.16;
  return [minLon, minLat, maxLon, maxLat].join(",");
}

function buildRouteLocatorSvg(track) {
  const width = 192;
  const height = 192;
  const bbox = buildSydneyContextBounds(track.startPoint.latitude, track.startPoint.longitude);
  const routeX = projectX(track.startPoint.longitude, bbox.minLon, bbox.maxLon, width);
  const routeY = projectY(track.startPoint.latitude, bbox.minLat, bbox.maxLat, height);
  const sydneyX = projectX(sydneyReference.longitude, bbox.minLon, bbox.maxLon, width);
  const sydneyY = projectY(sydneyReference.latitude, bbox.minLat, bbox.maxLat, height);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f0d7c4"/>
          <stop offset="1" stop-color="#d0ac97"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="24" fill="url(#bg)"/>
      <path d="M0 118c33-15 49-44 82-41 27 2 37 24 65 22 21-1 33-11 45-13v106H0z" fill="#c59d84" opacity="0.62"/>
      <path d="M0 140c26-8 51-14 76-6 16 5 30 18 52 18 23 0 39-14 64-14v54H0z" fill="#9d745f" opacity="0.5"/>
      <path d="M${sydneyX} ${sydneyY} L${routeX} ${routeY}" stroke="#6f2a1a" stroke-width="3" stroke-dasharray="6 6" opacity="0.75"/>
      <circle cx="${sydneyX}" cy="${sydneyY}" r="8" fill="#301511"/>
      <circle cx="${routeX}" cy="${routeY}" r="9" fill="#c7441c"/>
      <circle cx="${routeX}" cy="${routeY}" r="17" fill="#c7441c" opacity="0.18"/>
      <text x="${Math.min(width - 54, sydneyX + 10)}" y="${Math.max(20, sydneyY - 10)}" fill="#301511" font-size="15" font-family="Barlow Condensed, sans-serif">Sydney</text>
      <text x="16" y="174" fill="#4a221b" font-size="15" font-family="Barlow Condensed, sans-serif">${escapeXml(track.name)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildSydneyContextBounds(latitude, longitude) {
  return {
    minLat: Math.min(latitude, sydneyReference.latitude) - 0.12,
    maxLat: Math.max(latitude, sydneyReference.latitude) + 0.12,
    minLon: Math.min(longitude, sydneyReference.longitude) - 0.12,
    maxLon: Math.max(longitude, sydneyReference.longitude) + 0.12,
  };
}

function projectX(longitude, minLon, maxLon, width) {
  return 18 + ((longitude - minLon) / (maxLon - minLon || 1)) * (width - 36);
}

function projectY(latitude, minLat, maxLat, height) {
  return height - 18 - ((latitude - minLat) / (maxLat - minLat || 1)) * (height - 36);
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 919px)").matches;
}

function sortTracksByDistance(trackList) {
  return [...trackList].sort((left, right) => getDistanceValue(left) - getDistanceValue(right));
}

function getDistanceValue(track) {
  if (userLocation) {
    return haversineKm(
      userLocation.latitude,
      userLocation.longitude,
      track.startPoint.latitude,
      track.startPoint.longitude,
    );
  }

  return track.distanceKm;
}

function getDistanceLabel(track) {
  const distance = getDistanceValue(track);
  return `${distance.toFixed(1)} km`;
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function openExternal(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    swRegistration = await navigator.serviceWorker.register("./sw.js");
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      reloadWithCacheBust();
    });
  } catch (error) {
    console.error("Service worker registration failed", error);
  }
}
