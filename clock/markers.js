export function generateMarkers() {
  const markersContainer = document.createDocumentFragment();

  const outerFace = document.querySelector(".outer-face");
  const hourMarkerContainer = outerFace.querySelector(".hour-marker-container");
  const minuteMarkerContainer = outerFace.querySelector(
    ".minute-marker-container"
  );

  hourMarkerContainer.append(generateHoursMarkers());
  minuteMarkerContainer.append(generateMinutesMarkers());
  markersContainer.append(hourMarkerContainer, minuteMarkerContainer);

  return markersContainer;
}

function generateHoursMarkers() {
  const container = document.createDocumentFragment();
  // hours degrees = 360 / 12 = 30
  const degreesAndLabels = [
    { degree: 0, labels: [12, 6] },
    { degree: 30, labels: [1, 7] },
    { degree: 60, labels: [2, 8] },
    { degree: 90, labels: [3, 9] },
    { degree: 120, labels: [4, 10] },
    { degree: 150, labels: [5, 11] },
  ];

  degreesAndLabels.forEach(({ degree, labels }) => {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    marker.style.transform = `rotate(${degree}deg)`;

    labels.forEach((label) => {
      const span = document.createElement("span");
      span.innerText = label;
      span.style.transform = `rotate(-${degree}deg)`;
      marker.append(span);
    });

    container.append(marker);
  });

  return container;
}

function generateMinutesMarkers() {
  const container = document.createDocumentFragment();
  // minutes degrees = 360 / 60 = 6
  const degrees = [
    0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108,
    114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174,
  ];

  const boldDegrees = [0, 30, 60, 90, 120, 150];

  degrees.forEach((degree) => {
    const marker = document.createElement("div");
    marker.classList.add("marker");

    ["", ""].forEach(() => {
      const span = document.createElement("span");
      span.classList.add("minute-marker");
      if (boldDegrees.includes(degree)) {
        span.classList.add("minute-marker-bold");
      }
      marker.append(span);
    });

    marker.style.transform = `rotate(${degree}deg)`;
    container.append(marker);
  });

  return container;
}
